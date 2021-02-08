let Modal = {
    modal: document.querySelector(".modal-overlay"),
    handleModal(e) {
        Modal.modal.classList.toggle("active")
        console.log(e);

        if (Modal.modal.classList.contains('active')) {
            Modal.modal.querySelector('img').src = e.querySelector('img').src
            Modal.modal.querySelector('h2').innerHTML = e.querySelector('h4').innerHTML
            Modal.modal.querySelector('small').innerHTML = e.querySelector('small').innerHTML
        } else {

        }
    }
}