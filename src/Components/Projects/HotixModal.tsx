import "./HotixModal.scss";
import hotixMembers from "./HotixMembers";
import React from "react";

interface props {
  onModalClose: Function;
}

function HotixModal(props: props): JSX.Element {
  const closeModal = () => props.onModalClose();

  return (
    <>
      <div className="HotixModal">
        <button className="close-btn" onClick={closeModal}>
          X
        </button>
        <h3 className="hotix-header">Hotix members</h3>
        <span className="hotix-span">
          To get more information about Hotix project - contact one of our
          members
        </span>
        <div className="members">
          {hotixMembers.map((m, i) => (
            <React.Fragment key={i}>
              <div className="single-member" key={m.name}>
                <img
                  src={require(`../../${m.image}`)}
                  alt={m.name}
                  className="member-img"
                />
                <h5 className="member-name">{m.name}</h5>
                <span className="role">{m.role}</span>
                <div className="contact-menu">
                  <a href={m.whatsapp} target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
                  <a href={m.linkedin} target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a href={`tel:${m.phone}`} target="_blank" rel="noreferrer">
                    <i className="fa-solid fa-phone"></i>
                  </a>
                </div>
              </div>
              {i + 1 < hotixMembers.length && <div className="separator"></div>}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="hotix-modal-bg" onClick={closeModal}></div>
    </>
  );
}

export default HotixModal;
