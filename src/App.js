import './App.css';
import AvatarsContainer from './containers/AvatarsContainer'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AvatarDetailsContainer from './containers/AvatarDetailsContainer';
import { Header } from './components/Header';
import { ThemeContext } from './state/context';
import { useState } from 'react/cjs/react.development';



function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className="App" data-theme={theme}>
        <Router>
          <Header/>
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
    </ThemeContext.Provider>
  );
}

export default App;
