import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItens from '../NavitagionItems/NavigationItems'
const toolbar = (props) => (
    <header className={classes.Toolbar}> 
        <div>MENU</div>
        <Logo/>
        <nav>
            <NavigationItens/>
        </nav>
    </header>
);

export default toolbar;