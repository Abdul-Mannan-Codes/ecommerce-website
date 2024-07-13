
let range = document.querySelector('#customRange1');
let rangeText = document.querySelector('#rangeText');
range.addEventListener('input', ()=> {
    rangeText.textContent = "$0 - $" + range.value;
});
let LatestBtn = document.querySelector('#latest');
let toggleBtn = true;
LatestBtn.addEventListener('click', ()=> {
    if(toggleBtn){
        LatestBtn.classList.add('dark-btn');
        toggleBtn = false;
    }
    else{
        LatestBtn.classList.remove('dark-btn');
        toggleBtn = true;
    }
});
let referenceBtn = document.querySelector('#reference');
let toggleBtn2 = true;
referenceBtn.addEventListener('click', ()=> {
    if(toggleBtn2){
        referenceBtn.classList.add('dark-btn');
        toggleBtn2 = false;
    }
    else{
        referenceBtn.classList.remove('dark-btn');
        toggleBtn2 = true;
    }
});
