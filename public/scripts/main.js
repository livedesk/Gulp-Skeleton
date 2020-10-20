

let rootUrl;
let appUrl; 
let apiUrl;

if (location.hostname === 'localhost') {
    rootUrl = '';
    appUrl = '';
    apiUrl = '';
} else {
    rootUrl = '';
    appUrl = '';
    apiUrl = ''; 
}

const eResponse = {
    kSuccess: 200,
    kCreated: 201,
    kUnauthorised: 401
}

function SendEmail(){
    const url = apiUrl + 'email/send';
    const data = [];
    
    $.ajax({
        type: "POST",
        url: url,
        data: data,
        success: function(result){
            console.log(result);
        },
        dataType: 'text'
      });
}

