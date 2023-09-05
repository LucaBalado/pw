function createObject(name, subs) {
  const canal = {
    name: null,
    subs: 0,
    hash: name.length * subs,
    getStatus: function (name, subs) {
      const mensaje = `el canal ${name} tiene ${subs} suscriptores`;
      return mensaje;
    },
  };
  return canal;
}

const persona = createObject("luca", 100);
console.log(persona);
