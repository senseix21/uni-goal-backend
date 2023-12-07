
### Authentication

1. **Sign Up**
   - Endpoint: `{{url}}/auth/signup`
   - Method: POST
   - Request Body: User details (firstName, lastName, email, phone, password, role)

  ```json
  {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "phone": "123-456-7890",
    "password": "your_password_here"
  }
  ```

2. **Login**
   - Endpoint: `{{url}}/auth/login`
   - Method: POST
   - Request Body: User credentials (email, password)

  ```json
  {
    "email": "john.doe@example.com",
    "password": "your_password_here"
  }
  ```

### Profile Information

1. **Create Profile**
   - Endpoint: `{{url}}/profileInformation/`
   - Method: POST
   - Request Body: User profile details (passportNumber, issueDate, expiryDate, gender, maritalStatus, dateOfBirth, placeOfBirth, formalPhoto)

    ```json
    {
      "userId": "user_id_here",
      "passportNumber": "AB123456",
      "issueDate": "2023-01-01T00:00:00.000Z",
      "expiryDate": "2028-01-01T00:00:00.000Z",
      "gender": "Male",
      "maritalStatus": "Single",
      "dateOfBirth": "1990-01-01T00:00:00.000Z",
      "placeOfBirth": "City, Country",
      "formalPhoto": "formal_photo_url_here"
    }
    ```

   - Authorization Header Required

2. **Get Single Profile**
   - Endpoint: `{{url}}/profileInformation/6571186ff786c142e338abc4`
   - Method: GET
   - Authorization Header Required

3. **Update Profile**
   - Endpoint: `{{url}}/profileInformation/6571186ff786c142e338abc4`
   - Method: PATCH
   - Request Body: Updated profile details
   - Authorization Header Required

### Counselor

1. **Create Counselor**
   - Endpoint: `{{url}}/counselor/`
   - Method: POST
   - Request Body: Counselor details

    ```json
    {
      "userId": "user_id_here",
      "citizenship": "Country",
      "countryOfResidence": "Country",
      "city": "City",
      "detailAddress": "Address",
      "highestEducation": "Degree",
      "currentEducation": "Degree",
      "universityName": "University",
      "major": "Major",
      "englishProficiency": "Proficiency Level",
      "aboutYourself": "About the counselor",
      "availability": "Availability",
      "facebookLink": "Facebook Profile URL",
      "linkedinLink": "LinkedIn Profile URL",
      "formalPhoto": "formal_photo_url_here",
      "studentCard": "student_card_url_here"
    }
    ```

   - Authorization Header Required

2. **Update Counselor**
   - Endpoint: `{{url}}/counselor/657187e0dcc35e95cf9e02bb`
   - Method: PATCH
   - Request Body: Updated counselor details
   - Authorization Header Required

3. **Delete Counselor**
   - Endpoint: `{{url}}/counselor/65718690dcc35e95cf9e02ba`
   - Method: DELETE
   - Authorization Header Required

4. **Get Single Counselor**
   - Endpoint: `{{url}}/counselor/657187e0dcc35e95cf9e02bb`
   - Method: GET
   - Authorization Header Required

### Education History

1. **Create Education History**
   - Endpoint: `{{url}}/educationHistory`
   - Method: POST
   - Request Body: Education details

   ```json
    
      {
        "id": "education_history_id_here",
        "levelOfEducation": "Degree Level",
        "startOfStudies": "2020-01-01T00:00:00.000Z",
        "expectedPassingYear": "2024-01-01T00:00:00.000Z",
        "officialName": "University Name",
        "groupMajorName": "Major",
        "mediumOfInstruction": "Language",
        "gpa": 3.5
      },

    
    ```

   - Authorization Header Required

2. **Get Single Education History**
   - Endpoint: `{{url}}/educationHistory/6571d3a2e3c98bd0e090cd00`
   - Method: GET
   - Authorization Header Required

