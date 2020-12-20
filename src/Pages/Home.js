import React from "react"
import {Link, withRouter} from "react-router-dom"

class Home extends React.Component{
// function Home (){
    // this is for handle Link 
    goBack = () =>{
        this.props.history.goBack();
    }

    render(){
        console.log(this.props, 'l')
        return(
            <div>
                <p>Home Page</p>
                <br/>
                <Link to="/profile">
                <button>To Profile {('->')}</button></Link>
                <br/>
                <button onClick={() => this.goBack() }>Go Back</button> <br/>
               {/* <Link to= {`${this.props.match.url}/testing`}>
               To Testing</Link> */}
            </div>
        );
    }
}

export default withRouter(Home)