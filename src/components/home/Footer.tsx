import React from 'react';

import CopyrightIcon from '@material-ui/icons/Copyright';


 
class Footer extends React.Component {
   

    footerStyle = {
        root: {
            display: 'flex',
            justifyContent: 'right',
            width: '100vw',
            height: '50px',
            backgroundColor: 'black',
            color: 'white',
        }
    }
    render() { 
        return ( 
            <div style = {this.footerStyle.root}>
                <div>
                <p><CopyrightIcon/> Copyright 2021 Movieflix</p>
                </div>
            </div>
         );
    }
}
 
export default Footer;