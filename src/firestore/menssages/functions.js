import { initializeFirebase } from "../config";
import { collection, doc,  getDocs, query, setDoc} from "firebase/firestore";


const db = initializeFirebase()

const locate = path => `salas/${path}/mensagens`

export async function setMenssageToFirestore(room,menssage){
    const hours = new Date(Date.now())
   
      try {
        await setDoc(doc(db, locate(room), `mensagem${menssage.id}`), {
          
          hours:hours,
          content:menssage.content,
          user:menssage.user
        })
        console.log("Sucesso em enviar");
        
        }
      catch (e) {
        console.error("Error adding document: ", e);
      }
  }
  
  export async function getMenssage(path){
    
    const q = query(collection(db, locate(path)));
    const querySnapshot = await getDocs(q);
    return querySnapshot
  }