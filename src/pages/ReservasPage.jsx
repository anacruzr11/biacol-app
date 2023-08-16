import style from '../styles/Reservas.css'

const ReservasPage = () => {
  return (
    <>
      <header className="text-center">
        <h1 className='titulo'>Reserva con nosotros</h1>
      </header>
      <main className="row datos">
        <div className="form col-sm-7">
          <div className="mb-3">
             <label for="nombreInput" class="form-label">Nombre completo</label>
             <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
             <label for="emailInput" class="form-label">Correo electrónico</label>
             <input type="email" className="form-control" placeholder="nombre@ejemplo.com"/>
          </div>
          <div className="mb-3">
             <label for="telefonoInput" class="form-label">Número de teléfono</label>
             <input type="number" className="form-control" placeholder="ej: 321456789" onChange={(e) => {setPhone(e.target.value)}}/>
          </div>
          <div className="mb-3">
             <label for="commentsInput" class="form-label">Comentarios</label>             
             <textarea className="form-control" placeholder="ej: Mesa para 4 personas" rows={3} defaultValue={""} onChange={(e) => {setComments(e.target.value)}}/>
          </div>
          <div className="d-grid gap-2 col-4 mx-auto">
             <button id="btnCrear" className="btn btn-success">Enviar</button>
          </div>
        </div>
      </main>
      <div className="img col-6">
        <h1 className='titulo1 text-center'>Reserva con nosotros</h1>
      <div className="reserInfo"> 
       <div className="texts col-6">        
         <h5>Déjanos tus datos y pronto estaremos comunicándonos contigo para completar tu reserva. También puedes llamarnos o contactarnos por correo.</h5>
       </div>         
       </div>                   
      </div>
    </>
  );
};

export default ReservasPage;
