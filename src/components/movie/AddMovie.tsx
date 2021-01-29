import React from 'react';

import { Button, Dialog, DialogContent, DialogTitle, FormControl, Input, InputLabel } from '@material-ui/core';


type AddMovieProps = {
    sessionToken: string
    addMovie: boolean
    fetchMovies: () => void
    addMovieOff: () => void
}
 
type AddMovieStates = {
 open: boolean;
 title: string,
 year: number,
 duration: number,
 description: string,
 addMovie: boolean,
 setTitle: (e: any) => any;
 setYear: (e:any) => any;
 setDuration: (e:any) => any;
 setDescription: (e:any) => any
//  onClose: (e:EventListener) => void;
}
 
class AddMovie extends React.Component<AddMovieProps, AddMovieStates> {

    constructor(props: AddMovieProps) {
        super(props);
        this.state = {
            open: false,
            title: '',
            year: 0,
            duration: 0,
            description: '',
            addMovie: true,
            // onClose: (e:EventListener) => void;
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

handleSubmit = (e:any) => {
    e.preventDefault();
    fetch(`http://localhost:3500/movie/create`, {
        method: 'POST',
        body: JSON.stringify({
            movie: {
                title: this.state.title,
                year: this.state.year,
                duration: this.state.duration,
                description: this.state.description,
                //userId: this.state.user.id
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
            this.props.fetchMovies()
            this.handleClose()

        })
}
   


    handleOpen = () => {
        this.setState({open:true})
    }
    handleClose = () => {
        this.setState({open:false})
        this.setState({addMovie : false})
        this.props.addMovieOff()
    }

    componentDidMount() {
        this.setState({open:true})
    }

    // addMovieOff = () => {
        
    // }
    dialogStyle = {
        root: {
            alignItems:'center'
        }
    }


    render() { 

        return (  

            <Dialog open={this.state.open} style={this.dialogStyle.root}>
                <DialogTitle>Add A Movie!</DialogTitle>
                <DialogContent >
                    <FormControl >
                        <InputLabel htmlFor='title'>Title</InputLabel>
                        <Input id='title' onChange={(e)=> this.state.setTitle(e.target.value)}/>
                    </FormControl>
                    </DialogContent>
                    <DialogContent >
                    <FormControl>
                        <InputLabel htmlFor='year'>Year</InputLabel>
                        <Input id='year'onChange={(e)=> this.state.setYear(e.target.value)}/>
                    </FormControl>
                    </DialogContent>
                    <DialogContent >
                    <FormControl>
                        <InputLabel htmlFor='duration'>Duration</InputLabel>
                        <Input id='duration'onChange={(e)=> this.state.setDuration(e.target.value)}/>
                    </FormControl>
                    </DialogContent>
                    <DialogContent >
                    <FormControl>
                        <InputLabel htmlFor='description'>Description</InputLabel>
                        <Input id='description'onChange={(e)=> this.state.setDescription(e.target.value)}/>
                    </FormControl>
                    </DialogContent>
                    <DialogContent >
                    <Button onClick ={this.handleClose}>Cancel</Button>
                    <Button type='submit' onClick={this.handleSubmit}>Add Movie</Button>
                </DialogContent>
            </Dialog>
        );
    }
}
 
export default AddMovie;