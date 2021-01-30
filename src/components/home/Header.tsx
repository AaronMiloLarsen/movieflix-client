import React from 'react'
import { Button, Menu, MenuItem } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

type HeaderProps = {
    
}
 
type HeaderStates = {
    open: boolean;
    setOpen: (e:any) => void;
}


class Header extends React.Component<HeaderProps, HeaderStates> {
    constructor(props: HeaderProps) {
        super(props);
        this.state = {
            open: false,
            setOpen: (e:any) => {
                this.setState({
                  open: e })
            },
        }

    }

    headerStyle = {
        root: {
            width: '100%',
            display: 'flex',
            height: '100px',
            backgroundColor: 'black',
            padding: '10px',
            color: 'white',
            alignItems: 'center'
        },
        icon : {
            color:'green',
            height: '100px',
            width: '100px'
        }
    }

    // openMenu = () => {
    //     this.setState({open : !open})
    // }

    // closeMenu = () => {
    //     this.setState({open : false})
    // }

    render() { 
        return (  
            <div style={this.headerStyle.root}>
                <h1> MovieFlix! </h1>
                <Button aria-controls="fade-menu" aria-haspopup="true" onClick={(e)=> this.state.setOpen(!this.state.open)}>
                <MenuIcon style={this.headerStyle.icon} />
                </Button>
                <Menu
                id="fade-menu"
                // anchorEl={anchorEl}
                keepMounted
                open={this.state.open}
                // onClose={this.closeMenu()}
                // TransitionComponent={Fade}
                >
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem >Logout</MenuItem>
                <MenuItem ><CloseIcon onClick={(e)=> this.state.setOpen(!this.state.open)}/></MenuItem>
                </Menu>
            </div>
        );
    }
}
 
export default Header;

// export interface Props {
    
// }
 
// export interface State {
    
// }
 
// class  extends React.Component<Props, State> {
//     constructor(props: Props) {
//         super(props);
//         this.state = { :  };
//     }
//     render() { 
//         return (  );
//     }
// }
 
// export default ;