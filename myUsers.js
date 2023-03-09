var myApp = angular.module('myApp', []).controller('userCtrl', function ($scope) {
   
    $scope.ageFilterEnabled =false; //встановлюєм початкове положення перемикача: відключено
     
    $scope.toggleAgeFilter = function() {      //перемикач або функція зміни значення перемикача
        $scope.ageFilterEnabled = !$scope.ageFilterEnabled;
        };



    $scope.users = [
        {id: 1, fName: 'Марія', lName: "Козловська", Sex :"жін", Age: "60" , Status:"Пенсіонерка", BirthDate:"02.11.1963"},
        {id: 2, fName: 'Петро ', lName: "Козловський" , Sex :"чол", Age: "62" , Status:"Пенсіонер",BirthDate:"06.12.1961"},
        {id: 3, fName: 'Оксана', lName: "Козловська", Sex :"жін", Age: "40" , Status:"Підприємець", BirthDate:"02.11.1983"},
        {id: 4, fName: 'Дмитро', lName: "Козловський" , Sex :"чол", Age: "35" , Status:"Держслужбовець",BirthDate:"06.12.1987"},
        {id: 5, fName: 'Вікторія', lName: "Зарицька" , Sex :"жін", Age: "15" , Status:"Школярка",BirthDate:"02.11.2007"},
        {id: 6, fName: 'Іван', lName: "Козловський" , Sex :"чол", Age: "13" , Status:"Школяр",BirthDate:"06.12.2009"},
        {id: 7, fName: 'Степан', lName: "Козловський" , Sex :"чол", Age: "62" , Status:"Школяр",BirthDate:"06.12.2010"},
        {id: 8, fName: 'Давид', lName: "Зарицький" , Sex :"чол", Age: "62" , Status:"Школяр",BirthDate:"06.12.2013"},
        {id: 9, fName: 'Мила', lName: "Зарицька" , Sex :"жін", Age: "60" , Status:"Дит.садок",BirthDate:"02.11.2017"},
        {id: 10,fName: 'Людмила', lName: "Зарицька" , Sex :"жін", Age: "60" , Status:"Дит.садок",BirthDate:"02.11.2019"}
    
    
    ];
    $scope.hideform = true;

    $scope.editUser = function (id) {
        $scope.hideform = false;
        if (id == 'new') {
            $scope.edit = true;
            $scope.fName = '';
            $scope.lName = '';
            $scope.Sex = '';
            $scope.Age = '';
            $scope.Status = '';
            $scope.BirthDate = '';
       
       
       
       
        } else {
            $scope.edit = false;
            $scope.index = id - 1;
            $scope.fName = $scope.users[$scope.index].fName;
            $scope.lName = $scope.users[$scope.index].lName;
            $scope.Sex = $scope.users[$scope.index].Sex;
            $scope.Age = $scope.users[$scope.index].Age;
            $scope.Status = $scope.users[$scope.index].Status;
            $scope.BirthDate = $scope.users[$scope.index].BirthDate;
        
        
        }
    };

    
        $scope.saveUser = function () {
            $scope.hideform = false;
            if ($scope.edit == true) {
                $scope.LENGTH = $scope.users.length;
                $scope.users.push({id: $scope.LENGTH + 1, fName: $scope.fName, lName: $scope.lName , Sex: $scope.Sex , Age: $scope.Age , Status: $scope.Status , BirthDate : $scope.BirthDate });
            } else {
                $scope.users[$scope.index].fName = $scope.fName;
                $scope.users[$scope.index].lName = $scope.lName;
                $scope.users[$scope.index].Sex = $scope.Sex;
                $scope.users[$scope.index].Age = $scope.Age;
                $scope.users[$scope.index].Status = $scope.Status;
                $scope.users[$scope.index].BirthDate = $scope.BirthDate;
            }

    }
    
    
    $scope.saveUser = function () {
        $scope.hideform = false;
        if ($scope.edit == true) {
            $scope.LENGTH = $scope.users.length;
            $scope.users.push({id: $scope.LENGTH + 1, fName: $scope.fName, lName: $scope.lName , Sex: $scope.Sex , Age: $scope.Age , Status: $scope.Status , BirthDate : $scope.BirthDate });
        } else {
            $scope.users[$scope.index].fName = $scope.fName;
            $scope.users[$scope.index].lName = $scope.lName;
            $scope.users[$scope.index].Sex = $scope.Sex;
            $scope.users[$scope.index].Age = $scope.Age;
            $scope.users[$scope.index].Status = $scope.Status;
            $scope.users[$scope.index].BirthDate = $scope.BirthDate;
        }
    };

    
    $scope.$watch('fName', function () {$scope.test();});
    $scope.$watch('lName', function () {$scope.test();});
    $scope.$watch('Sex', function () {$scope.test();});
    $scope.$watch('Age', function () {$scope.test();});
    $scope.$watch('Status', function () {$scope.test();});
    $scope.$watch('BirthDate', function () {$scope.test();});

    $scope.test = function () {
        
        
        $scope.incomplete = false;
        
        if (!$scope.fName.length || !$scope.lName.length || !$scope.Sex.length || !$scope.Age.length ||
            !$scope.Status.length || !$scope.BirthDate.length) {
            $scope.incomplete = true;
        }
    };
    
   
    $scope.ageFilter = function(user) {
        return (user.Age >= 18 && user.Age <= 60); //  фільтрація від 18 до 60 років
        };

   




 });