import React from 'react';
import { Redirect, Switch, Route} from 'react-router-dom'

import {Container, Button, Grid, CardContent, Card } from '@material-ui/core'

import IndividualMovie from '../movie/IndividualMovie';



type UserHomeProps = {
    sessionToken: string
}
 
type UserHomeStates = {
    movie: any,
    movieTitle: string,
    movieYear: number,
    movieDuration: number,
    movieDescription: string,
    reviewTitle: string,
    reviewEmotion: string,
    reviewAuthor: string,
    comment: string,
    commentAuthor: string
    // update these to eventlister instead of any //
    setMovie: (e:any) => void;
    // setMovieTitle: (e: any) => any;
    // setMovieYear: (e: any) => any;
    // setMovieDuration: (e: any) => any;
    // setMovieDescription: (e: any) => any;
    setReviewTitle: (e: any) => any;
    setReviewEmotion: (e: any) => any;
    setReviewAuthor: (e: any) => any;
    setComment: (e: any) => any;
    setCommentAuthor: (e: any) => any;
    updateToken: any;
    sessionToken: any;

}

// interface Movie {
//     movieTitle: string,
//     movieTitle: string,
//     movieYear: number,
//     movieDuration: number,
//     movieDescription: string,

// }

//TRYING TO SEND MOVIE OBJECT DOWN TO INDIVIDUAL MOVIE TO BE MAPPED //
 
class UserHome extends React.Component<UserHomeProps, UserHomeStates> {
    constructor(props: UserHomeProps) {
        super(props);
        this.state = {
            movie: [],
            movieTitle: "",
            movieYear: 0,
            movieDuration: 0,
            movieDescription: "",
            reviewTitle: " ",
            reviewEmotion: " ",
            reviewAuthor: "",
            comment: "",
            commentAuthor: "",
            updateToken: "",
            sessionToken: "",
            setMovie: (e:any) => {
                this.setState({
                  movie: e })},
            //         movieTitle: e,
            //         movieYear: e,
            //         movieDuration: e,
            //         movieDescription: e,
            //       }
            //     })
            // },
            // setMovieTitle: (e) => {
            //   this.setState({
            //     movieTitle: e
            //   })
            // },
            // setMovieYear: (e) => {
            //   this.setState({
            //     movieYear: e
            //   })
            // },
            // setMovieDuration: (e) => {
            //   this.setState({
            //     movieDuration: e
            //   })
            // },
            // setMovieDescription: (e) => {
            //   this.setState({
            //     movieDescription: e
            //   })
            // },
            setReviewTitle: (e) => {
              this.setState({
                reviewTitle: e
              })
            },
            setReviewEmotion: (e) => {
              this.setState({
                reviewEmotion: e
              })
            },
            setReviewAuthor: (e) => {
                this.setState({
                  reviewAuthor: e
                })
            },
            setComment: (e) => {
                this.setState({
                  comment: e
                })
            },
            setCommentAuthor: (e) => {
                this.setState({
                  commentAuthor: e
                })
              }
          }
        }

        fetchMovies = () => {
            fetch('http://localhost:3500/movie/', {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': this.props.sessionToken
                })
            }) .then((movie) => movie.json())
               .then((movieData) => {
                    // this.state.setMovie(movieData)
                    this.setState({
                        movie: movieData
                    })
                    console.log(movieData)
               }) .catch (
                   (err) => console.log(err)
               )
        }

        componentDidMount() {
            this.fetchMovies();
        }


        movieMapper = () => {
            return(this.state.movie?.map((movie:any,index:number) => {
                return (
                    <>
                    {/* <IndividualMovie 
                    movie={this.state.movie},            
                    key = {movie.id},               
                    sessionToken = {this.props.sessionToken}  /> */}
                    <p>Hey hey!</p>
                    </>
                )
            }))
        }

        userHomeStyle =  {
            root: {
                display: 'flex',
                backgroundColor: 'black',
                width: '80%',
                height: '80%'
            }
        }


    render() { 
        return ( 
            <div style={{minHeight: '1000px'}}>

                        <div style={this.userHomeStyle.root}>
                            <Grid>
                                <h3>Welcome User</h3>
                            {/* NEED HELP WITH MAPPING */}
                            {/* {this.state.movie.map((movie, i) =>
                            return ( 
                                <>
                                <IndividualMovie 
                                    movie={this.state.movie},
                                    key = {i},
                                    sessionToken = {this.props.sessionToken} />
                                    </>
                                    ))} */}
                                    {this.movieMapper()}
                                <Button>Post A Movie</Button>
                            </Grid>
                        </div>
            </div>

            
        );
    }
}
 
export default UserHome;