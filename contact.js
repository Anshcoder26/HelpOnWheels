const firebaseConfig = {
    apiKey: "AIzaSyCy9sKK7GrQrQQ_CBpWqmuotYQ-lNZbSbs",
    authDomain: "contactdb-1b019.firebaseapp.com",
    databaseURL: "https://contactdb-1b019-default-rtdb.firebaseio.com",
    projectId: "contactdb-1b019",
    storageBucket: "contactdb-1b019.appspot.com",
    messagingSenderId: "127085930025",
    appId: "1:127085930025:web:0f611af5c9b36d6521de38"
  };

//initialize firebase
  firebase.initializeApp(firebaseConfig);

//reference your databse
var Contactdb = firebase.database().ref('contactdb');

document.getElementById('contactForm').addEventListener('submit', submitForm);
function submitForm(e){
    console.log("submit form called")
    e.preventDefault();

    var name = getElementVal('name');
    var email = getElementVal('email');
    var message = getElementVal('message');
    saveMessages(name,email,message);

    //enable alert
     document.querySelector('.alert').style.display = 'block';
    // remove the alert
    setTimeout(() => {
        document.querySelector('.alert').style.display = 'none';  
    }, 3000);

    //reset the form
    document.getElementById('contactForm').reset()
}


const saveMessages = (name, email, message) => {
    console.log("save msg called");
    var newContactdb = Contactdb.push();

    newContactdb.set({
        name : name,
        email : email,
        message : message,
    })
    console.log(newContactdb)
};

const getElementVal = (id) =>{
    return document.getElementById(id).value;
};