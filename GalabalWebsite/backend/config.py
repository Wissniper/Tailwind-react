import os

class Config:
    DATABASE_URL = os.getenv('DATABASE_URL', 'postgresql://postgres:JoeLigma.com@localhost/galabal')