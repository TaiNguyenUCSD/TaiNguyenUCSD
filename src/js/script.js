let fname = document.getElementById("name");
let submit = document.getElementById("submit-name");

var database = firebase.database();
function writeToFirebase(username) {
  firebase.database().ref('users/' + username).set({
    title: username
  });
}

submit.addEventListener("click", fname);

