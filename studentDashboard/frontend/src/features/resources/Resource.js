import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from 'react-router-dom'
import { useGetResourcesQuery } from './resourcesApiSlice'
import { memo } from 'react'

const Resource = ({ resourceId }) => {

    const { resource } = useGetResourcesQuery("resourcesList", {
        selectFromResult: ({ data }) => ({
            resource: data?.entities[resourceId]
        }),
    })

    const navigate = useNavigate()

    if (resource) {

        const handleEdit = () => navigate(`/dash/resources/${resourceId}`)

        const resourceTagsString = resource.tags.toString().replaceAll(',', ', ')

        return (
            <tr className="table__row">
                <td className="table__cell resource__title">{resource.name}</td>
                <td className="table__cell resource__username">{resource.desc}</td>
                <td className="table__cell resource__username">{resource.link}</td>
                <td className={`table__cell resource__username`}>{resourceTagsString}</td>

                <td className="table__cell">
                    <button
                        className="icon-button table__button"
                        onClick={handleEdit}
                    >
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                </td>
            </tr>
        )

    } else return null
}

const memoizedResource = memo(Resource)

export default memoizedResource