document.getElementById("focim").textContent = "Mátrix Rendszer";
let statuszElemek = document.getElementsByClassName("statusz-szoveg");
console.log(statuszElemek.length);
let rendszerLista = document.getElementById("rendszer-lista").querySelectorAll();
rendszerLista[0].innerText = "Rendszer ellenőrzése folyamatban...";
rendszerLista[1].innerText = "Kapcsolódás a hálózathoz...";
let listaElemek = querySelectorAll(".lista-elem");
console.log(listaElemek[0]);