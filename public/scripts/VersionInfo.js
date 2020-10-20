class VersionInfo{
    constructor(){
        this.major = 0;
        this.minor = 0;
    }

    static get(callback){
        axios.get(apiUrl +'/version')
		.then(function (response) {
            const versionInfo = new VersionInfo();            
			versionInfo.major = parseInt(response.data.major);
			versionInfo.minor = parseInt(response.data.minor);                
            callback(versionInfo);			
		})
		.catch(function (error) {
			console.log(error);
		});
    }
}