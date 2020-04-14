import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
const layout = (props) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>

        {/* We can add a footer right here */}
        {/* <footer >
            <div >© 2020 Copyright:
                <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
            </div>
        </footer> */}

    </Aux>
);

export default layout;