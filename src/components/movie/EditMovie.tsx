import { Button, Dialog, DialogContent, DialogTitle, FormControl, Input, InputLabel } from '@material-ui/core';
import React from 'react'



type editMovieProps = {
    editMovieOff: () => void;
    sessionToken: string;
    fetchMyMovies: () => void;
    myMovies: any;
    movieId:number
}
 
type editMovieStates = {
    open: boolean;
    title: string,
    year: number,
    duration: number,
    description: string,
    addMovie: boolean,
    currentMovie: any;
    setTitle: (e: any) => any;
    setYear: (e:any) => any;
    setDuration: (e:any) => any;
    setDescription: (e:any) => any
}
 
class EditMovie extends React.Component<editMovieProps, editMovieStates> {
    constructor(props: editMovieProps) {
        super(props);
        this.state = {
            open: true,
            title: '',
            year: 0,
            duration: 0,
            description: '',
            addMovie: true,
            currentMovie: '',
            setTitle: (e) => {
                this.setState({
                  title: e
                })
            },
            setYear: (e) => {
                this.setState({
                  year: e
                })
            },
            setDuration: (e) => {
                this.setState({
                  duration: e
                })
            },
            setDescription: (e) => {
                this.setState({
                  description: e
                })
            },
        };
    }


componentDidMount() {
    // this.fetchCurrentMovie()
    // console.log(this.props.movieId)
}



    handleSubmit = (e:any) => {
        
        console.log(this.props.movieId)
        e.preventDefault();
        fetch(`http://localhost:3500/movie/${this.props.movieId}`, {
            method: 'PUT',
            body: JSON.stringify({
                movie: {
                    title: this.state.title,
                    year: this.state.year,
                    duration: this.state.duration,
                    description: this.state.description,
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                this.state.setTitle('')
                this.state.setYear(0)
                this.state.setDuration(0)
                this.state.setDescription('')
                this.props.fetchMyMovies()
                this.handleClose()
    
            })
    }
    
    handleClose = () => {
        this.setState({open: false})
        this.props.editMovieOff()
    }

    //  fetchCurrentMovie = async () => {
    //     await fetch(`http://localhost:3500/movie/${this.props.movieId}`, {
    //         method: 'GET',
    //         headers: new Headers({
    //             'Content-Type': 'application/json',
    //             'Authorization': this.props.sessionToken
    //         })
    //     }) .then((movie) => movie.json())
    //        .then((movieData) => {
    //             this.setState({
    //                 currentMovie: movieData
    //             })
    //             console.log(movieData)
    //             console.log(this.state.currentMovie.title)
    //             this.setState({open : true})
    //        }) .catch (
    //            (err) => console.log(err)
    //        )
    // }



    dialogStyle = {
        root: {
            alignItems:'center'
        }
    }
    render() { 
        return (  
            <Dialog open={this.state.open} style={this.dialogStyle.root}>
                <DialogTitle>Edit your Movie! </DialogTitle>
                <DialogContent >
                    <FormControl >
                        <InputLabel htmlFor='title'>Title</InputLabel>
                        <Input id='title' onChange={(e)=> this.state.setTitle(e.target.value)}/>
                    </FormControl>
                    </DialogContent>
                    <DialogContent >
                    <FormControl>
                        <InputLabel htmlFor='year'>Year</InputLabel>
                        <Input id='year' onChange={(e)=> this.state.setYear(e.target.value)}/>
                    </FormControl>
                    </DialogContent>
                    <DialogContent >
                    <FormControl>
                        <InputLabel htmlFor='duration'>Duration</InputLabel>
                        <Input id='duration' onChange={(e)=> this.state.setDuration(e.target.value)}/>
                    </FormControl>
                    </DialogContent>
                    <DialogContent >
                    <FormControl>
                        <InputLabel htmlFor='description'>Description</InputLabel>
                        <Input id='description' onChange={(e)=> this.state.setDescription(e.target.value)}/>
                    </FormControl>
                    </DialogContent>
                    <DialogContent >
                    <Button onClick ={this.handleClose}>Cancel</Button>
                    <Button type='submit' onClick={this.handleSubmit}>Confirm</Button>
                </DialogContent>
            </Dialog>
        );
    }
}
 
export default EditMovie;