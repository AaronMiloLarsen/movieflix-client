import React from 'react'
import { Button, Menu, MenuItem } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Redirect } from 'react-router-dom';

type HeaderProps = {
    clearToken: () => void;
    sessionToken: string
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

    handleLogout = () => {
        this.props.clearToken()
        this.state.setOpen(false)
        if (this.props.sessionToken === '') {
            return <Redirect to="" />
        }
    }

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
                <MenuItem ><Button href="/userhome">Home</Button></MenuItem>
                <MenuItem ><Button href="/profile">My Profile</Button></MenuItem>
                <MenuItem ><Button onClick={this.props.clearToken}>Logout</Button></MenuItem>
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