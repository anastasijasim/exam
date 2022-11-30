const masters = document.querySelector ('#Masters');

function chooseMaster (){
masters.addEventListener ('mouseover',()=>{
    masters.style.background = '#F4F7F9';
});
masters.addEventListener ('mouseout', ()=>{
    masters.style.background = 'rgb(255, 255, 255)';
});
masters.addEventListener ('click',()=>{  
    let p = document.createElement ('p');
    p.textContent = 'Your master will be waiting for you for your eyebrow procedure.';
    p.style.background = 'white';
    p.style.width = '300px';
    p.style.height = '60px';
    p.style.display ='block';
    p.style.marginLeft = 'auto';
    p.style.marginRight = 'auto';
    p.style.alignItems = 'center';
    document.body.append (p);
    let backbtn = document.createElement ('button');
    backbtn.textContent = 'Back';
    backbtn.style.width = '150px';
    backbtn.style.height = '30px';
    backbtn.style.display ='block';
    backbtn.style.marginLeft ='auto';
    backbtn.style.marginRight = 'auto';
    document.body.append (backbtn);
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    document.body.append (deleteBtn);
    deleteBtn.style.width = '150px';
    deleteBtn.style.height = '30px';
    deleteBtn.style.display = 'block'
    deleteBtn.style.marginRight = 'auto';
    deleteBtn.style.marginLeft = 'auto';
    deleteBtn.style.marginTop = '10px';
    deleteBtn.style.marginLeft = 'auto';
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
        window.location.href = '/registration/registration.html';
        sessionStorage.setItem ('service', 'Master Name Lastname');
    })
    deleteBtn.addEventListener ('click',()=>{
        deleteBtn.style.display = 'none';
        btn.style.display ='none';
        p.style.display = 'none';
        backbtn.style.display = 'none';
    }) 
    backbtn.addEventListener ('click', ()=>{
        window.location.href = '/ChooseService/chooseservice.html'
        sessionStorage.setItem ('Master','I want to choose another service');
    })

}) 
}

chooseMaster();