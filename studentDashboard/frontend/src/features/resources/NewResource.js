import { useSelector } from 'react-redux'
import { selectAllUsers } from '../users/usersApiSlice'
import NewResourceForm from './NewResourceForm'

const NewResource = () => {

  const users = useSelector(selectAllUsers)

  const content = users ? <NewResourceForm /> : <p>Loading...</p>

  return content
}

export default NewResource
