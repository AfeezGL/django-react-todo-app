import {BrowserRouter as Router, Route} from 'react-router-dom'
import Tasks from './Tasks'
import AddTask from './AddTask'

function App() {
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
