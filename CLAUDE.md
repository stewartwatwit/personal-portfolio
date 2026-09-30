# Portfolio Development Instructions

## General

Build a professional portfolio for William Stewart, a recent Computer Science graduate seeking entry-level software engineering positions.

## Content Rules

* Use `portfolio-content.md` as the source of truth for personal information.
* Use individual files in `/projects` for detailed project information.
* Never invent experience, accomplishments, technologies, metrics, users, or project functionality.
* Do not describe projects as live unless explicitly marked as deployed.
* Do not infer or add professional experience that is not documented in the content files.
* Ask before making significant changes to approved portfolio content.
* If required information is missing, use a placeholder or ask me rather than inventing it.

## Design

* Modern and professional.
* Software-engineering focused.
* Responsive across desktop, tablet, and mobile.
* Accessible.
* Avoid generic portfolio-template designs.
* Avoid excessive animations or unnecessary visual effects.
* Prioritize project presentation and readability.
* The portfolio should allow a recruiter to quickly understand my background, skills, experience, and projects.
* Incorporate subtle One Piece and Dragon Ball easter eggs throughout the portfolio without distracting from the professional presentation.
* Easter eggs can include small visual details, references, icons, hidden interactions, or hover effects.
* Do not make anime references a major part of the site's visual identity.

## Development

* Prefer clean, maintainable, and straightforward code.
* Avoid unnecessary dependencies and complexity.
* Follow the conventions and patterns already established in the project.
* Do not introduce a new technology or framework without explaining why it is appropriate.
* Do not make major architectural, framework, or dependency decisions without explaining the options and rationale first.
* Keep components and functionality modular and maintainable.
* Preserve existing functionality when making changes unless the requested change specifically requires otherwise.

## Development Workflow

For significant changes:

1. Explain the proposed approach before implementation.
2. Implement the change.
3. Run relevant tests, linting, formatting, and build checks.
4. Review the implementation for unintended changes or regressions.
5. Summarize the changes and any issues found.
6. Show the relevant diff or explain the files changed.
7. Create a focused commit.
8. Open a pull request.
9. Wait for my approval before merging.

Do not merge pull requests automatically.

For trivial changes such as typo fixes or minor content corrections, a pull request is not required unless I request one.

## Git Workflow

* Do not commit directly to `main`.
* Create a separate branch for each meaningful feature, fix, refactor, or design change.
* Use descriptive branch names such as:

  * `feature/project-section`
  * `feature/hero-section`
  * `fix/mobile-navigation`
  * `refactor/project-cards`
* Keep commits focused and related to a single logical change.
* Do not include unrelated changes in a commit or pull request.
