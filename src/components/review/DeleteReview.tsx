import React from 'react';

import { Button, Dialog, DialogActions, DialogContent } from '@material-ui/core';

import CancelIcon from '@material-ui/icons/Cancel';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


type DeleteReviewProps = {
    deleteReviewOff: () => void
    sessionToken: string
    fetchMyReviews: () => void
    myReviews: any
    reviewId: number
}
 
type DeleteReviewStates = {
    open:boolean
}
 
class DeleteReview extends React.Component<DeleteReviewProps, DeleteReviewStates> {
    constructor(props: DeleteReviewProps) {
        super(props);
        this.state = {
            open: true
         };
    }

    handleDelete = (e:any) => {
        fetch(`http://localhost:3500/review/${this.props.reviewId}`,{
        method: 'DELETE',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': this.props.sessionToken
        })
    })
    .then(response => response.json());
    console.log('Review was deleted.');
    this.props.deleteReviewOff()
    this.props.fetchMyReviews();
    }   

    handleClose = () => {
        this.setState({open: false})
        this.props.deleteReviewOff()
    }


    render() { 
        return ( 
            <>
            <Dialog open={this.state.open}>
                <DialogContent>Delete this Review?</DialogContent>
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
 
export default DeleteReview;