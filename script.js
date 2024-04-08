const jPDinos = ["Velociraptors", "Tyrannosaurus Rex", "Dilophosaurus"];

function seeDinos(a, ...other) {
  console.log(a);
  console.log(other);
}
seeDinos(...jPDinos);

const jPCharacters = {
  alanGrant: "Sam Neill",
  ellieSattler: "Laura Dern",
  ianMalcolm: "Jeff Goldblum",
};

const seeCharacters = ({ ellieSattler }) => {
  console.log(ellieSattler);
};
seeCharacters(jPCharacters);
