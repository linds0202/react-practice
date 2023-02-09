import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from 'react-router-dom'
import { useGetResourcesQuery } from './resourcesApiSlice'
import { memo } from 'react'

const Resource = ({ resourceId, isAdmin }) => {

    const { resource } = useGetResourcesQuery("resourcesList", {
        selectFromResult: ({ data }) => ({
            resource: data?.entities[resourceId]
        }),
    })

    const navigate = useNavigate()

    if (resource) {

        console.log(resource.link)

        const handleEdit = () => navigate(`/dash/resources/${resourceId}`)

        return (
            <div className='resource__card'>
                <div>
                    <h2 className='resource__card_title'>{resource.name}</h2>
                    <p className='resource__card_desc'>{resource.desc}</p>
                </div>
                <div>
                    <a className='resource__card__link' href={resource.link} target="_blank" rel="noopener noreferrer">Visit</a>
                    <button
                        className="icon-button table__button"
                        onClick={handleEdit}
                    >
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </button> 
                </div>
            </div>
        )

    } else return null
}

const memoizedResource = memo(Resource)

export default memoizedResource