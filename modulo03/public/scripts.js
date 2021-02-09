const cards = document.querySelectorAll('.aula')

for (let card of cards) {
    card.addEventListener("click", function () {
        const videoId = card.getAttribute("id")
        window.location.href = `/video?id=${videoId}`
    })
}