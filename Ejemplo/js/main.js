//Método onClick
function addText() {
  let div = document.getElementsByClassName('box');

  for (let i = 0; i < div.length; i++) {
    let texto = document.createTextNode('Ejemplo parrafo container');
    let p = document.createElement('p').appendChild(texto);
    div[i].appendChild(p);
  }
}

//Metodo action

function action() {
  let act1 = document.getElementById('a1');
  let act2 = document.getElementById('a2');

  if (act1.hidden == false) {
    act1.hidden = true;
    act2.hidden = false;
  } else {
    act1.hidden = false;
    act2.hidden = true;
  }
}

function password() {
  let secret = document.getElementById('password').value;

  let pass = document.createTextNode(secret);
  let p = document.createElement('p').appendChild(pass);

  document.getElementById('pass').appendChild(p);
}
