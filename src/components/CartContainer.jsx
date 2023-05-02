import { useState } from "react";
import CartItem from "./CartItem";
import Modal from "./Modal";

import { useDispatch, useSelector } from "react-redux";
const CartContainer = () => {
  const { cartItems, amount, total } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  //Modal state
  const [openModal, setOpenModal] = useState(false);

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your Bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>Your Bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button
          className="btn clear-btn"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          clear cart
        </button>

        {openModal && (
          <Modal
            openModal={openModal}
            setOpenModal={setOpenModal}
            dispatch={dispatch}
          />
        )}
      </footer>
    </section>
  );
};

export default CartContainer;
