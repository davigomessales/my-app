import React, {useState} from 'react';
import Tweet from './Tweet';

function App(){
  const [users, setUsers] = useState([
    {name: "Davi Sales", message:"Estou aprendendo a programar", likes:0},
    {name: "Maria Lavinia", message:"Ainda não aprendi a programar", likes:0},
    {name: "Cristiane França", message:"Estou aprendendo hotelaria.", likes:0}
  ]);
  return(
    <div className="app">
    {users.map(user =>(
      <Tweet name={user.name} message={user.message} likes={user.likes}/>
    ))}
    </div>
  );
}

export default App;