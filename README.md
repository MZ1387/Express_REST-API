# Express_REST-API

A Question and Answer application that uses Express and a REST API

## Routes

GET: ALL QUESTIONS

`localhost:3000/questions`

POST: NEW QUESTION

` localhost:3000/questions `

BODY:

` { "text": "Which came first, the chicken or the egg?" } `

RESULT:

` {
    "__v": 0,
    "text": "Which came first, the chicken or the egg?",
    "_id": "597b7642a5c31dbf05a1daea",
    "answers": [],
    "createdAt": "2017-07-28T17:37:06.087Z" } `

GET: QUESTION BY ID

`localhost:3000/questions/:id`

POST: ANSWER TO QUESTION

`localhost:3000/questions/:id/answers`

RESULT:

`{
    "_id": "597b7642a5c31dbf05a1daea",
    "text": "which came first, the chicken or the egg?",
    "__v": 1,
    "answers": [
        {
            "text": "The chicken",
            "_id": "597b784ae3de9e0106314691",
            "votes": 0,
            "updatedAt": "2017-07-28T17:45:46.659Z",
            "createdAt": "2017-07-28T17:45:46.659Z"
        }
    ],
    "createdAt": "2017-07-28T17:37:06.087Z"
}`

POST: VOTE UP ANSWER

`localhost:3000/questions/:id/answers/:id/vote-up`

RESULT:

`{
    "_id": "597b7642a5c31dbf05a1daea",
    "text": "which came first, the chicken or the egg?",
    "__v": 31,
    "answers": [
        {
            "text": "The egg",
            "_id": "597b787fe3de9e0106314692",
            "votes": 7,
            "updatedAt": "2017-07-28T17:46:39.618Z",
            "createdAt": "2017-07-28T17:46:39.617Z"
        },
        {
            "text": "The chicken",
            "_id": "597b784ae3de9e0106314691",
            "votes": 3,
            "updatedAt": "2017-07-28T17:45:46.659Z",
            "createdAt": "2017-07-28T17:45:46.659Z"
        }
    ],
    "createdAt": "2017-07-28T17:37:06.087Z"
}`

POST: VOTE DOWN ANSWER

`localhost:3000/questions/:id/answers/:id/vote-down`

RESULT:

`{
    "_id": "597b7642a5c31dbf05a1daea",
    "text": "which came first, the chicken or the egg?",
    "__v": 43,
    "answers": [
        {
            "text": "The egg",
            "_id": "597b787fe3de9e0106314692",
            "votes": 7,
            "updatedAt": "2017-07-28T17:46:39.618Z",
            "createdAt": "2017-07-28T17:46:39.617Z"
        },
        {
            "text": "The chicken",
            "_id": "597b784ae3de9e0106314691",
            "votes": -1,
            "updatedAt": "2017-07-28T17:45:46.659Z",
            "createdAt": "2017-07-28T17:45:46.659Z"
        }
    ],
    "createdAt": "2017-07-28T17:37:06.087Z"
}`

PUT: UPDATE ANSWER

`localhost:3000/questions/:id/answers/:id`

BODY:

`{
  "text": "It was the chicken!"
}`

RESULT:

`{
    "_id": "597b7642a5c31dbf05a1daea",
    "text": "which came first, the chicken or the egg?",
    "__v": 65,
    "answers": [
        {
            "text": "It was the chicken!",
            "_id": "597b784ae3de9e0106314691",
            "votes": 13,
            "updatedAt": "2017-07-28T18:12:23.554Z",
            "createdAt": "2017-07-28T17:45:46.659Z"
        },
        {
            "text": "The egg",
            "_id": "597b787fe3de9e0106314692",
            "votes": 13,
            "updatedAt": "2017-07-28T17:46:39.618Z",
            "createdAt": "2017-07-28T17:46:39.617Z"
        }
    ],
    "createdAt": "2017-07-28T17:37:06.087Z"
}`

DELETE: DELETE ANSWER

`localhost:3000/questions/:id/answers/:id`

RESULT:

`{
    "_id": "597b7642a5c31dbf05a1daea",
    "text": "which came first, the chicken or the egg?",
    "__v": 66,
    "answers": [
        {
            "text": "The egg",
            "_id": "597b787fe3de9e0106314692",
            "votes": 13,
            "updatedAt": "2017-07-28T17:46:39.618Z",
            "createdAt": "2017-07-28T17:46:39.617Z"
        }
    ],
    "createdAt": "2017-07-28T17:37:06.087Z"
}`

## Technologies Used

- Express
- MongoDB
- Mongoose

## Concepts Implemented

- REST API
