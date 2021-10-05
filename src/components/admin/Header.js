import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { setToast } from "../../store/actions/toastActions";
import { setAdmin } from "../../store/actions/userActions";

export default function Header(props) {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(setToast({
            type: "success",
            title: "Success!",
            message: "Kudos! You're successfully logged out."
        }));

        dispatch(setAdmin(false));

        history.push("/admin/login");
    }

    return (
        <div style={{textAlign: 'right'}}>
            <Button variant={props.isEditForm ? 'light' : 'primary'} onClick={props.onProductFormToggle}>
                {props.isEditForm ? 'Back' : 'Add Product'}
            </Button>{' '}

            <Button variant="primary" onClick={handleLogout}>
                Logout
            </Button>
        </div>
    )
}
