angular
	.module('gradeBook')
	.service('UsersService', UsersService);

UsersService.$inject = ['$http'];

function UsersService($http) {
		const self = this;

		self.loadCurrent = loadCurrent;
		self.addAssignment = addAssignment;
		self.signupUser = signupUser;
		self.deleteAssignment = deleteAssignment;
		self.saveNewGrade = saveNewGrade;

	function loadCurrent(id) {
		return $http.get('/api/users/' + id);
	}

	function addAssignment(id, name, assignmentType, pointsMax) {
		return $http
			.put('/api/users/' + id, {
				name: name,
				assignmentType: assignmentType,
				pointsMax: pointsMax});
	}

	function signupUser(email, username, password) {
		console.log('password' + password)
		return $http	
			.post('/api/users/', {
				email: email,
				username: username,
				password: password
			});
	}

	function deleteAssignment(id, assignmentName) {
		console.log("Services 1:" + assignmentName);
		return $http
			.put('/api/delete/' + id, {
				assignmentName: assignmentName});
	}

	function saveNewGrade(id, user) {
		console.log("Hey there " + user._id);
		console.log(id);
		return $http
			.patch('/api/grades/' + id, {
				user: user
			});
	}
}
