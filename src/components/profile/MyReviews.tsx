import React from 'react'

import EditReview from '../review/EditReview'
import DeleteReview from '../review/DeleteReview'

import { Button, Card, CardActions, CardContent, Grid, List } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import APIURL from '../../helpers/environment';

type MyReviewsProps = {
    sessionToken: string,
    userId: string
}

type MyReviewsStates = {
    myReviews: any;
    editReviewOn: boolean;
    reviewId: number;
    deleteReviewOn: boolean
}

class MyReviews extends React.Component<MyReviewsProps, MyReviewsStates> {
    constructor(props: MyReviewsProps) {
        super(props);
        this.state = {
            myReviews: [],
            editReviewOn: false,
            reviewId: 0,
            deleteReviewOn: false
        };
    }

    componentDidMount() {
        this.fetchMyReviews();
    }

    fetchMyReviews = () => {
        console.log()
        fetch(`${APIURL}/review/myreviews/${localStorage.getItem('userId')}`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token') || ''
            })
        }).then((review) => review.json())
            .then((reviewData) => {
                this.myReviewsResults(
                    reviewData
                )
                console.log(reviewData)
            }).catch(
                (err) => console.log(err)
            )
    }

    myReviewsResults = (allMyReviews: []) => {
        console.log("My Reviews: ", allMyReviews)
        this.setState({ myReviews: allMyReviews })

    }

    editReviewOff = () => {
        this.setState({ editReviewOn: false })
    }

    deleteReviewOff = () => {
        this.setState({ deleteReviewOn: false })
    }

    style = {
        root: {
            width: '300px',

        }
    }
    render() {
        return (
            <>
                <Grid container>
                    <h3>My Reviews</h3>
                </Grid>
                <Grid container>
                    {this.state.myReviews.length > 0 ? (this.state.myReviews?.map((reviews: any, index: number) => (
                        <Grid item
                            key={reviews.id}
                            xs={4}
                        >
                            <Card
                                style={this.style.root}
                                onMouseEnter={e => {
                                    this.setState({
                                        reviewId: reviews.id
                                    })
                                    console.log(this.state.reviewId)
                                }}>
                                <CardContent>
                                    <h4>Title: {this.state.myReviews[index].title}</h4>
                                    <List>
                                        <li>
                                            Emotion: {this.state.myReviews[index].emotion}
                                        </li>
                                        <li>
                                            Review: {this.state.myReviews[index].review}
                                        </li>
                                        <li>
                                            Author: {this.state.myReviews[index].author}
                                        </li>
                                    </List>
                                    <CardActions >
                                        <Button
                                            onClick={() => this.setState({ editReviewOn: true })}
                                            startIcon={<EditIcon />}
                                        > Edit </Button>
                                        <Button
                                            onClick={() => this.setState({ deleteReviewOn: true })}
                                            startIcon={<DeleteForeverIcon />}
                                        > Delete </Button>
                                    </CardActions>
                                </CardContent>
                            </Card>

                            {this.state.editReviewOn ?
                                <EditReview
                                    editReviewOff={this.editReviewOff}
                                    sessionToken={this.props.sessionToken}
                                    fetchMyReviews={this.fetchMyReviews}
                                    myReviews={this.state.myReviews}
                                    reviewId={this.state.reviewId}
                                /> : <> </>}

                            {this.state.deleteReviewOn ?
                                <DeleteReview
                                    deleteReviewOff={this.deleteReviewOff}
                                    sessionToken={this.props.sessionToken}
                                    fetchMyReviews={this.fetchMyReviews}
                                    myReviews={this.state.myReviews}
                                    reviewId={this.state.reviewId}
                                /> : <> </>}
                        </Grid>


                    )
                    )) : (<>No Reviews!</>)
                    }
                </Grid>
            </>
        );
    }
}

export default MyReviews;