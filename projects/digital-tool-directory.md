# WIT Digital Tool Directory

## Status

Complete - Waiting on software list review

## Overview

A university-wide software directory developed for Wentworth Institute of Technology to provide students and faculty with a centralized resource for discovering approved software and learning how each application can be accessed.

The application was developed using Microsoft Power Pages and Microsoft Dataverse, with dynamic frontend functionality built using HTML, CSS, JavaScript, and Liquid.

I led the implementation of the directory while working with teammates, faculty and staff to gather requirements, develop the application, configure security, and document the system for future maintenance.

## Problem

Software information was distributed across different resources, making it difficult for students and faculty to determine which applications were available to them and how they could access them.

The goal of the project was to create a centralized, searchable directory that allowed users to discover software based on their needs while providing relevant information about availability, installation, extensions, and access requirements.

## Solution

I led the implementation of a Power Pages-based software directory backed by Microsoft Dataverse.

The application provides multiple ways for users to discover software, including:

* General software search
* Functionality-based browsing
* Major-based software discovery
* Department-based software discovery
* Emerging software

Software information is dynamically retrieved from Dataverse and displayed through the Power Pages application.

## Technologies

### Platform

* Microsoft Power Pages
* Microsoft Dataverse
* Microsoft Power Platform

### Frontend

* HTML
* CSS
* JavaScript
* Liquid

### Data & Queries

* Dataverse
* FetchXML

## Application Architecture

The application uses Power Pages as the user-facing web application and Dataverse as the underlying data platform.

```text id="2fsh4m"
User
  ↓
Power Pages
  ↓
Liquid / FetchXML
  ↓
Dataverse
  ↓
Software Records
```

## Software Data

Software information is stored in a Dataverse table named:

```text
cr0da_newsoftware
```

The application uses Liquid and FetchXML to retrieve software records from Dataverse and dynamically generate the appropriate content on the Power Pages site.

## Search & Discovery

The directory provides multiple ways for users to find software.

### General Search

Allows users to search the software directory for applications based on their available information.

### Functionality

Allows users to discover software based on what they need to accomplish rather than starting with a specific application name.

### Major

Provides a way for students to discover software relevant to their academic major.

## Software Status Handling

The application includes logic to prevent software that should not be presented to users from appearing in the directory.

Software records with statuses such as:

* Retired
* Active (No Longer Supported)

are excluded from appropriate user-facing results.

Software categorized under the Pilot subcategory is also handled separately so that pilot software can be distinguished from generally available applications.

## User Interface

The directory uses a card-based interface to present software information.

The interface was designed using the university's visual identity, including:

* WIT black and gold
* Montserrat typography
* Software cards
* Modal-based information displays
* Structured software information

The application also provides supporting information through features such as:

* Student Installation Guide
* Extension Information
* Enterprise Protected indicators

## Security

Power Pages security features were configured to control access to application functionality and data.

This included configuring:

* Web roles
* Permissions
* Dataverse access
* Power Pages security settings

Security configuration was an important part of the implementation because the application needed to expose appropriate software information while maintaining control over access to the underlying data.

## Requirements & Faculty Collaboration

The project involved working with faculty across the university.

Responsibilities included:

* Gathering requirements.
* Understanding how different departments needed to use the directory.
* Translating requirements into application functionality.
* Communicating implementation decisions.
* Coordinating feedback during development.
* Documenting the resulting application for future maintenance.

## Documentation

Created technical documentation covering the application's:

* Requirements
* Architecture
* Configuration
* Maintenance procedures
* Data structure
* Application functionality

The documentation was intended to make the system easier for future administrators and developers to understand and maintain.

## Engineering Concepts Demonstrated

This project demonstrates experience with:

* Web application development
* Microsoft Power Platform
* Power Pages
* Dataverse
* Liquid templating
* FetchXML
* HTML
* CSS
* JavaScript
* Role-based access control
* Data-driven web interfaces
* Requirements gathering
* Technical documentation
* Application maintenance

## Project Outcome

The completed directory provides students and faculty with a centralized way to discover university-approved software and access relevant information about each application.

The project also established documented application configuration and maintenance procedures to support continued use and future development.

## Screenshots

Screenshots will eventually be added here to demonstrate:

* Home page
* General software search
* Functionality search
* Major-based search
* Department-based search
* Software cards
* Software detail modal
* Installation information
* Security/access indicators

## Future Improvements

Potential future improvements include:

* Expanded software filtering and search capabilities.
* Additional software categorization.
* Improved analytics around software usage and searches.
* Additional automated data-management workflows.
* Continued improvements to accessibility and responsive design.
* Additional administrative tooling for maintaining software records.
