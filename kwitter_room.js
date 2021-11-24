// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDqUs7D7Aj-tWEPkzh8mFSG1xxVCczUPsM",
    authDomain: "lets-chat-web-app-30149.firebaseapp.com",
    projectId: "lets-chat-web-app-30149",
    storageBucket: "lets-chat-web-app-30149.appspot.com",
    messagingSenderId: "994386657197",
    appId: "1:994386657197:web:1047452e947baee10feb24"
  };

  // Initialize Firebase
  firebaseConfig.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

  function addRoom()
  {
      room_name = document.getElementById("room_name").value;
      localStorage.getItem("room_name", room_name);
      window.location = "";
  }