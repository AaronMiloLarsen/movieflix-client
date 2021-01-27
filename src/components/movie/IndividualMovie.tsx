import React from 'react';
import { Component } from 'react';

import { Card, Button, CardContent, List } from '@material-ui/core';





export interface Props {
    movie: {
        movieTitle: "",
        movieYear: 0,
        movieDuration: 0,
        movieDescription: "",
    },
}
 
export interface State {
    
}
 
class IndividualMovie extends React.Component<Props,{}> {
    constructor(props: Props) {
        super(props);
        this.state = { };
    }

    style = {
        root: {
            color: "green",
            backgroundColor: 'black',
            width: '100px',
            height: '100px',
        }
    }
                //WANT THIS ELEMENT TO BE MAPPED EVERYTIME FETCHRESULTS / GET ALL MOVIES OCCURS ON USERHOME
    render() { 
        return ( 
            <div style = {this.style.root}>
                <Card>
                    <CardContent>
                        <h4>Title: {this.props.movie.movieTitle}</h4>
                    <List>
                        <li>
                        Year: {this.props.movie.movieYear}
                        </li>
                        <li>
                            Duration: {this.props.movie.movieDuration}
                        </li>
                        <li>
                            Description: {this.props.movie.movieDescription}
                        </li>
                    </List>
                    </CardContent>
                </Card>
                    {/* <Button href={`/review/create/${this.props.movie.movieId}`}>Add Review</Button>
                    <Button href={`/review/${this.props.movieId}`}>View Reviews</Button> */}
            </div>
            
         );
    }

}
 
export default IndividualMovie;