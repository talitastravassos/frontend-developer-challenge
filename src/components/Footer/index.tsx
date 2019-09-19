import React from 'react'
import style from "./footer.module.css";

const Footer = () => {
    return (
        <div className={style.container}>
            <p className="m-0">Testando suas habilidades em HTML, CSS e JS.</p>
            <p className="m-0">Código por: <a href="https://github.com/talitastravassos" rel="noopener noreferrer" target="_blank" style={{color: "white"}}> Talita S. T</a></p>
            <p className="m-0">Linx Impulse</p>
            <p>2019</p>
        </div>
    )
}

export default Footer
