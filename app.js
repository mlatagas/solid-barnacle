(function () {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyD2n9qUZ1v6eR93VC-hFTwD4syV3aZ3R_A",
        authDomain: "angularjs-auth-df5a7.firebaseapp.com",
        databaseURL: "https://angularjs-auth-df5a7.firebaseio.com",
        projectId: "angularjs-auth-df5a7",
        storageBucket: "angularjs-auth-df5a7.appspot.com",
        messagingSenderId: "794850431696"
    };
    firebase.initializeApp(config);

    angular
        .module('app', ['firebase','ui.router','ngMaterial']);

})();