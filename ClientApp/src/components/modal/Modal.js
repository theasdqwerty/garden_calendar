import style from './modal.css'

export const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <div className="modalContainer">
                    <div className="modalChildren">
                        {children}
                    </div>

                    <button className="acceptButton"  type="button" onClick={handleClose}>
                    <span className= "buttonText" >
                         Хорошо
                    </span>
                    </button>
                </div>

            </section>
        </div>
    );
};