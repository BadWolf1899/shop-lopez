import React, {useState}  from 'react';
import './styles/ItemCount.css';


const ItemCount = ( {initial, stock, onAdd} ) => {

    const [counter, setCounter] = useState(initial);
  
    const inc = () =>{
        if(counter < stock ){
            const aux = counter+1
            setCounter(aux);
    }
}
    const dec = () =>{
        if(counter > initial ){
            const aux = counter-1
            setCounter(aux);
    }
}

    return (
    <div>
        <div className="counter">
            <button className="btnMinus" onClick={dec}>-</button>
            <span className="count">{counter}</span>
            <button className="btnPlus" onClick={inc}>+</button>
        </div>
        <button className="btnAdd" onClick={()=>onAdd(counter)}>Comprar</button>
    </div>
    )
}

export default ItemCount;