from flask import Blueprint, request, jsonify
from .utils import get_db_connection

users_bp = Blueprint('users', __name__)

@users_bp.route('/api/registreren', methods=['POST'])
def register():
    data = request.get_json()
    first_name = data.get('firstname')
    last_name = data.get('lastname')
    email = data.get('email')
    phone = data.get('phone')
    user_name = data.get('username')
    dob = data.get('dob')
    is_student = data.get('isStudent') == 'Ja'
    study_direction = data.get('studyDirection')
    password = data.get('password')

    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute(
            '''
            INSERT INTO users
            (first_name, last_name, email, phone, user_name, dob, is_student, study_direction, password)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
            RETURNING id;
            ''',
            (first_name, last_name, email, phone, user_name, dob, is_student, study_direction, password)
        )
        user_id = cursor.fetchone()[0]

        conn.commit()
        cursor.close()
        conn.close()

        return (
            jsonify({'message': 'Registratie compleet', 'id': user_id}), 201,
            )
    except Exception as e:
        # Handle database errors
        return jsonify({'message': 'Error saving to the database', 'error': str(e)}), 500

@users_bp.route('/api/user', methods=['GET'])
def get_user_info():
    user_id = request.args.get('user_id')
    print(user_id)
    
    if not user_id:
        return jsonify({'error': 'Missing user_id parameter'}), 400
    
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute('SELECT * FROM users WHERE id = %s;', (user_id,))
        user = cursor.fetchone()
        cursor.close()
        conn.close()
        print('Database connected')

        if user:
            user_info = {
                'firstName': user[1],
                'lastName': user[2],
                'email': user[3],
                'phoneNumber': user[4],
                'username': user[5],
                'dateOfBirth': user[6].isoformat() if user[6] else None,
                'isStudent': user[7],
                'riching': user[8]
            }
            return jsonify(user_info), 200
        else:
            return jsonify({'error': f'User with id {user_id} not found'}), 404
    
    except Exception as e:
        return jsonify({'error': f'Error retrieving user: {str(e)}'}), 500