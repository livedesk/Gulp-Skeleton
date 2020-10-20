class UserAccount{
    constructor(){
        this.accountId = 0;
        this.createDate = null;
        this.emailAddress = '';
        this.password = '';
        this.ip = '';
        this.activationCode = '';
    }


    getUser(callback) {
      axios.get(apiUrl +'/auth/getuser/' + this.activationCode)
        .then(response => callback(response))
        .catch(response => callback(response));
    }
    // Attempts to create an account with given credentials
    signUp(callback) {
        axios.post(apiUrl +'/auth/register', this)
          .then(response => callback(response))
          .catch(response => callback(response));
    }  

    activateUser(callback) {
      axios.post(apiUrl +'/auth/activateuser', this)
        .then(response => callback(response))
        .catch(response => callback(response));
    }    
  
    resendActivationCode(callback) {
      axios.get(apiUrl + '/auth/resendactivation/' + this.activationCode)
        .then(response => callback(response))
        .catch(response => callback(response)); 
    }

    signIn(callback) {
      axios.post(apiUrl + '/auth/signin', this)
        .then(response => callback(response))
        .catch(response => callback(response));      
    }

    passwordReset(callback) {
        axios.post(apiUrl + '/auth/passwordreset', this)
        .then(response => callback(response))
        .catch(response => callback(response));  
    }

    passwordResetRequest(callback) {
        axios.post(apiUrl + '/auth/passwordresetrequest', this)
        .then(response => callback(response))
        .catch(response => callback(response));          
    }
}