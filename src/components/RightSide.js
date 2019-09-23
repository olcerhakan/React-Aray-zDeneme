import React, { Component } from 'react';
import './RightSide.css';
import women from './img/Women.png';
import man from './img/Man.png';
import { Button } from 'reactstrap';

const Rightside = props => (
    


    <header className="Rightside">
    <div className="Rightside__logo" >
        <i class="far fa-bell" ><img src={man}   alt={"man"} /><a href="/"><b>&nbsp;&nbsp;&nbsp;Boniface Esanji</b></a></i>  
    </div>

        <nav className="Rightside__navigation">
            
            
            <div className= "Rightside__navigation-items">
            
               <ul class="listeleme">
                    
                    <li> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img src={women}   alt={"women"} /></li>
                    <hr></hr>
                    <li><div id="esnekKutuKapsul1">
                    <div class="esnekKutu1">
                        
                        <b>Welcome to SMART</b>
                        <p>Goal setting and goal management software for high achievers.</p>
                        
                        <Button color="warning">Get Started</Button>
                    </div>
                </div>   </li>   
                    

                    
                </ul>
                
            </div>
        </nav>

        

        
    </header>
);




export default Rightside;

