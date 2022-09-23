import './bar.css';
import icon from '../../img/sagwa-books.png';
import loginIcon from '../../img/login-icon.png';
import React , { useEffect, useState } from "react";


const Bar = () => {

const [open,setOpen] = useState(true)

//tem um bug na pagina, quando está com open desligado e voce abre a tela ( ou seja em uma tela de celular com o menu fechado)
//e abrir para uma tela de computador ele ficará sem o menu, dando um refresh resolve.
useEffect(() => {
    bar(open)
})

 const bar = (open) => {
    if(open){
        document.getElementById("bar-items").style.display = "block"
        document.getElementById("main").style.display = "none"     
    } else if (!open) {
        document.getElementById("bar-items").style.display = "none"
        document.getElementById("main").style.display = "block"  
    }
 }

  return (
    <>
        <div className="bar-feed">
        <div className="bar-icon"> <img src={icon} alt="icon"/> </div>
        <div id="bar-items" className="bar-items">
        <button className="closebtn" onClick={()=> bar(false)}> - </button>
        <a className="bar-item-livros" href=".."> Livros </a>
        <a className="bar-item-contato" href=".."> Contato </a>
        <a className="bar-item-login" href=".."> Login|Cadastro </a>
        </div>
        <div id="main">
            <button className="openbtn" onClick={()=> bar(true)}> + </button>
        </div>
        <div className="icon-login">
            <a className="login" href="/teste"> <img src={loginIcon}></img></a> 
        </div>
        </div>
    </>

);

}

export default Bar;                         