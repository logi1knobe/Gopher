import random
import string
import hashlib

# Define a dictionary to store usernames and passwords
users = {"user1": "password1", "user2": "password2", "user3": "password3"}

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

# Get the username and password from the form data
form_data = cgi.FieldStorage()
username = form_data.getvalue('username')
password = form_data.getvalue('password')

# Check if the username and password are correct
if username in users and users[username] == password:
    # Assign a token to the user
    token = assign_token(username)
    
    # Print the token as a JSON object
    print("Content-type: application/json")
    print()
    print('{"valid": true, "token": "' + token + '"}')
else:
    # Print an error message as a JSON object
    print("Content-type: application/json")
    print()
    print('{"valid": false, "error": "Wrong username or password"}')
