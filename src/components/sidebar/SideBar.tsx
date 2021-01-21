import React from 'react'
import { makeStyles, MuiThemeProvider } from '@material-ui/core'
import { withStyles, createStyles} from '@material-ui/core/styles'
import { dark } from '@material-ui/core/styles/createPalette';
import Grid from '@material-ui/core/Grid';



// const styles = (theme: any) =>
//   createStyles({
//     root: {
//       display: 'flex'
//     },
//     content: {
//       width: '200px',
//       height: '100%',
//       backgroundColor: 'black',
//      }

//     })

interface Props {
  // styles: any
}
 
export interface State {
    
}
 
class SideBar extends React.Component<Props, {}> {

    constructor(props: Props) {
        super(props);
        this.state = {
           
        };
    }

    
    
    render() { 
      // const { styles } = this.props;
        return (  
            <div>
            
            Hello!
           
            </div>
            
        );
    }
}
 
// export default withStyles(styles, {withTheme: true }) (SideBar);

export default SideBar;