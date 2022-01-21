const firebaseConfig = {
    apiKey: "AIzaSyCGCrTVIUrxMzpOwTCwRTxm6vU6UBquZsA",
    authDomain: "letschat-web-app-c7b6d.firebaseapp.com",
    databaseURL: "https://letschat-web-app-c7b6d-default-rtdb.firebaseio.com",
    projectId: "letschat-web-app-c7b6d",
    storageBucket: "letschat-web-app-c7b6d.appspot.com",
    messagingSenderId: "436162552374",
    appId: "1:436162552374:web:720bc43a3b88584d96ee97",
    measurementId: "G-CW7SHWGW5Q"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
 
  user_name = localStorage.getItem("Username");
      document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

      function addroom() {
             room_name = document.getElementById("room_name").value;
    
            localStorage.setItem("Roomname",room_name);
        
            window.location = "kwitter_page.html";

            firebase.database().ref("/").childKey(room_name).update({
                  purpose: "Adding Room Name"
            });
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

