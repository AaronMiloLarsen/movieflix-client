import React from 'react'

export interface Props {
    
}
 
export interface State {
    
}
 
class AddComments extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }
    render() { 
        return (  
            <div>AddComments</div>
        );
    }
}
 
export default AddComments;