window.onload = () => {
    const grid = document.querySelector('.grid');

    const masonry = new Masonry(grid , {
        itemSelector: '.grid-item',
        gutter: 20
    });

    let menuSide = document.querySelector('#menuSide');
    let openBtn = document.querySelector('#openbtn');
    let closeBtn = document.querySelector('.closebtn');

    openBtn.addEventListener('click' , function () {
        menuSide.style.opacity = "1";
        menuSide.style.zIndex = "3";
        menuSide.style.overflowX = "auto";
    });

    closeBtn.addEventListener('click' , function (e) {
        e.preventDefault();
        menuSide.style.opacity = "0";
        menuSide.style.zIndex = "-20";
        menuSide.style.overflowX = "hidden";
    });
}