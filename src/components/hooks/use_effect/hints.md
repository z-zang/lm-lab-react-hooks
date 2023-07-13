## Hints if you get stuck

If you're struggling or don't know where to start, you can follow these steps:

1. Import the `useEffect` and `useState` hooks at the top of your file

2. Create some state using the `useState` hook. We will use this to store our todo once we've fetched it. What your initial state looks like is up to you, but it might look something like:

```TypeScript
// state starts off as null because we've not fetched data yet - we want our component to handle this situation, so we choose our state to be either `null` or a `Todo` item:
const [json, setJson] = useState<Todo | null>(null);

```

3. Open useEffect

```TypeScript

useEffect(() => {

    // Your API call/function will go here!

  }, []);

```

4. Write an async/await function called `fetchTodo`. This function should call "https://jsonplaceholder.typicode.com/todos/1" and set your state with the returned json. You can use this previous assignment to help you: https://github.com/techreturners/lm-lab-async-await-javascript/blob/main/docs/exercise001.md

5. Wrap your fetchTodo function in your useEffect hook. Make sure you call your function

6. In your useEffect components return statement (underneath `<h1>useEffect</h1>`), use dot notation and curly brackets {} to display your todo in the browser.

Remember your todo might be `null` so you will need to check your returned data exists. What would be good to show if the data is null? 🤔
