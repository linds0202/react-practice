import ListItem from "./ListItem"

const List = ({ items }) => {
  
  
  return (
    <div>
        {items.map(item => (
            <ListItem 
                key={item.id} 
                item={item}
            />
        ))}
    </div>
  )
}

export default List