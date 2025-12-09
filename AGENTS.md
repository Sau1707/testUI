# Instructions

## Core Design Philosophy

- Simple, predictable APIs with minimal learning curve.
- Composable architecture: small, reusable components.
- Balanced opinionated defaults + full customization.
- User-first: accessibility, performance, and intuitive UX prioritized.

## Accessibility

- Follow WAI-ARIA standards and ensure full keyboard navigation.
- Use semantic HTML; screen-reader support out-of-the-box.
- Enforce contrast compliance and respect user motion preferences.
- Include automated and manual accessibility testing.

## Theming & Styling

- Use design tokens and support dark/light modes.
- Allow easy overrides via theme or props (CSS-in-JS, Tailwind, etc.).
- Ship unstyled or minimally styled primitives where appropriate.
- Maintain visual cohesion across components by default.

## Customization

- Enable custom rendering and flexible props.
- Favor headless logic + pluggable UI (like Radix, React-Admin).
- Expose internal hooks and slots for advanced extension.
- No forking or hacks needed for deep customization.

## Composition

- Build focused atomic components (e.g., <Table>, not mega-<Table>).
- Leverage React composition (context, portals, children).
- Allow partial adoption and integration with other tools.

## Performance

- Minimize re-renders, support virtualization for heavy data.
- Structure for tree-shaking, avoid unneeded dependencies.
- Support code splitting and modular builds.
- Optimize styling performance (e.g., avoid runtime-heavy CSS-in-JS).

## Developer Experience

- Use intuitive, type-safe APIs.
- Provide great TypeScript support, autocomplete, and warnings.
- Include helpful error messages, minimal boilerplate.
- Design with consistency and predictability across the API.
- Use the `Example` component in `src/components/Example` as a blueprint for new building blocks in the library.

## Steps to add a component

1. Create a folder under `src/components/<ComponentName>` with four files:
   - `index.tsx`: export a named component; extend from a native element type (`ComponentPropsWithoutRef<'section'>` etc.), forward `className` and `...rest`, and keep the API small. Use `clsx` for conditional classes and place children in a dedicated slot when needed.
   - `styles.module.css`: scope styles per component. Prefer readable class names (e.g. `component`, `component--tone`, `header`, `body`).
   - `<ComponentName>.stories.tsx`: add a Storybook entry with a centered layout, a default story, and at least one variant showing key props. Keep `args` simple and copy the pattern from `Example.stories.tsx`.
   - `<ComponentName>.test.tsx`: write lightweight tests with `@testing-library/react` that assert rendered text, stateful behavior, and important class names (import the CSS module to read hashed class values if needed).
2. Export the component from `src/main.ts` so it is available to consumers.
3. Keep props typed and minimal; avoid optional booleans for styling when a small `variant` or `tone` union conveys intent.
4. Run `npm test` (or `npm run coverage` for full coverage) and `npm run lint` before publishing changes.

Refer to `Example` for practical defaults: type-safe props, slot for children, tone variants, CSS Modules for styling, Storybook stories, and focused tests.
