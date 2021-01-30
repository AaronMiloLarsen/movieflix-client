import React from 'react';


import {  Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';



type ViewCommentsProps = {
    sessionToken: string;
    reviewId: number;
    viewCommentsOff: () => void;

}

type ViewCommentsStates = {
    openComments: boolean;
    comments: any;
}
 
 
class ViewComments extends React.Component<ViewCommentsProps, ViewCommentsStates> {
    constructor(props: ViewCommentsProps) {
        super(props);
        this.state = {
            openComments: false,
            comments:[]
        };
    }


   

    componentDidMount() {
        if (localStorage.getItem('token')) {
            this.fetchComments();
            }
        }

    fetchComments = () => {
        
        console.log(this.props.reviewId)
        fetch(`http://localhost:3500/comment/allcomments/${this.props.reviewId}`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')|| ''
            })
        }).then((comments) => comments.json())
           .then((commentsData) => {
                this.setAllComments(commentsData)
                console.log(commentsData)
                // this.setState({openReviews:true})
           }).catch (
               (err) => console.log(err)
           )
    }

    setAllComments = (allComments:[]) => {
        console.log("All Comments: ", allComments)
        this.setState({comments: allComments})
        this.setState({openComments: true})
    }


   
        // console.log(this.state.reviews)


    style = {
        dialog: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }, 
        largeIcon: {
            height:'200px',
            width:'200px'
        }
    }
    
    render() { 
        
        return ( 
            <div>
                <Dialog open={this.state.openComments} style={this.style.dialog}>
                <DialogTitle>
                Viewing all Comments for 
                {/* {this.props.reviewTitle} */}
                {/* NEED TO PASS DOWN REVIEW TITLE AS WELL */}
                </DialogTitle>

                {this.state.comments.length > 0 ? (this.state.comments.map((event:any, index:any) => (
                <DialogContent dividers 
                key={this.state.comments.id}
                >
                        Comment: {this.state.comments[index].comment}
                        <br />
                        Author: {this.state.comments[index].author}
                        <br/>
                </DialogContent>
                ))
                 ) : (
                    <DialogContent>
                        <SentimentVeryDissatisfiedIcon style={this.style.largeIcon}/>
                        <br/>
                        No comments Available!
                        </DialogContent>
                )}
                <DialogActions style={this.style.dialog}>
                    <Button><CloseIcon onClick={(e:any)=> {this.props.viewCommentsOff()}}/></Button>
                </DialogActions>
              
                </Dialog>
                
            </div>
         );
    }
}
 
export default ViewComments;

// COMMENT GRAVEYARD //

  /* <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        >
                            This is a test
                            <br />
                    </AccordionSummary>
                    <AccordionDetails>
                            This is test of the testing
                            <Button>Test Button</Button>
                            <Button>Test Button</Button>
                    </AccordionDetails>
                </Accordion> */

                  //   <DialogContent dividers key={this.state.reviews.id}>
                //     Title: {this.state.reviews[index].title}
                //     <br />
                //     Emotion: {this.state.reviews[index].emotion}
                //     <br />
                //     Review: {this.state.reviews[index].review}
                //     <br />
                //     Author: {this.state.reviews[index].author}
                //     <br/>
                //     <Button onClick={this.addCommentOn}>Add Comment</Button>
                //     <Button>View All Comments</Button>
                //   </DialogContent>

                 // reviewMapper = () => {
    //     this.state.reviews?.map((reviews:any,index:number) => {
    //         return (
    //             <div key = {reviews.id}>
    //             <IndividualReview
    //             reviews={reviews}                       
    //             sessionToken = {this.props.sessionToken}
    //             addCommentOn = {this.addCommentOn}
    //             // fetchMovies={this.fetchMovies}  
    //             />
    //             </div>
    //         )
    //     })
    // }