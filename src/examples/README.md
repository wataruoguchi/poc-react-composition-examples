# React Composition Patterns

This repository demonstrates different ways to compose React components, from simplest to most complex. The goal is to help developers choose the most appropriate pattern for their use case.

## 1. Prop Drilling (Anti-pattern)

```tsx
// Simple and straightforward
<Parent>
  <Child color={color} />
</Parent>
```

**When to use:**

- When you have a shallow component tree
- When the data flow is simple and predictable
- When you want to make the data flow explicit

**Pros:**

- Simple to understand
- Explicit data flow
- Easy to test
- No additional abstractions

**Cons:**

- Can become verbose with deep component trees
- Requires passing props through intermediate components

## 2. Component Composition

```tsx
// More flexible, components are passed as props
<Frame boxComponent={<Box color={color} />} />
```

**When to use:**

- When you want to make components more reusable
- When you need to customize child components
- When you want to invert control of component rendering

**Pros:**

- More flexible than prop drilling
- Components are more reusable
- Easier to test (can pass mock components)
- Clear component boundaries

**Cons:**

- Slightly more complex than prop drilling
- Need to manage component props carefully

## 3. Context API

```tsx
// Most complex, uses React's Context
<ColorContext.Provider value={color}>
  <Frame />
</ColorContext.Provider>
```

**When to use:**

- When you have truly global state (theme, auth, etc.)
- When the same data is needed by many components at different levels
- When prop drilling becomes unmanageable

**Pros:**

- Avoids prop drilling
- Good for truly global state
- Can update many components at once

**Cons:**

- More complex to set up and maintain
- Can make components harder to test
- Can lead to unnecessary re-renders
- Makes data flow less explicit
- Can be overused when simpler solutions exist

## Recommendation

**Start with the simplest pattern that works:**

1. Try prop drilling first - it's explicit and easy to understand
2. If you need more flexibility, try component composition
3. Only use Context when you have a clear need for it

**Ask yourself:**

- Do I really need Context, or can I solve this with better composition?
- Is this state truly global, or can it be managed locally?
- Will using Context make my components harder to test or understand?

Remember: Just because you can use Context doesn't mean you should. Often, a well-thought-out component composition can solve the same problem more elegantly.
