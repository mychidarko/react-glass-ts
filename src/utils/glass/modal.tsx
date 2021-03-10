import { ModalProps } from "./@types/modal";

const Modal: React.FC<ModalProps> = ({
  name,
  className,
  close,
  children,
  show,
  size,
  ...rest
}) => {
  return (
    <div className={`glass-modal ${className} ${show ? "-modal-show" : "-modal-hide"}`}>
      <div className="glass-modal__overlay" onClick={close}></div>
      <div className={`glass-modal__modal -size-${size || "md"}`} {...rest}>
        <button
          onClick={close}
          className="material-icons glass-modal__modal__close"
        >
          close
        </button>
        <div className="glass-modal__modal__content">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
