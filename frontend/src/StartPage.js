import React from "react";
 
export default class StartPage extends React.Component {
 constructor(props) {
   super(props);
 
   this.state = { isSubscribing: this.props.isSubscribing };
   console.log(this.state);
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }
 
 handleChange = (event) => {
   event.preventDefault();
   this.setState({ isSubscribing: (this.state.isSubscribing ? false : true)},() =>
   this.props.changeisSubscribingstatus(this.state.isSubscribing)
   );
 };
 
 handleSubmit = (isSubscribing, userId) => {
   console.log("Vill ändra prenumerationen");
   console.log(userId);
   console.log(isSubscribing);
 
   var data = { "isSubscribing": isSubscribing, "id": userId };
 
   fetch("http://localhost:3000/users/" + userId, {
     method: "PUT",
     headers: {
       "Content-type": "application/json",
     },
     body: JSON.stringify(data),
   })
     .then((response) => response.json())
     .then((response) => {
       console.log(response);
       if (response != null) {
         this.props.sendUserStatus(
           response.id,
           response.isSubscribing,
           console.log(response)
         );
         alert("update was successful");
       } else alert("update was unsuccessful");
     })
     .catch((err) => {
       console.log(err);
     });
 };
 
 changeisSubscribingstatus = () => {
   console.log("prenumererar");
 };
 
 render() {
   return (
     <div className="Loginbox">
       <form onSubmit={this.handleSubmit}>
           Jag vill inte prenumerera på nyhetsbrevet
         <label>
           <input
             type="checkbox"
             value={this.state.isSubscribing}
             onChange={this.handleChange}
           />
           <br />
         </label>
       </form>
     </div>
   );
 }
}