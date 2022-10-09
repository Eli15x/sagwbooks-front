import './writers.css';
import React , { useEffect, useState } from "react";
import {getWriters} from '../../api/writer';
import {getIdade} from '../../utils/utils';

const Writer = () => {
    
const [randomWriters, setInfoRandomWriters] = useState([])

const information = (birthdate, city) => {
    return getIdade(birthdate) + " anos , "+ city
}

const setRandomWriters = (writers) => {
    var newWriters = []
    var numbers = []
    
    if (writers.length <= 6){
        return writers
    }

    for (var i = 0; i < 6; i++){
        while(true){
            var newNumber = Math.floor(Math.random() * writers.length)
            if(!compareValueInArray(numbers,newNumber)){
                    newWriters.push(writers[newNumber]);
                    numbers.push(newNumber)
                    break;
            }
        }
    }
    setInfoRandomWriters(newWriters)
}

const compareValueInArray = (array, value) => {
    var result = false;
    array.map((arrayValue) => {
        if (arrayValue ===  value){
            result = true
        }
    })
    return result
}


useEffect(() => {
    async function fetchData() {
        await getWriters().then((data) => {
            setRandomWriters(data)
        })    
    }
      fetchData();
}, [])
// ver oque ta rolando acredito que provavelmente ele carrega o return antes de ta com os dados no infoWriters entao ele nao coloca nada na tela que deveria porque
// fica com o infoWriters desatualizado. é isso mesmo
return (
    <>
    <div className="information-writters"> 
    <div className="text-writters">Nossos Autores</div>
    <div className="line-one"/>
    <div className="line-two"/>
        <div className="cards">
        {randomWriters.map((writer) => (
		<div className="card-writer">
            <div className="image-black"> </div>
            <img className="imgwriter" src={require(`../../img/${writer.Image}`)} onError={(e: any) => e.target.src = '../../img/2.jpeg'} alt={writer.Name} />

            <div className="info-writter"> 
            <div className="name-writter"> {writer.Name} </div>
            <div className="information-writter"> {information(writer.BirthDate,writer.City)} </div>
            </div>
		</div>
		))} 
        </div>
    </div>
    </>
);

}

export default Writer;