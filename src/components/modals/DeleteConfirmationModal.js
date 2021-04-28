import React from "react";
import "./deleteConfirmationModal.scss";
import Button from "../../atoms/button";

function DeleteConfirmationModal(props) {
  const closeConfirmationModal = () => {
    props.setDeleteConfirmationModalOn(false);
    props.setModalOn(false);
  };

  return (
    <>
      <div className="modal-background"></div>
      <section>
        <div>
          <span onClick={closeConfirmationModal}>
            <p>X</p>
          </span>
          <div className="content">
            {props.membersArray
              ? props.membersArray.map((member) => {
                  if (member.memberId === props.memberSelected) {
                    return (
                      <>
                        <p>
                          Os dados do membro{" "}
                          <strong>
                            {member.name} ({props.memberSelected}
                          </strong>
                          ) serão apagados diretamente no DW.
                        </p>{" "}
                        <p>Você tem certeza que quer continuar?</p>
                      </>
                    );
                  }
                })
              : ""}
            <div>
              <Button onClick={closeConfirmationModal}>
                Sim, quero deletar
              </Button>
              <Button onClick={closeConfirmationModal}>Não</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DeleteConfirmationModal;
