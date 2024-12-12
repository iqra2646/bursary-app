# from flask import Flask, request, jsonify
# from flask_sqlalchemy import SQLAlchemy
# from werkzeug.security import generate_password_hash
# from flask_cors import CORS

# app = Flask(__name__)

# # Enable CORS for all domains
# CORS(app)

# # Setup SQLite database
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///registration.db'
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# db = SQLAlchemy(app)

# # User Model
# class User(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     full_name = db.Column(db.String(100), nullable=False)
#     school_name = db.Column(db.String(100), nullable=False)
#     admission_number = db.Column(db.String(50), unique=True, nullable=False)
#     email = db.Column(db.String(120), unique=True, nullable=False)
#     phone_number = db.Column(db.String(15), nullable=False)
#     password = db.Column(db.String(200), nullable=False)

# # Create the database tables
# with app.app_context():
#     db.create_all()

# @app.route('/register', methods=['POST'])
# def register_user():
#     data = request.get_json()

#     # Extract form data
#     full_name = data.get('full_Name')
#     school_name = data.get('schoolName')
#     admission_number = data.get('admissionNumber')
#     email = data.get('email')
#     phone_number = data.get('phoneNumber')
#     password = data.get('password')
#     confirm_password = data.get('confirmPassword')

#     # Check if passwords match
#     if password != confirm_password:
#         return jsonify({'error': 'Passwords do not match'}), 400

#     # Check if user with email or admission number already exists
#     existing_user = User.query.filter((User.email == email) | (User.admission_number == admission_number)).first()
#     if existing_user:
#         return jsonify({'error': 'User with this email or admission number already exists'}), 400

#     # Hash the password before saving
#     hashed_password = generate_password_hash(password)

#     # Create and save new user
#     new_user = User(
#         full_name=full_name,
#         school_name=school_name,
#         admission_number=admission_number,
#         email=email,
#         phone_number=phone_number,
#         password=hashed_password
#     )

#     try:
#         db.session.add(new_user)
#         db.session.commit()
#         return jsonify({'message': 'Registration successful!'}), 201
#     except Exception as e:
#         db.session.rollback()
#         return jsonify({'error': 'An error occurred while registering user'}), 500

# if __name__ == '__main__':
#     app.run(debug=True)




# from flask import Flask, request, jsonify
# from flask_sqlalchemy import SQLAlchemy
# from flask_marshmallow import Marshmallow
# from flask_cors import CORS
# from marshmallow import pre_load, post_load
# import os

# # Configuration
# app = Flask(__name__)
# CORS(app)

# BASE_DIR = os.path.abspath(os.path.dirname(__file__))
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(BASE_DIR, 'BursaryApplication.db')
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# # Initialize Database and Marshmallow
# db = SQLAlchemy(app)
# ma = Marshmallow(app)

# # Database Model
# class Applicant(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     full_name = db.Column(db.String(100), nullable=False)
#     admission = db.Column(db.String(50), nullable=False)
#     gender = db.Column(db.String(10), nullable=False)
#     form = db.Column(db.String(10), nullable=False)
#     dob = db.Column(db.String(10), nullable=False)
#     national_id = db.Column(db.String(20), nullable=False)
#     phone_number = db.Column(db.String(15), nullable=False)
#     email = db.Column(db.String(100), nullable=False)
#     institution_type = db.Column(db.String(50), nullable=False)
#     institution_name = db.Column(db.String(100), nullable=False)
#     index_number = db.Column(db.String(50), nullable=True)
#     constituency = db.Column(db.String(100), nullable=False)
#     ward = db.Column(db.String(100), nullable=False)
#     id_document = db.Column(db.String(200), nullable=True)
#     birth_certificate = db.Column(db.String(200), nullable=True)
#     status = db.Column(db.String(10), default="Pending")  # Status for admin to approve/reject

# # Marshmallow Schema
# class ApplicantSchema(ma.SQLAlchemyAutoSchema):
#     class Meta:
#         model = Applicant
    
