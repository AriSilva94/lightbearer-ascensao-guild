import React from "react";
import Table from "react-bootstrap/Table";

export default function DataTable({ character }) {
  return (
    <>
      <Table className="my-3" striped bordered hover>
        <thead>
          <tr>
            <td>Jogadores na Escala</td>
            <td>Data</td>
            <td>Horário</td>
          </tr>
        </thead>
        <tbody>
          {character?.map(({ id, name, date, hour }, index) => {
            return (
              <tr key={index}>
                <td>{name}</td>
                <td>{date}</td>
                <td>{hour}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
