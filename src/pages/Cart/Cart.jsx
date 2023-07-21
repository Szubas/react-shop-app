import './Cart.scss'
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { CartItem } from "../../components/Cart-item";
import { Link } from "react-router-dom";

export const Cart = () => {
    const [totalAmount, setTotalAmount] = useState(0);
    const { cart } = useSelector((state) => state);

    useEffect(() => {
        setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
    }, [cart]);

    return (
        <div className='cart'>
            <p className='cart__title'>Cart</p>
            {cart.length > 0 ? (
                <>
                    <p className='cart__text'>Free delivery when buying non-discounted products over PLN 200 and paying in advance.</p>
                    <div className="cart__content">
                        <div className='cart__content__list'>
                            {cart.map((item) => {
                                return <CartItem key={item.id} item={item} />;
                            })}
                        </div>
                        <div className="cart__content__summary">
                            <p className="cart__content__summary__title">
                                YOUR CART SUMMARY
                            </p>
                            <div className='cart__content__summary__textarea'>
                                <dt className='cart__content__summary__textarea__left'>
                                    Total Items
                                </dt>
                                <dd className='cart__content__summary__textarea__right'> {cart.length}</dd>
                            </div>
                            <div className='cart__content__summary__textarea'>
                                <dt className='cart__content__summary__textarea__left'>
                                    Total Amount
                                </dt>
                                <dd className='cart__content__summary__textarea__right'>{totalAmount} PLN</dd>
                            </div>
                            <button className="cart__content__summary__btn">
                                Go to pay
                            </button>
                        </div>
                    </div>
                </>
            ) : (
                <div className='cart__empty'>
                    <p className="cart__empty__info">
                        Your cart is empty!
                    </p>
                    <Link to={"/"}>
                        <button className='cart__empty__btn'>
                            SHOP NOW
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

