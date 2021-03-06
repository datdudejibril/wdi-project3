CreateAssignmentController.$inject = ['$stateParams', 'UsersService'];

function CreateAssignmentController($stateParams, UsersService) {
  const vm = this;

  //vm.loadCurrent = loadCurrent;
  vm.addNewAssignment = addNewAssignment; //attaching the function to vm
  vm.newAssignment = {};                  //initializing newAssignment
  vm.current = {};

  activate();

  function activate() {
  }

  function addNewAssignment() {
  	console.log('this is from addNewAssignment' + vm.newAssignment.name);
    console.log("userID" + $stateParams.userId);
    UsersService
      .addAssignment(
        $stateParams.userId,
        vm.newAssignment.name,
        vm.newAssignment.assignmentType,
        vm.newAssignment.pointsMax
      ).then(function resolve(response) {
        console.log("function working!")
        vm.current = response.data.user;
        console.log("Back from the server!" + vm.current);

      });
  }

}

module.exports = CreateAssignmentController;
