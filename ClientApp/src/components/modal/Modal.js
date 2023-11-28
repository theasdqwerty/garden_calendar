import React, {useEffect} from "react";
import style from './Modal.module.css'
import closeIcon from '../../image/close.png'

export const Modal = ({isVisible = false, title, content, footer, onClose}) => {
    const keydownHandler = ({key}) => {
        switch (key) {
            case 'Escape':
                onClose();
                break;
            default:
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', keydownHandler);
        return () => document.removeEventListener('keydown', keydownHandler);
    });

    return !isVisible ? null : (
        <div className={style.modal} onClick={onClose}>
            <div className={style.modalDialog} onClick={e => e.stopPropagation()}>
                <div className={style.modalHeader}>
                    <h3 className={style.modalTitle}>{title}</h3>
                    <span className={style.modalClose} onClick={onClose}>
                        <img src={closeIcon} alt={'кнопка закрытия'}/>
                    </span>
                </div>
                <div className={style.modalBody}>
                    <div className={style.modalContent}>{content}</div>
                </div>
                {footer && <div className={style.modalFooter}>{footer}</div>}
            </div>
        </div>
    );
};