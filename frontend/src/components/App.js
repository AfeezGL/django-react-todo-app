import {BrowserRouter as Router, Route} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'
import Tasks from './Tasks'
import AddTask from './AddTask'

function App() {

  useEffect(() => {
    const handleUuid = () => {
      const onDeviceUuid = window.localStorage.getItem("uuid")
      console.log("on device ", onDeviceUuid)
      if (onDeviceUuid === null || onDeviceUuid === undefined ) {
        const presaveUuid = uuidv4()
        console.log("pre save ", presaveUuid)
        window.localStorage.setItem("uuid", presaveUuid)
      }
    }
    handleUuid()    
  }, [])
  
  return (
    <Router>
      <>
        <Route path="/" exact component={Tasks} />
        <Route path="/add" component={AddTask} />
      </>
    </Router>
  );
}

export default App;
