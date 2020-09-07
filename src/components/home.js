import React, { Component } from 'react';
import "../assets/estilos/home.css";
class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="home">
                <br/>
            <h3>Estaciones del año </h3>
            <br/>
            <h4>Primavera</h4>
            <p>En este caso, me centraré en las flores que son llamadas de primavera porque florecen entre los meses de marzo y mayo:
                Azalea,Jazmín,Clivia,Glicina,Corona de novia,Lapacho,Azahares,Amapola,Rosa banksiana,Girasol,Verónica,Narciso,Flor de cera</p>
           <h4>Verano</h4>
           <p>
           En cuanto a las flores de verano, son así conocidas las que florecen entre los meses de junio y agosto. Veamos cuáles son las más destacadas:Agapanthus,Aster,Dalia,Bouvardia,Dianthus,Consolida,Paeoniaceae,Girasol,Guisante de olor,Clavel del poeta,Nardo,Verónica
           </p>
           <h4>Otoño</h4>
           <p>
           Las conocidas como flores de otoño florecen entre los meses de septiembre y noviembre. Las más conocidas son:Aster,Bouvardia,Dalia,Dianthus,Brezo,Consolida,Lilas,Narciso,Girasol,Verónica
           </p>
           <h4>Invierno</h4>
            <p>
                La última de las épocas del año es el invierno, y en este caso las flores florecen entre los meses de diciembre y febrero. Veamos cuáles son:Amaryllis,Anemone,Bouvardia,Fritillaria,Brezo,Leptospermum,Lila,Narciso,Ranunculus,Nardo,Verónica,Flor de cera
            </p>
            </div>
            
         );
    }
}
 
export default Home;