import React from 'react'

export interface Props {
    
}
 
export interface State {
    
}
 
class EditMovie extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }
    render() { 
        return (  
            <div>EditMovie</div>
        );
    }
}
 
export default EditMovie;