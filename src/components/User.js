import React, { Component } from 'react'
import PropTypes from 'prop-types'

class User extends Component {

  constructor(props){
    super(props);
    this.state= {
      isVisible : false
    }
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
  
    return (
      
        <div className= "col-md-4 mb-4">
          <div className="card">
            <div className="card-header  justify-content-between">
            <i class="fas fa-search"></i>
            
            <h6 className="d-inline" onClick={this.onClickEvent} >   Search</h6>
            
            </div>
            {
              isVisible ? <div className="card-body">
              <p className="card-text"> İsim: {this.props.isim}</p>
              <p className="card-text"> Bölüm: {this.props.bolum}</p>
              </div> : null
            }
             
          </div>
  
        </div>
    )
}
}
User.defaultProps ={
  isim: "Bilgi Yok",
  maas:"Bilgi Yok",
  bolum:"Bilgi yok"
}
User.propTypes ={
  isim : PropTypes.string.isRequired,
  maas : PropTypes.string.isRequired,
  bolum: PropTypes.string.isRequired
}
export default User;
