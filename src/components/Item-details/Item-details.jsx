import './Item-details.scss'

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
                <p className='item-details__content__size'>{
                    item.size
                }</p>
                <p className='item-details__content__color'>COLOR: {item.color}</p>
            </div>
        </div>
    )
}
