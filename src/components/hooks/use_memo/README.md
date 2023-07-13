# useMemo

`useMemo` is a React Hook that lets you cache the result of a calculation between re-renders. It is helpful in performance optimization.

👉 Make yourself familiar with the files in the `hooks/use_memo` folder.

## The Mission

In the `useMemo.tsx` file there is a button called 'Double 3'. When you click this button, a slowFunction is called which doubles the number.

Open your browser console, refresh the page, and click the button to see whats happening. You will see:

When the page first page loads:
Rendering component...
calling slow function... 🐌
0

On first button click:
Rendering component...
calling slow function... 🐌
result: 6

On second button click:
Rendering component...
calling slow function... 🐌
result: 6

On third button click:
Rendering component...
calling slow function... 🐌
result: 6

And so on! If you imagine this was ACTUALLY a complex calculation, it's pretty wasteful to keep recalculating it every time, when we know it should always be the same result for the same button click.

Instead of calling a slowFunction every time we want to calculate THE SAME value, we can instead `useMemo` to cache the result and return this cached (memoized) value instead.

Your mission is to add `useMemo` to cache the result from the slowFunction.

Use the React documentation to help you: https://react.dev/reference/react/useMemo

## Have I solved this challenge correctly?

If you have implemented useMemo correctly, in your console you should now see `Rendering component... Calling slow function` only the FIRST time you click the button. Repeated clicks after that will show nothing, because React is avoiding calling that function again, and just re-using the memoized value.

👉 Challenge: Can you add some UI to switch between different input numbers, and see that the slow function is called _only the first time_ for each input number?

## Food For Thought

-   What is useMemo used for?

-   Why not just memoize _everything_?

-   What other examples could you use useMemo for?

Use the React documentation to help you: https://react.dev/reference/react/useMemo
