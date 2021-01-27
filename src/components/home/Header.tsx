import React from 'react'
import {} from '@material-ui/core'


 
class Header extends React.Component<{}, {}> {
   

    headerStyle = {
        root: {
            width: '100%',
            height: '100px',
            backgroundColor: 'black',
            padding: '10px',
            color: 'white',
            alignItems: 'center'
        }
    }

    render() { 
        return (  
            <div style={this.headerStyle.root}>
                <h1> MovieFlix! </h1>
            </div>
        );
    }
}
 
export default Header;