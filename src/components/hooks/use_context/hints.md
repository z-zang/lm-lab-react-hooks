## Hints if you get stuck

1. In `Parent.tsx`, create a `ThemeContext`. Something like below will do:

```TypeScript
export const ThemeContext = createContext<Theme>({
    backgroundColor: "",
    color: "",
    padding: "",
    margin: ""
})
```

2. Currently, both children have a theme object inside of them. Move this theme object to your parent component.

3. In `parent.tsx`, wrap the child components in a ThemeContext Provider:

```TypeScript
<ThemeContext.Provider>

// All the components you want to have access your Provider

</ThemeContext.Provider>

```

4. All `Providers` must have a value attribute. This is what gets passed down to the child components.

`<ThemeContext.Provider value={ }>`

Can you guess what value you should pass it?

5. Your child components will need to make use of `useContext` hook to read the data that is currently stored in a context. The `useContext` hook needs to know which context you want your child component to be using:

```JSX
// in child.tsx:
// there may be multiple contexts in an app, so we say which one we want to read here:
const theme = useContext(ThemeContext)
```

Your Child component can now get its theme data from here!

👉 Note: Don't forget to delete the props and type your child component is no longer using.

If you get really stuck you can see a solution here:

_add solution repo here_
