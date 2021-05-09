import React from 'react'
import Task from './Task'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const Tasks = () => {
    const [allTasks, setAllTasks] = useState([])

    const apiCall = async (e) => {
        const res = await fetch(e)
        const response = await res.json()
        return response
    }

    const completeTask = (e) => {
        fetch(`/api/todo/${e.id}/`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "PATCH",
            body: JSON.stringify({
                "completed": true
            })
        })
        .then(res => res.json())
        .then((data) => {
            let x = [...allTasks]
            let y = x.filter(task => task.id !== e.id)
            setAllTasks([data, ...y])
        })
        .catch(error => alert(error.message))
    }


    useEffect(() => {
        const getTasks = async () => {
            let deviceId = window.localStorage.getItem("uuid")
            const tasksFromApi = await apiCall(`/api/usertodos/${deviceId}`)
            setAllTasks(tasksFromApi)
            console.log(allTasks)
        }
        getTasks()
    }, [])
    return (
        <>
            <header>
                <h2>Targets</h2>
            </header>
            <main>
                <section className="tasks">
                    {allTasks.map(task => !task.completed && <Task task = {task} key = {task.id} clickFunction={completeTask} />)}
                </section>
                <section className="completed">
                    {allTasks.map(task => task.completed && <p key={task.id}>{task.text}</p>)}
                </section>
            </main>
            <footer>
                <Link to="/add" >+ add new</Link>
            </footer>
        </>
    )
}

export default Tasks
