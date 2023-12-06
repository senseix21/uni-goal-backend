# UniGoal API Documentation

## Auth Routes

### Signup

#### Endpoint: `api/v1/signup`

**Request Data (JSON):**

```json
{
  "firstName": "User",
  "lastName": "One",
  "email": "<user1@example.com>",
  "phone": "+1234567890",
  "password": "123456",
  "role": "student",
  "survey": [
    {"id": "question-1", "question": "Which countries do you want to study in?", "answer": "Poland"},
    {"id": "question-2", "question": "Which levels of education are you applying for?", "answer": "Masters"},
    {"id": "question-3", "question": "What would you like to study?", "answer": "IT"},
    {"id": "question-4", "question": "What's your estimated yearly tuition budget?", "answer": "Up to ~ 10,000 Euro"},
    {"id": "question-5", "question": "What is your highest level of education?", "answer": "Bachelor"},
    {"id": "question-6", "question": "Grade:", "answer": "A+"},
    {"id": "question-7", "question": "Have you taken any English Proficiency test?", "answer": "Yes"}
  ]
}
```

**Response Data (JSON):**

```json
{
    "statusCode": 200,
    "success": true,
    "message": "User created successfully!",
    "data": {
        "id": "65704dd54b1045e1dc25bcf2",
        "firstName": "User",
        "lastName": "One",
        "email": "<user1@example.com>",
        "phone": "+1234567890",
        "password": "$2b$16$HS/yRdP04vfS2qy2rh6iUeFEdxMGkR9PW/VVEX/dFFb.KvmfOxyFm",
        "role": "student",
        "survey": [
            {
                "id": "question-1",
                "question": "Which countries do you want to study in?",
                "answer": "Poland"
            },
            {
                "id": "question-2",
                "question": "Which levels of education are you applying for?",
                "answer": "Masters"
            },
            {
                "id": "question-3",
                "question": "What would you like to study?",
                "answer": "IT"
            },
            {
                "id": "question-4",
                "question": "What's your estimated yearly tuition budget?",
                "answer": "Up to ~ 10,000 Euro"
            },
            {
                "id": "question-5",
                "question": "What is your highest level of education?",
                "answer": "Bachelor"
            },
            {
                "id": "question-6",
                "question": "Grade:",
                "answer": "A+"
            },
            {
                "id": "question-7",
                "question": "Have you taken any English Proficiency test?",
                "answer": "Yes"
            }
        ]
    }
}
```

This endpoint allows users to sign up for UniGoal. It creates a new user with the provided information, including survey responses. The response includes the newly created user's details.

## Note

- The password in the response is hashed for security reasons.
- Adjust the data and endpoints as needed for your implementation.
- Ensure secure password handling and storage practices.

### Login

#### Endpoint: `api/v1/login`

**Request Data (JSON):**

```json
{
 
  "email": "<user1@example.com>",
  "password": "123456",
}
```

**Response Data (JSON):**

```json
{
    "success": true,
    "statusCode": 200,
    "message": "User logged in successfully",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTcwNGRkNTRiMTA0NWUxZGMyNWJjZjIiLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTcwMTg1OTg1NiwiZXhwIjoxNzMzMzk1ODU2fQ.mlx4_BYigzo1NbJmd-1Yph5_RivBese9ib-NZzzI-Js"
}
```
