const firebaseConfig = {
  apiKey: "AIzaSyASUSruZ3AgojoZ0w3b5sD2SSBoSECDl7E",
  authDomain: "prac-19681.firebaseapp.com",
  databaseURL: "https://prac-19681-default-rtdb.firebaseio.com",
  projectId: "prac-19681",
  storageBucket: "prac-19681.appspot.com",
  messagingSenderId: "39714846491",
  appId: "1:39714846491:web:14a6ec922cbe6bc52685be"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "Adding User"
    });
}