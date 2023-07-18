import './Mens.scss'
import jacket from '../../assets/jacket1.avif'
import { CardItem } from '../../components/Card-item'
import { Link } from 'react-router-dom'

const MENS_ITEMS = [
    {
        id: 1,
        title: "Kurtka męska 1",
        img: jacket,
        price: "200",
        sale: false,
        color: "Black",
        size: ["S", "M", "L"]
    },
    {
        id: 2,
        title: "Kurtka męska 2",
        img: jacket,
        price: "100",
        sale: false,
        color: "Black",
        size: ["S", "M", "L"]
    },
    {
        id: 3,
        title: "Kurtka męska 3",
        img: jacket,
        price: "80",
        sale: true,
        salepercent: "-20%",
        color: "Black",
        size: ["S", "M", "L"]
    },
    {
        id: 4,
        title: "Kurtka męska 4",
        img: jacket,
        price: "100",
        sale: false,
        color: "Black",
        size: ["S", "M", "L"]
    },
    {
        id: 5,
        title: "Kurtka męska 5",
        img: jacket,
        price: "100",
        sale: false,
        color: "Black",
        size: ["S", "M", "L"]
    },
    {
        id: 6,
        title: "Kurtka męska 6",
        img: jacket,
        price: "100",
        sale: false,
        color: "Black",
        size: ["S", "M", "L"]
    },
    {
        id: 7,
        title: "Kurtka męska 7",
        img: jacket,
        price: "100",
        sale: false,
        color: "Black",
        size: ["S", "M", "L"]
    },
]

export const Mens = () => {

    return(
        <div className="mens">
            {
                MENS_ITEMS.map((item, id) => (
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
