// make an api call using useEffect

import { useEffect, useState } from "react"

interface TTodo {
    completed: boolean,
    title: string,
    id: number,
    userId: number
}

export const APICall = () => {
    const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/todos/1')
    const [todo, setTodo] = useState<TTodo | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url)
                const data = await res.json()
                setTodo(data)
            } catch (err) {
                console.log(err)
            }
        };

        fetchData();
        return () => {
            // cleanup
        }
    }, [url]);

    return (
        <>
            <h2>useEffect</h2>
            {todo && (
                <div>
                    <h2>{todo.title}</h2>
                    <p>Completed: {todo.completed.toString()}</p>
                </div>
            )}
        </>
    )
}