var handleApiError = err=>{
    if(err.response.status==401){
        alert("your session is expired please login again");
    }
    if(err.response.status==403){
        alert("you are not authorized to perform this action");
    }
    if(err.response.status==500){
        alert("Opps!! Server is crashed contact your server admin");
    }
}

export default handleApiError;