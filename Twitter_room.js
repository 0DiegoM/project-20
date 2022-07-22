const firebaseConfig = {
    apiKey: "AIzaSyD5qrY-8yabslENEYdmQ0K7QasLR-urBcU",
    authDomain: "proyecto-95-b38cf.firebaseapp.com",
    projectId: "proyecto-95-b38cf",
    storageBucket: "proyecto-95-b38cf.appspot.com",
    messagingSenderId: "629102192015",
    appId: "1:629102192015:web:33ef2f942116fc412c17fa"
  };

  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem('user_name');
  room_name = localStorage.getItem('room_name');
  document.getElementById('user_name').innerHTML = 'Hola'+ user_name + '!';

  function addRoom() {
    
  }