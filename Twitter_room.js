const firebaseConfig = {
  apiKey: "AIzaSyD5qrY-8yabslENEYdmQ0K7QasLR-urBcU",
  authDomain: "proyecto-95-b38cf.firebaseapp.com",
  projectId: "proyecto-95-b38cf",
  databaseURL: "https://proyecto-95-b38cf-default-rtdb.firebaseio.com",
  storageBucket: "proyecto-95-b38cf.appspot.com",
  messagingSenderId: "629102192015",
  appId: "1:629102192015:web:33ef2f942116fc412c17fa"
};

  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem('user_name');
room_name = localStorage.getItem('room_name');
document.getElementById('user_name').innerHTML = "Hola "+ user_name + "!";

  function addRoom() {
    room_name = document.getElementById('room_name').value;

    firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);
    window.location.replace("Twitter_page.html")
  }

  function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        childData = childSnapshot.val();
        if (childKey != "purpose") {
          firebase_message_id = childKey;
          message_data = childData;
          
          console.log(firebase_message_id);
          console.log(message_data);
          name = message_data['name'];
          message = message_data['message'];
          like = message_data['like'];
          name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'></h4>";
          message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
          like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
          span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
  
          row = name_with_tag + message_with_tag + like_button + span_with_tag;
          document.getElementById('output').innerHTML += row;
        }
      });
    });
  }
  getData();

  function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html")
  } 
  
  function redirectToRoomName(name) {
 
    localStorage.setItem("room_name", name);
    window.location = "Twitter_page.html";
    console.log(name);
  }