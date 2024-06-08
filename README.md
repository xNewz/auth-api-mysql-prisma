# Auth Api with Express, JWT, MySQL and Prisma

## Description

This is a simple auth api with express, jwt, mysql and prisma.

<div align="left">
   <a href="https://www.youtube.com/watch?v=WERrX2NjBEA&t=198s"><img src="https://img.shields.io/static/v1?message=Youtube&logo=youtube&label=&color=FF0000&logoColor=white&labelColor=&style=for-the-badge" height="35" alt="youtube logo"  /></a>
</div>

## Installation

1. Clone the repository
2. Run `npm install`
3. Create a `.env` file in the root directory and add the following:

```
DATABASE_URL=your_mysql_url
```

4. Run `npx prisma migrate dev --name init` to create the database tables

## Usage

1. Run `npm start` to start the server
2. Use Postman or any other API client to test the endpoints

## Endpoints

1. POST `/api/register` - Register a user
2. POST `/api/login` - Login a user
3. GET `/api/protected` - Protected route

> `/api/protected` requires a valid token in the Authorization header to access
