const gyouzaBtn = document.getElementById('gyouza');
const gyozaPopupWrapper = document.getElementById('popup-wrapper-gyoza');
const gyozaClose = document.getElementById('close-gyoza');

gyouzaBtn.addEventListener('click',() => {
    gyozaPopupWrapper.style.display = "block";
});

gyozaPopupWrapper.addEventListener('click', e => {
    if(e.target.id === gyozaPopupWrapper.id || e.target.id === gyozaClose.id){
        gyozaPopupWrapper.style.display = 'none';
    }
});


const ramenBtn = document.getElementById('ramen');
const ramenPopupWrapper = document.getElementById('popup-wrapper-ramen');
const ramenClose = document.getElementById('close-ramen');

ramenBtn.addEventListener('click',() => {
    ramenPopupWrapper.style.display = "block";
});

ramenPopupWrapper.addEventListener('click', e => {
    if(e.target.id === ramenPopupWrapper.id || e.target.id === ramenClose.id){
        ramenPopupWrapper.style.display = 'none';
    }
});


const horumonBtn = document.getElementById('horumon');
const horumonPopupWrapper = document.getElementById('popup-wrapper-horumon');
const horumonClose = document.getElementById('close-horumon');

horumonBtn.addEventListener('click',() => {
    horumonPopupWrapper.style.display = "block";
});

horumonPopupWrapper.addEventListener('click', e => {
    if(e.target.id === horumonPopupWrapper.id || e.target.id === horumonClose.id){
        horumonPopupWrapper.style.display = 'none';
    }
});


const yakisobaBtn = document.getElementById('yakisoba');
const yakisobaPopupWrapper = document.getElementById('popup-wrapper-yakisoba');
const yakisobaClose = document.getElementById('close-yakisoba');

yakisobaBtn.addEventListener('click',() => {
    yakisobaPopupWrapper.style.display = "block";
});

yakisobaPopupWrapper.addEventListener('click', e => {
    if(e.target.id === yakisobaPopupWrapper.id || e.target.id === yakisobaClose.id){
        yakisobaPopupWrapper.style.display = 'none';
    }
});


const barBtn = document.getElementById('bar');
const barPopupWrapper = document.getElementById('popup-wrapper-bar');
const barClose = document.getElementById('close-bar');

barBtn.addEventListener('click',() => {
    barPopupWrapper.style.display = "block";
});

barPopupWrapper.addEventListener('click', e => {
    if(e.target.id === barPopupWrapper.id || e.target.id === barClose.id){
        barPopupWrapper.style.display = 'none';
    }
});