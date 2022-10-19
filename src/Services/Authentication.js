import httpCommon from "../core/Services/http-common";

export class Authentication{
    loginUser(data){
        return httpCommon.get(`/users?email=${data.email}`)
    }
    logInUser(data){
        return httpCommon.post("/api/v1/users/sign-in/", data)
    }
}