3. **Get All Education History**
   - Endpoint: `{{url}}/educationHistory/`
   - Method: GET
   - Authorization Header Required

4. **Update Education History**
   - Endpoint: `{{url}}/educationHistory/6571d3a2e3c98bd0e090cd00`
   - Method: PATCH
   - Request Body: Updated education details
   - Authorization Header Required

5. **Delete Education History**
   - Endpoint: `{{url}}/educationHistory/6571d3a2e3c98bd0e090cd00`
   - Method: DELETE
   - Authorization Header Required

### Work History

1. **Create Work History**
   - Endpoint: `{{url}}/workHistory/`
   - Method: POST
   - Request Body: Work history details

    ```json
    
      {
        "id": "work_history_id_here",
        "organization": "Company Name",
        "organizationType": "Type of Organization",
        "position": "Job Position",
        "JobType": "FullTime",
        "fromDate": "2022-01-01T00:00:00.000Z",
        "toDate": "2023-01-01T00:00:00.000Z"
      },

    ```

   - Authorization Header Required

2. **Get Single Work History**
   - Endpoint: `{{url}}/workHistory/6571e736824a29070f362bb4`
   - Method: GET
   - Authorization Header Required

3. **Get All Work History**
   - Endpoint: `{{url}}/workHistory/`
   - Method: GET
   - Authorization Header Required

4. **Update Work History**
   - Endpoint: `{{url}}/workHistory/6571e736824a29070f362bb4`
   - Method: PATCH
   - Request Body: Updated work history details
   - Authorization Header Required

5. **Delete Work History**
   - Endpoint: `{{url}}/workHistory/6571e736824a29070f362bb4`
   - Method: DELETE
   - Authorization Header Required

### ExtraCurricularActivity

1. **Create Skills**
   - Endpoint: `{{url}}/extraCurricularActivity/`
   - Method: POST
   - Request Body: Skills details

  ```json
  {
    "activityName": "Activity Name",
    "organization": "Organization Name",
    "fromDate": "2022-01-01T00:00:00.000Z",
    "toDate": "2023-01-01T00:00:00.000Z",
    "isCurrentlyActive": true
  }
  ```

- Authorization Header Required

2. **Get Single extraCurricularActivity**
   - Endpoint: `{{url}}/extraCurricularActivity/6571f34362c39529c370f2a5`
   - Method: GET
   - Authorization Header Required

3. **Update extraCurricularActivity**
   - Endpoint: `{{url}}/extraCurricularActivity/6571f34362c39529c370f2a5`
   - Method: PATCH
   - Request Body: Updated skills details
   - Authorization Header Required

4. **Delete extraCurricularActivity**
   - Endpoint: `{{url}}/extraCurricularActivity/6571f34362c39529c370f2a5`
   - Method: DELETE
   - Authorization Header Required

5. **Get All extraCurricularActivity**
   - Endpoint: `{{url}}/extraCurricularActivity/`
   - Method: GET
   - Authorization Header Required

### Skills

