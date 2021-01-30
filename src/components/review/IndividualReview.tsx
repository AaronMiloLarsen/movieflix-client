import { Button, DialogContent } from '@material-ui/core';
import React from 'react'

type IndividualReviewProps = {
    reviews:any
    sessionToken: string
    addCommentOn: (e:any) => void
}

type IndividualReviewStates = {
    
}
 
class IndividualReview extends React.Component<IndividualReviewProps, IndividualReviewStates> {
    constructor(props: IndividualReviewProps) {
        super(props);
        this.state = {  };
    }
    render() {  
        return (
            <div>

            <DialogContent dividers 
            key={this.props.reviews.id}
            >
                    Title: {this.props.reviews.title}
                    <br />
                    Emotion: {this.props.reviews.emotion}
                    <br />
                    Review: {this.props.reviews.review}
                    <br />
                    Author: {this.props.reviews.author}
                    <br/>
                    <Button onClick={this.props.addCommentOn}>Add Comment</Button>
                    <Button>View All Comments</Button>
            </DialogContent>
           </div>
         );
    }
}
 
export default IndividualReview;