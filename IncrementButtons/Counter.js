
import '../App.css';
export default function Counter({name,label,onSelectMinus,onSelectPlus}){

    

  return(
    <div className='counter'>

        <button onClick={onSelectMinus}>-</button>
        <h2 >{label} {name}</h2>
        <button onClick={onSelectPlus}>+</button>        
    
    </div>
  );

    
}