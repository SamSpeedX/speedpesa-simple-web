import axios from "axios"

const BASE = 'http://127.0.0.1:8000/api';
export const pay = async(data) => {
    const res = await axios.post(`${BASE}/api/payment/create`, data)
    console.log("Res: ", res.data)
    return res.data
}