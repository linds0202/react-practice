import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { selectResourceById } from './resourcesApiSlice'

const Resource = ({ resourceId }) => {

    const resource = useSelector(state => selectResourceById(state, resourceId))

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
export default Resource