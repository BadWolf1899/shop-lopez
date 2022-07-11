import react, {useState}  from 'react';

const ItemCount = ([ initial, stock, onAdd ]) => {

    const [counter, setCounter] = useState(initial)
  
    const increase = () =>{
        if(counter < stock ){
            const aux = counter+100
            setCounter(aux)
    }
}
    const decrease = () =>{
        if(counter > initial ){
            const aux = counter-100
            setCounter(aux)
    }
}

    return (
    <div>
        <div>
            <button onClick={decrease}>-</button>
            <p>{counter}</p>
            <button onClick={increase}>+</button>
        </div>
        <button onClick={onAdd}>Agregar al carrito</button>
    </div>
    )
}

export default ItemCount