# Coding Conventions

## Naming

- **camelCase**: variables, functions, parameters, object properties
- **PascalCase**: classes, interfaces, type aliases, enums
- **UPPER_SNAKE_CASE**: constants and enum values
- **kebab-case**: file names, directory names and table names (e.g., `create-user.usecase.ts`, `typeorm-user.repository.ts`, `product-variants`)

## Files

- Suffix files by their role: `.usecase.ts`, `.repository.ts`, `.controller.ts`, `.entity.ts`

## TypeScript

- Always use explicit return types on exported functions
- Prefer `interface` over `type` for object shapes
- Prefer `unknown` over `any` — never use `any` unless absolutely necessary
- Use `readonly` for properties that should not be reassigned
- Use `interface` for object structures, prefixed with **I** (e.g., `IUserAccount`).
- Use `type` for attribute sets, unions, or aliases, prefixed with **T** (e.g., `TUserRole`).

## Syntax & Style Conventions

- **Paradigm:** Hybrid.
- **Functional:** Mandatory for React Components, Hooks, and Helpers.
- **OOP:** Mandatory for Core Business Objects, Services, and Domain Models.
- **ESLint:** Airbnb Base + React rules.
- **Formatting:** Alphabetical import sorting and Tailwind CSS class sorting (Prettier plugin).
