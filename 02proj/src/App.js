import {useState, useEffect} from 'react'
import Form from './Form'
import List from './List'

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/'

  const [reqType, setReqType] = useState('users')
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch(`${API_URL}${reqType}`)
        const data = await res.json()

        setItems(data)

      } catch(err) {
        console.log(err)
      }
    }

    fetchItems()

  }, [reqType])
  
  return (
    <div className="App">
      <Form 
        reqType={reqType} 
        setReqType={setReqType} 
      />
      <List 
        items={items}
      />
    </div>
  );
}

export default App;
