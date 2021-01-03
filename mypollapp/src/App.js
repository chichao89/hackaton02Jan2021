import Home from './Home/Home.js'
import './App.css'
import { 
  Route,
  Switch,
  HashRouter } from 'react-router-dom'
import Poll from './Poll.js'
import Posts from './Posts.js'

function App() {
  return (
  <HashRouter>
    <div class="App">
    <Home/>
    <Switch>
      {/* <Route exact path="/" component={Home} />   */}
      <Route exact path="/Poll" component={Poll} />
      <Route exact path="/Posts" component={Posts}/>
    </Switch> 
  </div>
  </HashRouter>
  )
}

export default App;
