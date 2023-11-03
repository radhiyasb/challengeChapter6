import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"

function TokenProtected({ children }) {
    const navigate = useNavigate();
    const Data = useSelector((state) => state.auth)

    useEffect(() => {
        if (Data.token == undefined) {
            navigate("/")
        }
    }, []);
    return children;
}
export default TokenProtected;