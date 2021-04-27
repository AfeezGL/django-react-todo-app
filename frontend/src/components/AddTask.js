import React from 'react'
import {useState} from 'react'

const AddTask = () => {
    const [text, setText] = useState("")

    const updateText = (e) => {
        setText(e.target.value)
    }

    const submitForm = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("text", text)
        fetch("/api/todo/", {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return (
        <>
            <header>
                <h2>Add New</h2>
            </header>
            <form onSubmit={submitForm}>
                <label htmlFor="text">Task</label>
                <input type="text" name="text" id="text" required value={text} onChange={updateText}/>
                <input type="submit" value="add" className="btn-submit"/>
            </form>
        </>
    )
}

export default AddTask