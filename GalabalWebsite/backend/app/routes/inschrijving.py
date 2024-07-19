from flask import Blueprint, request, jsonify
from .utils import get_db_connection

# Create blueprint
inschrijving_bp = Blueprint('inschrijving', __name__)


# Define route for form submission
@inschrijving_bp.route('/api/inschrijving', methods=['POST'])
def inschrijving():
    data = request.get_json()

    # Extract data from JSON payload
    voornaam = data.get('voornaam')
    achternaam = data.get('achternaam')
    klas = data.get('klas')
    plus_one_naam = data.get('plusOneNaam')
    plus_one_op_sint_maarten = data.get('plusOneOpSintMaarten') == 'Ja'  # Convert to boolean
    naar_diner = data.get('naarDiner') == 'Ja'  # Convert to boolean
    email = data.get('email')

    # Attempt to insert data into database
    try:
        conn = get_db_connection()
        cursor = conn.cursor()

        cursor.execute(
            '''
            INSERT INTO inschrijvingen 
            (voornaam, achternaam, klas, plus_one_naam, plus_one_op_sint_maarten, naar_diner, email)
            VALUES (%s, %s, %s, %s, %s, %s, %s)
            RETURNING id;
            ''',
            (voornaam, achternaam, klas, plus_one_naam,
             plus_one_op_sint_maarten, naar_diner, email)
        )
        inserted_id = cursor.fetchone()[0]  # Fetch the inserted ID

        conn.commit()
        cursor.close()
        conn.close()

        # Return success response
        return jsonify({'message': 'Inschrijving ontvangen', 'id': inserted_id}), 201

    except Exception as e:
        # Handle database errors
        return jsonify({'message': 'Error saving to the database', 'error': str(e)}), 500
