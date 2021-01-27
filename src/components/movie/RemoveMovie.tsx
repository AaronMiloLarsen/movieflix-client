import React from 'react'

export interface Props {
    
}
 
export interface State {
    
}
 
class RemoveMovie extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }
    render() { 
        return (  
            <div>Remove</div>
        );
    }
}
 
export default RemoveMovie;