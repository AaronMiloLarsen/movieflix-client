
import React from 'react';

import AddComment from '../comment/AddComment'
import ViewComments from '../comment/ViewComments'

import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

import APIURL from '../../helpers/environment';


type ViewReviewsProps = {
    sessionToken: string;
    viewReviewsOff: () => void;
    movieId: number;
    movieTitle: string
}

type ViewReviewsStates = {
    openReviews: boolean;
    reviews: any;
    addComment: boolean;
    viewComments: boolean
    reviewId: number
}


class ViewReviews extends React.Component<ViewReviewsProps, ViewReviewsStates> {
    constructor(props: ViewReviewsProps) {
        super(props);
        this.state = {
            openReviews: true,
            reviews: [],
            addComment: false,
            viewComments: false,
            reviewId: 0,
        };
    }




    componentDidMount() {
        if (localStorage.getItem('token')) {
            this.fetchReviews();
        }
    }

    fetchReviews = () => {

        console.log(this.props.movieId)
        fetch(`${APIURL}/review/allreviews/${this.props.movieId}`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token') || ''
            })
        }).then((reviews) => reviews.json())
            .then((reviewsData) => {
                this.setAllReviews(reviewsData)
                console.log(reviewsData)
            }).catch(
                (err) => console.log(err)
            )
    }

    setAllReviews = (allReviews: []) => {
        console.log("All Reviews: ", allReviews)
        this.setState({ reviews: allReviews })
        this.setState({ openReviews: true })
    }


    addCommentOn = () => {
        this.setState({ addComment: true })
    }

    addCommentOff = () => {
        this.setState({ addComment: false })
    }

    viewCommentsOn = () => {
        this.setState({ viewComments: true })
    }

    viewCommentsOff = () => {
        this.setState({ viewComments: false })
    }

    style = {
        dialog: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        largeIcon: {
            height: '200px',
            width: '200px'
        }
    }

    render() {

        return (
            <div>
                <Dialog open={this.state.openReviews} style={this.style.dialog}>
                    <DialogTitle>
                        Viewing all Reviews for {this.props.movieTitle}
                    </DialogTitle>

                    {this.state.reviews.length > 0 ? (this.state.reviews.map((event: any, index: any) => (
                        <DialogContent dividers
                            onMouseEnter={() => { this.setState({ reviewId: event.id }); console.log(this.state.reviewId) }}
                            key={this.state.reviews.id}
                        >
                            Title: {this.state.reviews[index].title}
                            <br />
                        Emotion: {this.state.reviews[index].emotion}
                            <br />
                        Review: {this.state.reviews[index].review}
                            <br />
                        Author: {this.state.reviews[index].author}
                            <br />
                            <Button onClick={this.addCommentOn}>Add Comment</Button>
                            <Button onClick={this.viewCommentsOn}>View All Comments</Button>
                        </DialogContent>
                    ))
                    ) : (
                            <DialogContent>
                                <SentimentVeryDissatisfiedIcon style={this.style.largeIcon} />
                                <br />
                        No Reviews Available!
                            </DialogContent>
                        )}
                    <DialogActions style={this.style.dialog}>
                        <Button><CloseIcon onClick={(e: any) => { this.props.viewReviewsOff() }} /></Button>
                    </DialogActions>

                </Dialog>

                {this.state.addComment ? <AddComment
                    sessionToken={this.props.sessionToken}
                    addCommentOff={this.addCommentOff}
                    reviewId={this.state.reviewId}
                /> : <></>}

                {this.state.viewComments ? <ViewComments
                    sessionToken={this.props.sessionToken}
                    viewCommentsOff={this.viewCommentsOff}
                    reviewId={this.state.reviewId}
                /> : <></>}

            </div>
        );
    }
}

export default ViewReviews;