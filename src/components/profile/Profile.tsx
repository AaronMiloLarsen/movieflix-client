import React from 'react'


import MyMovies from '../profile/MyMovies'
import MyReviews from '../profile/MyReviews'
import MyComments from '../profile/MyComments'

import { Button, ButtonGroup, Grid } from '@material-ui/core';


type ProfileProps = {
    userId: string
    sessionToken: string
}

type ProfileStates = {
    myReviews: any;
    myComments: any;
    userId: string;
    openMovies: boolean;
    openReviews: boolean;
    openComments: boolean
}

class Profile extends React.Component<ProfileProps, ProfileStates> {
    constructor(props: ProfileProps) {
        super(props);
        this.state = {
            // myMovies: [],
            myReviews: [],
            myComments: [],
            userId: '',
            openMovies: false,
            openReviews: false,
            openComments: false 
        };
    }


    welcomeStyle = {
        root: {
            display:'flex',
            width: '100vw',
            margin: 'auto',
            height: '100%',
        }
    }


    render() {

        return (
            <Grid
            style={this.welcomeStyle.root}
            className="homepage"
            alignContent="center"
            alignItems="center"
            justify="center">
                <ButtonGroup>
                    <Button onClick={() => this.setState({
                        openMovies:true, 
                        openReviews:false,
                        openComments:false
                        })}>
                        My Movies</Button>
                    <Button onClick={() => this.setState({
                        openMovies:false, 
                        openReviews:true,
                        openComments:false
                        })}>My Reviews</Button>
                    <Button onClick={() => this.setState({
                        openMovies:false, 
                        openReviews:false,
                        openComments:true
                        })}>My Comments</Button>
                </ButtonGroup>

            {this.state.openMovies ? <MyMovies
            sessionToken={this.props.sessionToken}
            userId={this.props.userId}
             /> : <></>}

            {this.state.openReviews ? <MyReviews
            sessionToken={this.props.sessionToken}
            userId={this.props.userId}
             /> : <></>}

            {this.state.openComments ? <MyComments
            sessionToken={this.props.sessionToken}
             /> : <></>}

            </Grid>
        )
    }
}


export default Profile;

{/* <div>
                    <ButtonGroup>
                        <Button href='/profile/mymovies' onClick={this.fetchMyMovies}>My Movies</Button>
                        <Button href='/myreviews'>My Reviews</Button>
                        <Button href='/mycomments'>My Comments</Button>
                    </ButtonGroup>
            {this.state.myMovies.length > 0 ? (this.state.myMovies?.map(({myMovies}:any,index:number) => (
                    <Grid 
                    key={this.state.myMovies.id}                
                    container
                    // spacing={2}
                    direction="column"
                    justify="center"
                    alignItems="center"
                    xs={4}
                    >
                        <h3>My Movies</h3>
                            <Card>
                                <CardContent>
                                        <h4>Title: {this.state.myMovies[index].title}</h4>
                                    <List>
                                        <li>
                                        Year: {this.state.myMovies[index].year}
                                        </li>
                                        <li>
                                            Duration: {this.state.myMovies[index].duration}
                                        </li>
                                        <li>
                                            Description: {this.state.myMovies[index].description}
                                        </li>
                                    </List>
                                    <CardActions >
                                        <Button startIcon={<EditIcon />}> Edit </Button>
                                        <Button startIcon={<DeleteForeverIcon />}> Delete </Button>
                                    </CardActions>
                                </CardContent>
                            </Card>
                    </Grid>

            )
            )) : ( <>No Movies!</> )              
            }
            </div> */}