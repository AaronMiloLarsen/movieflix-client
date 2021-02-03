import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Button, List, ListItem, ListItemText } from '@material-ui/core';
import React from 'react'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DeleteUser from './DeleteUser';


type IndividualUserProps = {
    users: any;
    fetchUsers: () => void;
    sessionToken: string;

}

type IndividualUserStates = {
    deleteUserOn: boolean
    userId: number
}

class IndividualUser extends React.Component<IndividualUserProps, IndividualUserStates> {
    constructor(props: IndividualUserProps) {
        super(props);
        this.state = {
            deleteUserOn: false,
            userId: 0
        };
    }

    deleteUserOff = () => {
        this.setState({ deleteUserOn: false })
    }

    render() {
        return (
            <div >
                <Accordion
                    onMouseEnter={e => {
                        this.setState({
                            userId: this.props.users.id
                        })
                        console.log(this.state.userId)
                    }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}>{this.props.users.firstName} {this.props.users.lastName}</AccordionSummary>
                    <AccordionDetails>
                        <List>
                            <ListItem>
                                <ListItemText>First Name: {this.props.users.firstName}</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>Last Name: {this.props.users.lastName}</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>Email: {this.props.users.email}</ListItemText>
                            </ListItem>
                        </List>
                    </AccordionDetails>
                    <AccordionActions>
                        <Button
                            onClick={() => this.setState({ deleteUserOn: true })}
                            startIcon={<DeleteForeverIcon />}
                        > Delete </Button>
                    </AccordionActions>
                </Accordion>

                {this.state.deleteUserOn ?
                    <DeleteUser
                        deleteUserOff={this.deleteUserOff}
                        sessionToken={this.props.sessionToken}
                        fetchUsers={this.props.fetchUsers}
                        users={this.props.users}
                        userId={this.state.userId}
                    /> : <> </>}
            </div>
        );
    }
}

export default IndividualUser;