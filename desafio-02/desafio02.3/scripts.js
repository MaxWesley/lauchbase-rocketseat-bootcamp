let Modal = {
    contentModal: document.querySelector('.modal .content'),
    cards: document.querySelectorAll('.card'),
    iframe: document.querySelector('.modal .content iframe'),
    baseUrl: "https://blog.rocketseat.com.br/",
    handleOpenClose() {
        Modal.iframe.setAttribute('src', "")
        
        document
            .querySelector('.modal')
            .classList
            .toggle('active')

        if (Modal.contentModal.classList.contains('maximize')) {
            Modal.contentModal.classList.remove('maximize');
        }
    },
    handleMaximize() {
        Modal.contentModal.classList.toggle('maximize')
    }
}


Modal.cards.forEach(card =>
    card.addEventListener('click', () => {
        Modal.iframe.setAttribute('src', Modal.baseUrl + card.getAttribute('data-url'));
    })
)