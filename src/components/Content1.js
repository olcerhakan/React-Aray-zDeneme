import React, { Component } from 'react'
import PropTypes from 'prop-types'
import logo from './img/Graph.png'
import logo1 from './img/Cloud.png'
import man1 from './img/Man1.png'
import man2 from './img/Man2.png'
import "./Content1.css";
import {Button,ButtonGroup, Row, Col,UncontrolledButtonDropdown,DropdownToggle,DropdownItem,DropdownMenu, } from 'reactstrap';

class Content1 extends Component {

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
  }

  constructor(props){
    super(props);
    this.state= {
      isVisible : false

    }
    this.state = { cSelected: [] };

    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    
  }

  onClickEvent =(e) =>{
    this.setState({
    isVisible : !this.state.isVisible
    })
  }
  render() {

  // const{isim,bolum,maas}=this.props;  yazarsak
     const{isVisible}=this.state;
  //<li>İsim: {isim}</li>    
  //<li>Bölüm:{this.props.bolum}</li>
  //<li>Maaş:{this.props.maas} </li>  olur
  //<i class="fas fa-search"></i>
    return (
       
        <div className= "col-md-6 mb-5 mt-3">
          <div className="card">
            <div className="card-header  justify-content-between">
              <p ><b>   What is SMART Planning?</b>
                <p>Business goals should always be Specific,  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                
                                 <a href="/" ><img src={logo}   alt={"logo"} /></a>      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;              
                                  <a href="/"><img src={logo1}  alt={"logo1"} /></a> </p>
                <p>Meausable and Achievable.</p>
                <p className="d-inline" onClick={this.onClickEvent} ><a href="/">learn more ></a></p>
               </p>
            
            </div>
            {
              isVisible ? <div className="card-body">
              <p className="card-text"> İsim: {this.props.isim}</p>
              <p className="card-text"> Bölüm: {this.props.bolum}</p>
              </div> : null
            }
             
          </div>

          <Row >
            <Col sm="6" >
            
            <ButtonGroup> 
            <p>5-11 August {this.state.rSelected}</p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button color="warning" onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}> * </Button>
            <Button color="warning" onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}> > </Button>
            
            </ButtonGroup>
            
            </Col>
            <Col sm="6"  >
              <UncontrolledButtonDropdown className="week">
                <DropdownToggle caret>
                  Week
                </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>1.HAFTA</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>2.HAFTA</DropdownItem>
                  </DropdownMenu>
                </UncontrolledButtonDropdown>
            </Col>
          </Row>

  
         

          <div id="esnekKutuKapsul">
            <div class="esnekKutu">
                <div className= "col-md-12 mb-4 mt-6 ">
                    <div className="card">
                        <div className="card-header  justify-content-between">
    
                           <p >
                            <b>   Goals achieved  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                            </b><img src={man1}   alt={"man1"} />
                            <p><i class="fas fa-check"></i>Market share </p>
                            <p><i class="fas fa-check"></i>Customer service</p>
                            <p><i class="fas fa-check"></i>Increase efficiency</p> 
                           </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="esnekKutu">
                <div className= "col-md-12 mb-4 mt-6 ">
                    <div className="card1">
                        <div className="card-header1  justify-content-between">
            
                            <p ><b> <img src={man2}   alt={"man2"} />  SMART Progress
                            </b>      
                            </p>
                         </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
    )
  }
}
Content1.defaultProps ={
  isim: "Bilgi Yok",
  maas:"Bilgi Yok",
  bolum:"Bilgi yok"
}
Content1.propTypes ={
  isim : PropTypes.string.isRequired,
  maas : PropTypes.string.isRequired,
  bolum: PropTypes.string.isRequired
}



export default Content1;
