const firebaseConfig = {
    apiKey: "AIzaSyC5M5AaLl-0L81VS6idNgrDVEIV6rxsU_E",
    authDomain: "helponwheels-9bf9e.firebaseapp.com",
    databaseURL: "https://helponwheels-9bf9e-default-rtdb.firebaseio.com",
    projectId: "helponwheels-9bf9e",
    storageBucket: "helponwheels-9bf9e.appspot.com",
    messagingSenderId: "1070680365442",
    appId: "1:1070680365442:web:3912e58f6fd9fc65dd179b"
  };

//initialize firebase
  firebase.initializeApp(firebaseConfig);

//reference your databse
var Bookingdb = firebase.database().ref('booking');

document.getElementById('Bookingform').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    var phone = getElementVal('phone');
    var name = getElementVal('name');
    var location = getElementVal('location');
    var hospital = getElementVal('hospital');

    saveMessages(phone, name, location, hospital);

    //enable alert
    document.querySelector('.alert').style.display = 'block';
    //remove the alert
    setTimeout(() => {
        document.querySelector('.alert').style.display = 'none';  
    }, 3000);

    //reset the form
    document.getElementById('Bookingform').reset()
}


const saveMessages = (phone, name, location, hospital ) => {
    var newBookingdb = Bookingdb.push();

    newBookingdb.set({
        phone : phone,
        name : name,
        location : location,
        hospital : hospital,
    })
};

const getElementVal = (id) =>{
    return document.getElementById(id).value;
};