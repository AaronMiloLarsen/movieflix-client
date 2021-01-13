import React from 'react'

export interface Props {
    
}
 
export interface State {
    
}
 
class MovieHomePage extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }
    render() { 
        return (  
            <div>AddMovie</div>
        );
    }
}
 
export default MovieHomePage;