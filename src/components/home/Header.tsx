import React from 'react'
import { Button, Menu, MenuItem } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Redirect } from 'react-router-dom';

type HeaderProps = {
    clearToken: () => void;
    sessionToken: string;
    redirectValue: string;
    // redirectHome: (value:any) => void
    // adminChecker: () => void
}
 
type HeaderStates = {
    open: boolean;
    setOpen: (e:any) => void;
    redirectValue: string
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
            redirectValue: '',
        }

    }

    handleLogout = () => {
        this.props.clearToken()
     
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
            height: '50px',
            width: '50px'
        }
    }

    
    render() { 
        return (  
            <div style={this.headerStyle.root}>
                <h1> MovieFlix! </h1>
                <Button aria-controls="fade-menu" aria-haspopup="true" onClick={(e)=> this.state.setOpen(!this.state.open)}>
                <MenuIcon style={this.headerStyle.icon} />
                </Button>
                {this.props.sessionToken ? 
                <Menu
                id="fade-menu"
                keepMounted
                open={this.state.open}
                
                >
                <MenuItem ><Button href="/userhome">Home</Button></MenuItem>
                <MenuItem ><Button href="/profile">My Profile</Button></MenuItem>
                <MenuItem> <Button href="/admin"> Admin </Button>  </MenuItem>
                <MenuItem> <Button href="/about"> About </Button>  </MenuItem>
                <MenuItem ><Button  onClick={this.props.clearToken} href="/">Logout</Button></MenuItem>
                <MenuItem ><Button><CloseIcon  onClick={(e)=> this.setState({open:false})}/></Button></MenuItem>
                </Menu>
                :<></>}

                {!this.props.sessionToken ? 
                <Menu
                id="fade-menu"
                keepMounted
                open={this.state.open}>
                    <MenuItem><Button href="/about"> About </Button></MenuItem>
                    <MenuItem ><Button><CloseIcon  onClick={(e)=> this.setState({open:false})}/></Button></MenuItem>
                    </Menu> : <></>}
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