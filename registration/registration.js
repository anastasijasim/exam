const form = document.querySelector ('#form');
const outcome = document.querySelector('.outcome');
const input = document.querySelector('input');
const button = document.querySelector ('button');

button.style.background = 'pink';

const allRegistration = [];

class Registration {
    constructor(Name, LastName, tel, email) {
        this.name = Name;
        this.LastName = LastName;
        this.tel = tel;
        this.email = email;
    }
}

const changeData = document.querySelector ('#date');
const date = document.querySelector('#davaToday'); //.valueAsDate = new Date();

function chooseData(){
  changeData.style.display = 'none';
}

chooseData();


form.addEventListener ('submit', (event) => {
    event.preventDefault();
    changeData.style.display = 'block';
    changeData.style.marginLeft = 'auto';
    changeData.style.marginRight = 'auto';
    changeData.addEventListener ('click', ()=>{
      let div = document.createElement ('div');
      div.style.alignItems ='center';
      div.style.marginTop = '10px';
      div.style.width ='70px';
      div.style.height = '40px'
      div.style.background = 'white';
      div.textContent = '14:10';
      div.style.textAlign = 'center';
      div.style.paddingTop = '10px';
      div.style.display = 'block';
      div.style.marginLeft = 'auto';
      div.style.marginRight = 'auto';
      document.body.append (div);
      div.addEventListener('click',()=>{
        let p = document.createElement ('p');
        p.style.textAlign = 'center';
        p.textContent = (`${this.Name.value} ${this.LastName.value} all true about your choice of service ? `);
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
        deleteBtn.style.marginRight = 'auto';
        deleteBtn.style.marginLeft = 'auto';
        deleteBtn.style.marginTop = '10px';
        deleteBtn.style.marginLeft = 'auto';
        deleteBtn.style.display = 'block';

        let btn = document.createElement ('button');
        btn.style.width = '150px';
        btn.style.height = '30px'; 
        btn.style.display = 'block';
        btn.style.marginLeft = 'auto';
        btn.style.marginRight = 'auto';
        btn.style.marginTop = '10px';
        btn.textContent = 'Next';
        document.body.append (btn);

        btn.addEventListener ('click',(event)=>{
          event.preventDefault()
          window.location.href = '/Main menu/index.html';
          sessionStorage.setItem ('registration', 'accepted');

          confirm ('Do you want to return to main menu');
      
          
      })
        deleteBtn.addEventListener ('click',()=>{
          changeData.style.display = 'none';
          deleteBtn.style.display = 'none'
          btn.style.display ='none';
          p.style.display = 'none';
          div.style.display ='none';
          backbtn.style.display ='none'
      }) 

        backbtn.addEventListener ('click', ()=>{
        window.location.href = '/ChooseMaster/index.html'
        sessionStorage.setItem ('registration','I want to choose another master');

      })
      })
      
    const name = document.querySelector('#name').value;
    const LastName = document.querySelector('#lastname').value;
    const tel = document.querySelector('#tel').value;
    const email = document.querySelector('#email').value;
    const allRegistration = new Registration (name,LastName,tel,email)
    console.log (allRegistration);
})
})

fetch('https://testapi.io/api/AnastasijaSim/resource/TataBrow',
   {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
    Name: this.Name.value,
    LastName: this.LastName.value,
    email: this.email.value,
    tel: this.tel.value,
    })
    }
)
    .then((response) => {
        if (response.ok) {
            return response.json();
        }
    })
    .then((Registration) => {
        console.log(Registration);
    })


