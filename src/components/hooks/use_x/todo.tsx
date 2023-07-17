
import { useTodo } from './useTodo';
/** This is the response that TypiCode gives for the /todos/ endpoint */

// don't know how to get rid of error on line 13 re. type of todo 
export const Todo = () => {
    const [todo, isFetching] = useTodo();

    return (
        <>
            <h2>Custom Hook</h2>
            {isFetching && <p>Fetching...</p>}
            {todo && !isFetching && <p>{todo.title}</p>}
        </>
    );
};
