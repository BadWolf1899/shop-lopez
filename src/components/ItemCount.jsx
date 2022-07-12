import React, {useState}  from 'react';

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
        <div>
            <button className="btn" onClick={dec}>-</button>
            <span>{counter}</span>
            <button className="btn" onClick={inc}>+</button>
        </div>
        <button className="btn" onClick={()=>onAdd(counter)}>Comprar</button>
    </div>
    )
}

export default ItemCount;