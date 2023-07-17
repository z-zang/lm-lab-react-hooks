import { useState, useEffect } from "react";
import { isError } from "../../../helpers/is_error";

interface TodoResponse {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export const useTodo = () => {
    const [todo, setTodo] = useState<TodoResponse>()
    const [isFetching, setIsFetching] = useState(true)

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/todos/1';
        const fetchData = async () => {
            try {

                const response = await fetch(url);
                if (response.status === 200) {
                    const json = await response.json();
                    setTodo(json)
                    setIsFetching(false)
                }
            } catch (e: unknown) {
                setIsFetching(false)
                console.log(isError(e) ? e.message : 'Unknown error!');
            }
        };
        fetchData()

    }, []);


    return [todo, isFetching]
}