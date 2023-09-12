/*armen un array de objetos de personas dentro de un componente persona con name,
lastname, img, iterarlos y mostrarlos por pantalla
*/

import "./header.css";
export const Header = () => {
  return (
    <>
      <div className="name">
        <h1>titulo de la pagina</h1>
        <nav>
          <a>link 1</a>
          <a>link 2</a>
        </nav>
      </div>
    </>
  );
};
