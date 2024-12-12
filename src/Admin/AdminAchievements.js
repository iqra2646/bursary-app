import React, { useState, useEffect } from 'react';
import { Table, Button, Form, Modal } from 'react-bootstrap';
import axios from 'axios';

const AdminAchievements = () => {
    const [achievements, setAchievements] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editingAchievement, setEditingAchievement] = useState(null);
    const [newAchievement, setNewAchievement] = useState({
        title: '',
        description: '',
        image: null,
    });

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/achievements')
            .then(response => setAchievements(response.data))
            .catch(error => console.error("Error fetching achievements:", error));
    }, []);

    const handleSubmit = () => {
        const formData = new FormData();
        formData.append('title', newAchievement.title);
        formData.append('description', newAchievement.description);
        if (newAchievement.image) {
            formData.append('image', newAchievement.image);
        }

        const method = editingAchievement ? 'put' : 'post';
        const url = editingAchievement
            ? `http://127.0.0.1:5000/achievements/${editingAchievement.id}`
            : 'http://127.0.0.1:5000/achievements';

        axios({
            method,
            url,
            data: formData,
            headers: { 'Content-Type': 'multipart/form-data' },
        })
            .then(response => {
                if (editingAchievement) {
                    setAchievements(prev =>
                        prev.map(item => (item.id === editingAchievement.id ? response.data : item))
                    );
                } else {
                    setAchievements(prev => [...prev, response.data]);
                }
                setShowModal(false);
                setNewAchievement({ title: '', description: '', image: null });
                setEditingAchievement(null);
            })
            .catch(error => console.error("Error saving achievement:", error));
    };

    const handleDelete = id => {
        axios.delete(`http://127.0.0.1:5000/achievements/${id}`)
            .then(() => setAchievements(prev => prev.filter(item => item.id !== id)))
            .catch(error => console.error("Error deleting achievement:", error));
    };

    return (
        <div className="admin-achievements">
            <h2>Manage Achievements</h2>
            <Button onClick={() => setShowModal(true)}>Add New Achievement</Button>
            <Table striped bordered hover className="mt-3">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {achievements.map(item => (
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td>{item.description}</td>
                            <td>
                                <img
                                    src={`http://127.0.0.1:5000${item.img_url}`}
                                    alt={item.title}
                                    style={{ width: '100px' }}
                                />
                            </td>
                            <td>
                                <Button
                                    variant="warning"
                                    onClick={() => {
                                        setEditingAchievement(item);
                                        setNewAchievement({
                                            title: item.title,
                                            description: item.description,
                                            image: null,
                                        });
                                        setShowModal(true);
                                    }}
                                >
                                    Edit
                                </Button>
                                <Button variant="danger" onClick={() => handleDelete(item.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{editingAchievement ? 'Edit Achievement' : 'Add Achievement'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                value={newAchievement.title}
                                onChange={e =>
                                    setNewAchievement(prev => ({ ...prev, title: e.target.value }))
                                }
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={newAchievement.description}
                                onChange={e =>
                                    setNewAchievement(prev => ({ ...prev, description: e.target.value }))
                                }
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Image</Form.Label>
                            <Form.Control
                                type="file"
                                onChange={e =>
                                    setNewAchievement(prev => ({ ...prev, image: e.target.files[0] }))
                                }
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AdminAchievements;

