const menu = document.getElementById('menu-checkbox');
const sidebar = document.getElementsByClassName('sidebar')[0];

menu.addEventListener('click', function() {
    sidebar.classList.toggle('hide');
    console.log('ok');
})


let sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset +height) {
            sec.classList.add('show-animate')
        }

        else {
            sec.classList.remove('show-animate')
        }
    })
}
