app.controller('MainController', ['$scope', function($scope) { 
    $scope.title = 'Top Selling Books'; 
    $scope.promo = 'These Books are on Sale';
    $scope.products = 
    [
      {
        name: 'To Kill a Mockingbird',
        price: 6.99,
        pubdate: new Date('1960', '05', '11'),
        cover: 'img/tkamb.jpg',
        likes: 0,
        dislikes: 0,
      },
      {
        name: "Harry Potter and the Sorcerer's Stone",
        price: 19.99,
        pubdate: new Date('2001', '10', '14'),
        cover: 'img/hp1.jpg',
        likes: 0,
        dislikes: 0,
      },
      {
        name: 'Lord of the Rings',
        price: 15.99,
        pubdate: new Date('1954', '05', '29'),
        cover: 'img/lotr.jpg',
        likes: 0,
        dislikes: 0,
      },
      {
        name: 'Game of Thrones',
        price: 19.99,
        pubdate: new Date('1996', '07', '01'),
        cover: 'img/got.jpg',
        likes: 0,
        dislikes: 0,
      }

    ]
      $scope.plusOne = function(index) {
      $scope.products[index].likes += 1;
    };
      $scope.minusOne = function(index) {
      $scope.products[index].dislikes += 1;
    };
    
  }]); 



