import './Womens.scss'
import { CardItem } from '../../components/Card-item'
import { Link } from 'react-router-dom'
import { products } from '../../assets/data'

export const Womens = () => {
    return(
        <div className="womens">
            {
                products.map((item, id) => (
                    item.category === "women" &&
                    <div key={id} className='womens__card'>
                        <Link to='/details' className='womens__card__link' state={{ item: item }}>
                            <CardItem item={item} />
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}
