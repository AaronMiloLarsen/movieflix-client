import React from 'react';

import { Button, Dialog, DialogContent, DialogTitle, FormControl, Input, InputLabel, Modal, TextField, } from '@material-ui/core';


type AddReviewProps = {
    sessionToken: string
    addReview: boolean
    addReviewOff: () => void
    movieId: number
    // fetchMovies: () => void
    // addMovieOff: () => void
}
 
type AddReviewStates = {
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
//  onClose: (e:EventListener) => void;
}
 
class AddReview extends React.Component<AddReviewProps, AddReviewStates> {

    constructor(props: AddReviewProps) {
        super(props);
        this.state = {
            open: false,
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

handleSubmit = (e:any) => {
    e.preventDefault();
    console.log(this.props.movieId)
    fetch(`http://localhost:3500/review/create`, {
        method: 'POST',
        body: JSON.stringify({
            review: {
                title: this.state.title,
                emotion: this.state.emotion,
                review: this.state.review,
                author: this.state.author,
                movieId: this.props.movieId
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
            this.state.setEmotion(0)
            this.state.setReview(0)
            this.state.setAuthor('')
            // this.props.fetchMovies()
            this.handleClose()

        })
}
   


    handleOpen = () => {
        this.setState({open:true})
    }
    handleClose = () => {
        this.setState({open:false})
        this.setState({addReview : false})
        this.props.addReviewOff()
    }

    componentDidMount() {
        this.setState({open:true})
    }

    // addMovieOff = () => {
        
    // }
    dialogStyle = {
        root: {
            alignItems:'center',
            minWidth: '500px',
            width: '800px',
            height: '800px'
        }
    }


    render() { 

        return (  

            <Dialog open={this.state.open} 
            // style={this.dialogStyle.root}
            >
                <DialogTitle>Add A Review!</DialogTitle>
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
                        <InputLabel htmlFor='review'>Review</InputLabel>
                        <TextField 
                        id="standard-multiline-flexible"
                        // label="Multiline"
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
                    <Button type='submit' onClick={this.handleSubmit}>Add Review</Button>
                </DialogContent>
            </Dialog>
        );
    }
}
 
export default AddReview;