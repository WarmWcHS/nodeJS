import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

const useAuth = () => {
    const { setUser } = useContext(AuthContext)
    const { token,setToken } = useContext(AuthContext)
    const login = async (account, password) => {
        let newToken, error
        const url = "http://localhost:3001/api/users/login"
        const formData = new FormData()
        formData.append("account", account)
        formData.append("password", password)

        newToken = await fetch(url,{
            method:"POST",
            body:formData
        })
            .then(response => response.json())
            .then(result => {
                if(result.status === 'success'){
                    return result.token
                }else{
                    throw new Error(result.message)
                }
            })
            .catch((err) => {
                error = err
                return undefined
            })

        if (error) {
            alert(error.message)
            return
        }
        if (newToken) {
            setToken(newToken)
            localStorage.setItem("nextToken",newToken)
        }
    }
    const logout = async() => {
        let newToken, error
        const url = "http://localhost:3001/api/users/logout"
        newToken = await fetch(url,{
            method:"GET",
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(result => {
                if(result.status === 'success'){
                    return result.token
                }else{
                    throw new Error(result.message)
                }
            })
            .catch((err) => {
                error = err
                return undefined
            })
        if (error) {
            alert(error.message)
            return
        }
        if (newToken) {
            setToken(newToken)
            localStorage.setItem("nextToken",newToken)
        }

    }

    return { login, logout }
}

export default useAuth