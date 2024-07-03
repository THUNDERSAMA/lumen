```markdown
# API Endpoints

## 1. Patient Signup API

**Endpoint:** `POST /api/patient_signup`

### Request Body:
- `firstName`: string (required)
- `lastName`: string (required)
- `password`: string (required)
- `phone`: number (required)
- `aadhar`: string (required)

### Response:
- `status`: string (success or error)
- `message`: string (success message or error message)
- `statusCode`: number (HTTP status code)

### Description:
This API endpoint is used to sign up a new patient. It creates a new patient in the database and also creates a node in the Neo4j graph database.

### Error Handling:
- If the request payload is invalid, it returns a 400 status code with a message indicating that the request payload is invalid.
- If there is an error while creating the patient or node in the database, it returns a 500 status code with a message indicating that there was an error while processing the request.

## 2. Presci Count API

**Endpoint:** `GET /api/presci_count`

### Request Query:
- `mid`: string (required)

### Response:
- `count`: number (prescription count)

### Description:
This API endpoint is used to get the prescription count for a patient.

### Error Handling:
- If the request query is invalid, it returns a 400 status code with a message indicating that the request query is invalid.
- If there is an error while fetching the prescription count, it returns a 500 status code with a message indicating that there was an error while processing the request.

## 3. Record API

**Endpoint:** `GET /api/record`

### Request Query:
- `mid`: string (required)

### Response:
- `record`: object (patient record)

### Description:
This API endpoint is used to get the patient record.

### Error Handling:
- If the request query is invalid, it returns a 400 status code with a message indicating that the request query is invalid.
- If there is an error while fetching the patient record, it returns a 500 status code with a message indicating that there was an error while processing the request.

## 4. Signup API

**Endpoint:** `POST /api/signup`

### Request Body:
- `firstName`: string (required)
- `lastName`: string (required)
- `password`: string (required)
- `phone`: number (required)
- `aadhar`: string (required)

### Response:
- `status`: string (success or error)
- `message`: string (success message or error message)
- `statusCode`: number (HTTP status code)

### Description:
This API endpoint is used to sign up a new user. It creates a new user in the database and also creates a node in the Neo4j graph database.

### Error Handling:
- If the request payload is invalid, it returns a 400 status code with a message indicating that the request payload is invalid.
- If there is an error while creating the user or node in the database, it returns a 500 status code with a message indicating that there was an error while processing the request.

## 5. Socket API

**Endpoint:** `GET /api/socket`

### Request Query:
- `mid`: string (required)

### Response:
- `socket`: object (socket connection)

### Description:
This API endpoint is used to establish a socket connection.

### Error Handling:
- If the request query is invalid, it returns a 400 status code with a message indicating that the request query is invalid.
- If there is an error while establishing the socket connection, it returns a 500 status code with a message indicating that there was an error while processing the request.

## 6. Store Data API

**Endpoint:** `POST /api/storedata`

### Request Body:
- `data`: object (required)

### Response:
- `status`: string (success or error)
- `message`: string (success message or error message)
- `statusCode`: number (HTTP status code)

### Description:
This API endpoint is used to store data in the database.

### Error Handling:
- If the request payload is invalid, it returns a 400 status code with a message indicating that the request payload is invalid.
- If there is an error while storing the data, it returns a 500 status code with a message indicating that there was an error while processing the request.

## 7. Wallet API

**Endpoint:** `GET /api/wallet`

### Request Query:
- `mid`: string (required)

### Response:
- `wallet`: object (wallet balance)

### Description:
This API endpoint is used to get the wallet balance for a patient.

### Error Handling:
- If the request query is invalid, it returns a 400 status code with a message indicating that the request query is invalid.
- If there is an error while fetching the wallet balance, it returns a 500 status code with a message indicating that there was an error while processing the request.

## 8. Doctor Signin API

**Endpoint:** `POST /api/doctor_signin`

### Request Body:
- `email`: string (required)
- `password`: string (required)

### Response:
- `status`: string (success or error)
- `message`: string (success message or error message)
- `statusCode`: number (HTTP status code)
- `token`: string (JWT token)

### Description:
This API endpoint is used to sign in a doctor. It creates a JWT token for the doctor and returns it in the response.

### Error Handling:
- If the request payload is invalid, it returns a 400 status code with a message indicating that the request payload is invalid.
- If there is an error while signing in the doctor, it returns a 500 status code with a message indicating that there was an error while processing the request.

## 9. Doctor Signup API

**Endpoint:** `POST /api/doctor_signup`

### Request Body:
- `firstName`: string (required)
- `lastName`: string (required)
- `email`: string (required)
- `password`: string (required)
- `phone`: number (required)
- `specialization`: string (required)

### Response:
- `status`: string (success or error)
- `message`: string (success message or error message)
- `statusCode`: number (HTTP status code)

### Description:
This API endpoint is used to sign up a new doctor. It creates a new doctor in the database and also creates a node in the Neo4j graph database.

### Error Handling:
- If the request payload is invalid, it returns a 400 status code with a message indicating that the request payload is invalid.
- If there is an error while creating the doctor or node in the database, it returns a 500 status code with a message indicating that there was an error while processing the request.

## 10. Get User API

**Endpoint:** `GET /api/getUser`

### Request Query:
- `mid`: string (required)

### Response:
- `user`: object (user details)

### Description:
This API endpoint is used to get the user details for a patient.

### Error Handling:
- If the request query is invalid, it returns a 400 status code with a message indicating that the request query is invalid.
- If there is an error while fetching the user details, it returns a 500 status code with a message indicating that there was an error while processing the request.

## 11. OTP API

**Endpoint:** `POST /api/otp`

### Request Body:
- `phone`: number (required)

### Response:
- `status`: string (success or error)
- `message`: string (success message or error message)
- `statusCode`: number (HTTP status code)

### Description:
This API endpoint is used to send an OTP to a patient's phone number.

### Error Handling:
- If the request payload is invalid, it returns a 400 status code with a message indicating that the request payload is invalid.
- If there is an error while sending the OTP, it returns a 500 status code with a message indicating that there was an error while processing the request.

## 12. Patient Signin API

**Endpoint:** `POST /api/patient_signin`

### Request Body:
- `phone`: number (required)
- `password`: string (required)

### Response:
- `status`: string (success or error)
- `message`: string (success message or error message)
- `statusCode`: number (HTTP status code)
- `token`: string (JWT token)

### Description:
This API endpoint is used to sign in a patient. It creates a JWT token for the patient and returns it in the response.

### Error Handling:
- If the request payload is invalid, it returns a 400 status code with a message indicating that the request payload is invalid.
- If there is an error while signing in the patient, it returns a 500 status code with a message indicating that there was an error while processing the request.
```
