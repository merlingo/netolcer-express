//index sayfası için angularjs kodlarını içerir.
'use strict';

angular.module('NetolcerApp', [])

        .controller('anasayfaController', ['$scope', function($scope) {
            //login - register için sayfa düzenlemesi ve request gönderme
             $scope.kayit = { 
                 kurum:"",
                 sehir:"",
                 telno:"",
                 mail:"",
                 sifre:"",
                 adres:""
                                 };
            $scope.giris = {
                alan:"",
                sifre:""
            };
            $scope.girisyap = function(){
                alert($scope.giris);
                if($scope.girisform.$valid)
                    {
                        // use $.param jQuery function to serialize data from JSON 
            var data = $.param($scope.giris);
        
            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            };
                        $http.post("/Musteriler",data,config).success(function(data,status,headers,config){
                            //sisteme giriş yapılır.
                            var ResponseDetails = "Data: " + data +
                                "<hr />status: " + status +
                                "<hr />headers: " + header +
                                "<hr />config: " + config;
                        
                        alert(ResponseDetails);
                        }).error(function (data, status, header, config) {
                            var ResponseDetails = "Data: " + data +
                                "<hr />status: " + status +
                                "<hr />headers: " + header +
                                "<hr />config: " + config;
                                                    alert(ResponseDetails);
                        });
                        
                    }
            };
            $scope.kayitol=function(){
                alert($scope.kayit.kurum);
                
            }
            //yan sayılar -> yöneticinin belirlediği sayılar

            //sunum için sunucudan video veya bağlanti çekme
            
            //ücretler
            
            //mail gönderme
            
           }]);