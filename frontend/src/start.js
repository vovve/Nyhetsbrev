import React from 'react';
import Login from './login';

class Start extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {registerUserName: '', registerPassword: '', registerEmail: '', subscribed: false};
        this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);   
    }
    
    handleRegisterSubmit(event){
        this.setState({registerUserName: this.state.registerUserName, registerPassword: this.state.registerPassword, emailInput: this.state.registerEmail, subscribed: this.state.subscribed});
        this.props.RegisterUser(this.state.registerUserName, this.state.registerPassword, this.state.registerEmail, this.state.subscribed);
        event.preventDefault();
    }

    handleChange(event) {
        const target = event.target;
        const value = target.name === 'subscribed' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    checkUser = (userName, userPassword) => {
        console.log("Kollar användaren")
        
        var data = {userName: userName, userPassword: userPassword};
       
        fetch("http://localhost:3000/userLogin", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data)
            if(data.value)
            {
                localStorage.setItem("UserName", userName);
                localStorage.setItem("UserId", data.userId);
                localStorage.setItem("isSubscribingStatus", data.isSubscribing);
                console.log(localStorage);
                this.props.isLoggedIn();
            }
          })
          .catch((err) => {
            console.log(err);
          });
      };

    render() {
        const showText = this.props.showText;
        return(
            //skriv ut startsida
            <div className = "l">
                <h1>{showText}</h1>

                <Login VerifyLogin= {this.verifyLogin}/>

                <h1>Registrera ny användare</h1>
                <form onSubmit={this.handleRegisterSubmit} >
                    <label>
                        Användarnamn:
                        <input name="registerUserName" type="text" value={this.state.registerUserName} onChange={this.handleChange} />
                    </label>
                    <label>
                        Lösenord:
                        <input name="registerPassword" type="password" value={this.state.registerPassword} onChange={this.handleChange} />
                    </label>
                    <label>
                        Email:
                        <input name="registerEmail" type="email" value={this.state.registerEmail} onChange={this.handleChange} />
                    </label>
                    <label>
                        Prenumerera på nyhetsbrev:
                        <input name="subscribed" type="checkbox" checked={this.state.subscribed} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Registrera"/>
                </form> 
            </div>    
        );
    }
}

export default Start;