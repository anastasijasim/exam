
const eyebrowCc = document.querySelector ('#eyebrowcc');
const eyebrowCol = document.querySelector('#eyebrowCol');
const eyebrowCor = document.querySelector ('#eyebrowCor');
const circleEyebrowCC = document.querySelector ('#circleEyebrowCC');
const circleEyebrowCol =document.querySelector ('#circleEyebrowCol');
const circleEyebrowCor = document.querySelector ('#circleEyebrowCor');



function chooseEyebrowCC(){
eyebrowcc.addEventListener ('mouseover',()=>{
    eyebrowcc.style.background = '#F4F7F9';
});
eyebrowcc.addEventListener ('mouseout', ()=>{
    eyebrowcc.style.background = 'rgb(255, 255, 255)';
});
eyebrowcc.addEventListener ('click',()=>{
    circleEyebrowCC.textContent = '-';
    console.log ('click');   
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    document.body.append (deleteBtn);
    deleteBtn.style.width = '150px';
    deleteBtn.style.height = '30px';
    deleteBtn.style.marginRight = 'auto';
    deleteBtn.style.marginLeft = 'auto';
    deleteBtn.style.marginTop = '10px';
    deleteBtn.style.marginLeft = 'auto';
    deleteBtn.style.display = 'block'
    let btn = document.createElement ('button');
    btn.textContent = 'Next';
    document.body.append (btn);
    btn.style.width = '150px';
    btn.style.height = '30px'; 
    btn.style.display = 'block';
    btn.style.marginLeft = 'auto';
    btn.style.marginRight = 'auto';
    btn.style.marginTop = '10px';
    btn.addEventListener ('click',(event)=>{
        event.preventDefault()
        window.location.href = '/ChooseMaster/index.html';
        sessionStorage.setItem ('service', 'accepted service Eyebrow coorection and coloring');
    })
    deleteBtn.addEventListener ('click',()=>{
        circleEyebrowCC.textContent = '+';
        deleteBtn.style.display = 'none';
        btn.style.display ='none';
    }) 
}) 
}

chooseEyebrowCC();

function chooseEyebrowCol (){
eyebrowCol.addEventListener ('mouseover',()=>{
    eyebrowCol.style.background = '#F4F7F9';
});

eyebrowCol.addEventListener ('mouseout', ()=>{
    eyebrowCol.style.background = 'rgb(255, 255, 255)';

});

eyebrowCol.addEventListener ('click',()=>{
    circleEyebrowCol.textContent = '-';
    console.log ('click');   
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    document.body.append (deleteBtn);
    deleteBtn.style.width = '150px';
    deleteBtn.style.height = '30px';
    deleteBtn.style.marginRight = 'auto';
    deleteBtn.style.marginLeft = 'auto';
    deleteBtn.style.marginTop = '10px';
    deleteBtn.style.marginLeft = 'auto';
    deleteBtn.style.display = 'block'
    let btn = document.createElement ('button');
    btn.textContent = 'Next';
    document.body.append (btn);
    btn.style.width = '150px';
    btn.style.height = '30px'; 
    btn.style.display = 'block';
    btn.style.marginLeft = 'auto';
    btn.style.marginRight = 'auto';
    btn.style.marginTop = '10px';
    btn.addEventListener ('click',(event)=>{
        event.preventDefault()
        window.location.href = '/ChooseMaster/index.html';
        sessionStorage.setItem ('service', 'accepted service Eyebrow coloring');
    })
    deleteBtn.addEventListener ('click',()=>{
        circleEyebrowCol.textContent = '+';
        deleteBtn.style.display = 'none';
        btn.style.display ='none';
    }) 
}) 
}

chooseEyebrowCol ();

function chooseEyebrowCor() {
eyebrowCor.addEventListener ('mouseover',()=>{
    eyebrowCor.style.background = '#F4F7F9';
});
eyebrowCor.addEventListener ('mouseout', ()=>{
    eyebrowCor.style.background = 'rgb(255, 255, 255)';
});
eyebrowCor.addEventListener('click',()=>{
    circleEyebrowCor.textContent = '-';
    console.log ('click');   
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    document.body.append (deleteBtn);
    deleteBtn.style.width = '150px';
    deleteBtn.style.height = '30px';
    deleteBtn.style.marginRight = 'auto';
    deleteBtn.style.marginLeft = 'auto';
    deleteBtn.style.marginTop = '10px';
    deleteBtn.style.marginLeft = 'auto';
    deleteBtn.style.display = 'block'
    let btn = document.createElement ('button');
    btn.textContent = 'Next';
    document.body.append (btn);
    btn.style.width = '150px';
    btn.style.height = '30px'; 
    btn.style.display = 'block';
    btn.style.marginLeft = 'auto';
    btn.style.marginRight = 'auto';
    btn.style.marginTop = '10px';
    btn.addEventListener ('click',(event)=>{
        event.preventDefault()
        window.location.href = '/ChooseMaster/index.html';
        sessionStorage.setItem ('service', 'accepted service Eyebrow corection');
    })
    deleteBtn.addEventListener ('click',()=>{
        circleEyebrowCor.textContent = '+';
        deleteBtn.style.display = 'none'
        btn.style.display ='none';
    }) 
}) 
}

chooseEyebrowCor();











