import React, {Component} from "react";
import InWork from './../image/work.jpg'

export class NotFound extends Component{
    render() {
        return(
            <div className='justify-content-center'>
                <img src={InWork}/>
            </div>
        )
    }

}