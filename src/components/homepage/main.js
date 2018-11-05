import React, { Component, Fragment } from 'react';

// import api
import { Event } from '../../utils/api'

class Main extends Component{

    state = {
        event : [],
    }

    // componentDidMount() {
    //     Event(47220)
    //     .then( response => {
    //         console.log(response)
    //         this.setState({event: response.data.data})
    //     }) 
    // }

    render(){
      
        console.log( this.state.event)
      
        return(
            <Fragment>

                <p>main menu</p>
                
                {/* {this.state.event.map((el)=>{
                    return(
                        <div>
                         <p>{el.contactMail}</p>
                         <a href={el.accessLink} target="_blank">Site Web</a>

                        </div>
                    )
                })} */}
            

            </Fragment>
        )
    }
}


export default Main;