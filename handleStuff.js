let fname = document.getElementById("name");
let submit = document.getElementById("submit");

var database = firebase.database();

function writeUserData(fname){
  firebase.database().ref('users/'+fname).set({
    username: fname
  });
}

submit.addEventListener("click", function () {
  console.log(fname.value);
});
