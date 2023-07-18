import './Item-details.scss'
import { TextField, MenuItem } from '@mui/material'

export const ItemDetails = (props) => {
    const item = props.item

    return (
        <div className='item-details'>
            <img src={item.img} className='item-details__img' />
            <div className='item-details__content'>
                <p className='item-details__content__title'>{item.title}</p>
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
                <button className='item-details__content__btn'>Add to cart</button>
            </div>
        </div>
    )
}
