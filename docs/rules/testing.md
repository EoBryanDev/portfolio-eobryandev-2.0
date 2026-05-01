# Testing Conventions

## Framework & Tools
- **Runner**: [Vitest](https://vitest.dev/)
- **Library**: React Testing Library for UI components.
- **Mocks**: Use `vi.mock` or MSW (Mock Service Worker) for API calls.

## The 3A Pattern
Tests must be structured using the **Arrange, Act, Assert** pattern:
1. **Arrange**: Set up the test data and environment.
2. **Act**: Execute the action to be tested.
3. **Assert**: Verify the result.

## Best Practices
- **Behavior Testing**: Test what the code does, not how it does it (avoid testing implementation details).
- **Isolation**: Each test must be independent. Reset mocks/state in `afterEach`.
- **File Naming**: `[file-name].spec.ts` or `[file-name].spec.tsx`.

## Coverage Guidelines
- **Priority**: Focus on functional correctness and edge cases over raw metrics.
- **Minimum Target**: **70-80%** global coverage.
- **Critical Code**: Business logic (Use Cases/Domain Models) should aim for **100% coverage**.