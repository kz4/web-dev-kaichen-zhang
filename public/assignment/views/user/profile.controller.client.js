(function () {
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController);
    function ProfileController($routeParams) {
        var vm = this;
        var id = $routeParams['uid'];

        var users = [
            {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
            {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
            {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
            {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
        ];
        for (var i in users) {
            if (users[i]._id === id) {
                vm.user = users[i];
            }
        }
        // console.log(id);
        // var vm.uid = $routeParams["uid"];
        // function init() {
        //     vm.user = UserService.findUserById(vm.userId);
        // }
        // init();
    }
})();