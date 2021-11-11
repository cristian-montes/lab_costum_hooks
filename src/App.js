// import logo from './logo.svg';
import './App.css';
import AvatarsContainer from './containers/AvatarsContainer'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AvatarDetailsContainer from './containers/AvatarDetailsContainer';

function App() {
  return (

    <div className="App">
      <Router>
       <Switch>

       <Route
            path="/"
            exact
            render ={(routerProps) => <AvatarsContainer {...routerProps}/>}
         />

         <Route
            path="/details/:id"
            exact
            render ={(routerProps) => <AvatarDetailsContainer {...routerProps}/>}
         />

       </Switch>
     </Router>
    </div>
  );
}

export default App;
