import { Button, Dialog, DialogActions, DialogContent, Modal } from '@material-ui/core';
import React from 'react'

import CancelIcon from '@material-ui/icons/Cancel';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import APIURL from '../../helpers/environment';

type DeleteCommentProps = {
    deleteCommentOff: () => void;
    sessionToken: string;
    fetchMyComments: () => void;
    myComments: any;
    commentId: number;
}

type DeleteCommentStates = {
    open: boolean;
    
}
 
class DeleteComment extends React.Component<DeleteCommentProps, DeleteCommentStates> {
    constructor(props: DeleteCommentProps) {
        super(props);
        this.state = {
            open: true
        };
    }

    handleDelete = (e:any) => {
        fetch(`${APIURL}/comment/${this.props.commentId}`,{
        method: 'DELETE',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': this.props.sessionToken
        })
    })
    .then(response => response.json());
    console.log('Comment was deleted.');
    this.props.deleteCommentOff()
    this.props.fetchMyComments();
    }   


    handleClose = () => {
        this.setState({open: false})
        this.props.deleteCommentOff()
    }

    render() { 
        return (  
            <>
            <Dialog open={this.state.open}>
                <DialogContent>Delete this Comment?</DialogContent>
                <DialogActions>
                <Button
                startIcon={<CancelIcon/>}
                onClick={this.handleClose}>Cancel</Button>
                <Button
                startIcon={<DeleteForeverIcon/>}
                onClick={this.handleDelete}>Delete</Button>
                </DialogActions>
            </Dialog>
            </>
        );
    }
}
 
export default DeleteComment;