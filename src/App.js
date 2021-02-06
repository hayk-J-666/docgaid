import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import "./App.css"
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contacts from './components/Contacts';
import NoMatch from './pages/NoMatch';
import state from './redux/state';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='page' id='page'>
          <Navbar rerender={props.rerender} state={props.state} />
          <div  id='routerContent'>
              <ScrollToTop />
              <Switch>
                  <Route path='/contacts' render={() => <Contacts y={state.y} />}></Route>
                  <Route exact path='/' render={() => <Home y={state.y} />}></Route>
                  <Route component={NoMatch} y={state.y} />
              </Switch>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
