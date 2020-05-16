import { useState, useEffect } from "react";

const BASE_URL = "https://info30005travelplus.herokuapp.com";

function getTasks() {
    const endpoint = BASE_URL + `/tasks`;

    // return fetch call that gets task list
    return fetch(endpoint).then(res => {
        return res.json();
    });
}

export function useTasks() {
    const [loading, setLoading] = useState(true);
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        getTasks()
            .then(tasks => {
                setTasks(tasks);
                setLoading(false);
            })
            .catch(e => {
                console.log(e);
                setError(e);
                setLoading(false);
            });
        }, []);
    return { loading, tasks, error };
}

{/* export function addTask() {
    const endpoint = BASE_URL + `/tasks/:id`;
    return fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(
            taskName,
            taskDate,
            taskDescription,
            isDone
        );
    };
} */}

{/* export function updateTask() {
    const endpoint = BASE_URL + `/tasks/:id`;
    return fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(
            taskName,
            taskDate,
            taskDescription,
            isDone
        );
    };
} */}

{/* export function deleteTask() {
    const endpoint = BASE_URL + `/tasks/:id`;
    return fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(
            taskName,
            taskDate,
            taskDescription,
            isDone
        );
    };
} */}
