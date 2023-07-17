import { createContext, useState } from 'react';
import { Child1 } from './child_1';
import { Child2 } from './child_2';

export const ThemeContext = createContext<boolean>(true)

export const Parent = () => {
    const [darkTheme, setDarkTheme] = useState(true)

    const toggleTheme = () => {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }

    return (
        <div className='section'>
            <ThemeContext.Provider value={darkTheme}>
                <h2>useContext</h2>
                <button onClick={toggleTheme}>Toggle Theme</button>
                <Child1 />
                <Child2 />
            </ThemeContext.Provider>
        </div>

    )
}