import React from "react";
 
export default class Login extends React.Component {
 constructor(props) {
   super(props);
 
   this.state = {
     userName: "",
     userPassword: ""
   };
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }
 
 handleChange = (event) => {
   this.setState({ [event.target.name]: event.target.value });
 };
 
 handleSubmit = (event) => {
   console.log("Tryckte på logga in knappen");
   event.preventDefault();
   const { userName, userPassword } = this.state;
   console.log(userName, userPassword);
 
   fetch("http://localhost:3000/userLogin", {
     method: "POST",
     headers: {
       "Content-type": "application/json",
     },
     body: JSON.stringify({ userName: userName, userPassword: userPassword }),
   })
     .then((response) => response.json())
     .then((data) => {
       if (data) {
         console.log(data);
         this.setState({ isLoggedIn: true });
         this.props.isLoggedIn(data.userId, data.isSubscriber);
         console.log(this.state);
       }
     })
     .catch((err) => {
       console.log(err);
     });
 };
 
 render() {
   return (
     <div className="Loginbox">
       <h3>Logga in med dina användaruppgifter för att ändra prenumerationen</h3>
       <form onSubmit={this.handleSubmit}>
         Namn:{" "}
         <input
           type="text"
           name="userName"
           value={this.state.userName}
           onChange={this.handleChange}
         />
         <br />
         Lösenord:{" "}
         <input
           type="password"
           name="userPassword"
           value={this.state.userPassword}
           onChange={this.handleChange}
         />
         <br />
         <br />
         <input type="submit" value="Logga in" />
         <br />
       </form>
     </div>
   );
 }
}