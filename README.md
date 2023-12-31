# TODO LIST REST API Documentation

## Overview

Welcome to the Todo API documentation! This API provides endpoints for managing todos. It is built using Express.js for server implementation, Sequelize as an ORM (Object-Relational Mapping) for MySQL database interaction, and MySQL as the database.

## Accessing the API

You can access the Todo API at the following base URL: [https://todoapi-bangkitpk.cyclic.app/](https://todoapi-bangkitpk.cyclic.app/)

## Authentication

### Login

- **Endpoint:** `/auth/login`
- **Method:** `POST`
- **Request Body:**

  ```json
  {
    "email": "user@example.com",
    "password": "userpassword"
  }
  ```

- **Response:**

  ```json
  {
    "message": "Login successful",
    "userId": 1,
    "token": "<generated-jwt-token>"
  }
  ```

### Register

- **Endpoint:** `/auth/register`
- **Method:** `POST`
- **Request Body:**

  ```json
  {
    "username": "newuser",
    "email": "newuser@example.com",
    "password": "newuserpassword"
  }
  ```

- **Response:**

  ```json
  {
    "message": "Register successful"
  }
  ```

## Todo Endpoints

### Get All Todos

- **Endpoint:** `/todos`
- **Method:** `GET`
- **Header:**

  - `Authorization: Bearer <jwt-token>`

- **Response:**

  ```json
  {
    "message": "Successfully retrieved todos data",
    "data": [
      {
        "id": 1,
        "task": "Example Task",
        "status": true,
        "detail": "Task details",
        "userId": 1,
        "createdAt": "Task Created Date",
        "updatedAt": "Task Updated Date"
      }
      // ...more todos
    ]
  }
  ```

### Get Todo by ID

- **Endpoint:** `/todos/:id`
- **Method:** `GET`
- **Header:**

  - `Authorization: Bearer <jwt-token>`

- **`:id` (Endpoint Parameter):** The unique identifier of the todo.

- **Response:**

  - **Successful Response:**

    ```json
    {
      "message": "Successfully retrieved todo data",
      "data": {
        "id": 1,
        "task": "Example Task",
        "status": true,
        "detail": "Task details",
        "userId": 1,
        "createdAt": "Task Created Date",
        "updatedAt": "Task Updated Date"
      }
    }
    ```

  - **Unsuccessful Response:**

    ```json
    {
      "message": "Todo not found"
    }
    ```

### Create New Todo

- **Endpoint:** `/todos`
- **Method:** `POST`
- **Header:**

  - `Authorization: Bearer <jwt-token>`

- **Request Body:**

  ```json
  {
    "task": "New Task",
    "detail": "New Task Detail"
  }
  ```

- **Response:**

  ```json
  {
    "message": "Successfully created a new todo"
  }
  ```

### Edit Todo

- **Endpoint:** `/todos/:id`
- **Method:** `PUT`
- **Header:**

  - `Authorization: Bearer <jwt-token>`

- **`:id` (Endpoint Parameter):** The unique identifier of the todo.

- **Request Body:**

  ```json
  {
    "task": "Updated Task",
    "status": false,
    "detail": "Updated task details"
  }
  ```

- **Response:**

  - **Successful Response:**

    ```json
    {
      "message": "Successfully updated the todo"
    }
    ```

  - **Unsuccessful Response:**

    ```json
    {
      "message": "Todo not found"
    }
    ```

### Delete Todo by ID

- **Endpoint:** `/todos/:id`
- **Method:** `DELETE`
- **Header:**

  - `Authorization: Bearer <jwt-token>`

- **`:id` (Endpoint Parameter):** The unique identifier of the todo.

- **Response:**

  - **Successful Response:**

    ```json
    {
      "message": "Successfully deleted the todo"
    }
    ```

  - **Unsuccessful Response:**

    ```json
    {
      "message": "Todo not found"
    }
    ```

### Delete All Todos

- **Endpoint:** `/todos`
- **Method:** `DELETE`
- **Header:**

  - `Authorization: Bearer <jwt-token>`

- **Response:**
  ```json
  {
    "message": "Successfully deleted all todos"
  }
  ```
