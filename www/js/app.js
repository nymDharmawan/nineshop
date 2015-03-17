angular.module('onlineshop', ['onlineshop.controllers','onlineshop.services','ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function ( $httpProvider) {        
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    })
.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('home',{
    abstract : true,
    url: "/home",
    templateUrl : "template/home.html"
  })

  .state('home.penjualan',{
    url:"/penjualan",
    views:{
      'tabs-penjualan' : {
        templateUrl:"template/penjualan.html",
        controller:"penjualanCtrl"
      }
    }
  })
  .state('home.addPelanggan',{
    url:"/addPelanggan",
    views:{
      'tabs-penjualan' : {
        templateUrl : "template/addPelanggan.html",
        controller:"simpanPelanggan"
      }
    }
  })
   .state('home.addBarang',{
    url:"/addBarang/:idpelanggan",
    views:{
      'tabs-penjualan' : {
        templateUrl : "template/addbarang.html",
        controller:"simpanBarang"
      }
    }
  })
  .state('home.penjualanDetail',{
    url:"/penjualanDetail/:idPenjualan",
    views:{
      'tabs-penjualan' : {
        templateUrl:"template/penjualanDetail.html",
        controller:"penjualanDetail"
      }
    }
  })
  .state('home.editPenjualan',{
    url:"/editPenjualan/:idPenjualan",
    views:{
      'tabs-penjualan' : {
        templateUrl:"template/editPenjualan.html",
        controller:"editPenjualan"
      }
    }
  })

  .state('home.input',{
    url: "/input",
    views:{
      'tabs-input' : {
        templateUrl : "template/addPenjualan.html",
        controller:"simpanPenjualan"
      }
    }
  })

  .state('home.laporan',{
    url : "/laporan",
    views:{
      'tabs-laporan' : {
        templateUrl : "template/laporan.html"
      }
    }
  });


  $urlRouterProvider.otherwise('/home/penjualan');
})
