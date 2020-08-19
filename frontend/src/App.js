import React from "react";
import Login from "./Login";
import UserRegistration from "./UserRegistration";
import StartPage from "./StartPage";
import "./App.css";
import Logout from "./Logout";
 
export default class App extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     userId: null,
     isSubscribing: null,
   };
 }
 
 handleChange = (userId, isSubscribing) => {
   console.log("user subscriber callback")
   this.setState({ user: userId, isSubscribing: isSubscribing });
   localStorage.setItem("user", userId);
 }
 
 isLoggedIn = (userId, isSubscribing) => {
   console.log("callback login", userId, isSubscribing);
   this.setState({ userId: userId, isSubscribing: isSubscribing, isLoggedIn: true });
 };
 
 isLoggedOut = () => {
   console.log("callback logout");
   this.setState({ isLoggedIn: false });
   localStorage.removeItem("user")
 };
 
 render() {
   if (this.state.isLoggedIn === true)
     return (
       <div className="App">
         <header className="App-header">
           <h1>Nyhetsbrevet</h1>
           <StartPage userId={this.state.userId} isSubscribing={this.state.isSubscribing} ChangeisSubscribingStatus={this.isSubscribing} />
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