
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD5-WGoxYtOWlMPJgssoLvCS5MRoZitOTQ",
    authDomain: "kavach-1699b.firebaseapp.com",
    projectId: "kavach-1699b",
    storageBucket: "kavach-1699b.appspot.com",
    messagingSenderId: "295710951569",
    appId: "1:295710951569:web:3c2ec98326a7ee17fbd730"
  };
// initializing firebase SDK
firebase.initializeApp(firebaseConfig);

// render recaptcha verifier
render();
function render() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    recaptchaVerifier.render();
}

// function for send OTP
function sendOTP() {
    var number = document.getElementById('number').value;
    number = "+91" + number; // Adjust according to your country code

    firebase.auth().signInWithPhoneNumber(number, window.recaptchaVerifier)
    .then(function (confirmationResult) {
        window.confirmationResult = confirmationResult;
        coderesult = confirmationResult;
        document.querySelector('.number-input').style.display = 'none';
        document.querySelector('.verification').style.display = '';
    }).catch(function (error) {
        // error in sending OTP
        alert(error.message);
    });
}


// function for OTP verify
function verifyCode() {
    var code = document.getElementById('verificationCode').value;
    coderesult.confirm(code).then(function () {
        document.querySelector('.verification').style.display = 'none';
        document.querySelector('.result').style.display = '';
        document.querySelector('.correct').style.display = '';
        console.log('OTP Verified');
    }).catch(function () {
        document.querySelector('.verification').style.display = 'none';
        document.querySelector('.result').style.display = '';
        document.querySelector('.incorrect').style.display = '';
        console.log('OTP Not correct');
    })
}
