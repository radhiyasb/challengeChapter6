import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoint";
import http3 from "../../utils/http3";
import { toast } from "react-toastify";

const fetchUserData = async ({ queryKey }) => {
    const [_key] = queryKey;
    try {
        const { data } = await http3.get(_key);
        
        return data;
    
    } catch (err) {
        if (err.response.status === 401) {
            toast.error("Login Dulu BOSSS!!!");
            setTimeout(() => {
                window.location.href = "/Login";
            }, 2000);
        }
    }
}

const useGetDataUser = (options) => {
    return useQuery([API_ENDPOINT.Get_User, options], fetchUserData)
}

export {fetchUserData, useGetDataUser}