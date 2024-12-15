import os
from flask import Flask, request, jsonify, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS
from werkzeug.utils import secure_filename

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///adminAchievements.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['UPLOAD_FOLDER'] = 'public/images'
app.config['ALLOWED_EXTENSIONS'] = {'png', 'jpg', 'jpeg', 'gif'}
app.config['MAX_CONTENT_LENGTH'] = 10 * 1024 * 1024  # 10MB

db = SQLAlchemy(app)
ma = Marshmallow(app)

class Achievement(db.Model):
    __tablename__ = 'achievements'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    img_url = db.Column(db.String(255), nullable=False)
    icon = db.Column(db.String(50), nullable=True)

class AchievementSchema(ma.SQLAlchemySchema):
    class Meta:
        model = Achievement
        load_instance = True

    id = ma.auto_field()
    title = ma.auto_field()
    description = ma.auto_field()
    img_url = ma.auto_field()
    icon = ma.auto_field()

achievement_schema = AchievementSchema()
achievements_schema = AchievementSchema(many=True)

@app.route('/images/<filename>')
def serve_image(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

@app.route('/achievements', methods=['GET'])
def get_achievements():
    achievements = Achievement.query.all()
    return achievements_schema.jsonify(achievements)

@app.route('/achievements/<int:id>', methods=['GET'])
def get_achievement(id):
    achievement = Achievement.query.get_or_404(id)
    return achievement_schema.jsonify(achievement)

@app.route('/achievements', methods=['POST'])
def create_achievement():
    image = request.files.get('image')
    if not image or image.filename == '':
        return jsonify({"error": "No image file provided."}), 400
    if not allowed_file(image.filename):
        return jsonify({"error": "Invalid file type."}), 400

    # Ensure the upload directory exists
    os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

    filename = secure_filename(image.filename)
    image_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    image.save(image_path)

    data = request.form
    title = data.get('title')
    description = data.get('description')
    if not title or not description:
        return jsonify({"error": "Title and description are required."}), 400

    new_achievement = Achievement(
        title=title,
        description=description,
        img_url=f'/images/{filename}',
        icon=data.get('icon')
    )
    db.session.add(new_achievement)
    db.session.commit()

    return achievement_schema.jsonify(new_achievement), 201

@app.route('/achievements/<int:id>', methods=['PUT'])
def update_achievement(id):
    achievement = Achievement.query.get_or_404(id)
    data = request.form

    title = data.get('title')
    description = data.get('description')
    if not title or not description:
        return jsonify({"error": "Title and description are required."}), 400

    image = request.files.get('image')
    if image and image.filename:
        if not allowed_file(image.filename):
            return jsonify({"error": "Invalid file type."}), 400

        # Ensure the upload directory exists
        os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

        filename = secure_filename(image.filename)
        image_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        image.save(image_path)
        achievement.img_url = f'/images/{filename}'

    achievement.title = title
    achievement.description = description
    achievement.icon = data.get('icon')

    db.session.commit()
    return achievement_schema.jsonify(achievement)

@app.route('/achievements/<int:id>', methods=['DELETE'])
def delete_achievement(id):
    achievement = Achievement.query.get_or_404(id)
    db.session.delete(achievement)
    db.session.commit()
    return jsonify({"message": "Achievement deleted successfully"}), 200

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']

# Ensure the database and table exist
with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(debug=True)
