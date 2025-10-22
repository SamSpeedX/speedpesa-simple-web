import axios from "axios"

const BASE = 'http://127.0.0.1:8000/api';
export const pay = async(data) => {
    const res = await axios.post(`${BASE}/payment/create`, data)
    console.log("Res: ", res.data)
    if (res.data.status === 'success') {
        const resp = await ussd(res.data.data)
        return resp
    }
    return res.data
}

const ussd = async (data) => {
    const res = await axios.post(`${BASE}/payment/ussd`, data)
    console.log("Res: ", res.data)
    return res.data
}