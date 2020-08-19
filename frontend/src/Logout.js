import React from "react";
 
export default class Logout extends React.Component {
   constructor(props) {
     super(props);
     this.handleSubmit = this.handleSubmit.bind(this);
   }
 
   handleSubmit = () => {
       this.props.isLoggedOut();
   }
 
   render(){
       return(
           <div>
               <form>
                   <label>
                       <button onClick={this.handleSubmit}>Logga ut</button>
                   </label>
               </form>
           </div>
       );
   }
}
 

