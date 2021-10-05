import Header from "./Header";
import Products from "./Products";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import AddOrEditProduct from "./AddOrEditProduct";

export function Dashboard() {
    const history = useHistory();
    const isAdminLoggedIn = useSelector(state => state.admin);
    const [addProductForm, setAddProductForm] = useState(false);
    
    useEffect(() => {
        if (isAdminLoggedIn.toString() != "true") {
            history.push("/admin/login");
        }
    }, [])

    const handleformToggle = id => {
        let param = !addProductForm;

        if (typeof id == "number") {
            param = id;
        }

        setAddProductForm(param);
    }

    return (
        <div className="page-content">
            <h3 style={{textAlign: "center"}}>Welcome to admin dashboard</h3>

            <Header onProductFormToggle={handleformToggle} isEditForm={addProductForm} />

            {
                addProductForm
                ? <AddOrEditProduct onProductFormToggle={handleformToggle} editProductId={addProductForm} />
                : <Products onProductFormToggle={handleformToggle} />
            }
            
        </div>
    )
}
