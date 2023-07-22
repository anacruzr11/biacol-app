const ReservasPage = () => {
  return (
    <>
      <header className="text-center">
        <h1>Reserva con nosotros</h1>
      </header>
      <main className="row">
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
      <footer className="footer">
       <div className="footertext">
        <p>© 2023 Ana María Cruz Rodríguez</p>
       </div>
      </footer>
    </>
  );
};

export default ReservasPage;
