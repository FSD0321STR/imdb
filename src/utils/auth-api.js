
export async function register({email, password, e}){
    console.log(email)
    console.log(password)
    // Here we fetch against API

    //FAIL CASE
    if(email ===''){
        alert("Error")
        return {
            message: 'Email is not valid, please try again',
            status: 404
        }
    }
    //CORRECT CASE
    alert("Correct")
    return {        
        message: 'Register Completed',
        status: 201
    }
}