(function () {
    angular
        .module('app')
        .controller('DatabaseController', databaseController);
    databaseController.$inject = ['firebase', '$firebaseObject', '$state', '$stateParams'];
    function databaseController(firebase, $firebaseObject, $state, $stateParams) {
        var vm = this;
        angular.extend(vm, $stateParams);// I have no idea what this line does
        var provider = new firebase.auth.GoogleAuthProvider();
        const dbRefobject = firebase.database().ref().child('app');
        const dbReflist = dbRefobject.child('items');
        vm.items = dbReflist;
        dbReflist.on('child_added', snap => console.log(snap.val()));
        vm.addItemToList = addItemToList;
        vm.testFunction = testFunction;
        vm.newListItem;


        function testFunction() {
            console.log("testing one two one two");
        }


        function addItemToList() {
            console.log('adding item to list');

            if (!vm.newListItem) {
                return;
            }

            var updates = {};

            var newlistItemKey = dbReflist.push().key;
            updates['app/items/' + newlistItemKey] = { "name": name };

            return firebase.database().ref().update(updates);

        }

    }
}());