import React from 'react';
import App from '../App';
import Nyhetsartikel from './Nyhetsartikel';

function Nyhetslista(props) {
    return(
    <section>
        
         {props.artikellista.map(function(item,index){
             return <Nyhetsartikel minArtikel={item} key={`artikel${index}`}/>
         })}
        
      
    </section>
     
      );
 
}    
export default Nyhetslista;
