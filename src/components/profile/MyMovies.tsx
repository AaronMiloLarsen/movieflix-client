import React from 'react'

import EditMovie from '../movie/EditMovie'
import DeleteMovie from '../movie/DeleteMovie'

import { Button, ButtonGroup, Card, CardActions, CardContent, Grid, List } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';



type MyMoviesProps = {
    // myMovies: any;
    // fetchMyMovies: () => void
    sessionToken: string;
    userId: string
    
}
 
type MyMoviesStates = {
    editMovieOn: boolean
    myMovies: any,
    movieId: number,
    setMovieId: (e:any) => void,
    deleteMovieOn: boolean
}
 
class MyMovies extends React.Component<MyMoviesProps, MyMoviesStates> {
    
    constructor(props: MyMoviesProps) {
        super(props);
        this.state = {
            editMovieOn: false,
            myMovies: '',
            movieId: 0,
            deleteMovieOn: false,
            setMovieId: (e) => {
                this.setState({
                  movieId: e
                })
            },
         };
    }

 componentDidMount() {
    this.fetchMyMovies();
}

fetchMyMovies = () => {
    console.log(this.props.userId)
    // e.preventDefault()
    fetch(`http://localhost:3500/movie/mymovies/${localStorage.getItem('userId')}`, {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('token')|| ''
                })
            }) .then((movie) => movie.json())
               .then((movieData) => {
                    this.myMoviesResults(movieData)
                    console.log(movieData)
               }) .catch (
                   (err) => console.log(err)
               )
}

myMoviesResults = (allMyMovies:[]) => {
    console.log("My Movies: ", allMyMovies)
    this.setState({myMovies: allMyMovies})
    // this.setState({openMovies: true})
}

editMovieOff = () => {
    this.setState({editMovieOn:false})
}

deleteMovieOff = () => {
    this.setState({deleteMovieOn:false})
}

    render() { 
        return ( 
            <div>
                    <h3>My Movies</h3>
            {this.state.myMovies.length > 0 ? (this.state.myMovies?.map((movies:any,index:number) => (
                    <Grid 
                    key={movies.id}                
                    container
                    // spacing={2}
                    direction="column"
                    justify="center"
                    alignItems="center"
                    xs={4}
                    >
                            <Card 
                            onMouseEnter={e => {
                                this.setState({
                                    movieId: movies.id
                                })
                                console.log(this.state.movieId)}}>
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
                                        <Button 
                                        onClick={() => this.setState({editMovieOn: true})}
                                        startIcon={<EditIcon />}
                                         > Edit </Button>
                                        <Button 
                                        onClick={() => this.setState({deleteMovieOn: true})}
                                        startIcon={<DeleteForeverIcon />}> Delete </Button>
                                    </CardActions>
                                </CardContent>
                            </Card>

                            {this.state.editMovieOn ? 
                            <EditMovie
                            editMovieOff={this.editMovieOff}
                            sessionToken={this.props.sessionToken}
                            fetchMyMovies={this.fetchMyMovies}
                            myMovies={this.state.myMovies}
                            movieId={this.state.movieId}
                            /> : <> </>}

                            {this.state.deleteMovieOn ? 
                            <DeleteMovie
                            deleteMovieOff={this.deleteMovieOff}
                            sessionToken={this.props.sessionToken}
                            fetchMyMovies={this.fetchMyMovies}
                            myMovies={this.state.myMovies}
                            movieId={this.state.movieId}
                            /> : <> </>}
                    </Grid>

            )
            )) : ( <>No Movies!</> )              
            }

            

            </div>
         );
    }
}
 
export default MyMovies;