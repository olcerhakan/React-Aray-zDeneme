import React, { Component } from 'react'
import User from "./User";
import UserConsumer from "./context";

//const {users} = this.props;
 class Users extends Component {
    render() {
        return(
            <UserConsumer>
                {
                    value => {
                        const {users} =value;
                          return (
                                    <div>
                                        {
                                        users.map(user =>{
                                        return(
                                            <User
                                            key ={user.id}    //Virtual Dom karısmaması icin
                                            isim ={user.isim}
                                            bolum ={user.bolum}
                                            maas ={user.maas}
                                            />
                                            )      
                                        })
                                        }                   
                                    </div>
                             )
                    
                    }
                }
            </UserConsumer>
        )
        
      
    }
}
export default Users;