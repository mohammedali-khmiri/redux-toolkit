import { clearCart } from "../features/cart/cartSlice";

const Modal = ({setOpenModal, dispatch}) => {
  const handleClose = () => {
    setOpenModal(false);
  };
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Remove all items from your shopping cart ?</h4>
        <div className="btn-container">
          <button type="button" className="btn clear-btn" onClick={handleClose}>
            cancel
          </button>
          <button
            type="button"
            className="btn confirm-btn"
            onClick={() => {
              dispatch(clearCart());
            }}
          >
            confirm
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
