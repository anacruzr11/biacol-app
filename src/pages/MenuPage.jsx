import style from '../styles/Menu.css'

const MenuPage = () => {
  return (
    <>
      <div className="text-center">
    <h1 className='titulo'>Menú</h1>
    <div className="seccion1">
      <div className="row">
        <div className="col">
          <h5 className="platos">Entradas</h5>
          <li className="list-group-item">Patacón con hogao</li>
          <li className="list-group-item">Mini chorizo con melao</li>
          <li className="list-group-item">Chicharrones de cuajada</li>
          <li className="list-group-item">Empanaditas</li>
          <li className="list-group-item">Arepa boyacense</li>
          <li className="list-group-item">Chunchullo</li>                    
          <li className="list-group-item">Chicharrón con criolla</li>                    
          <li className="list-group-item">Yuquitas con suero</li>        
          <li className="list-group-item">Aros de cebolla</li>
        </div>
        <div className="col">
          <h5 className="platos">Res</h5>
          <li className="list-group-item">Cola sudada</li>
          <li className="list-group-item">Churrasco</li>
          <li className="list-group-item">Lomo en salsa</li>
          <li className="list-group-item">Sobrebarriga sudada</li>
          <li className="list-group-item">Sobrebarriga en salsa</li>
          <li className="list-group-item">Punta de anca</li>                    
          <li className="list-group-item">Mamona</li>                    
          <li className="list-group-item">Filete asado</li>        
          <li className="list-group-item">Posta cartagenera</li>
          <li className="list-group-item">Bandeja paisa</li>
        </div>
        <div className="col">
          <h5 className="platos">Cerdo</h5>
          <li className="list-group-item">Chuleta asada</li>
          <li className="list-group-item">Chuleta apanada</li>
          <li className="list-group-item">Costillas BBQ</li>
          <li className="list-group-item">Costillas sudadas</li>
          <li className="list-group-item">Cocido boyacense</li>
          <li className="list-group-item">Lomo asado</li>
          <li className="list-group-item">Lomo sudado</li>
          <li className="list-group-item">Frijolada</li>                 
          <li className="list-group-item">Lechona</li>                 
        </div>
        <div className="col">
          <h5 className="platos">Pollo</h5>
          <li className="list-group-item">Pechuga gratinada</li>
          <li className="list-group-item">Pollo sudado</li>
          <li className="list-group-item">Arroz con pollo</li>
          <li className="list-group-item">Pollo a la criolla</li>
          <li className="list-group-item">Pollo asado</li>
          <li className="list-group-item">Pechuga con salsa de queso</li>
          <li className="list-group-item">Pechuga rellena</li>
        </div>          
      </div> 
    </div>         
    <div className="seccion2">
      <div className="row">
        <div className="col">
          <h5 className="platos">Sopas</h5>
          <li className="list-group-item">Sancocho de gallina</li>
          <li className="list-group-item">Sancocho de pescado</li>
          <li className="list-group-item">Sancocho de trifásico</li>
          <li className="list-group-item">Ajiaco</li>
          <li className="list-group-item">Mondongo</li>
          <li className="list-group-item">Caldo de costilla</li>
          <li className="list-group-item">Caldo de pescado</li>
          <li className="list-group-item">Cuchuco</li>                  
          <li className="list-group-item">Pajarilla</li>                  
          <li className="list-group-item">Caldo de raíz</li>                  
        </div>
        <div className="col">
          <h5 className="platos">Postres</h5>
          <li className="list-group-item">Crepe de Nutella</li>
          <li className="list-group-item">Brownie con helado</li>
          <li className="list-group-item">Torta de tres leches</li>
          <li className="list-group-item">Bocadillo con arequipe</li>
          <li className="list-group-item">Postre de natas</li>
          <li className="list-group-item">Milhoja</li>                    
          <li className="list-group-item">Merengón</li>                    
          <li className="list-group-item">Arroz con leche</li>        
          <li className="list-group-item">Tiramisú</li>
        </div>
        <div className="col">
          <h5 className="platos">Bebidas sin alcohol</h5>
          <li className="list-group-item">Jugo natural en agua</li>
          <li className="list-group-item">Jugo natural en leche</li>
          <li className="list-group-item">Jugo hit</li>
          <li className="list-group-item">Limonada natural</li>
          <li className="list-group-item">Limonada de coco</li>
          <li className="list-group-item">Cerezada</li>
          <li className="list-group-item">Agua con gas</li>
          <li className="list-group-item">Agua sin gas</li>               
          <li className="list-group-item">Bretaña</li>               
        </div>
        <div className="col">
          <h5 className="platos">Bebidas con alcohol</h5>
          <li className="list-group-item">Cerveza Poker</li>
          <li className="list-group-item">Cerveza Club Colombia</li>
          <li className="list-group-item">Cerveza Andina</li>
          <li className="list-group-item">Cerveza Águila</li>
          <li className="list-group-item">Cerveza Corona</li>
          <li className="list-group-item">Cerveza Stella Artois</li>
          <li className="list-group-item">Mimosa</li>
          <li className="list-group-item">Copa de vino</li>
        </div>          
      </div> 
    </div>  
  </div>
  <div className="image col-6">
   <h1 className='titulo1 text-center'>Reserva con nosotros</h1>
    <div className="reserInfo"> 
      <div className="texts col-6">        
        <h5>Déjanos tus datos y pronto estaremos comunicándonos contigo para completar tu reserva. También puedes llamarnos o contactarnos por correo.</h5>
      </div>
      <div className="contact-info col-3">
        <div className="phone">
          <h5>+57 (310) 011-0498</h5>
        </div>
        <div className="email">
          <h5>contact-info@biacol.com</h5>
        </div>
        <h5>Carrera 4 #11c-98</h5>
      </div>                    
    </div>                   
  </div>
      <footer className="footer">
       <div className="footertext">
        <p>© 2023 Ana María Cruz Rodríguez</p>
       </div>
      </footer>
    </>
  )
}

export default MenuPage
