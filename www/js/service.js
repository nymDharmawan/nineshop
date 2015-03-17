angular.module('onlineshop.services', [])

.factory('penjualanApi',function ($http,$q,$ionicLoading,$timeout) {

	var idPenjualan;

	function getPenjualanAll(idpelanggan){
		var deffered = $q.defer();
		$ionicLoading.show({template: 'Loading ... '})
		$http.get("http://dev.ninebaliwebdesign.com/nineshop/index.php/welcome/getDetailPenjualan/"+idpelanggan)
		.success(function(data){
				$timeout(function(){
					$ionicLoading.hide();
					deffered.resolve(data);
				},3000);
				

			})
		.error(function(){
			console.log("error");
			deffered.reject();
		});
		return deffered.promise;
	}
	
	

	return{
		all: getPenjualanAll
	};
	
})
.factory('pelangganApi', function ($http,$q,$ionicLoading,$timeout) {
	
	function getPelangganAll(){
		var deffered = $q.defer();
		$ionicLoading.show({template: 'Loading ... '})
		$http.get("http://dev.ninebaliwebdesign.com/nineshop/index.php/welcome/getPelangganAll")
			.success(function(data){
				$timeout(function(){
					$ionicLoading.hide();
					deffered.resolve(data);
				},3000);
				

			})
			.error(function(){
				console.log("error");
				deffered.reject();
			});
		return deffered.promise;
	}
	function getpelangganDetail(idpelanggan){
		var deffered = $q.defer();
		$ionicLoading.show({template: 'Loading ... '})
		$http.get("http://dev.ninebaliwebdesign.com/nineshop/index.php/welcome/getDetailPelanggan/"+idpelanggan)
		.success(function(data){
				$timeout(function(){
					$ionicLoading.hide();
					deffered.resolve(data);
				},3000);
				

			})
		.error(function(){
			console.log("error");
			deffered.reject();
		});
		return deffered.promise;
	}

	return {
		all:getPelangganAll,
		get:getpelangganDetail
	};
});
