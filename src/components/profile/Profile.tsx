import React from 'react'


type ProfileProps = {

}

type ProfileStates = {
    myMovies: any;
    myReviews: any;
    myComments: any
}
 
class Profile extends React.Component<ProfileProps, ProfileStates> {
    constructor(props: ProfileProps) {
        super(props);
        this.state = {
            myMovies: [],
            myReviews: [],
            myComments: []
        };
    }

//GOING TO NEED: FETCH MOVIES/REVIEWS/COMMENT BY USERID, INCLUDING ON SERVER
//BASICALLY MAKE A TOGGLE/BUTTONS TO TRIGGER EACH ONE
//ADD EDIT/DELETE BUTTONS TO EVERY ITEM

//FETCH LAND
// storeId = () => {
//     localStorage.setItem('userId', )
// }

//NEED TO FIGURE OUT HOW TO GRAB USER ID FOR SEARCH

fetchMyMovies = () => {
    console.log()
    fetch(`http://localhost:3500/movie/mymovies/`, {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('token')|| ''
                })
            }) .then((movie) => movie.json())
               .then((movieData) => {
                    this.setState({
                        myMovies: movieData
                    })
                    console.log(movieData)
               }) .catch (
                   (err) => console.log(err)
               )
}

fetchMyReviews = () => {
    console.log()
    fetch(`http://localhost:3500/review/myreviews/`, {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('token')|| ''
                })
            }) .then((review) => review.json())
               .then((reviewData) => {
                    this.setState({
                        myReviews: reviewData
                    })
                    console.log(reviewData)
               }) .catch (
                   (err) => console.log(err)
               )
}

fetchMyComments = () => {
    console.log()
    fetch(`http://localhost:3500/comments/mycomments/`, {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('token')|| ''
                })
            }) .then((comment) => comment.json())
               .then((commentData) => {
                    this.setState({
                        myComments: commentData
                    })
                    console.log(commentData)
               }) .catch (
                   (err) => console.log(err)
               )
}

    render() {

        return ( 
            <div>
                <h1>Your Profile!</h1>
            </div>
         );
    }
}
 
export default Profile ;
