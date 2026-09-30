# Classroom Automation

## Status

In Development

## Overview

An automated classroom control system developed to connect Wentworth Institute of Technology's classroom scheduling system with classroom AV equipment.

The project uses Node-RED HTTP requests to retrieve upcoming room reservations from the university's 25Live scheduling system and determine when classroom equipment should be activated. The Node-RED flow was developed and tested locally, with a Raspberry Pi planned as the intended deployment environment.

The project integrates scheduling data with a Crestron CP3 processor through a Node-RED workflow.

## Problem

Classroom technology can require equipment to be activated based on scheduled classes. Manually managing classroom equipment can require unnecessary intervention and can result in equipment remaining powered on when it is not needed.

The goal of this project was to automate classroom equipment activation based on scheduled reservations.

## Solution

I developed a Node-RED automation flow that periodically checks the university's 25Live scheduling system for upcoming reservations.

The current implementation:

1. Queries the 25Live reservation API.
2. Retrieves upcoming classroom reservations.
3. Determines whether a class is approaching its scheduled start time.
4. Identifies when the configured activation conditions are met.
5. Sends a control command through the Node-RED workflow toward the Crestron system.

The automation flow was developed and tested locally. Deployment to a Raspberry Pi was planned but had not yet been completed.

## Technologies

### Intended Hardware

* Raspberry Pi
* Crestron CP3 processor

### Software

* Node-RED

### APIs & Networking

* 25Live REST API
* HTTP Digest Authentication
* TCP communication

## System Architecture

The intended system connects the university scheduling system to classroom hardware through a Raspberry Pi.

```text
25Live Scheduling System
        ↓
25Live REST API
        ↓
Node-RED
        ↓
Raspberry Pi
        ↓
TCP Communication
        ↓
Crestron CP3
        ↓
Classroom Equipment
```

During development, the Node-RED flow was run locally rather than on the Raspberry Pi.

## Scheduling Integration

The Node-RED flow retrieves classroom reservation information from the university's 25Live scheduling system.

The flow uses the 25Live reservations endpoint to retrieve upcoming reservations for the target classroom.

The API endpoint used during development follows the 25Live REST API structure:

```text
/r25ws/wrd/wit/run/reservations.xml
```

The flow uses HTTP Digest Authentication when communicating with the scheduling service.

## Automated Class Detection

The Node-RED flow periodically checks scheduling data rather than requiring a user to manually determine when classroom equipment should be activated.

The flow identifies upcoming reservations and determines whether the next scheduled class falls within the configured activation window.

For the classroom configuration used during development, the system checks for classes beginning within approximately 15 minutes.

This scheduling logic was implemented and tested during local development.

## Raspberry Pi Deployment

A Raspberry Pi was selected as the intended deployment platform for the Node-RED automation.

The planned deployment would allow the automation flow to run continuously on a dedicated device rather than requiring a developer workstation to remain active.

At the current stage of the project, the Node-RED flow had been tested locally and had not yet been deployed to the Raspberry Pi.

## Crestron Integration

The project was designed to communicate with a Crestron CP3 processor to control classroom equipment.

The Node-RED flow generates the appropriate control command when the scheduling conditions are met.

The control workflow uses TCP communication to provide the connection between Node-RED and the Crestron system.

## Authentication

The Node-RED flow uses HTTP Digest Authentication when accessing the 25Live scheduling API.

Credentials are stored separately from the flow logic rather than being embedded directly into the API request configuration.

The flow reads the required credentials from a separate configuration file when communicating with the scheduling service.

## Automation Workflow

The current development workflow can be summarized as:

```text
Periodic Poll
      ↓
Request 25Live Reservations
      ↓
Authenticate with Scheduling API
      ↓
Parse Reservation Data
      ↓
Check Upcoming Class Time
      ↓
Class Within Activation Window?
      ↓
     Yes
      ↓
Generate Control Command
      ↓
Node-RED TCP Output
      ↓
Crestron CP3
```

The automation flow was tested locally during development. Raspberry Pi deployment and end-to-end classroom testing remained future work.

## Engineering Concepts Demonstrated

This project demonstrates experience with:

* REST API integration
* HTTP requests
* XML-based API responses
* HTTP Digest Authentication
* Scheduling logic
* Time-based automation
* Network communication
* TCP communication
* Node-RED
* Crestron control systems
* External system integration
* Credential management
* Hardware/software integration

## Current Development State

The project is currently in development.

The 25Live API integration, authentication, reservation processing, scheduling logic, and Node-RED control workflow were developed and tested locally.

The Raspberry Pi deployment had not yet been completed, and the full end-to-end classroom environment had not yet been tested through the Raspberry Pi.

## Project Outcome

The project established the software workflow needed to retrieve classroom scheduling information and determine when a classroom control command should be generated.

The next stage is to deploy the Node-RED flow to the intended Raspberry Pi environment and validate the complete workflow with the classroom hardware.

## Screenshots

Screenshots will eventually be added here to demonstrate:

* 25Live API interaction
* Reservation data
* Node-RED workflow
* Crestron configuration
* System workflow

## Future Improvements

Potential future improvements include:

* Deploying the automation to the Raspberry Pi.
* Completing end-to-end testing with the classroom hardware.
* Supporting multiple classrooms.
* Expanding scheduling logic for different reservation types.
* Adding automated equipment shutdown.
* Adding logging and monitoring.
* Improving error handling when the scheduling API is unavailable.
* Adding notifications when classroom automation fails.
* Containerizing the Node-RED environment.
* Adding a configuration interface for classroom-specific settings.
* Tap and go functionality, allowing classroom hardware to be started by a professor tapping their ID.