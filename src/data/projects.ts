// Content is condensed from the matching file in projects/ (see `source`).
// Nothing here goes beyond what those files state. Repo links are intentionally
// omitted for now; set `repoUrl` on an entry to show one.

export interface Project {
  slug: string;
  name: string;
  featured: boolean;
  status: string;
  summary: string;
  stack: string[];
  problem: string;
  solution: string;
  keyDetails: string[];
  diagram: { title: string; steps: string[]; note?: string };
  outcome?: string;
  caveat?: string;
  repoUrl?: string;
  source: string;
}

export const projects: Project[] = [
  {
    slug: 'distributed-job-queue',
    name: 'Distributed Job Queue',
    featured: true,
    status: 'In Development',
    summary:
      'A distributed job processing system built with Java and Spring Boot. Jobs are submitted through a REST API and handled by worker components, with job state persisted so each job can be tracked through its lifecycle.',
    stack: [
      'Java 21',
      'Spring Boot',
      'Spring Data JPA',
      'Hibernate',
      'REST APIs',
      'PostgreSQL',
      'Redis',
      'JUnit',
      'Testcontainers',
      'Docker',
      'Maven',
      'Git',
      'CI/CD',
    ],
    problem:
      'Many applications need to process work asynchronously rather than during an HTTP request. This project was built to gain practical experience building and testing that kind of backend system, working with concurrency, persistent data, Redis, PostgreSQL, Docker, and automated testing.',
    solution:
      'A Spring Boot application that accepts jobs over a REST API and processes them with worker components, persisting job information and processing state.',
    keyDetails: [
      'Job domain model with defined lifecycle states: Pending, Processing, Completed, Failed.',
      'Service and repository layers for job processing and persistence, with PostgreSQL and Redis integration.',
      'Worker components that retrieve queued work and process jobs while maintaining job state.',
      'Unit tests with JUnit, plus integration tests with Testcontainers that run against real containerized dependencies instead of relying only on mocks.',
      'CI/CD workflows that automatically build and test the application.',
      'Docker-based development environment for consistent infrastructure.',
    ],
    diagram: {
      title: 'Job lifecycle',
      steps: [
        'Job submitted via REST API',
        'Pending',
        'Processing (worker)',
        'Completed or Failed',
      ],
    },
    outcome:
      'Still under active development. Remaining work includes refining job processing behavior, expanding test coverage, and improving error handling.',
    source: 'projects/distributed-job-queue.md',
  },
  {
    slug: 'recovry',
    name: 'RECOVRY',
    featured: true,
    status: 'Complete',
    summary:
      'A recovery and injury-prevention application for intermediate and advanced runners. Users log running and strength workouts and complete recovery surveys, and the app returns personalized recovery feedback.',
    stack: [
      'Python',
      'FastAPI',
      'SQLAlchemy',
      'REST APIs',
      'SQLite',
      'HTML',
      'CSS',
      'JavaScript',
      'Password hashing',
    ],
    problem:
      'Runners can struggle to tell when to push through training and when to prioritize recovery. Workout intensity alone does not show readiness, since sleep, soreness, pain, and fatigue also matter.',
    solution:
      'RECOVRY combines workout logging with recovery surveys and uses workout intensity, recovery history, and reported recovery state to produce feedback.',
    keyDetails: [
      'Account creation and login, with passwords hashed before storage and verified at authentication.',
      'Logging for both running and strength-training workouts.',
      'Recovery surveys covering sleep, soreness, pain, and fatigue, tied to the user account and recovery history.',
      'FastAPI REST backend using SQLAlchemy against a SQLite database, with an HTML/CSS/JavaScript frontend.',
    ],
    diagram: {
      title: 'Architecture',
      steps: [
        'HTML / CSS / JavaScript frontend',
        'FastAPI REST API',
        'Application logic',
        'SQLAlchemy',
        'SQLite database',
      ],
    },
    outcome:
      'Completed as a senior capstone project, resulting in a functional application for tracking training and recovery information.',
    caveat:
      'In a small pilot of three runners following the same training plan, the two who used RECOVRY feedback improved their mile performance by 11.47%, versus 4.97% for the one who did not. With only three runners, this is an initial observation, not evidence of general effectiveness.',
    source: 'projects/recovry.md',
  },
  {
    slug: 'interactive-timeline',
    name: 'Interactive Timeline',
    featured: true,
    status: 'Complete',
    summary:
      'A full-stack interactive timeline application with a Spring Boot REST API, a React frontend, and PostgreSQL persistence. Built to practice a separated frontend/backend architecture.',
    stack: [
      'Java',
      'Spring Boot',
      'Spring Data JPA',
      'Hibernate',
      'REST APIs',
      'React',
      'Vite',
      'JavaScript',
      'HTML',
      'CSS',
      'PostgreSQL',
      'Vercel',
      'Render',
      'Git',
      'Maven',
    ],
    problem:
      'The project was built to gain practical experience developing and deploying a full-stack application with separate frontend and backend deployments.',
    solution:
      'A Spring Boot backend manages and serves the timeline data, and a React/Vite frontend presents it through an interactive interface.',
    keyDetails: [
      'Layered backend separating controllers, services, repositories, DTOs, and database entities.',
      'DTOs control the data exchanged with the frontend, so database entities are not exposed directly through the API.',
      'React components split the interface into reusable sections.',
      'Frontend and backend were deployed independently (Vercel and Render).',
    ],
    diagram: {
      title: 'Architecture',
      steps: [
        'React / Vite frontend',
        'REST API requests',
        'Spring Boot backend',
        'Spring Data JPA',
        'PostgreSQL',
      ],
    },
    source: 'projects/interactive-timeline.md',
  },
  {
    slug: 'digital-tool-directory',
    name: 'WIT Digital Tool Directory',
    featured: true,
    status: 'Complete',
    summary:
      'A university-wide software directory for Wentworth Institute of Technology that gives students and faculty one searchable place to find approved software and learn how to access it. I led its implementation during my co-op.',
    stack: [
      'Microsoft Power Pages',
      'Microsoft Dataverse',
      'Microsoft Power Platform',
      'HTML',
      'CSS',
      'JavaScript',
      'Liquid',
      'FetchXML',
    ],
    problem:
      'Software information was spread across different resources, making it hard for students and faculty to tell which applications were available to them and how to access them.',
    solution:
      'A Power Pages application backed by Dataverse, with software records retrieved dynamically through Liquid and FetchXML.',
    keyDetails: [
      'Several ways to discover software: general search, functionality, major, department, and emerging software.',
      'Status logic that keeps records marked Retired or Active (No Longer Supported) out of user-facing results, and handles pilot software separately.',
      'Card-based interface with modal detail views, an installation guide, extension information, and Enterprise Protected indicators, styled to the university identity.',
      'Power Pages security configured through web roles, permissions, and Dataverse access settings.',
      'Requirements gathered with faculty across departments, and technical documentation written for future maintenance.',
    ],
    diagram: {
      title: 'Architecture',
      steps: [
        'User',
        'Power Pages',
        'Liquid / FetchXML',
        'Dataverse',
        'Software records',
      ],
    },
    outcome:
      'Provides students and faculty a centralized way to discover university-approved software, with documented configuration and maintenance procedures.',
    source: 'projects/digital-tool-directory.md',
  },
  {
    slug: 'ramp-checkin',
    name: 'RAMP Check-In System',
    featured: false,
    status: 'Complete',
    summary:
      'An automated attendance and payroll tracking system for the RAMP summer program at Wentworth, built with Airtable and JavaScript automations after a planned Workday solution was unavailable.',
    stack: ['Airtable', 'Airtable Automations', 'JavaScript'],
    problem:
      'The program needed reliable attendance tracking and payroll calculation, and an alternative had to be put in place quickly with little manual work for coordinators.',
    solution:
      'Students check in and out with a three-click workflow, and JavaScript automations process the records at the end of each day.',
    keyDetails: [
      'Daily automation calculates hours attended and daily pay, applies a one-hour unpaid lunch deduction, and flags missing check-outs.',
      'Processed records move into weekly tables with day-by-day views, and the active clock table is cleared for the next day.',
      'A Students table holds the data for the weekly attendance and payroll export.',
    ],
    diagram: {
      title: 'Daily workflow',
      steps: [
        'Student check-in and check-out',
        'Clock records',
        'Daily automation',
        'Hours + pay calculation',
        'Weekly attendance data',
      ],
    },
    outcome:
      'Reduced manual attendance processing by handling daily calculations, identifying attendance issues, organizing weekly records, and preparing payroll information.',
    source: 'projects/ramp-checkin.md',
  },
  {
    slug: 'classroom-automation',
    name: 'Classroom Automation',
    featured: false,
    status: 'In Development',
    summary:
      "A Node-RED workflow that connects Wentworth's 25Live scheduling system to classroom AV equipment, intended to activate equipment ahead of scheduled classes through a Crestron CP3 processor.",
    stack: [
      'Node-RED',
      '25Live REST API',
      'HTTP Digest Authentication',
      'TCP',
      'Crestron CP3',
      'Raspberry Pi (planned)',
    ],
    problem:
      'Classroom equipment may need to be activated based on scheduled classes, and managing it manually requires intervention and can leave equipment on when it is not needed.',
    solution:
      'A Node-RED flow that periodically queries 25Live reservations and generates a control command when a class is approaching its start time.',
    keyDetails: [
      'Retrieves upcoming reservations from the 25Live REST API using HTTP Digest Authentication, with credentials kept in a separate configuration file.',
      'Scheduling logic checks for classes starting within roughly 15 minutes for the development classroom configuration.',
      'Control commands are sent over TCP toward the Crestron CP3.',
    ],
    diagram: {
      title: 'Intended architecture',
      steps: [
        '25Live REST API',
        'Node-RED',
        'Raspberry Pi (planned)',
        'TCP',
        'Crestron CP3',
        'Classroom equipment',
      ],
      note: 'During development the flow ran locally rather than on a Raspberry Pi.',
    },
    outcome:
      'Established the software workflow for retrieving scheduling data and deciding when to generate a classroom control command.',
    source: 'projects/classroom-automation.md',
  },
];
