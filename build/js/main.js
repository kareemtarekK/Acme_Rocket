const humbergerFunction = ()=>{
    const humberger = document.getElementById('humberger');
    const menue = document.getElementById('menue');
    const appearSelection = ()=>{
        menue.classList.toggle('hidden');
        menue.classList.toggle('flex');
        humberger.classList.toggle('btn-rotate');
    }
    humberger.addEventListener('click',appearSelection);
    menue.addEventListener('click',appearSelection);
}
document.addEventListener('DOMContentLoaded',humbergerFunction);