angular.module('myApp.services')
.factory('Parse', ['$q','$http', function($q,$http){

  return{
    initialize : function(){
      Parse.initialize("ohfbGrwqAQQyHSiLdsMMGGgc5WvSWJ4uge5JaYiy", "7AJpbmFKiX6x2vcMNI6kWyWXdyT6VHXUxvKgWLdx");
      return Parse;
    },
    sendEmail: function(email){
      var deferred = $q.defer();
      Parse.Cloud.run('sendEmail',{email:email},{
        success: function(success){
          deferred.resolve(success);
        },
        error: function(error){
          deferred.reject(error);
        }
      });
      return deferred.promise;
    }

  };
}]);