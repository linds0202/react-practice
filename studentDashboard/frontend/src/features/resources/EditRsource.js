import { useParams } from 'react-router-dom'
import { useGetResourcesQuery } from './resourcesApiSlice'
import EditResourceForm from './EditResourceForm'
import useAuth from '../../hooks/useAuth'
import PulseLoader from 'react-spinners/PulseLoader'
import useTitle from '../../hooks/useTitle'

const EditResource = () => {
    useTitle('Blossom & Vine: Edit Resource')

    const { id } = useParams()

    const { isManager, isAdmin } = useAuth()

    const { resource } = useGetResourcesQuery("resourcesList", {
        selectFromResult: ({ data }) => ({
            resource: data?.entities[id]
        }),
    })

    if (!resource) return <PulseLoader color={"#FFF"} />

    if (!isManager && !isAdmin) {
        return <p className="errmsg">No access</p>
    }

    const content = <EditResourceForm resource={resource} />

    return content
}
export default EditResource