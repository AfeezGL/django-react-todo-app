import React from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom'

const AddTask = ({csrftoken}) => {
    const [text, setText] = useState("")
    const [showAlert, setShowAlert] = useState(false)

    const updateText = (e) => {
        setText(e.target.value)
    }

    const submitForm = (e) => {
        e.preventDefault()
        let deviceId = window.localStorage.getItem("uuid")
        const formData = new FormData()
        formData.append("text", text)
        formData.append("uuid", deviceId)
        fetch("/api/todo/", {
            headers: {'X-CSRFToken': csrftoken},
            method: "POST",
            mode: "same-origin",
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            setText("")
            setShowAlert(!showAlert)
            setTimeout(() => {
                setShowAlert(false)
            }, 1000);
            console.log(data)
        })
    }

    return (
        <>
            <header>
                <Link to="/" ><i class="fas fa-arrow-left"></i></Link>
                <h2>Add New</h2>
            </header>
            <form onSubmit={submitForm}>
                <label htmlFor="text">Task</label>
                <input type="text" name="text" id="text" required value={text} onChange={updateText}/>
                <input type="submit" value="add" className="btn-submit"/>
                {showAlert && <p>Task Added</p>}
            </form>
        </>
    )
}

export default AddTask