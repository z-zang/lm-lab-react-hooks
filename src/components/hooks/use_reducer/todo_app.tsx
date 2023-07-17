import { useReducer } from 'react';
import { AddTask } from './add_task.js';
import { TaskList } from './task_list.js';

export interface Task {
    id: number;
    text: string;
    done: boolean;
}
export interface ActionType {
    type: string
}

const initialTasks: Task[] = [
    { id: 0, text: 'Visit Kafka Museum', done: true },
    { id: 1, text: 'Watch a puppet show', done: false },
    { id: 2, text: 'Lennon Wall pic', done: false },
];

const reducer = (tasks: Task[], action: ActionType & any) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [
                ...tasks,
                {
                    id: tasks.length,
                    text: action.text,
                    done: false,
                },
            ];
        case 'CHANGE_TASK':
            return tasks.map((t) => {
                if (t.id === action.task.id) {
                    return action.task;
                } else {
                    return t;
                }
            });
        case 'DELETE_TASK':
            return tasks.filter((t) => t.id !== action.id)
        default:
            return tasks;
    }
};

export function TaskApp() {
    const [tasks, dispatch] = useReducer(reducer, initialTasks);

    function handleAddTask(text: string) {
        dispatch({
            type: 'ADD_TASK',
            id: tasks.length,
            text: text,
            done: false,
        });
    }

    function handleChangeTask(updatedTask: Task) {
        dispatch({
            type: 'CHANGE_TASK',
            task: updatedTask
        });
    }

    function handleDeleteTask(taskId: number) {
        dispatch({
            type: 'DELETE_TASK',
            id: taskId
        });
    }

    return (
        <>
            <h2>useReducer</h2>

            <h3>Prague Itinerary</h3>
            <AddTask onAddTask={handleAddTask} />
            <TaskList tasks={tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask} />
        </>
    );
}
