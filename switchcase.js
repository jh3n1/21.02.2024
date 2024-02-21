var nomes = ["Jasmine","Ariel","Aurora","Cinderela",
"Pocahontas","Mulan","Tiana","Moana","Branca de Neve","Rapunzel","Mérida","Bela","Anna","Elsa","Vanellope"];

let h1Nome = document.getElementById("nome");

let achouNumero = false;
let numeroSorteado;

while (achouNumero == false) {
    o  = Math.floor(Math.random() * 100);
    if (numeroSorteado < nomes.length) {
        achouNumero = true;
    }
}

switch (numeroSorteado) {
    case 0:
        h1Nome.innerText = nomes[numeroSorteado];
        break;
    case 1:
        h1Nome.innerText = nomes[numeroSorteado];
        break;
    case 2:
        h1Nome.innerText = nomes[numeroSorteado];
        break;
    case 3:
        h1Nome.innerText = nomes[numeroSorteado];
        break;
    case 4:
        h1Nome.innerText = nomes[numeroSorteado];
        break;
    case 5:
        h1Nome.innerText = nomes[numeroSorteado];
        break;
    case 6:
        h1Nome.innerText = nomes[numeroSorteado];
        break;
    case 7:
        h1Nome.innerText = nomes[numeroSorteado];
        break;
    case 8:
        h1Nome.innerText = nomes[numeroSorteado];
        break;
    case 9:
        h1Nome.innerText = nomes[numeroSorteado];
        break;
    case 10:
        h1Nome.innerText = nomes[numeroSorteado];
        break;
    case 11:
        h1Nome.innerText = nomes[numeroSorteado];
        break;
    case 12:
        h1Nome.innerText = nomes[numeroSorteado];
        break;
    case 13:
        h1Nome.innerText = nomes[numeroSorteado];
        break;
}