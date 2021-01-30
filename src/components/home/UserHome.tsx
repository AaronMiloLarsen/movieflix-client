import React from 'react';
// import { Redirect, Switch, Route} from 'react-router-dom'

import {Button, Grid } from '@material-ui/core'

import IndividualMovie from '../movie/IndividualMovie';
import AddMovie from '../movie/AddMovie';



type UserHomeProps = {
    sessionToken: string
}
 
type UserHomeStates = {
    movie: any,
    movieTitle: string,
    movieYear: number,
    movieDuration: number,
    movieDescription: string,
    addMovie: boolean
    reviewTitle: string,
    reviewEmotion: string,
    reviewAuthor: string,
    comment: string,
    commentAuthor: string
    // update these to eventlister instead of any //
    setMovie: (e:any) => void;
    setReviewTitle: (e: any) => any;
    setReviewEmotion: (e: any) => any;
    setReviewAuthor: (e: any) => any;
    setComment: (e: any) => any;
    setCommentAuthor: (e: any) => any;
    updateToken: any;
    sessionToken: any;
    

}

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
            addMovie: false,
            reviewTitle: " ",
            reviewEmotion: " ",
            reviewAuthor: "",
            comment: "",
            commentAuthor: "",
            updateToken: "",
            sessionToken: "",
            setMovie: (e:any) => {
                this.setState({
                  movie: e })
            },
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
                    'Authorization': localStorage.getItem('token')|| ''
                })
            }) .then((movie) => movie.json())
               .then((movieData) => {
                    this.setState({
                        movie: movieData
                    })
                    console.log(movieData)
               }) .catch (
                   (err) => console.log(err)
               )
        }

        componentDidMount() {
            if (localStorage.getItem('token')) {
            this.fetchMovies();
            }
        }

        movieMapper = () => {
            return(this.state.movie?.map((movie:any,index:number) => {
                return (
                    <div key = {movie.id}>
                    <IndividualMovie 
                    movie={movie}                          
                    sessionToken = {this.props.sessionToken}
                    // fetchMovies={this.fetchMovies}  
                    />
                    </div>
                )
            }))
        }

        addMovieOn = () => {
            this.setState({addMovie: true})
        }

        addMovieOff = () => {
            this.setState({addMovie: false})
        }

        // userHomeStyle =  {
        //     root: {
        //         display: 'flex',
        //         alignItems: 'center',
        //         backgroundColor: 'black',
        //         width: '80%',
        //         height: '80%'
        //     }
        // }


    render() { 
        return ( 
            <>
                
            <h3>Welcome User</h3>
                <Grid container
                    direction="row"
                    justify="flex-start"
                    alignItems="center">
                {this.movieMapper()}
                </Grid>
                <br />
                <br />
                <br />
                    <div>
                    <Button variant="outlined" color="secondary" onClick={(e:any)=>this.addMovieOn()}>Post A Movie</Button>
                    </div>
                    
                    <br />
                    <br />
                    <br />
                    <br />
                    
                {this.state.addMovie ?
                    <AddMovie 
                    sessionToken={this.props.sessionToken}
                    addMovie={this.state.addMovie}
                    fetchMovies={this.fetchMovies}
                    addMovieOff={this.addMovieOff}
                    /> : <></>
                }

            

        </>
        );
    }
}
 
export default UserHome;

// COMMENT GRAVEYARD // 

// interface Movie {
//     movieTitle: string,
//     movieTitle: string,
//     movieYear: number,
//     movieDuration: number,
//     movieDescription: string,

// }

// setMovieTitle: (e: any) => any;
    // setMovieYear: (e: any) => any;
    // setMovieDuration: (e: any) => any;
    // setMovieDescription: (e: any) => any;