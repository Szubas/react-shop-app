import './Cart-item.scss'
import { Delete } from "@mui/icons-material";
import { remove } from '../../redux/slices/cartSlice'
import { useDispatch } from "react-redux";

export const CartItem = (props) => {
    const item = props.item
    const dispatch = useDispatch();

    const removeItemFromCart = () => {
        dispatch(remove(item.id));
    };

    return (
        <div className='cart-item'>
            <img src={item.image} className='cart-item__img' alt={item.image} />
            <div className='cart-item__desc'>
                <p className='cart-item__desc__title'>
                    {item.title}
                </p>
                <p>Price: {item.price} PLN</p>
                <p>Color: {item.color}</p>
            </div>
            <div
                onClick={removeItemFromCart}
                className="cart-item__btn"
            >
                <Delete className="cart-item__btn__icon" />
            </div>
        </div>
    );
};
