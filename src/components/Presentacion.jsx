import { useState } from "react";

const imagenes = [
  {
    nombre: "Diagrama ER",
    url: "https://res.cloudinary.com/dpz8r2olk/image/upload/v1752884983/Diagrama_ER_LisTO-DO_bqjrhn.png",
  },
  {
    nombre: "Creación de tablas",
    url: "https://res.cloudinary.com/dpz8r2olk/image/upload/v1752885397/Creacion_tablas_sql_a1ava1.png",
  },
  {
    nombre: "Insert de datos",
    url: "INSERT",
  },
  {
    nombre: "Relaciones establecidas",
    url: "RELACIONES",
  },
];

const insertarDatosImagenes = [
  {
    titulo: "Insertar roles",
    url: "https://res.cloudinary.com/dpz8r2olk/image/upload/v1752886707/WhatsApp_Image_2025-07-18_at_7.58.06_PM_tvjlim.jpg",
  },
  {
    titulo: "Insertar usuarios",
    url: "https://res.cloudinary.com/dpz8r2olk/image/upload/v1752886114/WhatsApp_Image_2025-07-18_at_7.47.07_PM_qbcvhd.jpg",
  },
  {
    titulo: "Insertar grupo de prueba",
    url: "https://res.cloudinary.com/dpz8r2olk/image/upload/v1752886214/WhatsApp_Image_2025-07-18_at_7.48.03_PM_czc6tn.jpg",
  },
  {
    titulo: "Insertar prioridades",
    url: "https://res.cloudinary.com/dpz8r2olk/image/upload/v1752886277/WhatsApp_Image_2025-07-18_at_7.49.13_PM_vixnzn.jpg",
  },
  {
    titulo: "Insertar tareas de prueba",
    url: "https://res.cloudinary.com/dpz8r2olk/image/upload/v1752886346/WhatsApp_Image_2025-07-18_at_7.51.24_PM_gwadgd.jpg",
  },
];

const relacionesEstablecidasImagenes = [
  {
    titulo: "Relacion usuario-grupo",
    url: "https://res.cloudinary.com/dpz8r2olk/image/upload/v1752887016/WhatsApp_Image_2025-07-18_at_7.52.57_PM_yyjjm3.jpg",
  },
  {
    titulo: "Relacion grupo-tarea",
    url: "https://res.cloudinary.com/dpz8r2olk/image/upload/v1752886997/WhatsApp_Image_2025-07-18_at_7.52.19_PM_nw8rr7.jpg",
  },
  {
    titulo: "Relacion historial-tareas",
    url: "https://res.cloudinary.com/dpz8r2olk/image/upload/v1752886920/WhatsApp_Image_2025-07-18_at_7.51.24_PM_1_boqq00.jpg",
  },
];

export const Presentacion = () => {
  const [imagenActiva, setImagenActiva] = useState(imagenes[0]);
  const [indiceCarrusel, setIndiceCarrusel] = useState(0);

  const modoInsert = imagenActiva.url === "INSERT";
  const modoRelaciones = imagenActiva.url === "RELACIONES";

  const imagenesCarrusel = modoInsert
    ? insertarDatosImagenes
    : modoRelaciones
    ? relacionesEstablecidasImagenes
    : [];

  const imagenActualCarrusel = imagenesCarrusel[indiceCarrusel];

  const avanzar = () => {
    if (indiceCarrusel < imagenesCarrusel.length - 1) {
      setIndiceCarrusel((prev) => prev + 1);
    }
  };

  const retroceder = () => {
    if (indiceCarrusel > 0) {
      setIndiceCarrusel((prev) => prev - 1);
    }
  };

  return (
    <div className="container">
      <header className="header">Code By: William / Deyner</header>

      <h1 className="title">¡Bienvenidos!</h1>
      <p className="subtitle">
        Presentación del entregable de la Misión 2. A continuación, se muestra
        el diseño de una base de datos en PostgreSQL, incluyendo la creación de
        tablas, inserción de datos de prueba y las relaciones entre ellas.
      </p>

      <nav className="nav">
        {imagenes.map((img, index) => (
          <button
            key={index}
            className={`navButton ${
              img.url === imagenActiva.url ? "active" : ""
            }`}
            onClick={() => {
              setImagenActiva(img);
              setIndiceCarrusel(0); // reinicia galería
            }}
          >
            {img.nombre}
          </button>
        ))}
      </nav>

      {modoInsert || modoRelaciones ? (
        <div className="insertar-section">
          <h2>{imagenActualCarrusel.titulo}</h2>
          <img
            className="image"
            src={imagenActualCarrusel.url}
            alt={imagenActualCarrusel.titulo}
          />
          <div className="nav-insertar">
            <button onClick={retroceder} disabled={indiceCarrusel === 0}>
              ← Anterior
            </button>
            <button
              onClick={avanzar}
              disabled={indiceCarrusel === imagenesCarrusel.length - 1}
            >
              Siguiente →
            </button>
          </div>
        </div>
      ) : (
        <img
          className="image"
          src={imagenActiva.url}
          alt={`Presentación - ${imagenActiva.nombre}`}
        />
      )}
    </div>
  );
};
