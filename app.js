let ongletOne = document.getElementById('onglet-one');
let ongletTwo = document.getElementById('onglet-two');
let ongletThree = document.getElementById('onglet-three');

let textOngletOne = document.getElementById('text-onglet-one');
let textOngletTwo = document.getElementById('text-onglet-two');
let textOngletThree = document.getElementById('text-onglet-three');

ongletOne.addEventListener('click', function(){
    textOngletOne.style.display = 'block';
    ongletOne.style.backgroundColor = '#A8A7A9';
    textOngletTwo.style.display = 'none';
    ongletTwo.style.backgroundColor = '#DBD9DB';
    textOngletThree.style.display = 'none';
    ongletThree.style.backgroundColor = '#DBD9DB';
})

ongletTwo.addEventListener('click', function(){
    textOngletOne.style.display = 'none';
    ongletOne.style.backgroundColor = '#DBD9DB';
    textOngletTwo.style.display = 'block';
    ongletTwo.style.backgroundColor = '#A8A7A9';
    textOngletThree.style.display = 'none';
    ongletThree.style.backgroundColor = '#DBD9DB';
})

ongletThree.addEventListener('click', function(){
    textOngletOne.style.display = 'none';
    ongletOne.style.backgroundColor = '#DBD9DB';
    textOngletTwo.style.display = 'none';
    ongletTwo.style.backgroundColor = '#DBD9DB';
    textOngletThree.style.display = 'block';
    ongletThree.style.backgroundColor = '#A8A7A9';
})