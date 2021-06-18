export async function loginCheck({ email, password }) {
    console.log(email)
    console.log(password)
    // Here we fetch against API

    //FAIL CASE
    if (email === '') {
        alert("Error")
        return {
            message: 'Email is not valid, please try again',
            status: 404
        }
    }
    //CORRECT CASE
    alert("Correct")
    return {
        message: 'Login Completed',
        status: 200
    }
}