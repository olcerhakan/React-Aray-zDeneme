import React, { Component } from 'react';
import './Side.css';
import Logo from './img/Logo.png'
import {BrowserRouter as Router,Switch,Route , Link} from 'react-router-dom';


const side = props => (
    <header className="side">
     <div className="side__logo"><img src={Logo}  alt={"Logo"} /></div>
        <nav className="side__navigation">
            <div className= "side__navigation-items">
               <ul class="listeleme">    
                    <li><a href="javascript:alert('Anasayfaya Hoşgeldiniz');">HOME</a></li>
                    <Router>
                        <li><Link to="/message"><i class="far fa-envelope"></i></Link> </li>
                        <Route path="/message" component={Message} />  
                    </Router>
                    <li><a href="http://www.stackoverflow.com"><i class="far fa-clock"></i></a></li>
                    <li><a href="/"><i class="fas fa-calendar"></i></a></li>
                    <div className= "side__navigation-itemss">
                        <li><a href="https://images.app.goo.gl/K6F4s1ULotshSYcQA"><i class="fas fa-sign-in-alt"></i></a></li>
                    </div>
                </ul>
            </div>
        </nav>
    </header>
);

const Message = () => (
    <div>
      <h8>Mesajlar</h8>
    </div>
  );

export default side;