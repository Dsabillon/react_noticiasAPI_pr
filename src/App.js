import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoNoticias from "./components/ListadoNoticias";
import PropTypes from "prop-types";

function App() {
  const [categoria, guardarCategoria] = useState("");
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const APIkey = "59b59d5bb9304fcd9a9ed23d004e9f31";
      const url = `https://newsapi.org/v2/top-headlines?country=de&category=${categoria}&apiKey=${APIkey}`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      guardarNoticias(noticias.articles);
    };
    consultarAPI();
  }, [categoria]);

  return (
    <Fragment>
      <Header titulo="Buscador de noticias" />

      <div className="container-white">
        <Formulario guardarCategoria={guardarCategoria} />
        <ListadoNoticias noticias={noticias} />
      </div>
    </Fragment>
  );
}

export default App;
