let onglets = document.querySelectorAll('.onglets');

for (let onglet of onglets) {
    onglet.addEventListener('click', function () {
        let num = onglet.getAttribute('data-onglets');
        document.querySelector('.text-active').classList.remove('text-active');

        document
            .querySelector('#text-onglet-' + num)
            .classList.add('text-active');

        document.querySelector('.active').classList.remove('active');

        this.classList.add('active');
    });
}
