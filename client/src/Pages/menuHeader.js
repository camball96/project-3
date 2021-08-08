import React, { useContext, useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import logo from '../Assets/olmate.png'


//Sourced Menu from semantic ui
function MenuHeader() {
    
    const pathname = window.location.pathname;
    const path = pathname === '/' ? 'home' : pathname.substr(1);
    const [activeItem, setActiveItem] = useState(path);
    const handleItemClick = (e, { name }) => setActiveItem(name);

    
    return (

        <Menu pointing secondary size='huge' color='blue'>
            <img src={logo} style={{width:200, marginBottom:-40}}/>
            <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={handleItemClick}
            as={Link}
            to="/home"
            />

            <Menu.Item
            name='test page'
            active={activeItem === 'test page'}
            onClick={handleItemClick}
            />
            <Menu.Menu position='right'> 
            
            <Menu.Item
            name='logout'
            active={activeItem === 'login'}
            onClick={handleItemClick}
            as={Link}
            to="/login"
            />
            <Menu.Item
            name='My Profile'
            active={activeItem === 'myProfile'}
            onClick={handleItemClick}
            as={Link}
            to="/myprofile"
            />
            
            </Menu.Menu>
        </Menu>
    )
    }
    
    //logout item for menu might use later
    /*<Menu.Item
        name='logout'
        active={activeItem === 'logout'}
        onClick={handleItemClick}
        />*/

    export default MenuHeader;