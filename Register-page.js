const inputUser = document.getElementById('idUser')
const inputPass = document.getElementById('idPass')
const inputRPass = document.getElementById('idRPass')

const divErrorUser = document.getElementById('divErrorUser')
const divErrorPass = document.getElementById('divErrorPass')
const divErrorRPass = document.getElementById('divErrorRPass')

const botonRegistrar = document.getElementById('idSendForm')

const usersLocalStorage = JSON.parse(localStorage.getItem('users')) || [ ]


divErrorUser.classList.add('d-none')
divErrorPass.classList.add('d-none')
divErrorRPass.classList.add('d-none')


const sendFormFunction = (ev) => { 
     ev.preventDefault()
     if(!IdUser.value){
         IdUser.classList.add('is-invalid')
        divErrorUser.classList.remove('d-none')
     }
     if(!IdPass.value){
          IdPass.classList.add('is-invalid')
         divErrorPass.classList.remove('d-none')
      }
      if(!IdRPass.value){
          IdRPass.classList.add('is-invalid')
         divErrorRPass.classList.remove('d-none')  }
      

      if (inputUser.value && inputPass.value && inputRPass.value){

          const userExist = usersLocalStorage.find((user) =>user.userName === inputUser.value)
              
          if(userExist){
             return alert('Usuario existente')
           }     

          if(inputPass.value!==inputRPass.value){
             return alert('Contraseñas no coinciden')
          }
          if(usersLocalStorage.length){
          const iduser = usersLocalStorage[usersLocalStorage.length -1].id + 1

          const newUser = {
          id: iduser,
          userName: inputUser.value,
          pass: inputPass.value,
          role: 'user',
          deleted: false,
          login: true,
    }
    usersLocalStorage.push(newUser)
    localStorage.setItem('users', JSON.stringify(usersLocalStorage))
  }else{
     const newUser = {
          id: 1,
          userName: inputUser.value,
          pass: inputPass.value,
          role: 'user',
          deleted: false,
          login: true,
    }
     usersLocalStorage.push(newUserr)
     localStorage.setItem('users', JSON.stringify(usersLocalStorage))
  }
    }
   }



const validarCampos = (ev) => {
     const{name, value} = ev.target
     if(name==='user'){
          divErrorUser.classList.add('d-none')
          IdUser.classList.remove('is-invalid') 
          if(value.length > 3) {
               IdUser.classList.add('is-valid')  }
          
      }     
      if(name==='Pass'){
          divErrorPass.classList.add('d-none')
          IdPass.classList.remove('is-invalid') 
          if(value.length > 3) {
               IdPass.classList.add('is-valid')  }
      }  
      if(name==='RPass'){
          divErrorRPass.classList.add('d-none')
          IdRPass.classList.remove('is-invalid') 
          if(value.length > 3) {
               IdRPass.classList.add('is-valid')  }
      }        
      
      
}


botonRegistrar.addEventListener('click', sendFormFunction)
IdUser.addEventListener('input',validarCampos)
IdPass.addEventListener('input',validarCampos)
IdRPass.addEventListener('input',validarCampos)
