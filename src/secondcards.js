import React, {Component} from 'react';
import {Link} from "react-router-dom";
import backimg from './tarotcard_image/tarotcard_back.png';
import ar01 from './tarotcard_image/ar01.jpg';
import ar02 from './tarotcard_image/ar02.jpg';
import ar03 from './tarotcard_image/ar03.jpg';
import ar04 from './tarotcard_image/ar04.jpg';
import ar05 from './tarotcard_image/ar05.jpg';
import ar06 from './tarotcard_image/ar06.jpg';
import ar07 from './tarotcard_image/ar07.jpg';
import ar08 from './tarotcard_image/ar08.jpg';
import ar09 from './tarotcard_image/ar09.jpg';
import ar10 from './tarotcard_image/ar10.jpg';
import ar11 from './tarotcard_image/ar11.jpg';
import ar12 from './tarotcard_image/ar12.jpg';
import ar13 from './tarotcard_image/ar13.jpg';
import ar14 from './tarotcard_image/ar14.jpg';
import ar15 from './tarotcard_image/ar15.jpg';
import ar16 from './tarotcard_image/ar16.jpg';
import ar17 from './tarotcard_image/ar17.jpg';
import ar18 from './tarotcard_image/ar18.jpg';
import ar19 from './tarotcard_image/ar19.jpg';
import ar20 from './tarotcard_image/ar20.jpg';
import ar21 from './tarotcard_image/ar21.jpg';
import ar00 from './tarotcard_image/ar00.jpg';

import FirstCard from './firstcards.js';
import FirstCards from './firstcards.js';




console.log(backimg);

var bgColors = { "Default": "#81b71a",
                    "Blue": "#00B1E1",
                    "Cyan": "#37BC9B",
                    "Green": "#8CC152",
                    "Red": "#E9573F",
                    "Yellow": "#F6BB42",
                    "Mine": "#405360",
};



class SecondCards extends Component{
    constructor(props){
        super(props)

        this.state = {
            images : [ar00, ar01, ar02, ar03,ar04, ar05, ar06, ar07, ar08, ar09, ar10, ar11, ar12, ar13, ar14, ar15, ar16, ar17, ar18, ar19, ar20, ar21],
            backimages : [ar01, ar02, ar03,ar04, ar05, ar06, ar07, ar08, ar09, ar10, ar11, ar12, ar13, ar14, ar15, ar16, ar17, ar18, ar19, ar20, ar21],
            imageNum : props.location.state.imageNum
        }
        console.log('first!!');
        
    }

    // images = this.StaticRange.images[Math.floor(Math.random() * this.StaticRange.images.length)];
    // handleClick= () =>{
    //     this.setState({
    //         clicked: true,
    //         images : this.state.images[Math.floor(Math.random() * this.state.images.length)]
    //     })
    // }
//    imageNum =
//    this.setState({
//        images : state.images[Math.floor(Math.random() * this.state.images.length)]}
//    )

render(){
        const images = this.state.images;
        const backimages = this.state.backimages;
        const items=[];
        const imageNum = this.state.imageNum
        const imageNum2 = this.state.images[Math.floor(Math.random() * this.state.images.length)];
        console.log(imageNum2);
        console.log("One");

        for(const [index] of backimages.entries()){
            items.push(<img id="backimg2" src = {backimg} alt="BackImg" onClick = {this.imageClick}/>)
        }
        console.log("hello")
        return( 
            //const imageName = this.getImageName();
            <div style={{"backgroundColor": bgColors.Mine}} >
                <div>
                    <img id = "cardshow" src = {imageNum}/>
                    <img id = "cardshow" src = {imageNum2}/>
                </div>
                <div id = "choose"><p>이번에 선택하실카드</p><p>마지막 카드, 오늘의 점에 대한 전반적인 내용을 보여줍니다.</p></div>
                
                <div>
                    <Link
                        to = {{
                            pathname: "/thirdcards",
                            state: {
                                imageNum: imageNum,
                                imageNum2: imageNum2
                            }
                        }}
                    >
                    <div  onClick={(e) => console.log('hi')}>
                    <img id = "backimg3" src = {backimg} alt = "BackImg" onClick={this.imageClick} />
                    {items}
                    </div>
                    </Link>
                </div>
            </div>
        )
    }
}

// export const imageNum2 = 'imageNum2';
export default SecondCards;