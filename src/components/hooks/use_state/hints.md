## Hints for if you get stuck

1) Have you imported `useState`?

2) Have a look at React docs and their examples around `useState`: https://react.dev/reference/react/useState

### Things to check for:

- Instead of `countCats` being a variable, you will need to turn this into some state:

`const [state, setState] = useState(initialState);`

The initial state will be how many cats you want to start off with. Make sure to follow the naming convention of state, setState. Something like countCats, setCountCats would be fine!

- You will need a `handleClick` function that calls `setCountCats` with the initial state plus one: `countCats + 1`. Alternatively, you can call `setCountCats` in the onClick directly.

- If you're still stuck, reach out to a Tech Coach. We're here to help! 😸

*Add solution repo here?*