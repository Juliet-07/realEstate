/*
 * component: modal
 * author: Eze Bernardine May
 * Date: April 16th, 2020
 * EmBED modal component
 */

import React, { useImperativeHandle, forwardRef } from "react";
import { ModalWrap } from "./modal.styles";
import Button from "../Button";
import { CloseIcon } from "../../assets/svg";
import { OverFlowScrollBar } from "../OverflowScroll/styles";

const Modal = forwardRef(
  ({ show, handleClose, modalTitle, noHeader, children }, ref) => {
    let buttonRef = React.createRef();

    useImperativeHandle(ref, () => ({
      preventBodyScroll() {
        buttonRef.current.ownerDocument.body.style.overflow = "hidden";
      },
      addBodyScroll() {
        buttonRef.current.ownerDocument.body.style.overflow = "";
      },
    }));

    const close = () => {
      buttonRef.current.ownerDocument.body.style.overflow = "";
      handleClose();
    };

    return (
      <ModalWrap show={show} ref={buttonRef} noHeader={noHeader}>
        <div className={"overlay"} />

        <div className="main">
          <div className="event" onClick={() => close()} />

          <div className="modalBody">
            <div className="modalWrap">
              <header>
                <div className="modalHead">
                  <h2>{modalTitle && modalTitle.toUpperCase()}</h2>
                </div>
                <span className="closeBtn" onClick={() => close()}>
                  <CloseIcon width="15px" height="15px" color="#e62a00" />
                </span>
              </header>

              <OverFlowScrollBar className="modalContainer">
                {children}
              </OverFlowScrollBar>
            </div>
          </div>
        </div>
      </ModalWrap>
    );
  }
);

export default Modal;
