# Linting & Formatting

We use [Biome](https://biomejs.dev/) for both linting and formatting to ensure code consistency and speed.

- **Indentation**: Use **2 spaces** (spaces, not tabs).
- **Line Length**: Maximum of **80 characters** per line to ensure readability.
- **Import Sorting**: Imports must be sorted **alphabetically**. Biome's `organizeImports` must be enabled.
- **Semicolons**: Always use semicolons.
- **Quotes**: Use single quotes for strings (unless it's JSX, which uses double quotes).
- **Trailing Commas**: Use trailing commas wherever possible (multiline).

> **Note**: Run `biome check --apply .` before committing to automatically fix formatting and linting issues.