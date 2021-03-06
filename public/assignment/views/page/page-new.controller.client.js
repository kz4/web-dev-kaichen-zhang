(function () {
    angular
        .module("WebAppMaker")
        .controller("NewPageController", NewPageController);
    
    function NewPageController($location, $routeParams, PageService) {
        var vm = this;
        var userId = $routeParams.uid;
        vm.userId = userId;
        var websiteId = $routeParams.wid;
        vm.websiteId = websiteId;
        
        vm.createPage = createPage;
        vm.submitted = false;

        function createPage(page) {
            vm.submitted = true;
            PageService
                .createPage(websiteId, page)
                .then(function (res) {
                    var page = res.data;
                    if (page.name) {
                        $location.url("user/" + userId + "/website/" + websiteId + "/page");
                    } else {
                        vm.error = "Failed to create a page, name already exists or empty";
                    }
                },
                function (error) {
                    vm.error = "Failed to create a page, name already exists or empty";
                });
        }
    }
})();