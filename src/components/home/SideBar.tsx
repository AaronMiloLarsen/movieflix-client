import React from 'react'
import { Button } from '@material-ui/core'
import { } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';


interface Props {
  // clearToken = (e:EventListener) => void,
}
 
export interface State {
    
}
 
class SideBar extends React.Component<Props, {}> {

    constructor(props: Props) {
        super(props);
        this.state = {
           
        };
    }

  sidebarStyle = {
    root: {
      positon: 'flex',
      left: '0px',
      width: '200px',
      height: '100%',
      backgroundColor: 'green'
    }
  }
    
    
    render() { 
     
        return (  
            <div style = {this.sidebarStyle.root}>
              <div>
            <ul>
              <Button>Home</Button>
              <Button>Reviews</Button>
              <Button>Comments</Button>
              <Button>Logout</Button>
            </ul>
            </div>
            
            </div>
            
        );
    }
}
 
// export default withStyles(styles, {withTheme: true }) (SideBar);

export default SideBar;