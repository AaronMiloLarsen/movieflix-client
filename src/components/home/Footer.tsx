import React from 'react';

import CopyrightIcon from '@material-ui/icons/Copyright';


 
class Footer extends React.Component {
   

    footerStyle = {
        root: {
            display: 'fixed',
            justifyContent: 'right',
            bottom: '0',
            width: '100%',
            height: '50px',
            backgroundColor: 'black',
            color: 'white',
        }
    }
    render() { 
        return ( 
            <div style = {this.footerStyle.root}>
                <div>
                <p><CopyrightIcon/> Copywright 2021 Movieflix</p>
                </div>
            </div>
         );
    }
}
 
export default Footer;