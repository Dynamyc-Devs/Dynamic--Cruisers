from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate
from sqlalchemy.exc import (
    SQLAlchemyError,
    IntegrityError,
)  # for handling database errors
from flask import jsonify, request, make_response

from models import (
    db,
    User,
    Vehicle,
    Dealership,
    Review,
    Rating,
    Likes,
    UserVehicle,
    VehicleDealership,
)

# app configuration
app = Flask(__name__)
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///app.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["JSONIFY_PRETTYPRINT_REGULAR"] = False


# database initialization and migration
migrate = Migrate(app, db)

db.init_app(app)


@app.route("/")
def index():
    response = make_response(
        jsonify({"message": "Welcome to the Car Dealership API"}), 200
    )
    return response

# get all users
@app.route("/users", methods=["GET"])
def get_users():
    users = User.query.all()
    users_dict = [
        {
            "id": user.id,
            "firstname": user.firstname,
            "lastname": user.lastname,
            "email": user.email,
            "reviews": user.reviews,
            "vehicles_owned": user.vehicles_owned,
            "reviews": user.reviews,
        }
        for user in users
    ]
    response = make_response(jsonify(users_dict), 200)
    return response

# get user by id 
@app.route("/users/<int:id>", methods=["GET"])
def get_user(id):
    users = User.query.filter_by(id=id).first()
    users_dict = [
        {
            "id": user.id,
            "firstname": user.firstname,
            "lastname": user.lastname,
            "email": user.email,
            "reviews": user.reviews,
            "vehicles_owned": user.vehicles_owned,
            "reviews": user.reviews,
        }
        for user in users
    ]
    response = make_response(jsonify(users_dict), 200)
    return response

# create users
@app.route("/users", methods=["POST"])
def create_user():
    data = request.get_json()

    username = User.query.filter_by(firstname=data[firstname]).first()
    if username is not None:
        response = make_response(
            jsonify({"errors": ["user already exists"]}), 400  # 400 Bad Request
        )
    user = User(
        firstname=data[firstname],
        lastname=data[lastname],
        email=data[email],
        password=data[password],
    )
    db.session.add(user)
    db.session.commit()
    response = make_response(jsonify({"message": f"user {data[firstname]} created successfully"}), 201)
    return response

#delete users 
@app.route('/users/<int:id>', methods=['DELETE'])
def delete_user(id):
    user = User.query.get(user_id)
    if user:
        db.session.delete(user)
        db.session.commit()
        response = make_response(jsonify({"message": f"user {user.firstname} deleted"}), 204)
    else:
        response = make_response(
            jsonify({"errors": ["user already exists"]}), 400  # 400 Bad Request
        )
    return response

@app.route("/dealerships", methods=["GET"])
def get_dealerships():
    dealerships = Dealership.query.all()
    dealerships_dict = [
        {
            "id": dealership.id,
            "name": dealership.name,
            "address": dealership.address,
            "website": dealership.website,
            "rating": dealership.rating,
            "vehicles": dealership.vehicles,
        }
        for dealership in dealerships
    ]
    response = make_response(jsonify(dealerships_dict), 200)
    return response
