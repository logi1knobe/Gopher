import random
import string
import hashlib

# Define a dictionary to store tokens for each user
user_tokens = {}

def generate_token():
    # Generate a random string of 10 characters
    random_string = ''.join(random.choices(string.ascii_uppercase + string.digits, k=10))
    
    # Hash the string using SHA-256 algorithm
    hashed_string = hashlib.sha256(random_string.encode()).hexdigest()
    
    return hashed_string

def assign_token(username):
    # Generate a unique token for the user
    token = generate_token()
    
    # Store the token in the dictionary
    user_tokens[username] = token
    
    # Return the token
    return token

def validate_token(username, token):
    # Check if the user has a token
    if username in user_tokens:
        # Check if the token is valid
        if user_tokens[username] == token:
            return True
    
    return False
