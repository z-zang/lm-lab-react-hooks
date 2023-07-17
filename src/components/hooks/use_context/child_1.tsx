import { useContext } from "react";
import { ThemeContext } from "./parent";

export const Child1: React.FC = () => {
    const dark = useContext(ThemeContext)
    const theme = {
        backgroundColor: dark ? '#333' : '#CCC',
        color: dark ? 'white' : '#333',
        padding: '2rem',
        margin: '2rem',
    };

    return <div style={theme}>Child 1</div>;
};
