import { BrowserRouter as Router, Route } from 'react-router-dom';

import MenuHeader from './Pages/menuHeader';
import Login from './Pages/login';
import Home from './Pages/home';
import Register from './Pages/register';
import LandingPage from './Pages/LandingPage';

import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { Container } from 'semantic-ui-react';
import { ApolloProvider } from '@apollo/client';

function App() {
  return (
    <Router>
      <MenuHeader/>
      <Container>
      <Route exact path='/' component={LandingPage}/>
      <Route exact path='/landingpage' component={LandingPage}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/register' component={Register}/>
      <Route exact path='/home' component={Home}/>
    </Container>
    </Router>
    
  );
}

export default App;
