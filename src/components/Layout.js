import React from 'react';


import { Container } from 'react-bootstrap';

const Layout = ({title, description, children}) => {
    return ( 
        <>
        <title>{ title ? title + " - React Boilerplate" : "React.js Boilerplate" }</title>
        <meta name = "description" content={ description || "React.js Boilerplate" } />
        <Container className="product">
            {children}
        </Container>
        </>
     );
}
 
export default Layout;