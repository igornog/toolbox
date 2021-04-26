import React from "react";

import BeneficiaryService from '../services/beneficiary.service'
import useState from '../hooks/useState'

import Button from "../atoms/button";
import "./uploadModal.scss";

const  UploadModal = (props) => {
  const [ state, setState ] = useState({})

  const closeUploadModal = () => {
    props.setUploadModalOn(false);
  };

  const fileData = () => {
    if (state.doc) {
      return (
        <p className="upload-details">
          Arquivo adicionado: {state.doc.name}
        </p>
      );
    } else {
      return (
        <p className="upload-details no-file">
          Nenhum arquivo adicionado
        </p>
      );
    }
  };

  const onFileChange = (event) => {
    setState({ doc: event.target.files[0] });
    const data = new FormData();
    data.append("spreadsheet", event.target.files[0]);
    const options = {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        let percent = Math.floor((loaded * 100) / total);
        

        if (percent < 100) {
          setState({ ...state, uploadPercentage: percent });
        }
      },
    };
    
    BeneficiaryService.uploadSpreadsheet(
      data,
      props.hirerData.company._id,
      options
    )
      .then((_) => {
        setState({ ...state, uploadPercentage: 100 }, () => {
          setTimeout(() => {
            setState({
              ...state,
              uploadPercentage: 0,
            });
          }, 1000);
        });
      })
      .catch((error) => {
        console.log("error")
      })
      .finally(() => {
        let companyId = props.hirerData.company._id;
        if (companyId) {
          props.fetchBeneficiaries(companyId)
        };
      })
  };

  return (
    <>
      <div className="modal-background"></div>
      <section>
        <div>
          <span onClick={closeUploadModal}><p>X</p></span>
          <div className="content">
            <Button>Baixar planilha</Button>
            <Button onClick></Button>
            <div className="input-wrap">
              <input
                type="file"
                id="docUpload"
                name="docUpload"
                onChange={onFileChange}
              />
              <label for="docUpload">Subir planilha</label>
              {fileData()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UploadModal;
