import React from "react";
import "./editModal.scss";

function EditModal(props) {
  const closeEditModal = () => {
    props.setEditModalOn(false);
    props.setModalOn(false);
  };

  return (
    <>
      <div className="modal-background"></div>
      <main>
        <section>
          <span className="close-btn" onClick={closeEditModal}><p>X</p></span>
          <header>
            <h3>Dados para edição</h3>
            <p>{props.companyName}</p>
            <p>{props.companyAlias}</p>
            <p>{props.cnpjNumber}</p>
          </header>
          <div className="member-info">
            {props.membersArray
                  ? props.membersArray.map((member) => {
                    if (member.memberId === props.memberSelected){
                      return (
                        <>
                          <td>{member.profile}</td>
                          <td>{member.memberId}</td>
                          <td>{member.name}</td>
                          <td>{member.cpf}</td>
                          <td>{member.email}</td>
                          <td>
                            {
                              (member.planId = "5f202a77cb10ce002aa52fc0"
                                ? "Enfermaria"
                                : "Apartamento")
                            }
                          </td>
                          <td>{member.birthDate}</td>
                        </>
                      )
                    }
                  })
            : ""}
          </div>
        </section>
      </main>
    </>
  );
}

export default EditModal;
