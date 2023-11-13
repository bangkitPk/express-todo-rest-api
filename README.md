# TODO LIST REST API Documentation

## Overview

Welcome to the Todo API documentation! This API provides endpoints for managing todos. It is built using Express.js for server implementation, Sequelize as an ORM (Object-Relational Mapping) for MySQL database interaction, and MySQL as the database.

## Accessing the API

You can access the Todo API directly at the following endpoint: [https://vast-tan-kitten-cuff.cyclic.app/](https://vast-tan-kitten-cuff.cyclic.app/)

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
