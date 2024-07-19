import psycopg2

def init_database():
    # Read the init_db.sql file
    with open('init_db.sql', 'r') as file:
        init_script = file.read()

    # Establish a connection to PostgreSQL database
    conn = psycopg2.connect(
        dbname='galabal',
        user='postgres',
        password='JoeLigma.com',
        host='localhost',  # or your database host
        port='5432'         # or your database port
    )
    
    # Create a cursor object
    cursor = conn.cursor()

    try:
        # Execute the init_db.sql script
        cursor.execute(init_script)
        conn.commit()
        print("Database initialization successful!")
    except Exception as e:
        print(f"Error initializing database: {e}")
    finally:
        # Close cursor and connection
        cursor.close()
        conn.close()