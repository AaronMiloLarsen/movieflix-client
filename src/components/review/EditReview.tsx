import { Button, Dialog, DialogContent, DialogTitle, FormControl, Input, InputLabel, TextField } from '@material-ui/core';
import React from 'react'



type editReviewProps = {
    editReviewOff: () => void;
    sessionToken: string;
    fetchMyReviews: () => void;
    myReviews: any;
    reviewId: number
}
 
type editReviewStates = {
    open: boolean;
    title: string,
    emotion: string,
    review: string,
    author: string,
    addReview: boolean,
    setTitle: (e: any) => any;
    setEmotion: (e:any) => any;
    setReview: (e:any) => any;
    setAuthor: (e:any) => any
}
 
class EditReview extends React.Component<editReviewProps, editReviewStates> {
    constructor(props: editReviewProps) {
        super(props);
        this.state = {
            open: true,
            title: '',
            emotion: '',
            review: '',
            author: '',
            addReview: true,
            // onClose: (e:EventListener) => void;
            setTitle: (e) => {
                this.setState({
                  title: e
                })
            },
            setEmotion: (e) => {
                this.setState({
                  emotion: e
                })
            },
            setReview: (e) => {
                this.setState({
                  review: e
                })
            },
            setAuthor: (e) => {
                this.setState({
                  author: e
                })
            },
        };
    }

    // findId = (this.props.myMovies) => {
    //     this.props.myMovies.find(({}) => this.props.myMovies.id === 1)
    // }

// componentDidMount() {
//     this.props.fetchMyMovies()
//     console.log(this.props.movieId)
// }

// Fetch from my Movies is returning an array with 2 objects because user posted multiple moviess, trying to extract id from object to edit that move id is difficult, sessiontoken? new search?

//maybe map individual responses from fetch somehow? 

//UPDATE: GETTING THE MOVIE ID TO PASS DOWN BUT IT IS  PASSING DOWN USER ID FOR EACH MOVIE INSTEAD OF THE ONE IM TRYING TO EDIT

    handleSubmit = (e:any) => {
        
        console.log(this.props.myReviews)
        e.preventDefault();
        fetch(`http://localhost:3500/review/${this.props.reviewId}`, {
            method: 'PUT',
            body: JSON.stringify({
                review: {
                    title: this.state.title,
                    emotion: this.state.emotion,
                    review: this.state.review,
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
                this.state.setTitle('')
                this.state.setEmotion('')
                this.state.setReview('')
                this.state.setAuthor('')
                this.props.fetchMyReviews()
                this.handleClose()
    
            })
    }
    
    handleClose = () => {
        this.setState({open: false})
        this.props.editReviewOff()
    }



    dialogStyle = {
        root: {
            alignItems:'center'
        }
    }
    render() { 
        return (  

            <Dialog open={this.state.open} 
            maxWidth='lg'
            fullWidth
            >
                <DialogTitle>Edit your Review!</DialogTitle>
                <DialogContent >
                    <FormControl >
                        <InputLabel htmlFor='title'>Title</InputLabel>
                        <Input id='title' onChange={(e)=> this.state.setTitle(e.target.value)}/>
                    </FormControl>
                    </DialogContent>
                    <DialogContent >
                    <FormControl>
                        <InputLabel htmlFor='emotion'>Emotion</InputLabel>
                        <Input id='emotion'onChange={(e)=> this.state.setEmotion(e.target.value)}/>
                    </FormControl>
                    </DialogContent>
                    <DialogContent >
                    {/* <FormControl> */}
                        {/* <InputLabel htmlFor='review'>Review</InputLabel> */}
                        <TextField 
                        id="standard-multiline-flexible"
                        label="Review"
                        multiline
                        rowsMax={8}
                        fullWidth
                        // id='review'
                        onChange={(e)=> this.state.setReview(e.target.value)}/>
                    {/* </FormControl> */}
                    </DialogContent>
                    <DialogContent >
                    <FormControl>
                        <InputLabel htmlFor='author'>Your Name:</InputLabel>
                        <Input id='author'onChange={(e)=> this.state.setAuthor(e.target.value)}/>
                    </FormControl>
                    </DialogContent>
                    <DialogContent >
                    <Button onClick ={this.handleClose}>Cancel</Button>
                    <Button type='submit' onClick={this.handleSubmit}>Confirm</Button>
                </DialogContent>
            </Dialog>
        );
    }
}
 
export default EditReview;