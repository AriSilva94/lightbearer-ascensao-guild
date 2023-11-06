import Button from "react-bootstrap/Button";
export default function Add({ openModal }) {
  return (
    <>
      <Button variant="primary" onClick={openModal} className="my-3">
        Adicionar novo personagem na lista
      </Button>
    </>
  );
}
