import axios from "axios";
export default axios.create({
    headers: {"Content-Type": "application/json"},
    baseURL: "https://localhost:7102/api/v1"
})