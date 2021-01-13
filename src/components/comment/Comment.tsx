import React from 'react'

export interface Props {
    
}
 
export interface State {
    
}
 
class RemoveComments extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }
    render() { 
        return (  
            <div>RemoveComments</div>
        );
    }
}
 
export default RemoveComments;

//most likly make this a modul to pop up after add comment button is pushed