import React,{Component} from 'react';

const UserContext = React.createContext();
//Provider(sağlayıcı),Consumer(Tüketici)

export class UserProvider extends Component{
    state = {
        users: [
          {
            id: 1,
            isim: "Hakan ÖLÇER",
            maas: "3500",
            bolum: "IT"
          }
        ]
      }
    
    render() {

        return(
           <UserContext.Provider value={this.state}>
                {this.props.children}   
           </UserContext.Provider>
        )
    }
}
const UserConsumer = UserContext.Consumer;

export default UserConsumer;