import { useState, useEffect } from "react";
import "./App.css";
import Filter from "./components/Filter";
import DataTable from "./components/DataTable";
import Add from "./components/Add";
import AddModal from "./components/AddModal";
import { DBConfig } from "./db/DBConfig";
import { initDB } from "react-indexed-db-hook";
import { useIndexedDB } from "react-indexed-db-hook";
import "bootstrap/dist/css/bootstrap.min.css";

initDB(DBConfig);

function App() {
  const db = useIndexedDB("characters");
  const { getAll } = useIndexedDB("characters");
  const { add } = useIndexedDB("characters");
  const [character, setCharacter] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(null);

  useEffect(() => {
    getAll().then((personsFromDB) => {
      setCharacter(personsFromDB);
    });
  }, []);

  const handleClick = (character, date, hour) => {
    add({ name: character, date: date, hour: hour }).then(
      (event) => {
        console.log("ID Generated: ");
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const openModal = () => {
    console.log("isOpenModal", isOpenModal);
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div className="App">
      <h1>Ascensão</h1>

      <Add {...{ openModal }} />
      {/* <Filter /> */}
      <DataTable {...{ character }} />
      <AddModal {...{ isOpenModal, closeModal, handleClick }} />
    </div>
  );
}

export default App;
