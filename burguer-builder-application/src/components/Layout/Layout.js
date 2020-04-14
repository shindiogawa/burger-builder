import React from 'react';
import Aux from '../../hoc/Aux';
const layout = (props) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main>
            {props.children}
        </main>
        <footer >
            <div >© 2020 Copyright:
                <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
            </div>
        </footer>

    </Aux>
);

export default layout;