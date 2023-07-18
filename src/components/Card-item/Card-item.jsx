import './Card-item.scss';

export const CardItem = (props) => {
    const item = props.item

    return (
        <div className="card">
            <img src={item.img} alt={item.title} className="card__img" />
            {
                item.sale && <div className="card__sale">{item.salepercent}</div>
            }
            <div className="card__title">{item.title}</div>
            <div className="card__price">{item.price} PLN</div>
        </div>
    )
}
