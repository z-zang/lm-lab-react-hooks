## Hints for if you get stuck

1) Have you imported `useMemo`?

2) Inspect the line: 

`const doubleNumber = slowFunction(number)` (line 8)

Like other hooks, `useMemo` takes an anonymous function:

`useMemo(() => {})`

This anonymous function should contain the slow thing you want to calculate:

`useMemo(()=> { return slowFunction(number) })`

Like other hooks, it also takes a dependency array, of the things our function depends on. 
Whenever the dependencies in our dependency array change, our code block runs again:

`const doubleNumber = useMemo(() => { return slowFunction(number) }[number])`


3) Check your code looks like the code above. Refresh your browser and check the browser console output against ## Have I solved this challenge correctly? in `useMemo/README.md` 