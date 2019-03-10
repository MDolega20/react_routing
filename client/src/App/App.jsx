import React, { Component } from 'react';
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';

import Page1 from './pages/Page_1';

class Home extends Component{
  render(){
    return <h1>Home page</h1>;
  }
}

class Page2 extends Component{
  render(){
    return <h1>It's working page 2</h1>;
  }
}
class Page3 extends Component{
  render(){
    return <h1>It's working page 3</h1>;
  }
}

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          {/* <Redirect to='page1' /> */}
          <Route path='/page1' component={ () => <Page1 />}/>
          <Route path='/page2' component={ () => <Page2 />}/>
          <Route path='/page3' component={ () => <Page3 />}/>
        </Switch>
      </div>
    )
    return (
      <>
      <div>
        <NavLink to='/page1'>Podstrona 1</NavLink>
        <NavLink to='/page2'>Podstrona 2</NavLink>
        <NavLink to='/page3'>Podstrona 3</NavLink>
      </div>
        <App/>
      </>
    );
  }
}

export default App;