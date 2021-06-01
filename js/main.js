document.addEventListener('DOMContentLoaded', () => {

    let entryLoader = document.getElementById('loader');

    setTimeout(()=>{
        entryLoader.classList.remove('entry');
        entryLoader.classList.add('loader');
        timeOutLoader();
    }, 1000);

    function timeOutLoader() {
        setTimeout(()=>{
            entryLoader.classList.add('remove');
            entryLoader.addEventListener('animationend', () => {
                document.querySelector('body').style.overflowY = 'scroll';
                entryLoader.remove();

            })
        },1000*3);
    };


    
    var rellax = new Rellax('.rellax');

    let p0 = document.querySelector('.people-0')
    p0.addEventListener('animationend',()=>{p0.remove()});
    let p1 = document.querySelector('.people-1')
    p1.addEventListener('animationend',()=>{p1.remove()});
    let p2 = document.querySelector('.people-2')
    p2.addEventListener('animationend',()=>{p2.remove()});
    let p3 = document.querySelector('.people-3')
    p3.addEventListener('animationend',()=>{p3.remove()});


});