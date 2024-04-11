function breakImage() {
    let parts = document.querySelectorAll('.image-part img');
    parts.forEach(part => {
        part.style.transform = 'translate(' + (Math.random() * 100 - 50) + 'px,' + (Math.random() * 100 - 50) + 'px) rotate(' + (Math.random() * 90 - 45) + 'deg)';
    });
}

function resetImage() {
    let parts = document.querySelectorAll('.image-part img');
    parts.forEach(part => {
        part.style.transform = 'none';
    });
}