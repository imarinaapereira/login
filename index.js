const btn = document.querySelector('button')
const senha = document.querySelector("#senha")


btn.addEventListener('click',()=>{
  if(senha.value.length <= 3){
    alert('essa senha não é valida')
  }else{
    alert('o seu login foi salvo')
  }
  
})