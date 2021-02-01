import React from 'react'

import EditComment from '../comment/EditComment'
import DeleteComment from '../comment/DeleteComment'

import { Button, ButtonGroup, Card, CardActions, CardContent, Grid, List } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

type MyCommentsProps = {
    // myComments: any;
    // fetchMyComments: () => void
    sessionToken: string
}

type MyCommentsStates = {
    editCommentOn: boolean;
    myComments: any;
    commentId: number;
    deleteCommentOn: boolean
}

class MyComments extends React.Component<MyCommentsProps, MyCommentsStates> {
    constructor(props: MyCommentsProps) {
        super(props);
        this.state = {
            editCommentOn: false,
            myComments: [],
            commentId: 0,
            deleteCommentOn: false
        };
    }

    componentDidMount() {
        this.fetchMyComments();
    }

    fetchMyComments = () => {
        console.log()
        fetch(`http://localhost:3500/comment/mycomments/${localStorage.getItem('userId')}`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token') || ''
            })
        }).then((comment) => comment.json())
            .then((commentData) => {
                this.myCommentsResults(commentData)
                console.log(commentData)
            }).catch(
                (err) => console.log(err)
            )
    }

    myCommentsResults = (allMyComments: []) => {
        console.log("My Comments: ", allMyComments)
        this.setState({myComments: allMyComments })
        // this.setState({openComments: true})
    }

    editCommentOff = () => {
        this.setState({editCommentOn: false})
    }

    deleteCommentOff = () => {
        this.setState({deleteCommentOn: false})
    }

    //possibly pass review.title and movie. title in to reference what your editing/deleting
    render() {
        return (
            <div>
                <h3>My Comments</h3>
                {this.state.myComments.length > 0 ? (this.state.myComments?.map((comments:any, index:number) => (
                    <Grid
                        key={comments.id}
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
                                commentId: comments.id
                            })
                            console.log(this.state.commentId)}}>
                            <CardContent>
                                {/* <h4>Comment for Review: {this.props.myComments[index].id}</h4>  */}
                                <List>
                                    <li>
                                        Comment: {this.state.myComments[index].comment}
                                    </li>
                                    <li>
                                        Author: {this.state.myComments[index].author}
                                    </li>
                                </List>
                                <CardActions >
                                    <Button 
                                    onClick={() => this.setState({editCommentOn: true})}
                                    startIcon={<EditIcon />}
                                    > Edit </Button>
                                    <Button 
                                    onClick={() => this.setState({deleteCommentOn: true})}
                                    startIcon={<DeleteForeverIcon />}
                                    > Delete </Button>
                                </CardActions>
                            </CardContent>
                        </Card>

                        {this.state.editCommentOn ? 
                            <EditComment
                            editCommentOff={this.editCommentOff}
                            sessionToken={this.props.sessionToken}
                            fetchMyComments={this.fetchMyComments}
                            myComments={this.state.myComments}
                            commentId={this.state.commentId}
                            /> : <> </>}

                            {this.state.deleteCommentOn ? 
                            <DeleteComment
                            deleteCommentOff={this.deleteCommentOff}
                            sessionToken={this.props.sessionToken}
                            fetchMyComments={this.fetchMyComments}
                            myComments={this.state.myComments}
                            commentId={this.state.commentId}
                            /> : <> </>}
                    </Grid>

                )
                )) : (<>No Comments!</>)
                }
            </div>
        );
    }
}

export default MyComments;