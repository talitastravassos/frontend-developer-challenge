import React from "react";
import style from "./header.module.css";

const Header = () => {
  return (
    <div className={style.headerContainer}>
      <h3 className="mb-0">uma seleção de produtos</h3>
      <h1 className="display-3 mt-auto">especial para você</h1>
      <p className="m-2">
      Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!
      </p>
      <div className={style.buttons}>
        <button className="btn btn-light mr-5">Conheça a Linx</button>
        <button className="btn btn-light mr-5">Ajude o algoritmo</button>
        <button className="btn btn-light mr-5">Seus Produtos</button>
        <button className="btn btn-light">Compartilhe</button>
      </div>
    </div>
  );
};

export default Header;
