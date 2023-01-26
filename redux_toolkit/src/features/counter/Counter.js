import { useSelector, useDispatch } from 'react-redux'
import { 
    increment,
    decrement,
    reset,
    incrementByAmount
} from './counterSlice'
import { useState } from 'react'


const Counter = () => {

    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()

    const [ incrementAmount, setIncrementAmount ] = useState(0)

    //if it's NAN then set amount to 0 
    const addValue = Number(incrementAmount) || 0

    const resetAll = () => {
        setIncrementAmount(0)
        dispatch(reset())
    }

  return (
    <section> 
        <p>{ count }</p>
        <div>
            <button onClick={ () => dispatch(decrement()) }>-</button>
            <button onClick={ () => dispatch(increment()) }>+</button>
        </div>
        <input 
            type='text'
            value={incrementAmount}
            onChange={ (e) => setIncrementAmount(e.target.value) }
        />

        <div>
            <button onClick={ () => dispatch(incrementByAmount(addValue)) }>Add amount</button>
            <button onClick={ () => dispatch(resetAll()) }>Reset all</button>
        </div>
    </section>
  )
}

export default Counter