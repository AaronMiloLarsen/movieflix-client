import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Input, InputLabel, TextField } from '@material-ui/core';
import React from 'react'



type editCommentProps = {
    editCommentOff: () => void;
    sessionToken: string;
    fetchMyComments: () => void;
    myComments: any;
    commentId:number
}
 
type editCommentStates = {
    open: boolean;
    comment: string,
    author: string,
    setComment: (e: any) => any;
    setAuthor: (e:any) => any;
}
 
class EditComment extends React.Component<editCommentProps, editCommentStates> {
    constructor(props: editCommentProps) {
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
        
        console.log(this.props.commentId)
        e.preventDefault();
        fetch(`http://localhost:3500/comment/${this.props.commentId}`, {
            method: 'PUT',
            body: JSON.stringify({
                comment: {
                    comment: this.state.comment,
                    author: this.state.author,
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
                this.props.fetchMyComments()
                this.handleClose()
    
            })
    }
    
    handleClose = () => {
        this.setState({open: false})
        this.props.editCommentOff()
    }

    render() { 
        return (  
            <Dialog open={this.state.open} maxWidth='md' fullWidth >
                <DialogTitle>Edit Your Comment</DialogTitle>
                <DialogContent>
                    <TextField 
                    autoFocus
                    margin="dense"
                    id="comment"
                    label="Comment"
                    // type="email"
                    fullWidth
                    onChange={(e)=> this.state.setComment(e.target.value)}
                      />
                </DialogContent>
                <DialogContent>
                    <TextField 
                    
                    margin="dense"
                    id="author"
                    label="Your Name"
                    onChange={(e)=> this.state.setAuthor(e.target.value)}
                      />
                </DialogContent>
                
                    <Button onClick={this.handleClose}>Cancel</Button>
                    <Button type='submit' onClick={this.handleSubmit}>Confirm</Button>
                
            </Dialog>
        );
    }
}
 
export default EditComment;