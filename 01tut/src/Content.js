
const Content = () => {
  
    const handleNameChange = () => {
        const names = ["Lindsay", "Bob", "Steve", "Betty"]
    
        const int = Math.floor(Math.random() * names.length)
    
        return names[int]
      }

    return (
    <main>
        <p>
          Welcome, {handleNameChange()}!
        </p>
    </main>
  )
}

export default Content