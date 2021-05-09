import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'
import Tasks from './Tasks'
import AddTask from './AddTask'

function App() {
  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
  }
  const csrftoken = getCookie('csrftoken');

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
      <Switch>
        <Route path="/" exact>
          <Tasks csrftoken={csrftoken} />
        </Route>
        <Route path="/add">
          <AddTask csrftoken={csrftoken} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
