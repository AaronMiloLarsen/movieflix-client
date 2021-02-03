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
            myReviews: [],
            myComments: [],
            userId: '',
            openMovies: false,
            openReviews: false,
            openComments: false
        };
    }

    render() {

        return (
            <Grid
                container
                alignItems="center"

            >
                <Grid item
                    alignItems="center"
                    xs={12}
                >
                    <ButtonGroup>
                        <Button variant="contained"
                            onClick={() => this.setState({
                                openMovies: true,
                                openReviews: false,
                                openComments: false
                            })}>
                            My Movies</Button>
                        <Button variant="contained"
                            onClick={() => this.setState({
                                openMovies: false,
                                openReviews: true,
                                openComments: false
                            })}>My Reviews</Button>
                        <Button variant="contained"
                            onClick={() => this.setState({
                                openMovies: false,
                                openReviews: false,
                                openComments: true
                            })}>My Comments</Button>
                    </ButtonGroup>
                </Grid>

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