import React, {useState,useEffect} from 'react';
import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import ChatButton from "../Components/ChatButton.js";
import { async } from '@firebase/util';
import Channel from './Channel.js';

firebase.initializeApp(
    
      {apiKey: "AIzaSyAVb8wkkgv2aMwrdzdPjTP3_MwvpjT1jf0",
        authDomain: "react-chat-fe04a.firebaseapp.com",
        projectId: "react-chat-fe04a",
        storageBucket: "react-chat-fe04a.appspot.com",
        messagingSenderId: "944512246105",
        appId: "1:944512246105:web:2f74c42df74fa065eeec48"
    
}
);
const auth = firebase.auth();
const db = firebase.firestore();
function Chat() {
    const [user,setuser] = useState(() => auth.currentuser);
    const [initializing, setinitializing] = useState(true);

useEffect(() => {
  const unsubscribe =  auth.onAuthStateChanged(user => {
        if(user){
            setuser(user);
        }else{
            setuser(null);
        }
        if(initializing){
            setinitializing(false);
        }
    });
 return unsubscribe;

},[])


    const signInwithGoogle = async() => {
           const provider = new firebase.auth.GoogleAuthProvider();
           auth.useDeviceLanguage();
           try{
               await auth.signInwithGoogle(provider);
           }catch(error){
               console.error(error);
           }
    };

    const signout = async() => {
        try{
            await firebase.auth().signout();
        }catch(error){
            console.log(error.message);
        }
    };

    if(initializing) return "Loading...";
    return (
        <div>
            {user ? (
                 <>
                  <ChatButton onclick={signout}>Sign Out</ChatButton>
                  <Channel user={user} db={db} />

                 </>
            ) : (
            <ChatButton onclick={signInwithGoogle}>Sign in with Google</ChatButton>
            )}
        </div>
    )
}

export default Chat;
