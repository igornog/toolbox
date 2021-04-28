import React from "react";
import Button from "../../atoms/button";
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
          <span className="close-btn" onClick={closeEditModal}>
            <p>X</p>
          </span>
          {props.membersArray
            ? props.membersArray.map((member) => {
                if (member.memberId === props.memberSelected) {
                  return (
                    <>
                      <header>
                        <p>Editando o membro</p>
                        <p>
                          <strong>
                            {member.name} ({member.memberId})
                          </strong>
                        </p>
                      </header>
                      <div className="member-info">
                        <p>Perfil</p>
                        <select>
                          <option selected="selected" disabled="disabled">
                            {member.profile}
                          </option>
                          <option value="partner">Sócio</option>
                          <option value="dependent">Dependente</option>
                          <option value="employee">Funcionário</option>
                        </select>
                        <p>Carteirinha</p>
                        <input
                          type="text"
                          defaultValue={`${member.memberId}`}
                        />
                        <p>Nome do membro</p>
                        <input type="text" defaultValue={`${member.name}`} />
                        <p>CPF</p>
                        <input type="text" defaultValue={`${member.cpf}`} />
                        <p>Email</p>
                        <input type="text" defaultValue={`${member.email}`} />
                        <p>Plano</p>
                        <select>
                          <option
                            selected="selected"
                            disabled="disabled"
                            value={`${
                              member.planId === "5f202a77cb10ce002aa52fc0"
                                ? "Enfermaria"
                                : "Apartamento"
                            }`}
                          >
                            {member.planId}
                          </option>
                          <option value="enfermaria">Enfermaria</option>
                          <option value="apartmento">Apartamento</option>
                        </select>
                        <p>Data de nascimento</p>
                        <input type="date" value={`${member.birthDate}`} />
                      </div>
                      <Button>confirmar</Button>
                    </>
                  );
                }
              })
            : ""}
        </section>
      </main>
    </>
  );
}

export default EditModal;
