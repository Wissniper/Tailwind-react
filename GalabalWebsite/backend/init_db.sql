CREATE TABLE IF NOT EXISTS inschrijvingen (
    id SERIAL PRIMARY KEY,  -- Unique identifier for each registration entry, automatically incremented
    voornaam VARCHAR(20) NOT NULL,  -- First name of the registrant, up to 20 characters
    achternaam VARCHAR(20) NOT NULL,  -- Last name of the registrant, up to 20 characters
    klas VARCHAR(10) NOT NULL,  -- Class or group information, up to 10 characters
    plus_one_naam VARCHAR(20),  -- Name of the plus one accompanying the registrant, up to 20 characters
    plus_one_op_sint_maarten BOOLEAN,  -- Indicates if the plus one is attending Sint-Maarten (TRUE/FALSE)
    naar_diner BOOLEAN,  -- Indicates if the registrant is attending a dinner event (TRUE/FALSE)
    email VARCHAR(50) UNIQUE NOT NULL -- Email address of the registrant, up to 50 characters
);

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(30) NOT NULL,
    user_name VARCHAR(30) UNIQUE NOT NULL,
    dob DATE NOT NULL,
    is_student BOOLEAN,
    study_direction VARCHAR(30) NOT NULL,
    password VARCHAR(100) NOT NULL 
);

-- Example of adding an index on user_name for faster lookups
CREATE INDEX idx_user_name ON users (user_name);

-- Example of adding an index on email for faster lookups
CREATE INDEX idx_email ON users (email);

CREATE TABLE IF NOT EXISTS shoppingcart (

)