//get modal element
var modal = document.getElementById('simpleModal');

var modalBtn = document.getElementById('modalBtn');

var closeBtn = document.getElementById('closeBtn');

modalBtn.addEventListener('click', openModal);

function openModal() {
    modal.style.display = 'block';
}