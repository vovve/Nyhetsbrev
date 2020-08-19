import React from "react";
import Login from "./Login";
import UserRegistration from "./UserRegistration";
import StartPage from "./StartPage";
import "./App.css";
import Logout from "./Logout";
 
export default class App extends React.Component {
 constructor(props) {
   super(props);
   const user = localStorage.getItem("user");
   this.state = {
     user: user,
     isSubscribing: null,
   };
 }
 
 handleChange = (userId, isSubscribing) => {
   console.log("user subscriber callback")
   this.setState({ user: userId, isSubscribing: isSubscribing });
   localStorage.setItem("user", userId);
 }
 
 isLoggedIn = (userId) => {
   console.log("callback login", userId);
   this.setState({ isLoggedIn: true });
 };
 
 isLoggedOut = (userId) => {
   console.log("callback logout", userId);
   this.setState({ isLoggedIn: false });
   localStorage.removeItem("user")
 };
 
 render() {
   if (this.state.isLoggedIn === true)
     return (
       <div className="App">
         <header className="App-header">
           <h1>Nyhetsbrevet</h1>
           <StartPage ChangeisSubscribingStatus={this.isSubscribing} />
           <Logout isLoggedOut={this.isLoggedOut} />
         </header>
       </div>
     );
   else {
     return (
       <div className="App">
         <header className="App-header">
           <h1>Nyhetsbrevet</h1>
           <UserRegistration
             UserRegistration={this.UserRegistration}
             isLoggedIn={this.isLoggedIn}
           />
           <br />
           <Login isLoggedIn={this.isLoggedIn} />
         </header>
       </div>
     );
   }
 }
}