import PropTypes from "prop-types";
import "./Popup.css";

function Popup({ closeModal }) {

  return (
    <section className="overlay" onClick={() => closeModal(false)}>
      <article className="modal-window" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <h2>Confirmation Required!</h2>

          <p>
            Are you sure you want to proceed with this action? This action
            cannot be undone
          </p>

          <div className="btn-container">
            <button
              className="btn btn-cancle"
              onClick={() => closeModal(false)}
            >
              Cancle
            </button>
            <button className="btn btn-proceed">Confirm</button>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Popup;

Popup.propTypes = {
  closeModal: PropTypes.func,
};
