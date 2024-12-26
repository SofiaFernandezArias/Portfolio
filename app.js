const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    console.log(menuLinks);
    console.log("after check");
    menuLinks.classList.toggle('active');
    console.log("function clicked");
});   

let imageContainer = document.querySelector('.images-preview');
let previewBox = imageContainer.querySelectorAll('.preview');

document.querySelectorAll('.services .services__container .services__card').forEach(product =>{
    product.onclick = () =>{
        imageContainer.style.display = 'flex';
        let name = product.getAttribute('data-name');
        previewBox.forEach( preview =>{
            let target = preview.getAttribute('data-target');
            if(name == target){
                preview.classList.add('active');
            }
        })
    }
})

previewBox.forEach(close =>{
    close.querySelector('.material-symbols-sharp').onclick = () =>{
        close.classList.remove('active');
        imageContainer.style.display = 'none';
    }
})