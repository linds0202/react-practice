
const Footer = () => {
  
  const today = new Date()
    return (
    <footer>
        <p>Copywrite &copy; {today.getFullYear()}</p>
    </footer>
  )
}

export default Footer