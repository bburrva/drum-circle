module.exports = {
    name: 'BrowseController',
    func: function($scope, BrowseService, KitService) {
        $scope.sounds = BrowseService.showAllSounds();
        $scope.testPlay = function playSound(index) {
            BrowseService.previewSounds(index);
        }; 

//favorite and unfavorite sounds
        $scope.favorite = function(sound) {
            KitService.markFavorite(sound);
        };

        $scope.unfavorite = function(sound) {
            KitService.markUnFavorite(sound);
        }




//filter sounds and tab functionality 
        $scope.showSounds = [];

        $scope.filterSounds = function (category) {
            // console.log(`Filtering ${category}`)
            $scope.showSounds = [];
            for (let i = 0; i < $scope.sounds.length; i++) {
                if (category === $scope.sounds[i].category || category === 'All') {
                    $scope.showSounds.push($scope.sounds[i]);
                }
            };
            
        };
        $scope.filterSounds('All');

        let tabs = [
            {title: 'All' },
            {title: 'Kick' },
            {title: 'Snare' },
            {title: 'Tom' },
            {title: 'Hihat' },
            {title: 'Cymbal' },
            {title: 'Percussion' },
        ], 
        selected = null,
        previous = null;
        $scope.tabs = tabs;
        $scope.selectedIndex = 0;
    }, 
};


