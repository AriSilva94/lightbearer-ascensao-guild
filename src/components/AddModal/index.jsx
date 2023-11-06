import React, { useState } from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";
import "dayjs/locale/pt-br";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

export default function AddModal({
  isOpenModal,
  closeModal,
  handleClick,
  getCharacters,
}) {
  dayjs.locale("pt-br");
  const [character, setCharacter] = useState("");
  const [value, setValue] = useState(null);
  const [valueHour, setValueHour] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();

    // Crie um objeto com os valores do formulário
    const formData = {
      id: id,
      character: character,
      date: dayjs(value).locale("pt-br").format("YYYY-MM-DD"),
      hour: dayjs(valueHour).locale("pt-br").format("HH:mm:ss"),
    };

    // Faça algo com os dados, como enviá-los para o servidor
    console.log("Dados do formulário:", formData);

    handleClick(formData.character, formData.date, formData.hour);

    getCharacters();
    closeModal();
  };

  return (
    <>
      <Modal className="my-3" show={isOpenModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Nome do personagem</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={onSubmit}
            className="mb-3 d-flex flex-column align-items-center justify-content-start"
          >
            <Row className="d-flex flex-column">
              <Col className="my-2">
                <Form.Label htmlFor="character">Personagem</Form.Label>
                <Form.Control
                  type="text"
                  id="character"
                  aria-describedby="character"
                  value={character}
                  onChange={(e) => setCharacter(e.target.value)}
                />
              </Col>
              <Col className="my-2 d-flex flex-column">
                <Form.Label htmlFor="date">Data</Form.Label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Controlled picker"
                    value={dayjs(value).locale("pt-br")}
                    onChange={(newValue) => setValue(newValue)}
                  />
                </LocalizationProvider>
              </Col>
              <Col className="my-2 d-flex flex-column">
                <Form.Label htmlFor="hour">Horário</Form.Label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker
                    label="Controlled picker"
                    value={dayjs(valueHour).locale("pt-br")}
                    onChange={(newValue) => setValueHour(newValue)}
                  />
                </LocalizationProvider>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button className="my-2 " variant="primary" type="submit">
                  Salvar
                </Button>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
