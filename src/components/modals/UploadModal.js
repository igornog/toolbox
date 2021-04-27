import React, { useState, useMemo } from "react";
import Button from "../../atoms/button";
import "./uploadModal.scss";
import MembersServices from "../../services/members";

const  UploadModal = (props) => {
  const [ state, setState ] = useState({
    loading: {
      upload: false,
      download: false,
    }
  })

  const closeUploadModal = () => {
    props.setUploadModalOn(false);
    props.setModalOn(false);
  };

  const fileData = useMemo(() => {
      if (state.doc) {
        return (
          <label>
            {state.doc.name}
          </label>
        );
      }
  }, [state.doc])

  const onFileChange = (event) => {
    setState(prevState => ({ 
      ...prevState,
      doc: event.target.files[0],
      loading: {
        ...prevState.loading,
        upload: true
      }
    }));

    const data = new FormData();
    data.append("spreadsheet", event.target.files[0]);

    MembersServices.uploadMembersSpreadsheet(
      data,
      props.companyId,
    )
      .then((res) => {
        console.log(res)
        setState(prevState => ({ ...prevState, loading: {
          ...prevState.loading,
          upload: true
        }}));
      })
      .catch((error) => {
        console.error("sheet upload error", error)
      })
  };

  const handleDownloadSpreadsheet = () => {
    setState(prevState => ({ ...prevState, loading: { ...prevState.loading, download: true } }))
    MembersServices.downloadSpreadsheet()
      .then(_ =>  setState(prevState => ({ ...prevState, loading: { ...prevState.loading, download: false } })))
      .catch(err =>  {
        console.log(err)
        setState(prevState => ({ ...prevState, loading: { ...prevState.loading, download: false } }))
      })
  }

  return (
    <>
      <div className="modal-background"/>
      <section>
        <div>
          <span onClick={closeUploadModal}><p>X</p></span>
          <div className="content">
            <Button
              isLoading={state.loading.download}
              disabled={state.loading.download}
              onClick={handleDownloadSpreadsheet}
            >
              Baixar planilha
            </Button>
            <Button isLoading={state.loading.upload}>
              <input
                type="file"
                id="docUpload"
                name="docUpload"
                className="input-wrap"
                onChange={onFileChange}
                disabled={state.loading.upload}
              />
              {fileData ||  <label for="docUpload">Subir planilha</label>}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default UploadModal;
