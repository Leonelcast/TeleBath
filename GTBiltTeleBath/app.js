document.addEventListener("DOMContentLoaded", event =>{
    const app = firebase.app();
    
});

function googleLogin(){
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .the(result=> {
        const user = result.user;
        document.write('hello ${user.displayName}');
        console.log(user)
    })
    .catch(console.log)
}