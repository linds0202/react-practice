import NewResourceForm from './NewResourceForm'
import useTitle from '../../hooks/useTitle'

const NewResource = () => {

  useTitle('Student Dashboard: New Resource')

  const content = <NewResourceForm />

  return content
}

export default NewResource
