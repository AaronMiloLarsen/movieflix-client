import React from 'react';
import { Component } from 'react';

import { Switch, useParams } from 'react-router-dom'
import { Card, Button, CardContent, List, Grid } from '@material-ui/core';

import AddReview from '../review/AddReview'
import ViewReviews from '../review/ViewReviews'




type IndividualMovieProps = {
    movie: any;
    sessionToken: string;
    // fetchMovies: () => void;
}
 
type IndividualMovieStates = {
    addReview: boolean;
    viewReviews: boolean;
}
 
class IndividualMovie extends React.Component<IndividualMovieProps,IndividualMovieStates> {
    constructor(props: IndividualMovieProps) {
        super(props);
        this.state = { 
            addReview: false,
            viewReviews: false
        };
    }

    addReviewOn = () => {
        this.setState({addReview: true}) 
    }

    addReviewOff = () => {
        this.setState({addReview: false})
    }

    viewReviewsOn = () => {
        this.setState({viewReviews: true})
    }

    viewReviewsOff = () => {
        this.setState({viewReviews: false})
    }

    style = {
        root: {
            minWidth: '300px'
        }
    }
          
    render() { 
        return ( 
            <>
            <Grid container spacing={3}  justify="center" alignItems="center">
                <Grid item md={6} sm={1}>
                    <Card style={this.style.root}>
                        <CardContent>
                            <h4>Title: {this.props.movie.title}</h4>
                        <List>
                            <li>
                            Year: {this.props.movie.year}
                            </li>
                            <li>
                                Duration: {this.props.movie.duration}
                            </li>
                            <li>
                                Description: {this.props.movie.description}
                            </li>
                        </List>
                        <Button onClick={(e:any) => {this.addReviewOn()}}>Add Review</Button>
                        <Button onClick={(e:any) => {this.viewReviewsOn()}}>View Reviews</Button>
                        </CardContent>
                    </Card>
                        
                </Grid>
                
            </Grid>
            

            {this.state.addReview ? 
            <AddReview 
            sessionToken={this.props.sessionToken} 
            addReview={this.state.addReview}
            addReviewOff={this.addReviewOff}
            movieId={this.props.movie.id} /> : <></>}
            
            {this.state.viewReviews ? 
            <ViewReviews
            sessionToken={this.props.sessionToken}
            viewReviewsOff={this.viewReviewsOff}
            movieId={this.props.movie.id}
            movieTitle={this.props.movie.title}
            // fetchMovies = {this.props.fetchMovies} 
             /> : <></>}

            </>
         );
    }

}
 
export default IndividualMovie;