angular.module('onlineshop.controllers', [])

.controller('penjualanCtrl', function($scope,pelangganApi) {

	pelangganApi.all().then(function(data){
		$scope.penjualan = data;
		console.log($scope.penjualan)
	});


})
.controller('penjualanDetail',function($scope,$stateParams,penjualanApi,pelangganApi){
  pelangganApi.get($stateParams.idPenjualan).then(function(data){
    $scope.pelangganDetail = data
    console.log($scope.pelangganDetail);
  })
	penjualanApi.all($stateParams.idPenjualan).then(function(data){
		$scope.penjualanDetail = data;
		console.log($scope.penjualanDetail);

	})
})


.controller('editPenjualan',function($scope,$stateParams,penjualanApi){
	$scope.a={};
	penjualanApi.setPenjualanId($stateParams.idPenjualan);

	penjualanApi.get().then(function(data){
		$scope.penjualanDetail = data;
		$scope.a.nama = data[0]['nama'];
		console.log($scope.penjualanDetail);

	})
})
.controller('simpanPelanggan', function($scope, $http,$state) {

    $scope.a = {};
    console.log($scope.a);
    $scope.addPelanggan = function(a){
      
      $http.post("http://dev.ninebaliwebdesign.com/nineshop/index.php/welcome/save",{
      'nama': $scope.a.nama, 
      'alamat': $scope.a.alamat,
      'tgl_bayar': $scope.a.tanggal_bayar, 
      'tgl_order': $scope.a.tanggal_order,
      'barang': $scope.a.barang, 
      'qty' : $scope.a.qty,
      'harga_jual': $scope.a.harga_jual,
      'ongkir_jual': $scope.a.ongkir_jual, 
      'harga_beli': $scope.a.harga_barang,
      'ongkir_beli': $scope.a.ongkir_barang, 
      'transfer': $scope.a.transfer
    },{method  : 'POST',headers : { 'Content-Type': 'application/x-www-form-urlencoded' }})

          .success(function(data, status, headers, config){
             $state.go("home.penjualan");

          });
    }
})
.controller('simpanBarang', function($scope, $http,$state,$stateParams) {
  
  $scope.a = {};
  $scope.a.id_pelanggan = $stateParams.idpelanggan;
  console.log($scope.a.id_pelanggan);
  console.log($scope.a);
  $scope.addPenjualan = function(a){
    
    $http.post("http://dev.ninebaliwebdesign.com/nineshop/index.php/welcome/saveBarang",{
    'id_pelanggan' : $scope.a.id_pelanggan,
    'nama': $scope.a.nama, 
    'alamat': $scope.a.alamat,
    'tgl_bayar': $scope.a.tanggal_bayar, 
    'tgl_order': $scope.a.tanggal_order,
    'barang': $scope.a.barang, 
    'harga_jual': $scope.a.harga_jual,
    'ongkir_jual': $scope.a.ongkir_jual, 
    'harga_beli': $scope.a.harga_barang,
    'ongkir_beli': $scope.a.ongkir_barang, 
    'transfer': $scope.a.transfer,
    'qty' : $scope.a.qty
  },{method  : 'POST',headers : { 'Content-Type': 'application/x-www-form-urlencoded' }})

        .success(function(data, status, headers, config){

           $state.go("home.penjualan");

        })
        .error(function(data, status, headers, config){
            console.log(data);
            console.log(status);
            console.log(headers);
            console.log(config);
           
        });
  }
  
})
.controller('updatePenjualan', function($scope, $http,$location) {
  console.log($scope.b);
  $scope.editPenjualan = function(b){
    console.log($scope.b);
    $http.post("http://dev.ninebaliwebdesign.com/nineshop/index.php/welcome/update",$scope.b,{method  : 'POST',headers : { 'Content-Type': 'application/x-www-form-urlencoded' }})

        .success(function(data, status, headers, config){
        	console.log(data);
            console.log(status);
            $location.path("/tab/penjualan");
            
        });
  }
  
})
