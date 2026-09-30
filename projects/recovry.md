# RECOVRY

## Status

Complete

## Overview

RECOVRY is a recovery and injury-prevention application designed for intermediate and advanced runners.

The application allows runners to log running and strength-training activities and complete recovery surveys covering factors such as sleep, soreness, pain, and fatigue. The application uses this information along with workout intensity and recovery history to provide personalized recovery feedback.

RECOVRY was developed as a senior capstone project with Kevin DeCollibus.

## Problem

Runners can struggle to determine when they should push through training and when they should prioritize recovery. Training intensity alone does not provide a complete picture of an athlete's readiness, as factors such as sleep, soreness, pain, and fatigue can affect recovery.

The goal of RECOVRY was to provide runners with a simple way to record their training and recovery information and receive feedback based on their recent activity and reported recovery state.

## Solution

RECOVRY combines workout logging with recovery surveys to provide feedback based on a user's recent training and recovery information.

Users can:

* Create an account and authenticate.
* Log running workouts.
* Log strength-training workouts.
* Complete recovery surveys.
* Record sleep, soreness, pain, and fatigue information.
* Receive recovery feedback based on their recent activity and recovery history.

## Technologies

### Backend

* Python
* FastAPI
* SQLAlchemy
* REST APIs

### Database

* SQLite

### Frontend

* HTML
* CSS
* JavaScript

### Authentication

* Password hashing
* Password verification
* User authentication

## Architecture

The application uses a backend API built with FastAPI and SQLAlchemy for database interaction.

The primary components include:

```text id="5jtsl5"
Frontend
HTML / CSS / JavaScript
        ↓
FastAPI REST API
        ↓
Application Logic
        ↓
SQLAlchemy
        ↓
SQLite Database
```

## Authentication

RECOVRY includes user authentication functionality.

Users can create accounts and log in using their credentials. Passwords are hashed before being stored, and password verification is performed during authentication.

The application maintains a `users` table containing information including:

* User ID
* Username
* Email
* Hashed password

## Workout Tracking

Users can record their training activities through the application.

Workout information is used as part of the user's recovery history and can be considered alongside recovery survey information when generating feedback.

The application supports tracking both:

* Running workouts
* Strength-training workouts

## Recovery Surveys

Users can submit recovery information through a recovery survey.

The survey includes factors such as:

* Sleep
* Soreness
* Pain
* Fatigue

Recovery survey information is associated with the user's account and contributes to their recovery history.

The application exposes an endpoint for submitting recovery survey information:

```text
POST /{user_id}
```

A successful submission returns:

```text
Recovery survey submitted
```

## Personalized Recovery Feedback

RECOVRY uses workout intensity and recovery history together with user-reported recovery information to provide personalized feedback.

The goal is to help users understand how their current recovery state relates to their recent training rather than relying only on workout intensity.

## Testing & Pilot

The application was evaluated through a small pilot involving three runners following the same training plan.

Two participants used the recovery feedback provided by RECOVRY, while one participant did not.

The pilot observed improvements in mile performance across the participants:

* Participants using RECOVRY feedback: 11.47% improvement
* Participant not using RECOVRY feedback: 4.97% improvement

Because the pilot involved only three runners, these results should be treated as an initial observation rather than evidence of general effectiveness.

## Engineering Concepts Demonstrated

This project demonstrates experience with:

* REST API development
* FastAPI
* SQLAlchemy
* Relational database design
* User authentication
* Password hashing and verification
* CRUD operations
* Backend/frontend integration
* Personalized application logic
* Workout and recovery data management

## Project Structure

The application separates the backend API, database models, authentication functionality, and frontend components.

The backend is responsible for:

* Authentication
* User management
* Workout logging
* Recovery survey submission
* Database operations
* Recovery feedback

The frontend provides the user interface for interacting with these backend services.

## Project Outcome

RECOVRY was completed as a senior capstone project and resulted in a functional application for tracking training and recovery information.

The project provided practical experience designing and implementing a full-stack application, developing RESTful APIs, working with a relational database, implementing authentication, and connecting frontend functionality to backend services.

## Repository

GitHub: https://github.com/stewartwatwit/[repository-name]

## Deployment

Status: [Add deployment status if applicable]

## Screenshots

Screenshots will be added here to demonstrate the application's interface and functionality.

## Future Improvements

Potential future improvements include:

* Expanding the number of users participating in testing.
* Improving recovery recommendations using additional training and recovery data.
* Adding more detailed workout analytics.
* Providing visualizations of training and recovery trends.
* Expanding authentication and account-management functionality.
* Improving the user interface and mobile responsiveness.
* AI driven recovery responses
