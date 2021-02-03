import { Button, Dialog, DialogActions, DialogContent } from '@material-ui/core';
import React from 'react'
import IndividualUser from './IndividualUser';

import APIURL from '../../helpers/environment';

type AdminProps = {
    sessionToken: string

}

type AdminStates = {
    adminCheck: boolean;
    open: boolean;
    users: any
}

class Admin extends React.Component<AdminProps, AdminStates> {
    constructor(props: AdminProps) {
        super(props);
        this.state = {
            adminCheck: false,
            open: false,
            users: []
        };
    }

    componentDidMount() {
        this.adminChecker()
    }

    adminChecker = () => {
        if (localStorage.getItem('admin')) {
            this.fetchUsers()
            this.setState({ adminCheck: true })
        }
    }

    fetchUsers = () => {
        fetch(`${APIURL}/user/all`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token') || ''
            })
        }).then((users) => users.json())
            .then((userData) => {
                this.allUsersResults(userData)
                console.log(userData)
            }).catch(
                (err) => console.log(err)
            )
    }

    allUsersResults = (allUsers: []) => {
        console.log("All Users: ", allUsers)
        this.setState({ users: allUsers })

    }

    userMapper = () => {

        return this.state.users?.map((users: any, index: number) => {
            return (
                <>
                    <IndividualUser
                        users={users}
                        key={users.id}
                        fetchUsers={this.fetchUsers}
                        sessionToken={this.props.sessionToken} />
                </>

            )
        })
    }

    render() {
        return (
            <>
                {this.state.adminCheck ?

                    <div>
                        <h3>All Users</h3>

                        {this.userMapper()}
                    </div>
                    :
                    <>
                        <Dialog open={true}>
                            <DialogContent>Silly User! You aren't an Admin!</DialogContent>
                            <DialogActions><Button href="/userhome">Go Home!</Button></DialogActions>
                        </Dialog>
                    </>}

            </>
        );
    }
}

export default Admin;