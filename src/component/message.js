import React, { Component } from 'react';
import DpPratik from './pratik.jpeg';
import DpRutuja from './rutuja.jpeg';
import DpNilesh from './nilesh.jpeg';
import DpPratiksha from './pratiksha.jpeg';
import '../App.css';


import Cam from './cam.jpeg';
class Inbox extends Component{
   
    clickHandler= (e) => {
        //var message = false;
        console.log(prompt(`Type your message`));

    }

  render(){
  
  return (
    <div>
        

        <div className="ctQZg">   
            <div className="_47KiJ" >
                <img onClick = {this.clickHandler} src={DpPratik} height="100" width="100" style={{borderRadius : 70, marginTop :100, marginLeft : 0}}></img>
                <p onClick = {this.clickHandler} style={{marginLeft :15, marginTop : 120, fontSize : 30}}>pratik08_</p>
                <img src={Cam} style={{marginLeft :80, marginTop : 120,height :50, width : 100 }}></img>
                
                </div>
        </div>
        <div className="ctQZg">   
            <div className="_47KiJ" >
                <img  onClick = {this.clickHandler} src={DpRutuja} height="100" width="100" style={{borderRadius : 70,marginTop:220}}></img>
                <p  onClick = {this.clickHandler}   style={{ fontSize : 30,marginTop:240,marginLeft:15}}>rutuja_2803</p>
                <img src={Cam} style={{height :50, width : 100,marginLeft:50,marginTop:240 }}></img>
                </div>
        </div>
                <div className="ctQZg">   
            <div className="_47KiJ" >
                <img  onClick = {this.clickHandler}   src={DpNilesh} height="100" width="100" style={{borderRadius : 70,marginTop:340}}></img>
                <p   onClick = {this.clickHandler}   style={{ marginTop : 360, fontSize : 30,marginLeft:15}}>nilu_2710</p>
                <img src={Cam} style={{marginLeft :80, marginTop : 350,height :50, width : 100 }}></img>

            </div>
        </div>
        <div className="ctQZg">   
            <div className="_47KiJ">
            <img  onClick = {this.clickHandler}   src={DpPratiksha} height="100" width="100" style={{borderRadius : 70,marginTop:460}}></img>
                <p   onClick = {this.clickHandler}   style={{ marginTop : 480, fontSize : 30,marginLeft:15}}>pratii_s05</p>
                <img src={Cam} style={{marginLeft :80, marginTop : 470,height :50, width : 100 }}></img>      
            </div>
        </div>
   </div>
  );
 }
}

export default Inbox;