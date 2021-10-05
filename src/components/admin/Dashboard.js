import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";

export function Dashboard() {
    const history = useHistory();
    
    useEffect(() => {
        if (localStorage.getItem("isUserLoggedIn") != "true") {
            history.push("/admin/login");
        }
    }, [])

    return (
        <div className="page-content">
            <Header />
            Welcome to admin dashboard
        </div>
    )
}
