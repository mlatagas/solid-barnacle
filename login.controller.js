(function () {
    angular
        .module('app')
        .controller('LoginController', loginController);
    loginController.$inject = ['firebase', '$state', '$stateParams'];
    function loginController(firebase, $state, $stateParams) {
        var vm = this;
        //angular.extend(vm, $stateParams);// I have no idea what this line does
        vm.login = login;
        vm.signUp = signUp;
        vm.isLoggedIn;
        vm.signUpWithGooglePopUp = signUpWithGooglePopUp;
        vm.userName;
        var provider = new firebase.auth.GoogleAuthProvider();
        activate();

        function activate() {
            //Add a realtime authentication listerner
            firebase.auth().onAuthStateChanged(firebaseUser => {
                if (!firebaseUser) {
                    return;
                }
                vm.isLoggedIn = true;
                setDisplayName(firebaseUser);
                $state.go("homePage");
            });


        }

        function setDisplayName(firebaseUser) {
            console.log(firebaseUser.displayName);
            if (!firebaseUser.displayName) {
                //Allow users to set username
                vm.userName = firebaseUser.email;
                return;
            }
            vm.userName = firebaseUser.displayName;
        }

        function login() {
            const auth = firebase.auth();
            const firebaseUser = auth.signInWithEmailAndPassword(vm.txtEmail, vm.txtPassword);
            firebaseUser.catch(e => console.log(e.message)); //Im not familiar with this syntax
        }

        function signUp() {
            // TODO validate emails
            const auth = firebase.auth();
            const promise = auth.createUserWithEmailAndPassword(vm.txtEmail, vm.txtPassword);
            promise.catch(e => console.log(e.message)); //Im not familiar with this syntax
        }

        function logOut() {
            firebase.auth().signOut();
        }

        function signUpWithGooglePopUp() {
            console.log("inside sign up with google popup");

            firebase.auth().signInWithPopup(provider).then(function (result) {
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                vm.userName = user.displayName;
                if (user) {
                    vm.isLoggedIn = true;
                }
                console.log(user);

                // ...
            }).catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
                console.log(error)
            });
        }



    }
}());