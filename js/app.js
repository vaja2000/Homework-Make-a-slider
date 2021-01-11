const slider = document.querySelector('.slider')
const images = document.querySelectorAll('.slider img')

const prev = document.querySelector('.slidercontainer .prev')
const next = document.querySelector('.slidercontainer .next')
let i = 0;
console.log(images)


prev.onclick = function(){
    console.log('prev clicked')
    images[i].style.display = 'none';
    i--;
    if(i < 0){
        i = images.length - 1;
    }
    images[i].style.display = 'block';
}

next.onclick = function(){
    console.log('next clicked')
    images[i].style.display = 'none';
    i++;
    if(i === images.length){
        i = 0;
    }
    images[i].style.display = 'block';
}
