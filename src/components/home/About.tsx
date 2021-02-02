import { Grid } from "@material-ui/core";
import React from "react";

 
class About extends React.Component {
   

    render() { 
        return (  
            <Grid
            alignItems="center"
            justify="center">
                <div>
                    <h3>About</h3>
                    <br/>
                    <h2>The story behind the man..</h2>  
                </div>
                <div>
                    <p>Hello! All welcome to MovieFlix!</p>
                    <br/>
                    <p>Movieflix was created to allow for the post indepth movie review action on the light side of the web! All you have to do is:</p>
                    
                    <ul>Watch</ul>
                    <ul>Review</ul>
                    <ul>Snap</ul>
                    <ul>Share</ul>

                    <p>Here at Movieflix we want to add the dynamic of gauging your reaction directly after a movie ends! </p>
                    <p> Like tears after the Nootbook or Homeword Bound</p>
                    <p> Anger after yet another Marvel movei cliffhanger!</p>
                    <p> Joy like when Andy Dufrane meets up with his best friend in ShawShank Redemption!</p>
                    <p>With help of AI all you have to do is upload your picture and we'll give you a score based on the picture you take!</p>
                    <p>That's only one way to have fun here at Movieflix! Create a free account and get watching!</p>


                </div>
            </Grid>
        );
    }
}
 
export default About;