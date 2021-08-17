import React, { Component } from 'react';
import firebaseConfig from './firebaseConfig';
import * as firebaseui from 'firebaseui';
import firebase from 'firebase';
import 'firebaseui/dist/firebaseui.css';
import './App.css'
class Otp extends Component {
  componentDidMount() {
    !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
    const uiConfig = {
      signInOptions: [{
        provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        recaptchaParameters: {
          type: 'image',
          size: 'normal',
          badge: 'bottomleft'
        },
        defaultCountry: 'PK'
      }],
      callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl){
          alert('successful');
          return true;
        }
      },
      signInSuccessUrl : "https://www.instagram.com/here_kamran/"
    };

    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", uiConfig);

  };
  render() {
    return (
      <>
     
<div id='firebaseui-auth-container'>
      </div>
      </>
    
    );
  }
}

export default Otp;