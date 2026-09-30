# RAMP Check-In System

## Status

Complete

## Overview

An automated student attendance and payroll tracking system developed for the RAMP summer program at Wentworth Institute of Technology.

The system uses Airtable, JavaScript, and Airtable Automations to record student check-ins and check-outs, calculate attendance hours and daily pay, and organize the resulting data for weekly reporting.

## Problem

The RAMP summer program needed a reliable system for tracking student attendance and calculating payroll information.

A planned solution using Workday was not available due to last-minute implementation issues. An alternative system was needed that could be implemented quickly while providing reliable attendance records and reducing the amount of manual work required by program coordinators.

## Solution

I developed an automated attendance tracking system using Airtable and JavaScript.

Students can check in and out through a simple three-click workflow. Attendance records are then processed automatically to calculate hours attended and payroll information.

The system organizes attendance information into weekly tables with individual day-by-day views, allowing coordinators to review attendance throughout the program.

## Technologies

### Platform

* Airtable
* Airtable Automations

### Development

* JavaScript

## Attendance Workflow

The attendance system follows a check-in and check-out workflow:

```text
Student Check-In
        ↓
Clock Record
        ↓
Student Check-Out
        ↓
Clock Record
        ↓
Daily Automation
        ↓
Hours + Pay Calculation
        ↓
Weekly Attendance Data
```

The system records daily attendance events and processes them automatically at the end of each day.

## Student Check-In

The system was designed to make attendance simple for students.

* Students can check in using a three-click process.
* Check-in and check-out events are recorded in the attendance system.
* Attendance records are associated with individual students.
* The system supports daily tracking while organizing information into weekly records.

## Clock Records

A dedicated clock record table stores daily check-in and check-out events.

The clock records provide the source data used by the daily automation scripts.

The system uses these records to:

* Determine attendance duration.
* Calculate daily hours.
* Calculate daily pay.
* Identify missing check-outs.
* Accumulate information for weekly reporting.

## Automated Daily Processing

JavaScript-powered automations process attendance data at the end of each day.

The automation:

1. Collects student check-in and check-out information.
2. Calculates the amount of time each student attended.
3. Calculates the corresponding daily pay.
4. Accounts for the daily unpaid lunch period.
5. Identifies students with missing check-outs.
6. Updates weekly attendance information.
7. Moves completed daily records into the appropriate weekly archive.

## Payroll Calculations

The system automatically calculates pay based on hours attended.

A one-hour lunch deduction is applied to each day's calculated attendance to account for the unpaid lunch period.

Daily attendance and pay information is accumulated throughout the week so that it can be used for the weekly payroll report.

## Student Records

A dedicated `Students` table contains the information required for the weekly attendance and payroll export.

The system automatically clears the active student data at the beginning of each new week so that the next week's attendance can be tracked independently.

## Weekly Organization

Attendance information is organized into weekly tables.

Each weekly table includes day-by-day views, allowing coordinators to review attendance records for individual days while retaining the complete week's information.

At the end of each day, processed clock records are moved into the corresponding weekly table and the active clock table is cleared for the next day.

## Automation Workflow

The overall data flow can be summarized as:

```text
Active Clock Records
        ↓
Daily JavaScript Automation
        ↓
Attendance Validation
        ↓
Hours Calculation
        ↓
Lunch Deduction
        ↓
Daily Pay Calculation
        ↓
Weekly Attendance Table
        ↓
Weekly Payroll Information
```

## Engineering Concepts Demonstrated

This project demonstrates experience with:

* JavaScript automation
* Airtable scripting
* Database-style data organization
* Automated data processing
* Time-based calculations
* Payroll calculations
* Data validation
* Workflow automation
* Record archiving
* Structured reporting
* Designing systems to reduce manual administrative work

## Project Outcome

The completed system provided the RAMP program with an automated process for recording student attendance and calculating payroll information.

The system reduced manual attendance processing by automatically handling daily calculations, identifying attendance issues, organizing weekly records, and preparing information for payroll reporting.

## Screenshots

Screenshots will eventually be added here to demonstrate:

* Student check-in workflow
* Attendance tables
* Clock records
* Daily views
* Weekly attendance tables
* Automated payroll calculations

## Future Improvements

Potential future improvements include:

* Additional automated reporting.
* Expanded attendance analytics.
* More robust handling of unusual check-in/check-out scenarios.
* Additional validation for attendance records.
* Integration with other university systems.
