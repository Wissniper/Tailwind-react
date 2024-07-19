from flask import Blueprint, request, jsonify
from .utils import get_db_connection
from psycopg2 import Error

login_bp = Blueprint('login', __name__)

@login_bp.route('/api/login', methods=['POST'])
def login():
    # get the username and password from the request
    data = request.json
    # Extract username and password from JSON data
    user_name = data.get('user_name')
    password = data.get('password')

    # Attempt to authenticate user
    try:
        conn = get_db_connection()
        cursor = conn.cursor()

        # Query to fetch user with given username and password
        cursor.execute(
            '''
            SELECT * FROM users
            WHERE user_name = %s AND password = %s;
            ''',
            (user_name, password)
        )
        user = cursor.fetchone()

        cursor.close()
        conn.close()

        if user:
            # User authenticated successfully
            return jsonify({'message': 'Login successful', 'user_id': user[0]}), 200
        else:
            # Authentication failed
            return jsonify({'message': 'Invalid credentials'}), 401

    except Error as e:
        # Handle database errors
        return jsonify({'message': 'Error authenticating user', 'error': str(e)}), 500
