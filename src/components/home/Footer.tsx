import React from 'react';


export interface Props {
    
}
 
export interface State {
    
}
 
class Footer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    footerStyle = {
        root: {
            display: 'flex',
            justifyContent: 'center',
            bottom: '0px',
            width: '100%',
            height: '50px',
            backgroundColor: 'black',
            color: 'white',
        }
    }
    render() { 
        return ( 
            <div style = {this.footerStyle.root}>
                <p>This is the footer!</p>
            </div>
         );
    }
}
 
export default Footer;