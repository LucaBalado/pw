/*armen un array de objetos de personas dentro de un componente persona con name,
lastname, img, iterarlos y mostrarlos por pantalla
*/

const personas = [
  {
    name: "Luca",
    lastname: "Balado",
    imageSrc:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.soyvisual.org%2Ffotos%2Fyo&psig=AOvVaw0BiiVnSyUc9shlfJKcDTFv&ust=1694634213969000&source=images&cd=vfe&opi=89978449&ved=0CA4QjRxqFwoTCPjSk8nqpYEDFQAAAAAdAAAAABAI",
  },

  {
    name: "Lucas",
    lastname: "Dominguez",
    imageSrc:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.adccanning.com.ar%2Ffutbol%2F4683%2Fpartido&psig=AOvVaw2l-LE6VX7v29uiwJ9e3wy0&ust=1694634696191000&source=images&cd=vfe&opi=89978449&ved=0CA4QjRxqFwoTCNCq1KrspYEDFQAAAAAdAAAAABAD",
  },
  {
    name: "Lucas",
    lastname: "Luriaud",
    imageSrc:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.wikipedia.org%2Fwiki%2FWilliam_Ruto&psig=AOvVaw3mATFP43qyUn_k0PTSgFmM&ust=1694634664625000&source=images&cd=vfe&opi=89978449&ved=0CA4QjRxqFwoTCKDKzJ3spYEDFQAAAAAdAAAAABAD",
  },
];

for (let i = 0; i < personas.length; i++) {
  console.log(personas[i]);
}
