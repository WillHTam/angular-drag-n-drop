angular.module('dropper', ['dndLists']).controller('droppyCtrl', function ($scope) {
  $scope.models = {
    selected: null,
    lists: {'ToDo': [], 'InProgress': [], 'Done': []},
    names: ['To Do', 'In Progress', 'Done']
  }

  $scope.submit = function () {
    if ($scope.project) {
      $scope.models.lists.ToDo.push({label: this.project})
      $scope.project = ''
    }
  }

  // Generate initial model
  for (var i = 1; i <= 3; ++i) {
    $scope.models.lists.ToDo.push({label: 'To Do ' + i})
    $scope.models.lists.InProgress.push({label: 'In Progress ' + i})
  }

  for (var i = 1; i <= 4; ++i) {
    $scope.models.lists.Done.push({label: 'Done ' + i})
  }
})
