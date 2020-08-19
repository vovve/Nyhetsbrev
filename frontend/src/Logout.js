import React from "react";
 
export default class Logout extends React.Component {
   constructor(props) {
     super(props);
     this.handleSubmit = this.handleSubmit.bind(this);
   }
 
   handleSubmit = (event) => {
       event.preventDefault();
       console.log("loggar ut")
       //this.props.isLoggedOut
   }
 
   render(){
       return(
           <div>
               <form onSubmit={this.handleSubmit}>
                   <label>
                       <input
                       type="submit"
                       value="Logga ut"
                       />
                   </label>
               </form>
           </div>
       );
   }
}
 

