import './Sales.scss'
import { CardItem } from '../../components/Card-item'
import { Link } from 'react-router-dom'
import { products } from '../../assets/data'

export const Sales = () => {
    return(
        <div className="sales">
            {
                products.map((item, id) => (
                    item.sale &&
                    <div key={id} className='sales__card'>
                        <Link to='/details' className='sales__card__link' state={{ item: item }}>
                            <CardItem item={item} />
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}
