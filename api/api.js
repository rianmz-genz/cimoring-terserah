import axios from 'axios'
const domain = "http://localhost:3000"
export const loginApi = async(email, password) => {
    const res = await axios({
        method: "POST",
        baseURL: `${domain}/api/login`,
        data: {
            email, password
        },
        headers:{
            "Content-Type": "application/json"
        }
    })
    if(res.data.success == false){
        return false
    }
    return res.data.data
}
export const registerApi = async(email, password, name, phone ) => {
    const res = await axios({
        method: "POST",
        baseURL: `${domain}/api/register`,
        data: {
            email, password, name, phonenumber: phone, role: "user"
        },
        headers:{
            "Content-Type": "application/json"
        }
    })
    if(res.data.success == false){
        return false;
    }
    return res.data.data
}
export const getAllUser = async () => {
    const res = await axios({
        method: "GET",
        baseURL: `${domain}/api/user`,
        headers:{
            "Content-Type": "application/json"
        }
    })
    if(res.data.success == false){
       return res.data.success
    }
    return res.data.data
}
export const getUser = async (id) => {
    const res = await axios({
        method: "GET",
        baseURL: `${domain}/api/user/${id}`,
        headers:{
            "Content-Type": "application/json"
        }
    })
    if(res.data.success == false){
       return res.data.success
    }
    return res.data.data
}

export const editUserApi = async(id, email, password, name, phone ) => {
    const res = await axios({
        method: "PUT",
        baseURL: `${domain}/api/user/update/${id}`,
        data: {
            email, password, name, phonenumber: phone, role: "user"
        },
        headers:{
            "Content-Type": "application/json"
        }
    })
    return res.data.data
}
export const getAllProducts = async () => {
    const res = await axios({
        method: "GET",
        baseURL: `${domain}/api/products`,
        headers:{
            "Content-Type": "application/json"
        }
    })
    return res.data.data
}

export const getProductCategories = async () => {
    const res = await axios({
        method: "GET",
        baseURL: `${domain}/api/productcategory`,
        headers:{
            "Content-Type": "application/json"
        }
    })
    return res.data.data
}