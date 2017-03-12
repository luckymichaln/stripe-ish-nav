let navElements = document.querySelectorAll('.nav-list > li:not(:last-of-type)');
let background = document.querySelector('.dropdown-bg');
let navigation = document.querySelector('.nav-list');

function mouseEnter() {
    this.classList.add('show');
    setTimeout(() => {
        if (this.classList.contains('show')) {
            this.classList.add('visible')
        }
    }, 150)
    background.classList.add('open');

    let dropdown = this.querySelector('.list-element');
    let dropdownCoords = dropdown.getBoundingClientRect();
    let navCoords = navigation.getBoundingClientRect();

    let coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        top: dropdownCoords.top - navCoords.top,
        left: dropdownCoords.left - navCoords.left
    }

    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

function mouseLeave() {
    this.classList.remove('show', 'visible');
    background.classList.remove('open');
}
navElements.forEach(element => element.addEventListener('mouseenter', mouseEnter));
navElements.forEach(element => element.addEventListener('mouseleave', mouseLeave));
