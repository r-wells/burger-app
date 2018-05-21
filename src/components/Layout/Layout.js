import React from 'react';

const layout = ( props ) => (
    <div>Toolbar, SiteDrawer, Backdrop</div>
    <main>
        {props.children}
    </main>
);