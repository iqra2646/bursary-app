





import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route, Link } from 'react-router-dom';
import './AdminDashboard.css';
import AboutUs from '../AboutUs';
import AdminAchievements from './AdminAchievements';
import ApplyForBursary from '../ApplyForBursary';
import 'bootstrap/dist/css/bootstrap.min.css';

function AdminDashboard() {
    const [applicants, setApplicants] = useState([]);
    const [modalImage, setModalImage] = useState(null);
    const [modalType, setModalType] = useState(null); // To track if it's ID or Birth Certificate
    const [feedback, setFeedback] = useState(''); // For feedback messages

    useEffect(() => {
        axios
            .get('http://127.0.0.1:5000/applicants')
            .then((response) => {
                if (response.data) {
                    setApplicants(response.data);
                }
            })
            .catch((error) => {
                console.error('Error fetching applicants:', error);
            });
    }, []);

    const handleStatusChange = (id, status) => {
        axios
            .patch(`http://127.0.0.1:5000/applicants/${id}`, { status })
            .then(() => {
                setApplicants((prevState) =>
                    prevState.map((applicant) =>
                        applicant.id === id
                            ? { ...applicant, status: status }
                            : applicant
                    )
                );
                setFeedback(`The applicant has been ${status.toLowerCase()} successfully.`);
                setTimeout(() => setFeedback(''), 3000); // Clear feedback after 3 seconds
            })
            .catch((error) => {
                console.error('Error updating status:', error);
                setFeedback('An error occurred while updating the status.');
                setTimeout(() => setFeedback(''), 3000);
            });
    };
    const openModal = (imageUrl, type) => {
        setModalImage(imageUrl);
        setModalType(type);
    };

    const closeModal = () => {
        setModalImage(null);
        setModalType(null);
    };

    return (
        <div className="admin-dashboard">
            <div className="sidebar">
                <h3>Admin Menu</h3>
                <ul>
                    <li>
                        <Link to="/admin/achievements">Key Achievements</Link>
                    </li>
                    <li>
                        <Link to="/">View Applicants</Link>
                    </li>
                    <li>
                        <Link to="/about-us">About Us</Link>
                    </li>
                    <li>
                        <Link to="/apply-for-bursary">Apply for Bursary</Link>
                    </li>
                </ul>
            </div>
            <div className="content">
                {feedback && (
                    <div className="alert alert-success" role="alert">
                        {feedback}
                    </div>
                )}
                <Routes>
                    <Route
                        path="/"
                        element={
                            <div>
                                <h2>Applicant List</h2>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Admission No</th>
                                            <th>Gender</th>
                                            <th>School Name</th>
                                            <th>ID Number</th>
                                            <th>Email</th>
                                            <th>Constituency</th>
                                            <th>Ward</th>
                                            <th>ID Document</th>
                                            <th>Birth Certificate</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {applicants.map((applicant) => (
                                            <tr key={applicant.id}>
                                                <td>{applicant.full_name}</td>
                                                <td>{applicant.admission}</td>
                                                <td>{applicant.gender}</td>
                                                <td>{applicant.institution_name}</td>
                                                <td>{applicant.national_id}</td>
                                                <td>{applicant.email}</td>
                                                <td>{applicant.constituency}</td>
                                                <td>{applicant.ward}</td>
                                                <td>
                                                    {applicant.id_document ? (
                                                        <button
                                                            onClick={() => openModal(applicant.id_document, 'ID')}
                                                            className="btn btn-link"
                                                        >
                                                            View ID Document
                                                        </button>
                                                    ) : (
                                                        'Not Uploaded'
                                                    )}
                                                </td>
                                                <td>
                                                    {applicant.birth_certificate ? (
                                                        <button
                                                            onClick={() =>
                                                                openModal(applicant.birth_certificate, 'BirthCertificate')
                                                            }
                                                            className="btn btn-link"
                                                        >
                                                            View Birth Certificate
                                                        </button>
                                                    ) : (
                                                        'Not Uploaded'
                                                    )}
                                                </td>
                                                <td>{applicant.status}</td>
                                                <td>
                                                    <button
                                                        onClick={() =>
                                                            handleStatusChange(applicant.id, 'Approved')
                                                        }
                                                        disabled={applicant.status === 'Approved'}
                                                        className="btn btn-success btn-sm"
                                                    >
                                                        Approve
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            handleStatusChange(applicant.id, 'Rejected')
                                                        }
                                                        disabled={applicant.status === 'Rejected'}
                                                        className="btn btn-danger btn-sm"
                                                    >
                                                        Reject
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                {/* Modal */}
                                {modalImage && (
                                    <div className="modal show d-block" tabIndex="-1">
                                        <div className="modal-dialog modal-lg">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title">
                                                        {modalType === 'ID'
                                                            ? 'ID Document Preview'
                                                            : 'Birth Certificate Preview'}
                                                    </h5>
                                                    <button
                                                        type="button"
                                                        className="btn-close"
                                                        aria-label="Close"
                                                        onClick={closeModal}
                                                    ></button>
                                                </div>
                                                <div className="modal-body text-center">
                                                    <img
                                                        src={modalImage}
                                                        alt="Document"
                                                        className="img-fluid"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        }
                    />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/admin/achievements" element={<AdminAchievements />} />
                    <Route path="/apply-for-bursary" element={<ApplyForBursary />} />
                </Routes>
            </div>
        </div>
    );
}

export default AdminDashboard;
