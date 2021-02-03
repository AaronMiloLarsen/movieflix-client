
import React from 'react'

import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@material-ui/core';





type AddCommentProps = {
    sessionToken: string;
    addCommentOff: () => void;
    reviewId: number;
}

type AddCommentStates = {
    open: boolean;
    comment: string;
    author: string;
    setComment: (e:any) => any;
    setAuthor: (e:any) => any;
}

class AddComment extends React.Component<AddCommentProps, AddCommentStates> {
    constructor(props: AddCommentProps) {
        super(props);
        this.state = {
            open: true,
            comment: '',
            author: '',
            setComment: (e) => {
                this.setState({
                  comment: e
                })
            },
            setAuthor: (e) => {
                this.setState({
                  author: e
                })
            },
        };
    }

    handleSubmit = (e:any) => {
        console.log(this.props.reviewId)
        e.preventDefault();
        fetch(`http://localhost:3500/comment/create`,{
            method: 'POST',
            body: JSON.stringify({
                comment: {
                    comment: this.state.comment,
                    author: this.state.author,
                    reviewId: this.props.reviewId
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                this.state.setComment('')
                this.state.setAuthor('')
                this.handleClose()
            })
        }

        handleClose = () => {
            this.setState({open: false})
            this.props.addCommentOff()

        }



    render() { 
        return (  
            <Dialog open={this.state.open} maxWidth='md' fullWidth >
                <DialogTitle>Add A Comment</DialogTitle>
                <DialogContent>
                    <TextField 
                    autoFocus
                    margin="dense"
                    id="comment"
                    label="Comment"
                    fullWidth
                    onChange={(e:any)=> this.state.setComment(e.target.value)}
                      />
                </DialogContent>
                <DialogContent>
                    <TextField 
                    
                    margin="dense"
                    id="author"
                    label="Your Name"
                    onChange={(e:any)=> this.state.setAuthor(e.target.value)}
                      />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose}>Cancel</Button>
                    <Button type='submit' onClick={this.handleSubmit}>Add Comment</Button>
                </DialogActions>
            </Dialog>
        );
    }
}
 
export default AddComment;