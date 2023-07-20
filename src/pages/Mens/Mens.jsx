import './Mens.scss'
import { CardItem } from '../../components/Card-item'
import { Link } from 'react-router-dom'
import { products } from '../../assets/data'

export const Mens = () => {
    return(
        <div className="mens">
            {
                products.map((item, id) => (
                    item.category === "men" &&
                    <div key={id} className='mens__card'>
                        <Link to='/details' className='mens__card__link' state={{ item: item }}>
                            <CardItem item={item} />
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}
