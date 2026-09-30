# Interactive Timeline

## Status

Complete

## Overview

A full-stack interactive timeline application built to demonstrate experience developing a Java Spring Boot backend, React frontend, REST APIs, PostgreSQL database integration, and deployment across multiple platforms.

The application presents timeline content through an interactive web interface while using a Spring Boot backend to manage and serve application data.

## Objective

The project was built to gain practical experience developing and deploying a full-stack application using a separated frontend and backend architecture.

The primary technical goals were:

* Build a REST API using Spring Boot.
* Develop an interactive frontend using React.
* Persist application data using PostgreSQL.
* Connect the React frontend to the Spring Boot backend.
* Deploy the frontend and backend independently.
* Practice structuring a full-stack application into maintainable components.

## Technologies

### Backend

* Java
* Spring Boot
* Spring Data JPA
* REST APIs

### Frontend

* React
* Vite
* JavaScript
* HTML
* CSS

### Database

* PostgreSQL

### Deployment

* Vercel
* Render

### Development

* Git
* Maven

## Architecture

The application uses a separated frontend and backend architecture.

```text id="e0g3uq"
React / Vite Frontend
        ↓
REST API Requests
        ↓
Spring Boot Backend
        ↓
Spring Data JPA
        ↓
PostgreSQL Database
```

The frontend is responsible for displaying and interacting with timeline content, while the Spring Boot backend handles API requests and database operations.

## Backend

The backend was developed using Java and Spring Boot.

The application follows a layered structure separating responsibilities between:

* Controllers
* Services
* Repositories
* Data Transfer Objects (DTOs)
* Database entities

### Controller Layer

Controllers expose REST endpoints used by the frontend to retrieve and interact with application data.

### Service Layer

The service layer contains application logic and coordinates operations between the controllers and repositories.

### Repository Layer

Spring Data JPA repositories handle persistence and communication with the PostgreSQL database.

### DTOs

Data Transfer Objects are used to control the data exchanged between the backend and frontend rather than exposing database entities directly through the API.

## Frontend

The frontend was developed using React and Vite.

The application uses React components to separate the user interface into reusable sections and manage the interactive timeline experience.

The frontend communicates with the Spring Boot backend through REST API requests.

## Database

PostgreSQL is used to persist the application's data.

Spring Data JPA and Hibernate provide the persistence layer between the Spring Boot application and the PostgreSQL database.

## Deployment

The application uses separate deployments for the frontend and backend.

### Frontend

Hosted using Vercel.

### Backend

Hosted using Render.

### Database

PostgreSQL is used by the backend application for persistent data storage.

## Engineering Concepts Demonstrated

This project demonstrates experience with:

* Full-stack application development
* Java
* Spring Boot
* REST API development
* React
* Component-based frontend development
* PostgreSQL
* Spring Data JPA
* Hibernate
* DTO-based API design
* Layered application architecture
* Frontend/backend integration
* Cloud deployment
* Git-based development

## Project Structure

The project is organized into separate frontend and backend applications.

```text id="tr5xkl"
project/
├── backend/
│   └── Spring Boot application
│       ├── controller/
│       ├── service/
│       ├── repository/
│       ├── dto/
│       └── model/
│
└── frontend/
    └── React / Vite application
        └── components/
```

## Deployment

No longer currently deployed

## Screenshots

Screenshots will be added here to demonstrate the application's interface and interactive functionality.

## Future Improvements

Potential future improvements include:

* Expanding the timeline's interactive functionality.
* Improving responsive behavior across additional device sizes.
* Adding additional API functionality.
* Expanding automated testing.
* Improving application performance and loading behavior.
* Adding additional deployment and CI/CD automation.
