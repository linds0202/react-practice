import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faHeart } from "@fortawesome/free-solid-svg-icons"
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

        const handleEdit = () => navigate(`/dash/resources/${resourceId}`)
        
        const handleFavorite = () => console.log(`liked resourceID: ${resource.id}`)
        
        const resourceTagsString = resource.tags.toString().replaceAll(',', ', ')

        return (
            <div className='resource__card'>
                <h2 className='resource__card_title'>{resource.name}</h2>
                <p className='resource__card_desc'>{resource.desc}</p>
                <p className='resource__card_tags'>Tags: {resourceTagsString}</p>
                <a className='resource__card__link' href={resource.link}>Visit Resource</a>
                {isAdmin ? <button
                    className="icon-button table__button"
                    onClick={handleEdit}
                >
                    <FontAwesomeIcon icon={faPenToSquare} />
                </button> :
                <button
                    className="icon-button table__button"
                    onClick={handleFavorite}
                >
                    <FontAwesomeIcon icon={faHeart} />
                </button>
                }
            </div>
            // <tr className="table__row">
            //     <td className="table__cell resource__title">{resource.name}</td>
            //     <td className="table__cell resource__username">{resource.desc}</td>
            //     <td className="table__cell resource__username">{resource.link}</td>
            //     <td className={`table__cell resource__username`}>{resourceTagsString}</td>

            //     <td className="table__cell">
            //         <button
            //             className="icon-button table__button"
            //             onClick={handleEdit}
            //         >
            //             <FontAwesomeIcon icon={faPenToSquare} />
            //         </button>
            //     </td>
            // </tr>
        )

    } else return null
}

const memoizedResource = memo(Resource)

export default memoizedResource