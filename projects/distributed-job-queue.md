# Distributed Job Queue

## Status

In Development

## Overview

A distributed job processing system built with Java and Spring Boot. The project is designed to demonstrate backend development, concurrent job processing, database persistence, automated testing, containerization, and CI/CD.

The system allows jobs to be submitted through a REST API and processed by worker components. Job information and processing state are persisted so that jobs can be tracked throughout their lifecycle.

## Problem

Many applications need to process work asynchronously rather than performing every operation during an HTTP request. A job queue provides a way to accept work, place it into a queue, and allow worker processes to handle jobs independently.

This project was created to gain practical experience building and testing this type of backend system while working with concurrency, persistent data, Redis, PostgreSQL, Docker, and automated testing.

## Technologies

### Backend

* Java 21
* Spring Boot
* Spring Data JPA
* Hibernate
* REST APIs

### Databases & Storage

* PostgreSQL
* Redis

### Testing

* JUnit
* Testcontainers

### Development & Infrastructure

* Docker
* Maven
* Git
* CI/CD

## Current Implementation

The project currently includes:

* Spring Boot application configured to run on port `8081`.
* PostgreSQL database integration.
* Redis integration.
* Job domain model and job status handling.
* REST API components for submitting and working with jobs.
* Service and repository layers for job processing and persistence.
* Worker components for processing queued jobs.
* Unit tests using JUnit.
* Integration testing using Testcontainers.
* Docker-based development environment.
* CI/CD configuration.

## Job Processing

Jobs move through defined states during their lifecycle.

Current job status handling includes:

* Pending
* Processing
* Completed
* Failed

The worker system is responsible for retrieving queued work and processing jobs while maintaining the appropriate job state.

## Testing

Testing is a major focus of the project.

### Unit Testing

JUnit is used to test individual components and application logic in isolation.

### Integration Testing

Testcontainers is used to run integration tests against real containerized dependencies rather than relying exclusively on mocked database or infrastructure behavior.

This allows the project to test interactions between the application and services such as PostgreSQL in an environment closer to the actual development environment.

## CI/CD

The project includes CI/CD workflows to automatically build and test the application.

The goal is to ensure that changes are validated automatically before they are merged.

## Docker

Docker is used to provide consistent development infrastructure and containerize project dependencies.

The PostgreSQL container exposes port `5433` to the host while PostgreSQL continues to use port `5432` inside the container.

## Project Structure

The backend is organized using standard Spring Boot application layers and domain components.

```text
backend/
└── src/
    ├── main/
    │   └── java/
    │       └── com/willstewart/jobqueue/
    │           ├── controller/
    │           ├── service/
    │           ├── repository/
    │           ├── job/
    │           ├── worker/
    │           └── dto/
    │
    └── test/
        └── java/
```

## Engineering Concepts Demonstrated

This project is intended to demonstrate practical experience with:

* Concurrent job processing
* Worker-based processing
* REST API development
* Database persistence
* Redis
* PostgreSQL
* Spring Boot application architecture
* Unit testing
* Integration testing
* Testcontainers
* Docker
* CI/CD
* Git-based development workflows

## Current Development State

The project is still under active development.

The core Spring Boot application, database integration, job domain, service/repository components, worker components, testing infrastructure, and containerized development environment have been implemented.

Remaining work includes continuing to refine job processing behavior, expanding test coverage, improving error handling, and completing additional functionality as the project develops.

## Repository

GitHub: https://github.com/stewartwatwit/distributed-job-queue

## Deployment

Status: Not currently deployed.

## Screenshots

Screenshots will be added as the application reaches a stable UI/API demonstration state.

## Future Improvements

Potential future improvements include:

* Expanded job types
* More robust worker coordination
* Improved failure and retry handling
* Job prioritization
* Additional monitoring and observability
* Expanded integration test coverage
* Additional CI/CD automation
