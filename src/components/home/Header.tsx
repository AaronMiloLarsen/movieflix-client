import React from 'react'
import { Button, Grid, Menu, MenuItem } from '@material-ui/core'
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import CloseIcon from '@material-ui/icons/Close';
import Logo from '../../assets/MFlogo3.png'

type HeaderProps = {
    clearToken: () => void;
    sessionToken: string;
    redirectValue: string;
}

type HeaderStates = {
    open: boolean;
    setOpen: (e: any) => void;
    redirectValue: string
    anchor: null | HTMLElement
}


class Header extends React.Component<HeaderProps, HeaderStates> {
    constructor(props: HeaderProps) {
        super(props);
        this.state = {
            open: false,
            setOpen: (e: any) => {
                this.setState({
                    open: e
                })
            },
            redirectValue: '',
            anchor: null
        }

    }

    handleClose = () => {
        this.setState({ anchor: null })
    }

    handleLogout = () => {
        this.props.clearToken()

    }

    handleAnchor = (event: React.MouseEvent<HTMLButtonElement>) => {
        this.setState({ anchor: event.currentTarget });

    };


    headerStyle = {
        icon: {
            color: 'fe6a3e',
            height: '50px',
            width: '50px',
            border: '5px'
        }
    }


    render() {
        return (
            <Grid container justify="space-between" alignItems="center" style={{ backgroundColor: "darkgray" }}>
                <Grid item xs={4}>
                    <img src={Logo} alt="Man holding phone" width='auto' height='100' />
                </Grid>
                <Grid item xs={4}>

                </Grid>
                <Grid item xs={4}>
                    <Button
                        style={{ float: "right", marginRight: 20, }}
                        aria-controls="fade-menu"
                        aria-haspopup="true"
                        onClick={this.handleAnchor}>
                        <MenuOutlinedIcon style={this.headerStyle.icon} />
                    </Button>
                    {this.props.sessionToken ?
                        <Menu
                            id="fade-menu"
                            keepMounted
                            anchorEl={this.state.anchor}
                            open={Boolean(this.state.anchor)}
                            onClose={this.handleClose}

                        >
                            <MenuItem ><Button href="/userhome">Home</Button></MenuItem>
                            <MenuItem ><Button href="/profile">My Profile</Button></MenuItem>
                            <MenuItem> <Button href="/admin"> Admin </Button>  </MenuItem>
                            <MenuItem> <Button href="/about"> About </Button>  </MenuItem>
                            <MenuItem ><Button onClick={this.props.clearToken} href="/">Logout</Button></MenuItem>
                            <MenuItem ><Button><CloseIcon onClick={(e) => this.setState({ anchor: null })} /></Button></MenuItem>
                        </Menu>
                        : <></>}

                    {!this.props.sessionToken ?
                        <Menu
                            id="fade-menu"
                            keepMounted
                            anchorEl={this.state.anchor}
                            open={Boolean(this.state.anchor)}
                            onClose={this.handleClose}
                        >
                            <MenuItem><Button href="/"> Home </Button></MenuItem>
                            <MenuItem><Button href="/user/login"> Login </Button></MenuItem>
                            <MenuItem><Button href="/user/signup"> Signup </Button></MenuItem>
                            <MenuItem><Button href="/about"> About </Button></MenuItem>
                            <MenuItem ><Button><CloseIcon onClick={(e) => this.setState({ anchor: null })} /></Button></MenuItem>
                        </Menu> : <></>}
                </Grid>

            </Grid>
        );
    }
}

export default Header;