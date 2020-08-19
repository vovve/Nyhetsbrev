import React from "react";
 
export default class UserRegistration extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     userName: "",
     userEmail: "",
     userPassword: "",
     isSubscribing: true
   };
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }
 
 handleChange = (event) => {
   this.setState({ [event.target.name]: event.target.value });
 };
 
 handleSubmit(event) {
   console.log("Tryckte på registrera knappen");
   event.preventDefault();
 
   const { userName, userEmail, userPassword } = this.state;
 
   fetch("http://localhost:3000/userRegistration", {
     method: "POST",
     headers: {
       "Content-type": "application/json",
     },
     body: JSON.stringify({
       userName: userName,
       userEmail: userEmail,
       userPassword: userPassword,
       isSubscribing: true
     }),
   })
     .then((response) => response.json())
     .then((data) => {
       if (data) {
         console.log(data);
         localStorage.setItem(data);
         console.log(localStorage);
         this.setState({ isLoggedIn: true });
         this.props.isLoggedIn(data.id);
         console.log(this.state);
       }
     })
     .catch((err) => {
       console.log(err);
     });
 }
 
 render() {
   return (
     <div className="Loginbox">
       <h3>Registrera dig för nyhetsbrevet här</h3>
       <form onSubmit={this.handleSubmit}>
         Namn:
         <input
           type="text"
           name="userName"
           value={this.state.userName}
           onChange={this.handleChange}
         />
         <br />
         Email:
         <input
           type="email"
           name="userEmail"
           value={this.state.userEmail}
           onChange={this.handleChange}
         />
         <br />
         Lösenord:
         <input
           type="password"
           name="userPassword"
           value={this.state.userPassword}
           onChange={this.handleChange}
         />
         <br />         
         <input type="submit" value="Registrera" />
         <br />
       </form>
     </div>
   );
 }
}