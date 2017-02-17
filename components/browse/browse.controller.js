module.exports = {
    name: 'BrowseController',
    func: function($scope, BrowseService, $log) {
        $scope.sounds = BrowseService.showAllSounds();
        $scope.testPlay = function playSound(index) {
                BrowseService.previewSounds(index);
        }; 

        $scope.favorite = function() {
            console.log('button clicked');
        }

        // $scope.showSounds = [];

        // $scope.filterSounds = function (category) {
        //     $scope.showSounds = []; // for loop or filter $scope.sounds to the ones you want.
        // };

        let tabs = [
            {title: 'All', content: $scope.sounds },
            {title: 'Kick', content: $scope.sounds },
            {title: 'Snare', content: $scope.sounds },
            {title: 'Tom', content: $scope.sounds },
            {title: 'Hihat', content: $scope.sounds },
            {title: 'Cymbal', content: $scope.sounds },
            {title: 'Percussion', content: $scope.sounds },
        ], 
        selected = null,
        previous = null;
        $scope.tabs = tabs;
        $scope.selectedIndex = 2;
    }, 
};


