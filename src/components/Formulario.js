import React from "react";
import styles from "./Formulario.module.css";
import PropTypes from "prop-types";

//Hooks
import useSelect from "../hooks/useSelect";

const Formulario = ({ guardarCategoria }) => {
  //Opciones

  const OPCIONES = [
    { value: "general", label: "General" },
    { value: "business", label: "Negocios" },
    { value: "entretainment", label: "Entretenimiento" },
    { value: "health", label: "Salud" },
    { value: "science", label: "Ciencia" },
    { value: "sport", label: "Deporte" },
    { value: "technology", label: "Tecnología" },
  ];
  //Custom Hook
  const [categoria, SelectNoticias] = useSelect("general", OPCIONES);

  const buscarNoticias = (e) => {
    e.preventDefault();
    guardarCategoria(categoria);
  };
  return (
    <div className={`${styles.buscador} row`}>
      <div className="col s12 m8 offset-m2">
        <form onSubmit={buscarNoticias}>
          <h2 className={styles.heading}>Encuentra noticias por categorías</h2>
          <SelectNoticias />
          <div className="input-field col s12">
            <input
              type="submit"
              className={`btn-large amber darken-2 ${styles.btn_block}`}
              value="Buscar"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

Formulario.propTypes = {
  guardarCategoria: PropTypes.func.isRequired,
};
export default Formulario;
