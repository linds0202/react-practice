import NewResourceForm from './NewResourceForm'
import useTitle from '../../hooks/useTitle'

const NewResource = () => {

  useTitle('Blossom & Vine: New Resource')

  const content = <NewResourceForm />

  return content
}

export default NewResource
