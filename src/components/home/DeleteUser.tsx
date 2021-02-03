import React from 'react';

import { Button, Dialog, DialogActions, DialogContent } from '@material-ui/core';

import CancelIcon from '@material-ui/icons/Cancel';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


type DeleteUserProps = {
    deleteUserOff: () => void
    sessionToken: string
    fetchUsers: () => void
    users: any
    userId: number
}

type DeleteUserStates = {
    open: boolean
}

class DeleteUser extends React.Component<DeleteUserProps, DeleteUserStates> {
    constructor(props: DeleteUserProps) {
        super(props);
        this.state = {
            open: true
        };
    }

    handleDelete = (e: any) => {
        fetch(`http://localhost:3500/user/${this.props.userId}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        })
            .then(response => response.json());
        console.log('User was deleted.');
        this.setState({ open: false })
        this.props.deleteUserOff()
        this.props.fetchUsers();
    }

    handleClose = () => {
        this.setState({ open: false })
        this.props.deleteUserOff()
    }


    render() {
        return (
            <>
                <Dialog open={this.state.open}>
                    <DialogContent>Delete this User?</DialogContent>
                    <DialogActions>
                        <Button
                            startIcon={<CancelIcon />}
                            onClick={this.handleClose}>Cancel</Button>
                        <Button
                            startIcon={<DeleteForeverIcon />}
                            onClick={this.handleDelete}>Delete</Button>
                    </DialogActions>
                </Dialog>
            </>
        );
    }
}

export default DeleteUser;