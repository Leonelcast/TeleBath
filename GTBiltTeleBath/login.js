

(function () {
    const firebaseConfig  = {
        apiKey: "AIzaSyAWh3dZNfrI5U_YqsM6h9XNKG5qKesc0nQ",
        authDomain: "telebathroom.firebaseapp.com",
        databaseURL: "https://telebathroom.firebaseio.com",
        projectId: "telebathroom",
        storageBucket: "telebathroom.appspot.com",
        messagingSenderId: "501997348978",
        appId: "1:501997348978:web:d59016216643ba58"
    };

    firebase.initializeApp(firebaseConfig);
    //elementos
    const txtEmail = document.getElementById("email_field");
    const txtPassword = document.getElementById("password_field");
    const btnLogin = document.getElementById("buttonLog");
    const btnSing = document.getElementById("buttonSign");
    //login
    btnLogin.addEventListener('click', e => {
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        //sign in 
        const promise = auth.signInwithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    });
    btnSing.addEventListener('click', e => {
        const txtEmail = document.getElementById("email_field");
    const txtPassword = document.getElementById("password_field");
    const btnLogin = document.getElementById("buttonLog");
    const btnSing = document.getElementById("buttonSign");
        //login
        btnLogin.addEventListener('click', e => {
            const email = txtEmail.value;
            const pass = txtPassword.value;
            const auth = firebase.auth();
            //sign in 
            const promise = auth.createUserwithEmailAndPassword(email, pass);
            promise
                .catch(e => console.log(e.message));
        });
        firebase.auth().onAuthStageChanged(firebaseUser => {
            if (firebaseUser) {
                console.log(firebaseUser);
            } else {
                console.log("not logged in");
            }
        })

    });
    


});
