import React from 'react'

export interface Props {
    
}
 
export interface State {
    
}
 
class Header extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }
    render() { 
        return (  
            <div className="header">
                <h1> MovieFlix! </h1>
            </div>
        );
    }
}
 
export default Header;