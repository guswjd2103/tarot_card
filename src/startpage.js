import React, {Component} from 'react';
import {Link} from "react-router-dom";

class StartPage extends Component{
    render(){
        return(
        
                <div>
                    <div id = "startpage">
                        <Link to="/selectcard">타로 시작하기</Link>
                    </div>

                </div>
        )
    }
}

export default StartPage;