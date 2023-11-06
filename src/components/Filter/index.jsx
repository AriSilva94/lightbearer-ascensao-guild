import React from "react";

export default function Filter() {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("passei por aqui");
  };

  return (
    <>
      <form onSubmit={onSubmit} className="my-3">
        <label htmlFor="character">Personagem:</label>
        <input
          type="text"
          id="character"
          name="character"
          placeholder="Arizoka"
        />
        <input type="submit" value="Filtrar" />
      </form>
    </>
  );
}
