import { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../store/actions/productActions";
import { setToast } from "../../store/actions/toastActions";

export default function AddOrEditProduct(props) {
    var product = {};
    const products = useSelector(state => state.products);

    if (props.editProductId) {
        product = products.find(product => product.id === props.editProductId) || {};
    }

    const dispatch = useDispatch();

    const [title, setTitle] = useState(product.title);
    const [price, setPrice] = useState(product.price);
    const [description, setDescription] = useState(product.description);
    const [validated, setValidated] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();

        if (event.currentTarget.checkValidity()) {
            let action = "added";

            const productDetails = {
                id: Math.floor(Math.random() * 1000),
                title,
                price: +price,
                description,
            }

            if (product.id) {
                productDetails.id = product.id;

                action = "updated";
            }

            dispatch(addProduct(productDetails));

            dispatch(setToast({
                type: "success",
                title: "Success!",
                message: `Kudos! Product has been ${action} successfully!`
            }));

            props.onProductFormToggle();
        }

        setValidated(true);
    }

    const handleInputChange = ({target}, fieldType) => {
        switch (fieldType) {
            case 'title':
                setTitle(target.value);
                break;

            case 'description':
                setDescription(target.value);
                break;

            case 'price':
                setPrice(target.value);
                break;

            default:
                break;
        }
    }

    return (
        <Form noValidate validated={validated} className="page-content" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="productName">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter product name" value={title} onChange={event => handleInputChange(event, "title")} required />
                <Form.Control.Feedback type="invalid">
                    Please enter product's title.
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="productPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" placeholder="price" value={price} onChange={event => handleInputChange(event, "price")} required />
                <Form.Control.Feedback type="invalid">
                    Please enter product's price.
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="productDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control type="textarea" placeholder="Description" value={description} onChange={event => handleInputChange(event, "description")} required />
                <Form.Control.Feedback type="invalid">
                    Please enter product's description.
                </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}