#     @pre_load
#     def format_data(self, data, **kwargs):
#         # Convert camelCase to snake_case for incoming requests
#         return {
#             'full_name': data.get('fullName'),
#             'admission': data.get('admission'),
#             'gender': data.get('gender'),
#             'form': data.get('form'),
#             'dob': data.get('dob'),
#             'national_id': data.get('nationalID'),
#             'phone_number': data.get('phoneNumber'),
#             'email': data.get('email'),
#             'institution_type': data.get('institutionType'),
#             'institution_name': data.get('institutionName'),
#             'index_number': data.get('indexNumber', ''),
#             'constituency': data.get('constituency'),
#             'ward': data.get('ward'),
#             'id_document': data.get('idDocument'),
#             'birth_certificate': data.get('birthCertificate'),
#         }

#     @post_load
#     def format_response(self, data, **kwargs):
#         # Convert snake_case to camelCase for outgoing responses
#         return {
#             'fullName': data['full_name'],
#             'admission': data['admission'],
#             'gender': data['gender'],
#             'form': data['form'],
#             'dob': data['dob'],
#             'nationalID': data['national_id'],
#             'phoneNumber': data['phone_number'],
#             'email': data['email'],
#             'institutionType': data['institution_type'],
#             'institutionName': data['institution_name'],
#             'indexNumber': data.get('index_number', ''),
#             'constituency': data['constituency'],
#             'ward': data['ward'],
#             'idDocument': data.get('id_document'),
#             'birthCertificate': data.get('birth_certificate'),
#             'status': data['status'],
#         }

# # Initialize applicant schema
# applicant_schema = ApplicantSchema()
# applicants_schema = ApplicantSchema(many=True)

# # Create the database tables if they do not exist
# with app.app_context():
#     db.create_all()

# # Route to create a new application
# @app.route('/apply', methods=['POST'])
# def apply_for_bursary():
#     data = request.json
#     errors = applicant_schema.validate(data)
#     if errors:
#         return jsonify(errors), 400

#     new_applicant = Applicant(
#         full_name=data['fullName'],
#         admission=data['admission'],
#         gender=data['gender'],
#         form=data['form'],
#         dob=data['dob'],
#         national_id=data['nationalID'],
#         phone_number=data['phoneNumber'],
#         email=data['email'],
#         institution_type=data['institutionType'],
#         institution_name=data['institutionName'],
#         index_number=data.get('indexNumber', ''),
#         constituency=data['constituency'],
#         ward=data['ward'],
#         id_document=data.get('idDocument'),
#         birth_certificate=data.get('birthCertificate')
#     )

#     db.session.add(new_applicant)
#     db.session.commit()

#     return applicant_schema.jsonify(new_applicant), 201

# # Route to get all applicants (Admin View)
# @app.route('/applicants', methods=['GET'])
# def get_applicants():
#     applicants = Applicant.query.all()
#     return applicants_schema.jsonify(applicants)

# # Route to get a single applicant by ID
# @app.route('/applicants/<int:id>', methods=['GET'])
# def get_single_applicant(id):
#     applicant = Applicant.query.get_or_404(id)
#     return applicant_schema.jsonify(applicant)

# # Route for admin to approve or reject an application
# @app.route('/applicants/<int:id>', methods=['PUT'])
# def update_application_status(id):
#     applicant = Applicant.query.get_or_404(id)
#     status = request.json.get('status', applicant.status)
#     applicant.status = status

#     db.session.commit()
#     return applicant_schema.jsonify(applicant)

# # Route to delete an applicant
# @app.route('/applicants/<int:id>', methods=['DELETE'])
# def delete_application(id):
#     applicant = Applicant.query.get_or_404(id)
#     db.session.delete(applicant)
#     db.session.commit()

#     return jsonify({"message": "Applicant deleted successfully"}), 200

# # Route to update an applicant's details (e.g. when they need to make edits)
# @app.route('/applicants/<int:id>/update', methods=['PUT'])
# def update_applicant(id):
#     applicant = Applicant.query.get_or_404(id)

#     data = request.json
#     errors = applicant_schema.validate(data)
#     if errors:
#         return jsonify(errors), 400

#     applicant.full_name = data['fullName']
#     applicant.admission = data['admission']
#     applicant.gender = data['gender']
#     applicant.form = data['form']
#     applicant.dob = data['dob']
#     applicant.national_id = data['nationalID']
#     applicant.phone_number = data['phoneNumber']
#     applicant.email = data['email']
#     applicant.institution_type = data['institutionType']
#     applicant.institution_name = data['institutionName']
#     applicant.index_number = data.get('indexNumber', '')
#     applicant.constituency = data['constituency']
#     applicant.ward = data['ward']
#     applicant.id_document = data.get('idDocument')
#     applicant.birth_certificate = data.get('birthCertificate')

