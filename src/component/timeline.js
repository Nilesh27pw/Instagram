import React, { Component } from 'react';
import '../App.css'
import PS1 from '../component/pratiksha1.jpeg'
import PS2 from '../component/pratiksha2.jpeg'
import P1 from '../component/pratik1.jpeg'
import P2 from '../component/pratik2.jpeg'
import R1 from '../component/rutu1.jpeg'
import R2 from '../component/rutu2.jpeg'
import N1 from '../component/nilu1.jpeg'
import N2 from '../component/nilu2.jpeg'




class timeline extends Component {
    constructor(props) {
        super(props)
        this.state={
            LikeIncremet: 0,
            LikeIncremet2: 0,
            LikeIncremet3: 0,
            LikeIncremet4: 0,
            LikeIncremet5: 0,
            LikeIncremet6: 0,
            LikeIncremet7: 0,
            LikeIncremet8: 0,
            

            hasTrue1:'false',
            hasTrue2:'false',
            hasTrue3:'false',
            hasTrue4:'false',
            hasTrue5:'false',
            hasTrue6:'false',
            hasTrue7:'false',
            hasTrue8:'false',
        };
        
    }
   
    changeColor=()=>{
             this.setState({
           hasTrue1:'true',
           LikeIncremet:this.state.LikeIncremet +1
             });
    }
    changeColor2=()=>{
        this.setState({
      hasTrue2:'true',
      LikeIncremet2:this.state.LikeIncremet2 +1
        });
    }
   changeColor3=()=>{
    this.setState({
  hasTrue3:'true',
  LikeIncremet3:this.state.LikeIncremet3 +1
    });
    }   
   changeColor4=()=>{
    this.setState({
  hasTrue4:'true',
  LikeIncremet4:this.state.LikeIncremet4 +1
    });
}
changeColor5=()=>{
    this.setState({
  hasTrue5:'true',
  LikeIncremet5:this.state.LikeIncremet5 +1
    });
}
changeColor6=()=>{
this.setState({
hasTrue6:'true',
LikeIncremet6:this.state.LikeIncremet6 +1
});
}
changeColor7=()=>{
this.setState({
hasTrue7:'true',
LikeIncremet7:this.state.LikeIncremet7 +1
});
}   
changeColor8=()=>{
this.setState({
hasTrue8:'true',
LikeIncremet8:this.state.LikeIncremet8 +1
});
}
 
