import React, { useState } from "react";
import Table from "./Table";
import firebase from "../Firebase/firebase"
import AddData from "./AddData"
import FileUploader from "../Firebase/ImageUpload"

const App = () => {
  const data = [{ id: null, surname: "", firstname: "",vetClinic: "" }];
  const initialFormState = { id: null, surname: "", firstname: "",vetClinic: "" };

  const [datas, setDatas] = useState(data);
  const [currentData, setCurrentData] = useState(initialFormState);
  const [editing, setEditing] = useState(false);



  const deleteData = id => {
    setEditing(false);
    firebase
      .firestore()
      .collection("docs")
      .doc(id)
      .delete();
  };

  const updatedData = updatedData => {
    setEditing(false);
    firebase
      .firestore()
      .collection("docs")
      .doc(updatedData.id)
      .set(updatedData);
  };

  const editRow = data => {
    setEditing(true);
    setCurrentData({
      id: data.id,
      name: data.name,
      username: data.username,
      firstname: data.firstname,
      vetClinic: data.vetClinic,


    });
  };

  return (<div>
    <div>
          <Table
            datas={datas}
            editRow={editRow}
            deleteData={deleteData}
            editing={editing}
            setEditing={setEditing}
            currentData={currentData}
            updatedData={updatedData}
          />
        </div>
        <div className="doctors">
        <AddData /></div></div>
  );
};

export default App;
