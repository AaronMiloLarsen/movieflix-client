import React from 'react';

import CopyrightIcon from '@material-ui/icons/Copyright';
import { Typography } from '@material-ui/core';


 
class Footer extends React.Component {
   

    footerStyle = {
        root: {
            width: '100%',
            height: '50px',
            
        }
    }
    render() { 
        return ( 
            <div style={this.footerStyle.root}>
                
                <Typography style={{float:"right"}}variant='body1'><CopyrightIcon/> Copyright 2021 Movieflix</Typography>
                
            </div>
         );
    }
}
 
export default Footer;