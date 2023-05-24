import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  //  const { alt, largeImageURL } = this.props;
  render() {
    return createPortal(
      <div className={css.Overlay} onClick={this.toggleModal}>
        <div className={css.Modal}>
          <img src={this.props.children} alt={this.props.alt} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            incidunt rerum aut saepe non ducimus repellendus deleniti dicta
            delectus obcaecati suscipit est sed fugiat maiores explicabo sunt!
            Magnam explicabo animi sapiente quidem. Ipsa adipisci voluptatibus,
            voluptate quidem sapiente voluptas id!
          </p>
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
// const { alt, largeImageURL } = this.props;
//   return createPortal(
//     <div className="Overlay" onClick={this.handlebackdropClick}>
//       <div className="Modal">
//         <img src={largeImageURL} alt={alt} />
//       </div>
//     </div>,
//     modalRoot
//   );
// }