1. **Create Skills**
   - Endpoint: `{{url}}/skills/`
   - Method: POST
   - Request Body: Skills details

  ```json
  {
    "skillNames": ["UpdatedSkill1", "UpdatedSkill2"]
  }
   - Authorization Header Required

2. **Get Single Skills**
   - Endpoint: `{{url}}/skills/6571f34362c39529c370f2a5`
   - Method: GET
   - Authorization Header Required

3. **Update Skills**
   - Endpoint: `{{url}}/skills/6571f34362c39529c370f2a5`
   - Method: PATCH
   - Request Body: Updated skills details
   - Authorization Header Required

4. **Delete Skills**
   - Endpoint: `{{url}}/skills/6571f34362c39529c370f2a5`
   - Method: DELETE
   - Authorization Header Required

### Language and Other Qualifications Routes
1. **Create Language and Other Qualifications**
   - Endpoint: `{{url}}/qualifications/`
   - Method: POST
   - Request Body: Language and Other Qualificationsdetails
   ```json
    {
      "id": "qualifications_id_here",
      "userId": "user_id_here",
      "ielts": 7.5,
      "toefl": 100,
      "duolingo": 120,
      "pte": 75,
      "gre": 320,
      "gmat": 650,
      "Others": 80,
      "NoneOfThese": false
    }
    ```
   - Authorization Header Required

2. **Get Single Language and Other Qualifications**
   - Endpoint: `{{url}}/qualifications/6571f34362c39529c370f2a5`
   - Method: GET
   - Authorization Header Required

3. **Update Language and Other Qualifications**
   - Endpoint: `{{url}}/qualifications/6571f34362c39529c370f2a5`
   - Method: PATCH
   - Request Body: Updated skills details
   - Authorization Header Required

4. **Delete Language and Other Qualifications**
   - Endpoint: `{{url}}/qualifications/6571f34362c39529c370f2a5`
   - Method: DELETE
   - Authorization Header Required


### Student Status Routes

1. **Create Student Status**
   - Endpoint: `{{url}}/studentStatus/`
   - Method: POST
   - Request Body: Student Status
    ```json
    {
      "id": "status_id_here",
      "userId": "user_id_here",
      "consultationFee": 50,
      "consultationTime": "2023-01-01T12:00:00.000Z",
      "consultationDone": true,
      "documentsReady": true,
      "applicationFee": 100,
      "applicationPaid": true,
      "universityName": "University Name",
      "majorName": "Major Name",
      "countryName": "Country Name",
      "applicationStatus": "UnderReview",
      "interviewScheduled": true,
      "acceptanceFee": 200,
      "admissionNotice": true,
      "embassySubmission": "2023-02-01T00:00:00.000Z",
      "visaIssued": true
    }
    ```
   - Authorization Header Required

2. **Get Single Student Status **
   - Endpoint: `{{url}}/studentStatus/6571f34362c39529c370f2a5`
   - Method: GET
   - Authorization Header Required

3. **Update Student Status **
   - Endpoint: `{{url}}/studentStatus/6571f34362c39529c370f2a5`
   - Method: PATCH
   - Request Body: Updated skills details
   - Authorization Header Required

4. **Delete Student Status **
   - Endpoint: `{{url}}/studentStatus/6571f34362c39529c370f2a5`
   - Method: DELETE
   - Authorization Header Required

### Profile Routes
1. **Get Single Profile**
   - Endpoint: `{{url}}/profile/`
   - Method: GET
   - Authorization Header Required

### Study Program Routes
1. **Create Study Program**
   - Endpoint: `{{url}}/studyProgram/`
   - Method: POST
   - Request Body: Work history details
    ```json   
   {
        "levelName": "Bachelor",
        "programName": "Computer Science",
        "universityName": "University Name",
        "location": "Country, City",
        "duration": "4 years",
        "studyLanguage": "English",
        "tuitionFee": "10000 USD",
        "applicationFee": "50 USD",
        "entryQualification": "High School Diploma",
        "languageRequirements": "IELTS 6.5",
        "programOverview": "Program Overview",
        "studySession": "Fall 2023",
        "applicationDeadline": "2023-05-01T00:00:00.000Z"
      },
    ```

   - Authorization Header Required

2. **Get Single Study Program**
   - Endpoint: `{{url}}/studyProgram/6571e736824a29070f362bb4`
   - Method: GET
   - Authorization Header Required

3. **Get All Study Program**
   - Endpoint: `{{url}}/studyProgram/`
   - Method: GET
   - Authorization Header Required

4. **Update Study Program**
   - Endpoint: `{{url}}/studyProgram/6571e736824a29070f362bb4`
   - Method: PATCH
   - Request Body: Updated work history details
   - Authorization Header Required

5. **Delete Study Program**
   - Endpoint: `{{url}}/studyProgram/6571e736824a29070f362bb4`
   - Method: DELETE
   - Authorization Header Required
