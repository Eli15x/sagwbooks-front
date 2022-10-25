import './writers.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";  
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

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 10000,

};

useEffect(() => {
    async function fetchData() {
        await getWriters().then((data) => {
            setRandomWriters(data)
        })    
    }
      fetchData();
}, [])

//QUANDO PEGAR O NOME FAZER UM FUNCAO PARA PEGAR O SEGUNDO NOME SOMENTE, OU O MENOR SOBRENOME ENTRE OS QUE TIVEREM, CASO NAO TENHA COLOCAR SOMENTE A INICAL.
return (
    <>
    <div className="information-writters"> 
    <div className="text-writters">Nossos Autores</div>
    <div className="line-one"/>
    <div className="line-two"/>
        <div className="cards">
        <Slider {...settings}>
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
        </Slider>
        </div>
    </div>
    </>
);

}

export default Writer;