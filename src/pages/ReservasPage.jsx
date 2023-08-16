import style from '../styles/Reservas.css'
import { collection, addDoc, getDocs, updateDoc, deleteDoc} from "firebase/firestore";
import {db} from '../firebase/firebase'

const ReservasPage = () => {
  const [users, setUser] = useState([])
  const userCollectionRef = collection(db, 'reservas')
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState(0)
  const [comments, setComments] = useState("")

  const [formUpdate, setFormUpdate] = useState(false)
  const [item, setItem] = useState(null)

  const createUser = async() =>{
    await addDoc(userCollectionRef, {nombre:name, correo:email, telefono:phone, comentario:comments})
    getUsers()
  }

  const getUsers = async() =>{
    const data = await getDocs(userCollectionRef)
    setUser(data.docs.map((doc)=> ({...doc.data(), id: doc.id})))
  }

  const borrarUsuario = async(id) =>{
    const userDoc = doc(db,'reservas',id)
    await deleteDoc(userDoc)
    getUsers()
  }

  const formUpdateOpen = (data) => {
    setFormUpdate(true)
    setItem(data)
  }

  const handleChange = (e) =>{
    setItem({
      ...item,
      [e.target.name]: e.target.value
    })
  }
 
  const onUpdate = async(id) =>{
    await updateDoc(doc(db,'reservas',id), item);
    getUsers()
  }

  useEffect(() =>{
    getUsers();
  },[]);

  return (
    <>
      <header className="text-center">
        <h1 className='titulo'>Reserva con nosotros</h1>
      </header>
      <main className="row datos">
        <div className="form col-sm-7">
          <div className="mb-3">
             <label for="nombreInput" className="form-label">Nombre completo</label>
             <input type="text" className="form-control" onChange={(e) => {setName(e.target.value)}}/>
          </div>
          <div className="mb-3">
             <label for="emailInput" className="form-label">Correo electrónico</label>
             <input type="email" className="form-control" placeholder="nombre@ejemplo.com"onChange={(e) => {setEmail(e.target.value)}}/>
          </div>
          <div className="mb-3">
             <label for="telefonoInput" className="form-label">Número de teléfono</label>
             <input type="number" className="form-control" placeholder="ej: 321456789" onChange={(e) => {setPhone(e.target.value)}}/>
          </div>
          <div className="mb-3">
             <label for="commentsInput" className="form-label">Comentarios</label>             
             <textarea className="form-control" placeholder="ej: Mesa para 4 personas" rows={3} defaultValue={""} onChange={(e) => {setComments(e.target.value)}}/>
          </div>
          <div className="d-grid gap-2 col-4 mx-auto">
             <button id="btnCrear" className="btn btn-success" onClick={createUser()}>Enviar</button>
          </div>
        </div>
      </main>

      {users.map((item)=>{
       return(
         <div key={item.id}>
           <h5>Nombre: <p>{item.nombre}</p></h5>
           <h5>Telefono: <p>{item.telefono}</p></h5>
           <h5>Correo: <p>{item.correo}</p></h5>
           <h5>Comentarios: <p>{item.comentarios}</p></h5>

          <button className="btn btn-danger" onClick={()=> borrarUsuario(item.id)}>Borrar</button>
          <button className="btn btn-warning" onClick={()=> formUpdateOpen(item)}>Editar</button>
         </div>
       )
     })}

    {
      formUpdate &&
      <>
      <input type="text" placeholder='Nombre' value={item.nombre} name="nombre" onChange={handleChange}/>
      <input type="text" placeholder='Correo' value={item.correo} name="correo" onChange={handleChange}/>
      <input type="text" placeholder='Telefono' value={item.telefono} name="telefono" onChange={handleChange}/>
      <input type="text" placeholder='Comentarios' value={item.comentarios} name="comentarios" onChange={handleChange}/>

      <button className="btn btn-info" onClick={()=> onUpdate(item.id)}>Guardar</button>
      </>
    }

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
