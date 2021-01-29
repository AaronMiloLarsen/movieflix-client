
import React from 'react';

import {  Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';



type ViewReviewsProps = {
    sessionToken: string;
    viewReviewsOff: () => void;
    movieId: number;
    movieTitle: string
}

type ViewReviewsStates = {
    openReviews: boolean;
    reviews: any
}
 
 
class ViewReviews extends React.Component<ViewReviewsProps, ViewReviewsStates> {
    constructor(props: ViewReviewsProps) {
        super(props);
        this.state = {
            openReviews: false,
            reviews: [],
        };
    }


    setReviews = (postArray:[]) => {
        console.log("postArray: ", postArray)
        this.setState({reviews: postArray})
        this.setState({openReviews: true})
    }

    fetchReviews = () => {
        
        console.log(this.props.movieId)
        fetch(`http://localhost:3500/review/allreviews/${this.props.movieId}`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')|| ''
            })
        }).then((reviews) => reviews.json())
           .then((reviewsData) => {
                this.setReviews(reviewsData)
                console.log(reviewsData)
           }).catch (
               (err) => console.log(err)
           )
    }


    componentDidMount() {
        this.fetchReviews()
        // console.log(this.state.reviews)
    }

    style = {
        dialog: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }, 
        largeIcon: {
            height:'200px',
            width:'200px'
        }
    }

    render() { 
        return ( 
            <div>
                <Dialog open={this.state.openReviews} style={this.style.dialog}>
                <DialogTitle>
                Viewing all Reviews for {this.props.movieTitle}
                </DialogTitle>
                {this.state.reviews.length > 0 ? (this.state.reviews?.map((event:any, index:any) => (
                
                  <DialogContent dividers key={this.state.reviews.id}>
                    Title: {this.state.reviews[index].title}
                    <br />
                    Emotion: {this.state.reviews[index].emotion}
                    <br />
                    Review: {this.state.reviews[index].review}
                    <br />
                    Author: {this.state.reviews[index].author}
                    <br/>
                    <Button>Add Comment</Button>
                    <Button>View All Comments</Button>
                  </DialogContent>
              
                ))
                 ) : (
                    <DialogContent>
                        <SentimentVeryDissatisfiedIcon style={this.style.largeIcon}/>
                        <br/>
                        No Reviews Available!
                        </DialogContent>
                )}
                <DialogActions style={this.style.dialog}>
                    <Button><CloseIcon onClick={(e:any)=> {this.props.viewReviewsOff()}}/></Button>
                </DialogActions>
              
                </Dialog>
            </div>
         );
    }
}
 
export default ViewReviews;

// COMMENT GRAVEYARD //

  {/* <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        >
                            This is a test
                            <br />
                    </AccordionSummary>
                    <AccordionDetails>
                            This is test of the testing
                            <Button>Test Button</Button>
                            <Button>Test Button</Button>
                    </AccordionDetails>
                </Accordion> */}