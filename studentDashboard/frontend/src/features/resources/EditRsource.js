import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectResourceById } from './resourcesApiSlice'
import EditResourceForm from './EditResourceForm'

const EditResource = () => {
    const { id } = useParams()

    const resource = useSelector(state => selectResourceById(state, id))

    const content = resource ? <EditResourceForm resource={resource} /> : <p>Loading...</p>

    return content
}
export default EditResource