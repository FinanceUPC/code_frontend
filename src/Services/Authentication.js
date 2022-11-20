import http from '../core/Services/http'

export class Authentication{
    loginUser(data){
        console.log(data)
        return http.get(`/users?username=${data}`)
    }
    logInUser(data){
        return http.post("/users/sign-in", data)
    }
    signUpUser(data){
        return http.post("/users/sign-up", data)
    }
}