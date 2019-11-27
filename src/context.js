import React, { Component } from 'react'

const UserContext = React.createContext();
//Provider ve consider 

export class UserProvider extends Component {
    state = {
        users : [
          {
            id : 1,
            name : "Alper Çalışkan",
            department : "Computer Science",
            salary : "5000"
          },
          {
            id : 2,
            name : "Merve Yıldırım",
            department : "Architecture",
            salary : "4000"
          },
          {
            id : 3,
            name : "Cem Özer",
            department : "Graphic Designer",
            salary : "3000"
          }
    
        ]
      }
    
    render() {
        return (
           <UserContext.Provider value = {this.state}>
               {this.props.children}
           </UserContext.Provider>
        )
    }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;

