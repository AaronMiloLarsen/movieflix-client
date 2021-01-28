import React from 'react';
import { Component } from 'react';

import { Switch } from 'react-router-dom'
import { Card, Button, CardContent, List, Grid } from '@material-ui/core';





type IndividualMovieProps = {
    movie: any,
    sessionToken: string
}
 
export interface State {
    
}
 
class IndividualMovie extends React.Component<IndividualMovieProps,{}> {
    constructor(props: IndividualMovieProps) {
        super(props);
        this.state = { };
    }

    style = {
        root: {
            color: "green",
            backgroundColor: 'black',
            minWidth: '300px',
            height: '100px',
        }
    }
                //WANT THIS ELEMENT TO BE MAPPED EVERYTIME FETCHRESULTS / GET ALL MOVIES OCCURS ON USERHOME
    render() { 
        return ( 
            <Grid container spacing={2} direction="row" justify="center" alignItems="center">
                <Grid item xs={3} sm={3}>
                    <Card>
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
                        <Button href='/review/create'>Add Review</Button>
                        <Button>View Reviews</Button>
                        </CardContent>
                    </Card>
                        
                </Grid>
                
            </Grid>
            
         );
    }

}
 
export default IndividualMovie;