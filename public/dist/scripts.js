"use strict";var rootUrl,appUrl,apiUrl;apiUrl=appUrl=rootUrl=(location.hostname,"");var eResponse={kSuccess:200,kCreated:201,kUnauthorised:401};function SendEmail(){var a=apiUrl+"email/send";$.ajax({type:"POST",url:a,data:[],success:function(a){console.log(a)},dataType:"text"})}
"use strict";function _classCallCheck(s,t){if(!(s instanceof t))throw new TypeError("Cannot call a class as a function")}var Session=function s(){_classCallCheck(this,s),this.SessionId=0,this.AccountId=0,this.SessionStart=null,this.LastActive=null,this.Ip=""};
"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}var UserAccount=function(){function t(){_classCallCheck(this,t),this.accountId=0,this.createDate=null,this.emailAddress="",this.password="",this.ip="",this.activationCode=""}return _createClass(t,[{key:"getUser",value:function(e){axios.get(apiUrl+"/auth/getuser/"+this.activationCode).then(function(t){return e(t)}).catch(function(t){return e(t)})}},{key:"signUp",value:function(e){axios.post(apiUrl+"/auth/register",this).then(function(t){return e(t)}).catch(function(t){return e(t)})}},{key:"activateUser",value:function(e){axios.post(apiUrl+"/auth/activateuser",this).then(function(t){return e(t)}).catch(function(t){return e(t)})}},{key:"resendActivationCode",value:function(e){axios.get(apiUrl+"/auth/resendactivation/"+this.activationCode).then(function(t){return e(t)}).catch(function(t){return e(t)})}},{key:"signIn",value:function(e){axios.post(apiUrl+"/auth/signin",this).then(function(t){return e(t)}).catch(function(t){return e(t)})}},{key:"passwordReset",value:function(e){axios.post(apiUrl+"/auth/passwordreset",this).then(function(t){return e(t)}).catch(function(t){return e(t)})}},{key:"passwordResetRequest",value:function(e){axios.post(apiUrl+"/auth/passwordresetrequest",this).then(function(t){return e(t)}).catch(function(t){return e(t)})}}]),t}();
"use strict";function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,n,r){return n&&_defineProperties(e.prototype,n),r&&_defineProperties(e,r),e}var VersionInfo=function(){function t(){_classCallCheck(this,t),this.major=0,this.minor=0}return _createClass(t,null,[{key:"get",value:function(r){axios.get(apiUrl+"/version").then(function(e){var n=new t;n.major=parseInt(e.data.major),n.minor=parseInt(e.data.minor),r(n)}).catch(function(e){console.log(e)})}}]),t}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJTZXNzaW9uLmpzIiwiVXNlckFjY291bnQuanMiLCJWZXJzaW9uSW5mby5qcyJdLCJuYW1lcyI6WyJyb290VXJsIiwiYXBwVXJsIiwiYXBpVXJsIiwibG9jYXRpb24iLCJob3N0bmFtZSIsImVSZXNwb25zZSIsImtTdWNjZXNzIiwia0NyZWF0ZWQiLCJrVW5hdXRob3Jpc2VkIiwiU2VuZEVtYWlsIiwidXJsIiwidHlwZSIsImRhdGEiLCJzdWNjZXNzIiwiY29uc29sZSIsInJlc3VsdCIsImxvZyIsImRhdGFUeXBlIiwiU2Vzc2lvbiIsIl9jbGFzc0NhbGxDaGVjayIsInRoaXMiLCJTZXNzaW9uSWQiLCJBY2NvdW50SWQiLCJTZXNzaW9uU3RhcnQiLCJMYXN0QWN0aXZlIiwiSXAiLCJVc2VyQWNjb3VudCIsImFjY291bnRJZCIsImNyZWF0ZURhdGUiLCJlbWFpbEFkZHJlc3MiLCJwYXNzd29yZCIsImlwIiwiYWN0aXZhdGlvbkNvZGUiLCJjYWxsYmFjayIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwicG9zdCIsImNhdGNoIiwiVmVyc2lvbkluZm8iLCJtYWpvciIsIm1pbm9yIiwidmVyc2lvbkluZm8iLCJwYXJzZUludCIsImVycm9yIl0sIm1hcHBpbmdzIjoiYUFFQSxJQUFJQSxRQUNBQyxPQUNBQyxPQUtBQSxPQURBRCxPQURBRCxTQURBRyxTQUFTQyxTQUNULElBU0osSUFBTUMsVUFBWSxDQUNkQyxTQUFVLElBQ1ZDLFNBQVUsSUFDVkMsY0FBZSxLQUduQixTQUFTQyxZQUNMLElBQVNDLEVBQUdSLE9BQVMsYUFJakJTLEVBQUFBLEtBQU0sQ0FDSEEsS0FGQSxPQUdDRCxJQUFFRSxFQUNOQyxLQU5KLEdBT1FDLFFBQUEsU0FBQUMsR0FMREQsUUFBQUUsSUFBQUQsSUFBUEUsU0FBQTs2SEMxQkVDLFFBQ0YsU0FBQUEsSUFBYUMsZ0JBQUFDLEtBQUFGLEdBQ1RFLEtBQUtDLFVBQVksRUFDakJELEtBQUtFLFVBQVksRUFIbkJKLEtBSU9LLGFBSFQsS0FBYUgsS0FBQUksV0FBQSxLQUtUSixLQUFLSyxHQUFLO3VaQ05aQyx1QkFDRixTQUFBQSxJQUFhUCxnQkFBQUMsS0FBQU0sR0FDVE4sS0FBS08sVUFBWSxFQUNqQlAsS0FBS1EsV0FBYSxLQUNsQlIsS0FBS1MsYUFBZSxHQUNwQlQsS0FBS1UsU0FBVyxHQUNoQlYsS0FBS1csR0FBSyxHQUNWWCxLQUFLWSxlQUFpQix3REFOMUJDLEdBQWFDLE1BQUFDLElBQUFqQyxPQUFBLGlCQUFBa0IsS0FBQVksZ0JBWVJJLEtBQUssU0FBQUMsR0FBUSxPQUFJSixFQUFTSSxLQVh0QlYsTUFBQUEsU0FBQUEsR0FBTCxPQUFBTSxFQUFBSSxvQ0FHS1AsR0FDTEksTUFBVUksS0FBVnBDLE9BQUEsaUJBQUFrQixNQUNLWSxLQUFBQSxTQUFBQSxHQUFMLE9BQUFDLEVBQUFJLEtBQ0hFLE1BQUEsU0FBQUYsR0FBQSxPQUFBSixFQUFBSSwwQ0FlWUosR0FDWEMsTUFBTUksS0FBS3BDLE9BQVEscUJBYkhrQixNQUNoQmMsS0FBTUMsU0FBQUEsR0FBVSxPQUFFRixFQUFBSSxLQUNGRSxNQUFJTixTQUFBQSxHQUFRLE9BQUNJLEVBQWJBLGtEQURoQkosR0FJRkMsTUFBQUMsSUFBQWpDLE9BQUEsMEJBQUFrQixLQUFBWSxnQkFlS0ksS0FBSyxTQUFBQyxHQUFRLE9BQUlKLEVBQVNJLEtBQzFCRSxNQUFNLFNBQUFGLEdBQVEsT0FBSUosRUFBU0ksb0NBZHZCSixHQUNXQyxNQUFBSSxLQUFJTCxPQUFTSSxlQUFiakIsTUFDYm1CLEtBRkgsU0FBQUYsR0FFUyxPQUFBQSxFQUFRQSxLQUFBRSxNQUFJTixTQUFBQSxHQUFRLE9BQUNJLEVBQWJBLDJDQXFCUEosR0FDVkMsTUFBTUksS0FBS3BDLE9BQVMsc0JBQXVCa0IsTUFDMUNnQixLQUFLLFNBQUFDLEdBQVEsT0FBSUosRUFwQlRBLEtBQ1hDLE1BQU1JLFNBQUFBLEdBQVcsT0FBRUwsRUFBQUksa0RBRVdBLEdBRjlCSCxNQUFBSSxLQUFBcEMsT0FBQSw2QkFBQWtCLE1BR0RnQixLQUFBLFNBQUFDLEdBQUEsT0FBQUosRUFBQUksS0F1QklFLE1BQU0sU0FBQUYsR0FBUSxPQUFJSixFQUFTSTt1WkNsRDlCRyx1QkFDRixTQUFBQSxJQUFhckIsZ0JBQUFDLEtBQUFvQixHQUNUcEIsS0FBS3FCLE1BQVEsRUFDYnJCLEtBQUtzQixNQUFRLHdEQUdOVCxHQUNQQyxNQUFNQyxJQUFJakMsT0FBUSxZQUN2QmtDLEtBUkdJLFNBUVlILEdBQ04sSUFBTU0sRUFBYyxJQUFJSCxFQUNqQ0csRUFBWUYsTUFBUUcsU0FBU1AsRUFBU3pCLEtBQUs2QixPQVQxQ0UsRUFBQUQsTUFBQUUsU0FBYVAsRUFBQXpCLEtBQUE4QixPQUFBVCxFQUFBVSxLQUNUSixNQUFLRSxTQUFMSSxHQUNBL0IsUUFBSzRCLElBQUxHIiwiZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxubGV0IHJvb3RVcmw7XG5sZXQgYXBwVXJsOyBcbmxldCBhcGlVcmw7XG5cbmlmIChsb2NhdGlvbi5ob3N0bmFtZSA9PT0gJ2xvY2FsaG9zdCcpIHtcbiAgICByb290VXJsID0gJyc7XG4gICAgYXBwVXJsID0gJyc7XG4gICAgYXBpVXJsID0gJyc7XG59IGVsc2Uge1xuICAgIHJvb3RVcmwgPSAnJztcbiAgICBhcHBVcmwgPSAnJztcbiAgICBhcGlVcmwgPSAnJzsgXG59XG5cbmNvbnN0IGVSZXNwb25zZSA9IHtcbiAgICBrU3VjY2VzczogMjAwLFxuICAgIGtDcmVhdGVkOiAyMDEsXG4gICAga1VuYXV0aG9yaXNlZDogNDAxXG59XG5cbmZ1bmN0aW9uIFNlbmRFbWFpbCgpe1xuICAgIGNvbnN0IHVybCA9IGFwaVVybCArICdlbWFpbC9zZW5kJztcbiAgICBjb25zdCBkYXRhID0gW107XG4gICAgXG4gICAgJC5hamF4KHtcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpe1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YVR5cGU6ICd0ZXh0J1xuICAgICAgfSk7XG59XG5cbiIsImNsYXNzIFNlc3Npb257XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5TZXNzaW9uSWQgPSAwO1xuICAgICAgICB0aGlzLkFjY291bnRJZCA9IDA7XG4gICAgICAgIHRoaXMuU2Vzc2lvblN0YXJ0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5MYXN0QWN0aXZlID0gbnVsbDtcbiAgICAgICAgdGhpcy5JcCA9ICcnO1xuICAgIH0gICBcbn0iLCJjbGFzcyBVc2VyQWNjb3VudHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLmFjY291bnRJZCA9IDA7XG4gICAgICAgIHRoaXMuY3JlYXRlRGF0ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuZW1haWxBZGRyZXNzID0gJyc7XG4gICAgICAgIHRoaXMucGFzc3dvcmQgPSAnJztcbiAgICAgICAgdGhpcy5pcCA9ICcnO1xuICAgICAgICB0aGlzLmFjdGl2YXRpb25Db2RlID0gJyc7XG4gICAgfVxuXG5cbiAgICBnZXRVc2VyKGNhbGxiYWNrKSB7XG4gICAgICBheGlvcy5nZXQoYXBpVXJsICsnL2F1dGgvZ2V0dXNlci8nICsgdGhpcy5hY3RpdmF0aW9uQ29kZSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gY2FsbGJhY2socmVzcG9uc2UpKVxuICAgICAgICAuY2F0Y2gocmVzcG9uc2UgPT4gY2FsbGJhY2socmVzcG9uc2UpKTtcbiAgICB9XG4gICAgLy8gQXR0ZW1wdHMgdG8gY3JlYXRlIGFuIGFjY291bnQgd2l0aCBnaXZlbiBjcmVkZW50aWFsc1xuICAgIHNpZ25VcChjYWxsYmFjaykge1xuICAgICAgICBheGlvcy5wb3N0KGFwaVVybCArJy9hdXRoL3JlZ2lzdGVyJywgdGhpcylcbiAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiBjYWxsYmFjayhyZXNwb25zZSkpXG4gICAgICAgICAgLmNhdGNoKHJlc3BvbnNlID0+IGNhbGxiYWNrKHJlc3BvbnNlKSk7XG4gICAgfSAgXG5cbiAgICBhY3RpdmF0ZVVzZXIoY2FsbGJhY2spIHtcbiAgICAgIGF4aW9zLnBvc3QoYXBpVXJsICsnL2F1dGgvYWN0aXZhdGV1c2VyJywgdGhpcylcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gY2FsbGJhY2socmVzcG9uc2UpKVxuICAgICAgICAuY2F0Y2gocmVzcG9uc2UgPT4gY2FsbGJhY2socmVzcG9uc2UpKTtcbiAgICB9ICAgIFxuICBcbiAgICByZXNlbmRBY3RpdmF0aW9uQ29kZShjYWxsYmFjaykge1xuICAgICAgYXhpb3MuZ2V0KGFwaVVybCArICcvYXV0aC9yZXNlbmRhY3RpdmF0aW9uLycgKyB0aGlzLmFjdGl2YXRpb25Db2RlKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiBjYWxsYmFjayhyZXNwb25zZSkpXG4gICAgICAgIC5jYXRjaChyZXNwb25zZSA9PiBjYWxsYmFjayhyZXNwb25zZSkpOyBcbiAgICB9XG5cbiAgICBzaWduSW4oY2FsbGJhY2spIHtcbiAgICAgIGF4aW9zLnBvc3QoYXBpVXJsICsgJy9hdXRoL3NpZ25pbicsIHRoaXMpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IGNhbGxiYWNrKHJlc3BvbnNlKSlcbiAgICAgICAgLmNhdGNoKHJlc3BvbnNlID0+IGNhbGxiYWNrKHJlc3BvbnNlKSk7ICAgICAgXG4gICAgfVxuXG4gICAgcGFzc3dvcmRSZXNldChjYWxsYmFjaykge1xuICAgICAgICBheGlvcy5wb3N0KGFwaVVybCArICcvYXV0aC9wYXNzd29yZHJlc2V0JywgdGhpcylcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gY2FsbGJhY2socmVzcG9uc2UpKVxuICAgICAgICAuY2F0Y2gocmVzcG9uc2UgPT4gY2FsbGJhY2socmVzcG9uc2UpKTsgIFxuICAgIH1cblxuICAgIHBhc3N3b3JkUmVzZXRSZXF1ZXN0KGNhbGxiYWNrKSB7XG4gICAgICAgIGF4aW9zLnBvc3QoYXBpVXJsICsgJy9hdXRoL3Bhc3N3b3JkcmVzZXRyZXF1ZXN0JywgdGhpcylcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gY2FsbGJhY2socmVzcG9uc2UpKVxuICAgICAgICAuY2F0Y2gocmVzcG9uc2UgPT4gY2FsbGJhY2socmVzcG9uc2UpKTsgICAgICAgICAgXG4gICAgfVxufSIsImNsYXNzIFZlcnNpb25JbmZve1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMubWFqb3IgPSAwO1xuICAgICAgICB0aGlzLm1pbm9yID0gMDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0KGNhbGxiYWNrKXtcbiAgICAgICAgYXhpb3MuZ2V0KGFwaVVybCArJy92ZXJzaW9uJylcblx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHZlcnNpb25JbmZvID0gbmV3IFZlcnNpb25JbmZvKCk7ICAgICAgICAgICAgXG5cdFx0XHR2ZXJzaW9uSW5mby5tYWpvciA9IHBhcnNlSW50KHJlc3BvbnNlLmRhdGEubWFqb3IpO1xuXHRcdFx0dmVyc2lvbkluZm8ubWlub3IgPSBwYXJzZUludChyZXNwb25zZS5kYXRhLm1pbm9yKTsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBjYWxsYmFjayh2ZXJzaW9uSW5mbyk7XHRcdFx0XG5cdFx0fSlcblx0XHQuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0fSk7XG4gICAgfVxufSJdfQ==