    render() {
        var n1='',n2='',r1='',r2='',ps1='',ps2='',prs1='',prs2=''
              
        if(this.state.hasTrue1==='true'){
         n1=<div><svg aria-label="Unlike" class="_8-yf6" fill="#ed4956" height="24" viewBox="0 0 48 48" width="24">
         <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z">
         </path>
     </svg></div>
     }
     else{
         n1=<div>
             <svg aria-label="Like" class="_8-yf6 " fill="#262626" height="24" viewBox="0 0 48 48" width="24">
                 <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z">
                 </path>
         
                </svg>
         </div>
     }


     if(this.state.hasTrue2==='true'){
        n2=<div><svg aria-label="Unlike" class="_8-yf6" fill="#ed4956" height="24" viewBox="0 0 48 48" width="24">
        <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z">
        </path>
    </svg></div>
    }
    else{
        n2=<div>
            <svg aria-label="Like" class="_8-yf6 " fill="#262626" height="24" viewBox="0 0 48 48" width="24">
                <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z">
                </path>
        
               </svg>
        </div>
    }
    if(this.state.hasTrue3==='true'){
        r1=<div><svg aria-label="Unlike" class="_8-yf6" fill="#ed4956" height="24" viewBox="0 0 48 48" width="24">
        <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z">
        </path>
    </svg></div>
    }
    else{
        r1=<div>
            <svg aria-label="Like" class="_8-yf6 " fill="#262626" height="24" viewBox="0 0 48 48" width="24">
                <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z">
                </path>
        
               </svg>
        </div>
    }
    if(this.state.hasTrue4==='true'){
        r2=<div><svg aria-label="Unlike" class="_8-yf5" fill="#ed4956" height="24" viewBox="0 0 48 48" width="24">
        <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z">
        </path>
    </svg></div>
    }
    else{
        r2=<div>
            <svg aria-label="Like" class="_8-yf5" fill="#262626" height="24" viewBox="0 0 48 48" width="24">
                <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z">
                </path>
        
               </svg>
        </div>
    }
    if(this.state.hasTrue5==='true'){
        ps1=<div><svg aria-label="Unlike" class="_8-yf5" fill="#ed4956" height="24" viewBox="0 0 48 48" width="24">
        <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z">
        </path>
    </svg></div>
    }
    else{
        ps1=<div>
            <svg aria-label="Like" class="_8-yf5" fill="#262626" height="24" viewBox="0 0 48 48" width="24">
                <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z">
                </path>
        
               </svg>
        </div>
    }
    if(this.state.hasTrue6==='true'){
        ps2=<div><svg aria-label="Unlike" class="_8-yf5" fill="#ed4956" height="24" viewBox="0 0 48 48" width="24">
        <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z">
        </path>
    </svg></div>
    }
    else{
        ps2=<div>
            <svg aria-label="Like" class="_8-yf5" fill="#262626" height="24" viewBox="0 0 48 48" width="24">
                <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z">
                </path>
        
               </svg>
        </div>
    }
    if(this.state.hasTrue7==='true'){
        prs1=<div><svg aria-label="Unlike" class="_8-yf5" fill="#ed4956" height="24" viewBox="0 0 48 48" width="24">
        <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z">
        </path>
    </svg></div>
    }
    else{
        prs1=<div>
            <svg aria-label="Like" class="_8-yf5" fill="#262626" height="24" viewBox="0 0 48 48" width="24">
                <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z">
                </path>
        
               </svg>
        </div>
    }
    if(this.state.hasTrue8==='true'){
        prs2=<div><svg aria-label="Unlike" class="_8-yf5" fill="#ed4956" height="24" viewBox="0 0 48 48" width="24">
        <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z">
        </path>
    </svg></div>
    }
    else{
        prs2=<div>
            <svg aria-label="Like" class="_8-yf5" fill="#262626" height="24" viewBox="0 0 48 48" width="24">
                <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z">
                </path>
        
               </svg>
        </div>
    }
        return (
          <div>
            <div className="App">
                
                <div id="Nilu" className='bq' style={{border:'1px solid grey', marginRight:690}}>nilu_2710 
                
                  <div><img src={N1} alt="nilesh pic" length="500" width="500" height="500"/></div>
                   <span class="FY9nT fr66n">
                    <button class="wpO6b" type="button" onClick={this.changeColor}>
                        {n1}<div>{this.state.LikeIncremet}Likes</div>
                    </button>
                </span>
              </div><br/>

               

                 <div className='bq' style={{border:'1px solid grey', marginRight:690}}> rutuja_2803
                 <div><img src={R1} alt="rutu pic" length="500" width="500" height="500"/></div>
                   <span class="FY9nT fr66n">
                    <button class="wpO6b" type="button" onClick={this.changeColor3}>
                      {r1}<div>{this.state.LikeIncremet3}Likes</div>
                    </button>
                   </span>
                 </div><br/>

                 <div className='bq' style={{border:'1px solid grey', marginRight:690}}>pratii_s05
                 <div><img src={PS1} alt="PRATI pic" length="500" width="500" height="500"/></div>
                   <span class="FY9nT fr66n">
                    <button class="wpO6b" type="button" onClick={this.changeColor5}>
                      {ps1}<div>{this.state.LikeIncremet5}Likes</div>
                    </button>
                   </span>
                 </div><br/>


                 <div className='bq' style={{border:'1px solid grey', marginRight:690}}>rutuja_2803
                 <div><img src={R2} alt="rutu pic" length="500" width="500" height="500"/></div>
                   <span class="FY9nT fr66n">
                    <button class="wpO6b" type="button" onClick={this.changeColor4}>
                      {r2}<div>{this.state.LikeIncremet4}Likes</div>
                    </button>
                   </span>
                 </div><br/>

                 <div className='bq' style={{border:'1px solid grey', marginRight:690}}>pratik08_
                 <div><img src={P1} alt="PRATI pic" length="500" width="500" height="500"/></div>
                   <span class="FY9nT fr66n">
                    <button class="wpO6b" type="button" onClick={this.changeColor7}>
                      {prs1}<div>{this.state.LikeIncremet7}Likes</div>
                    </button>
                   </span>
                 </div><br/>

                 <div className='bq' style={{border:'1px solid grey', marginRight:690}}>pratii_s05
                 <div><img src={PS2} alt="PRATI pic" length="500" width="500" height="500"/></div>
                   <span class="FY9nT fr66n">
                    <button class="wpO6b" type="button" onClick={this.changeColor6}>
                      {ps2}<div>{this.state.LikeIncremet6}Likes</div>
                    </button>
                   </span>
                 </div><br/>

                
                 <div className='bq' style={{border:'1px solid grey', marginRight:690}}>pratik08_
                 <div><img src={P2} alt="PRATI pic" length="500" width="500" height="500"/></div>
                   <span class="FY9nT fr66n">
                    <button class="wpO6b" type="button" onClick={this.changeColor8}>
                      {prs2}<div>{this.state.LikeIncremet8}Likes</div>
                    </button>
                   </span>
                 </div><br/>
                 <div className='bq' style={{border:'1px solid grey', marginRight:690}}> nilu_2710
                 <div><img src={N2} alt="nilesh pic" length="500" width="500" height="500"/></div>
                   <span class="FY9nT fr66n">
                    <button class="wpO6b" type="button" onClick={this.changeColor2}>
                      {n2}<div>{this.state.LikeIncremet2}Likes</div>
                    </button>
                   </span>
                 </div><br/>
            </div>
          </div>
           
        );
    }
}

export default timeline;