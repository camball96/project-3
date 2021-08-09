import { BrowserRouter as Router, Route } from 'react-router-dom';

import MenuHeader from './Pages/menuHeader';
import Login from './Pages/Login';
import Home from './Pages/home';
import Register from './Pages/register';
import LandingPage from './Pages/LandingPage';
import SideBar from './Pages/sideMenu'
import MyProfile from './Pages/myProfile';

import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { AuthProvider } from './module/AuthFile';
import { Container } from 'semantic-ui-react';
import { ApolloProvider } from '@apollo/client';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Route exact path='/' component={Login}/>
        <Route exact path='/landingpage' component={LandingPage}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/register' component={Register}/>
        <Route exact path='/myprofile' component={MyProfile}/>
        <Route exact path='/home' component={Home}/>
    </Router>
    </AuthProvider>
    
  );
}

export default App;