#     db.session.commit()
#     return applicant_schema.jsonify(applicant)

# if __name__ == '__main__':
#     app.run(debug=True)






# from flask import Flask, request, jsonify, redirect, url_for
# from flask_sqlalchemy import SQLAlchemy
# from flask_marshmallow import Marshmallow
# from flask_cors import CORS
# from flask_bcrypt import Bcrypt
# from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
# import os

# # Initialize Flask app
# app = Flask(__name__)
# CORS(app)  # To allow CORS (Cross-Origin Resource Sharing) for the frontend

# # Database configuration
# BASE_DIR = os.path.abspath(os.path.dirname(__file__))
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(BASE_DIR, 'Registration2.db')
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# app.config['SECRET_KEY'] = 'your_secret_key_here'
# app.config['JWT_SECRET_KEY'] = 'your_jwt_secret_key_here'

# # Initialize Database, Marshmallow, Bcrypt, and JWT Manager
# db = SQLAlchemy(app)
# ma = Marshmallow(app)
# bcrypt = Bcrypt(app)
# jwt = JWTManager(app)

# # Create User model
# class User(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     full_name = db.Column(db.String(100), nullable=False)
#     email = db.Column(db.String(100), unique=True, nullable=False)
#     phone_number = db.Column(db.String(15), nullable=False)
#     password = db.Column(db.String(255), nullable=False)

# # Create Applicant model
# class Applicant(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     full_name = db.Column(db.String(100), nullable=False)
#     school_name = db.Column(db.String(100), nullable=False)
#     admission_number = db.Column(db.String(50), nullable=False)
#     email = db.Column(db.String(100), nullable=False)
#     phone_number = db.Column(db.String(15), nullable=False)
#     password = db.Column(db.String(255), nullable=False)

# # Marshmallow schemas for serialization
# class UserSchema(ma.SQLAlchemyAutoSchema):
#     class Meta:
#         model = User

# class ApplicantSchema(ma.SQLAlchemyAutoSchema):
#     class Meta:
#         model = Applicant

# # Create user schema instances
# user_schema = UserSchema()
# users_schema = UserSchema(many=True)
# applicant_schema = ApplicantSchema()
# applicants_schema = ApplicantSchema(many=True)

# # Initialize the database tables
# with app.app_context():
#     db.create_all()

# # Registration route
# @app.route('/register', methods=['POST'])
# def register():
#     data = request.get_json()

#     # Hash the password
#     hashed_password = bcrypt.generate_password_hash(data['password']).decode('utf-8')

#     # Create a new user object
#     new_user = User(
#         full_name=data['full_Name'],
#         email=data['email'],
#         phone_number=data['phoneNumber'],
#         password=hashed_password
#     )

#     # Add user to the database
#     try:
#         db.session.add(new_user)
#         db.session.commit()
#         return jsonify({'message': 'Registration successful! Please login to continue.'}), 201
#     except Exception as e:
#         db.session.rollback()
#         return jsonify({'error': str(e)}), 400

# # Login route
# @app.route('/login', methods=['POST'])
# def login():
#     data = request.get_json()

#     # Find user by email
#     user = User.query.filter_by(email=data['email']).first()

#     if user and bcrypt.check_password_hash(user.password, data['password']):
#         # Create a JWT token
#         access_token = create_access_token(identity={'id': user.id, 'email': user.email})
#         return jsonify({'message': 'Login successful', 'access_token': access_token}), 200
#     else:
#         return jsonify({'message': 'Invalid credentials'}), 401

# # Dashboard route (protected, requires authentication)
# @app.route('/dashboard', methods=['GET'])
# @jwt_required()
# def dashboard():
#     current_user = get_jwt_identity()
#     user = User.query.get(current_user['id'])
#     if user:
#         return jsonify({'message': f'Welcome {user.full_name} to your dashboard!'}), 200
#     return jsonify({'message': 'User not found'}), 404

# # Create an applicant (CRUD)
# @app.route('/applicants', methods=['POST'])
# @jwt_required()  # Protected route
# def create_applicant():
#     data = request.get_json()

