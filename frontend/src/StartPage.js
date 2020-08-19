import React from "react";
 
export default class StartPage extends React.Component {
 constructor(props) {
   super(props);
 
   this.state = { isSubscribing: this.props.isSubscribing, userId: this.props.userId };
   console.log(this.state);
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }
 
 handleChange = (event) => {
   event.preventDefault();
   this.setState({ isSubscribing: (this.state.isSubscribing ? false : true)},() =>
   this.changeisSubscribingstatus(this.state.isSubscribing)
   );
 };
 
 handleSubmit = (event) => {
  event.preventDefault();
   console.log("Vill ändra prenumerationen");
   const { userId, isSubscribing } = this.state;
   console.log(userId, isSubscribing);

   fetch("http://localhost:3000/users/" + userId, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ "isSubscribing": isSubscribing, "userId": userId }),
  })
     .catch((err) => {
       console.log(err);
     });
 };
 
 changeisSubscribingstatus = () => {
   console.log("prenumererar inte");
 };
 
 render() {
   console.log("props till startpage", this.state.userId, this.state.isSubscribing)
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
           <input type="submit" value="Avsluta prenumeration" />
         </label>
       </form>
     </div>
   );
 }
}