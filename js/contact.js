
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCCe4jzJULrQpEylYPaQTG66Klzlug20z4",
    authDomain: "contactform-b1eb4.firebaseapp.com",
    databaseURL: "https://contactform-b1eb4.firebaseio.com",
    projectId: "contactform-b1eb4",
    storageBucket: "contactform-b1eb4.appspot.com",
    messagingSenderId: "763734255586",
    appId: "1:763734255586:web:160ddd9f7c99dd17"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref('messages');



document.querySelector("#bsub").addEventListener('submit', submitForm);


function submitForm(e){
    e.preventDefault();
    
    var fname = getInputVal('fname');
    var lname = getInputVal('lname');
    var email = getInputVal('email');
    var purpose = getInputVal('purpose');
    var subject = getInputVal('subject');
    
    saveMessage(fname, lname, email, purpose, subject);
    
    
}

function getInputVal(id){
    return document.getElementById(id).value;
}

function saveMessage(fname, lname, email, purpose, subject){
    var newMessagesRef = messagesRef.push();
    newMessageRef.set({
        fname: fname,
        lname: lname,
        email: email,
        purpose: purpose,
        subject: subject
    });
}