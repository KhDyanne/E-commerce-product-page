
const sideBar=document.querySelector('.side-bar')
const numberOfOrder=document.getElementById('number');
const basket=document.querySelector('.basket');
const emptyCard=document.querySelector('.empty-card');
const filledCard=document.querySelector('.filled-card');
const index=document.getElementById('index');
const finalPrice=document.getElementById('final-price');
const num=document.getElementById('num');
const options=document.querySelectorAll('.options');
const main=document.querySelector('main');
const images = document.querySelectorAll('.options .imgs');
const mainImage = document.getElementById('main-img');
const img1=document.getElementById('.img1');
const img2=document.getElementById('.img2');
const img3=document.getElementById('.img3');
const img4=document.getElementById('.img4');
const cardImg=document.getElementById('card-img')

let counter=0;
let clicked=false;

function show(){
    sideBar.style.display='flex';
}
function hide(){
    sideBar.style.display='none'
}

function add(){
    counter=counter+1;
    numberOfOrder.innerText=counter;
    num.innerText=counter; 
    if(counter!==0){
        index.style.display='block'
        index.innerText=counter;
    }
    else{
        index.style.display='none'
    }
}

function subtract(){
    if(counter==0){
        numberOfOrder==0;
        index.style.display='none'
    }
    else{
        counter-=1;
        numberOfOrder.innerText=counter;
        num.innerText=counter;
        index.innerText=counter;
    }

}

basket.addEventListener('click', ()=>{
    if(counter>0){
        if(!clicked){
            filledCard.style.display='block'
        }
        else{
            filledCard.style.display='none'
        }      
    }
    else{
        if(!clicked){
            emptyCard.style.display='block';
        }
        else{
            emptyCard.style.display='none';
        }
      
    }
    clicked=!clicked;
});

main.addEventListener('click', (event)=>{
    if(filledCard.style.display=='block' ||  emptyCard.style.display=='block'){
        filledCard.style.display='none'
        emptyCard.style.display='none';
    }
})



function addToCard(){
   if(counter!==0){
    alert("Added to the Card")
    finalPrice.innerText='$'+125*counter;
   }
}

function remove(){
        filledCard.style.display='none'
        emptyCard.style.display='block';
        counter=0;
        numberOfOrder.innerText=counter;
        index.innerText=counter; 
}

images.forEach((image) => {
    image.addEventListener('click', () => {
        images.forEach((img) => {
            img.style.border = 'none';
            img.style.opacity=1
        });
        image.style.border = '4px solid orange';
        image.style.opacity=0.5;
    });
});

function change1(){
    mainImage.src='images/image-product-1.jpg';
    cardImg.src="images/image-product-1-thumbnail.jpg";
}
function change2(){
    mainImage.src='images/image-product-2.jpg';
    cardImg.src="images/image-product-2-thumbnail.jpg";
}
function change3(){
    mainImage.src='images/image-product-3.jpg';
    cardImg.src="images/image-product-3-thumbnail.jpg";
}
function change4(){
    mainImage.src='images/image-product-4.jpg';
    cardImg.src="images/image-product-4-thumbnail.jpg";
}

