import { Button, Dialog, DialogActions, DialogContent } from '@material-ui/core';
import React from 'react'

import CancelIcon from '@material-ui/icons/Cancel';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

type DeleteMovieProps = {
    deleteMovieOff: () => void;
    sessionToken: string;
    fetchMyMovies: () => void;
    myMovies: any;
    movieId: number;
}

type DeleteMovieStates = {
    open: boolean;

}

class DeleteMovie extends React.Component<DeleteMovieProps, DeleteMovieStates> {
    constructor(props: DeleteMovieProps) {
        super(props);
        this.state = {
            open: true
        };
    }

    handleDelete = (e: any) => {
        fetch(`http://localhost:3500/movie/${this.props.movieId}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        })
            .then(response => response.json());
        console.log('Movie was deleted.');
        this.props.deleteMovieOff()
        this.props.fetchMyMovies();
    }


    handleClose = () => {
        this.setState({ open: false })
        this.props.deleteMovieOff()
    }

    render() {
        return (
            <>
                <Dialog open={this.state.open}>
                    <DialogContent>Delete this Movie?</DialogContent>
                    <DialogActions>
                        <Button
                            startIcon={<CancelIcon />}
                            onClick={this.handleClose}>Cancel</Button>
                        <Button
                            startIcon={<DeleteForeverIcon />}
                            onClick={this.handleDelete}>Delete</Button>
                    </DialogActions>
                </Dialog>
            </>
        );
    }
}

export default DeleteMovie;