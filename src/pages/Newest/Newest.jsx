import './Newest.scss'
import { CardItem } from '../../components/Card-item'
import { Link } from 'react-router-dom'
import { products } from '../../assets/data'

export const Newest = () => {
    return(
        <div className="newest">
            {
                products.map((item, id) => (
                    item.new &&
                    <div key={id} className='newest__card'>
                        <Link to='/details' className='newest__card__link' state={{ item: item }}>
                            <CardItem item={item} />
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}
