# useContext

`useContext` is a React Hook that lets you read and subscribe to "context" from your component.

## Remind me... what is context?

React context is a way to conveniently share data to descendents of a component without passing it through every intermediate component in your component tree.

## Getting Started

👉 Make yourself familiar with the files in the `hooks/use_context` folder.

In `parent.tsx` there is a component called `Parent`, that returns a button and two child components.

The parent component is rendered in `App.tsx`. You should be able to see all the components rendered on the screen (with a few others, but don't worry about those for now).

In `parent.tsx`, the button toggles a theme.

👉 Click the _Toggle Theme_ button and see the two child components (child 1 and child 2) change colour!

# The Mission

Your mission is to refactor the files in `useContext`, to use... you guessed it! useContext.

So, instead of passing `darkTheme={darkTheme}` down to each component, they should instead get their themes from calling `useContext` to grab the context.

Use the React documentation to help you: https://react.dev/reference/react/useContext

See `use_context/hints.md` if you need get stuck!

## Notes

💡 This isn't necessarily a great use of useContext! The power of `useContext` is sharing data through a large and complex component tree. (Imagine passing data down to a grand-grand-grand-grand-grand-grand-grand-grand-child component! That would take SO MUCH props.)

In this case, we're passing data to direct children, so using props is completely fine - arguably even simpler! So understand this challenge as a simple practice case for the `useContext` syntax rather than a demo of WHEN to use `useContext`.

## Have I solved this challenge correctly?

Your solution should...

1. Still make the two child components change colour when the button toggles the theme

2. Make use of React context

## Food For Thought

-   Why is `useContext` useful?

-   What might be some problems with overusing useContext?

-   Can you think of any other examples where useContext might be useful?
