import React, { Component } from 'react'

const UserContext = React.createContext();
//Provider ve consider 

const reducer = (state, action) => {
    switch(action.type){
        case "DELETE_USER":
            return {
                ...state,
                users : state.users.filter(users => action.payload !== users.id)
            }
        default: 
            return state
    }

}

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
    
        ],
        dispatch : action => {
            this.setState(state => reducer(state, action))
        }
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

