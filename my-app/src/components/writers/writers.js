import './writers.css';
import React , { useEffect, useState } from "react";
import {getWriters} from '../../api/writer';
import getIdade from '../../utils/utils';

const Writer = () => {

const [infoWriters, setInfoWriters] = useState([])

const information = (birthdate, city) => {
    var idade = "18" //getIdade(birthdate,Date.now())
    return idade + " anos , "+ city
}

const getRandomWriter = (writers) => {
    var newWriters = {}
    
    if (writers.length < 6){
        return writers
    }

    for (var i = 0; i < 6; i ++){
        newWriters = newWriters + writers[Math.floor(Math.random() * writers.length)];
    }
    return newWriters;
}

useEffect(() => {
    async function fetchData() {
        await getWriters().then((data) => {
            setInfoWriters(data)
        })        
    }
      fetchData();
}, [])
// ver oque ta rolando acredito que provavelmente ele carrega o return antes de ta com os dados no infoWriters entao ele nao coloca nada na tela que deveria porque
// fica com o infoWriters desatualizado. é isso mesmo
return (
    <>
        <div className="cards">
        {infoWriters.map((writer) => (
		<div className="card-writer">-
            <div className="info-writter"> 
            <div className="name-writter"> {writer.Name} </div>
            <div className="information-writter"> {information(writer.BirthDate,writer.City)} </div>
            </div>
			<img src={writer.Image} alt={writer.Name} />
		</div>
		))} 
        </div>
    </>
);

}

export default Writer;