import './Item-details.scss'
import { TextField, MenuItem } from '@mui/material'
import { add, } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

export const ItemDetails = (props) => {
    const item = props.item
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const addToCart = () => {
        dispatch(add(item));
        navigate('/cart')
      };

    return (
        <>
            <div className='item-details'>
                <img src={item.image} alt={item.image} className='item-details__img' />
                <div className='item-details__content'>
                    <p className='item-details__content__title'>{item.title}</p>
                    <p className='item-details__content__cat'><b>Category:</b> {item.category}</p>
                    {
                        item.sale && <p className='item-details__content__sale'>SALE: {item.salepercent}</p>
                    }
                    <p className='item-details__content__price'>PRICE: {item.price} PLN</p>
                    <TextField
                        select
                        label="Size"
                        defaultValue="S"
                    >
                        {item.size.map((size) => (
                            <MenuItem key={size} value={size}>
                                {size}
                            </MenuItem>
                        ))}
                    </TextField>
                    <p className='item-details__content__color'>COLOR: {item.color}</p>
                    <button className='item-details__content__btn' onClick={addToCart}>Add to cart</button>
                </div>
            </div>
            <div className='item-details__desc'>
                <h2><b>Description:</b></h2>
                <p>{item.description}</p>
            </div>
        </>
    )
}
