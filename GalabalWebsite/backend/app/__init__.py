from flask import Flask
from flask_cors import CORS
from .utils import init_database

def create_app():
    app = Flask(__name__)
    app.config.from_object('config.Config')
    CORS(app)  # Enable CORS for all origins
    # Configurations
    app.config['DATABASE_NAME'] = 'galabal'
    app.config['DATABASE_USER'] = 'postgres'
    app.config['DATABASE_PASSWORD'] = 'JoeLigma.com'
    app.config['DATABASE_HOST'] = 'localhost'
    app.config['DATABASE_PORT'] = '5432'

    from .routes.inschrijving import inschrijving_bp
    from .routes.users import users_bp
    from .routes.login import login_bp
    app.register_blueprint(inschrijving_bp)
    app.register_blueprint(users_bp)
    app.register_blueprint(login_bp)

    init_database()

    return app