#     new_applicant = Applicant(
#         full_name=data['full_Name'],
#         school_name=data['schoolName'],
#         admission_number=data['admissionNumber'],
#         email=data['email'],
#         phone_number=data['phoneNumber'],
#         password=data['password']  # Ideally, you'd hash this password too
#     )

#     try:
#         db.session.add(new_applicant)
#         db.session.commit()
#         return applicant_schema.jsonify(new_applicant), 201
#     except Exception as e:
#         db.session.rollback()
#         return jsonify({'error': str(e)}), 400

# # Get all applicants (Admin or authorized users)
# @app.route('/applicants', methods=['GET'])
# @jwt_required()
# def get_applicants():
#     applicants = Applicant.query.all()
#     return applicants_schema.jsonify(applicants)

# # Update an applicant's information
# @app.route('/applicants/<int:id>', methods=['PUT'])
# @jwt_required()
# def update_applicant(id):
#     applicant = Applicant.query.get_or_404(id)
#     data = request.get_json()

#     applicant.full_name = data['full_Name']
#     applicant.school_name = data['schoolName']
#     applicant.admission_number = data['admissionNumber']
#     applicant.email = data['email']
#     applicant.phone_number = data['phoneNumber']

#     db.session.commit()
#     return applicant_schema.jsonify(applicant)

# # Delete an applicant
# @app.route('/applicants/<int:id>', methods=['DELETE'])
# @jwt_required()
# def delete_applicant(id):
#     applicant = Applicant.query.get_or_404(id)
#     db.session.delete(applicant)
#     db.session.commit()
#     return jsonify({'message': 'Applicant deleted successfully'}), 200

# if __name__ == '__main__':
#     app.run(debug=True)

























from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
import os

# Initialize Flask app
app = Flask(__name__)

# Allow specific origins for CORS
CORS(app, resources={r"/*": {"origins": "*"}})

# Database configuration
BASE_DIR = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{os.path.join(BASE_DIR, "Registration2.db")}'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'your_secret_key_here')
app.config['JWT_SECRET_KEY'] = os.environ.get('JWT_SECRET_KEY', 'your_jwt_secret_key_here')

# Initialize extensions
db = SQLAlchemy(app)
ma = Marshmallow(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

# Create User model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(100), nullable=False)
    admission_number = db.Column(db.String(50), nullable=False)
    institution_name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    phone_number = db.Column(db.String(15), nullable=False)
    password = db.Column(db.String(255), nullable=False)

# Marshmallow schema
class UserSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = User

# Schema instances
user_schema = UserSchema()
users_schema = UserSchema(many=True)

# Initialize database tables
with app.app_context():
    db.create_all()

# Registration endpoint
@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    required_fields = ['full_name', 'admission_number', 'institution_name', 'email', 'phone_number', 'password']
    missing_fields = [field for field in required_fields if field not in data]

    if missing_fields:
        return jsonify({'error': f"Missing fields: {', '.join(missing_fields)}"}), 400

    if len(data['password']) < 4:
        return jsonify({'error': 'Password must be at least 8 characters long'}), 400

    existing_user = User.query.filter_by(email=data['email']).first()
    if existing_user:
        return jsonify({'error': 'User with this email already exists'}), 400

    hashed_password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
    new_user = User(
        full_name=data['full_name'],
        admission_number=data['admission_number'],
        institution_name=data['institution_name'],
        email=data['email'],
        phone_number=data['phone_number'],
        password=hashed_password
    )

    try:
        db.session.add(new_user)
        db.session.commit()
        return jsonify({'message': 'Registration successful!'}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

# Login endpoint
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    if 'email' not in data or 'password' not in data:
        return jsonify({'error': 'Email and password are required'}), 400

    user = User.query.filter_by(email=data['email']).first()
    if user and bcrypt.check_password_hash(user.password, data['password']):
        access_token = create_access_token(identity={'id': user.id, 'email': user.email})
        return jsonify({'message': 'Login successful', 'access_token': access_token}), 200

    return jsonify({'error': 'Invalid credentials'}), 401

# Dashboard (protected route)
@app.route('/dashboard', methods=['GET'])
@jwt_required()
def dashboard():
    current_user = get_jwt_identity()
    user = User.query.get(current_user['id'])
    if user:
        return jsonify({'message': f'Welcome {user.full_name} to your dashboard!'}), 200
    return jsonify({'error': 'User not found'}), 404

if __name__ == '__main__':
    app.run(debug=True)
