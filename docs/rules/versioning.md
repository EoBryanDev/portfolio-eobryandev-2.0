# Versioning & Git Flow

## Branching Strategy (Trunk-Based Development)

Adopt **Trunk-Based Development** to maintain a fast pace of delivery and avoid complex merge conflicts.

- **Main Branch**: The `main` branch is the production-ready source of truth. It must always be stable.
- **Short-lived Branches**: Create a new branch for every feature or fix. 
    - **Naming Pattern**: `type/short-description` (e.g., `feat/login-validation`, `fix/header-z-index`).
    - **Naming Convention**: Use **kebab-case** for branch names.
- **Merge Fast**: Features should be integrated into `main` as soon as they are completed and tested. Avoid branches that live for more than 2 days.

## Commit Messages

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification. 

### Rules:
- **Language**: All commit messages **must be in English**.
- **Casing**: Use lowercase for the description.
- **Mood**: Use the imperative mood (e.g., "add feature" instead of "added feature" or "adds feature").

### Format:
`<type>(scope): description`

- **feat**: A new feature for the user.
- **fix**: A bug fix for the user.
- **docs**: Changes to the documentation.
- **style**: Formatting, missing semi colons, etc; no production code change.
- **refactor**: Refactoring production code, eg. renaming a variable.
- **test**: Adding missing tests, refactoring tests; no production code change.
- **chore**: Updating grunt tasks etc; no production code change.

*Example: `feat(api): add jwt authentication middleware`*

## Atomic Commits

Commits must be **atomic**. An atomic commit is a single unit of work that cannot be broken down further into smaller meaningful parts.

- **Focus**: One commit should do one thing. Do not mix a feature implementation with a refactor or a CSS fix in the same commit.
- **Integrity**: The project must remain buildable and tests must pass after every commit.
- **Reversibility**: It should be easy to revert a specific commit without affecting unrelated logic.

## Pull Requests (PRs)

- **Review**: Every PR requires at least one approval before merging into `main`.
- **Small PRs**: If a feature is too large, break it down into smaller, incremental PRs using Feature Flags if necessary.
- **CI/CD**: Merging is only allowed if the CI pipeline (lint, tests, build) passes successfully.
- **Cleanup**: Delete the feature branch immediately after the merge is completed.

## Workflow Summary

1.  Sync your local `main` branch: `git pull origin main`.
2.  Create a new branch: `git checkout -b feat/my-new-feature`.
3.  Develop and make **Atomic Commits** using **Conventional Commits** in **English**.
4.  Push your branch: `git push origin feat/my-new-feature`.
5.  Open a Pull Request to `main`.
6.  Once approved and merged, delete your local and remote feature branch.