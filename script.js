console.log('teste 321')

document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navList = document.getElementById('nav-list');

    menuIcon.addEventListener('click', function () {
        console.log('click')
        var element = document.getElementById('nav-list')
        element.classList.toggle('show');
    });
});
