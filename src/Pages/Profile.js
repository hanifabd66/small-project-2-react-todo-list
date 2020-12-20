import React from "react"
import {Link} from "react-router-dom"

class Profile extends React.Component{
goBack(){
    this.props.history.goBack();
}
    render(){
        return(
            <div>
                <p>Profile Page</p> 
                <br/>
                {/* <a href="/...">To Profile Page</a> */}
                {/* <Link to="/counter"> 
                    <h3>To Counter Page</h3></Link> */}
                <Link to="/home">
                <button>Back to Home Page </button></Link>
                <br/>
                <button onClick ={() => this.goBack()}>Go Back</button>

            </div>
        );
    }
}

export default Profile;