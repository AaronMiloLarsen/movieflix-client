import { Grid, Typography } from "@material-ui/core";
import React from "react";

 
class About extends React.Component {
   

    render() { 
        return (  
            <>
            <Grid
            alignItems="center"
            justify="center">
                <Typography>
                    <h3>About</h3>
                    </Typography>
                    <Typography>
                    <br/>
                    <h2>The story behind the app..</h2>  
                    </Typography>
                
                <Typography>
                    <p>Hello all! Welcome to MovieFlix!</p>
                    <br/>
                    <p>Movieflix was created to allow for the most indepth movie review action on the light side of the web! All you have to do is:</p>
                    
                    <ul>Watch</ul>
                    <ul>Snap</ul>
                    <ul>Share</ul>

                    <p>Here at Movieflix we want to add the dynamic of gauging your reaction directly after a movie ends! </p>
                    <p> Like tears after the Nootbook or Homeword Bound</p>
                    <p> Anger after yet another Marvel movie cliffhanger!</p>
                    <p> Joy like when Andy Dufrane meets up with his best friend in Shawshank Redemption!</p>
                    <p>With help of AI all you have to do is upload your picture and we'll give you a score based on the picture you take!</p>
                    <p>That's only one way to have fun here at Movieflix! Create a free account and get watching!</p>

                    </Typography>
            </Grid>
            </>
        );
    }
}
 
export default About;