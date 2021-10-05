import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { setToast } from "../../store/actions/toastActions";

export default function Header() {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(setToast({
            type: "success",
            title: "Success!",
            message: "Kudos! You're successfully logged out."
        }));

        localStorage.setItem("isUserLoggedIn", false);

        history.push("/admin/login");
    }

    return (
        <div style={{textAlign: 'right'}}>
            <Button variant="primary" onClick={handleLogout}>
                Logout
            </Button>
        </div>
    )
}
