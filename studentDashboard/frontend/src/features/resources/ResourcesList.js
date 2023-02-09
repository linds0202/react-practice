import { useGetResourcesQuery } from "./resourcesApiSlice"
import Resource from "./Resource"
import useTitle from "../../hooks/useTitle"
import useAuth from "../../hooks/useAuth" 

const ResourcesList = () => {

    useTitle('Blossom & Vine: Resources List')

    const { isAdmin } = useAuth()

    const {
        data: resources,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetResourcesQuery('resourceList', {
        pollingInterval: 15000, //requery every 15 seconds
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    })

    let content

    if (isLoading) content = <p>Loading...</p>

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    }

    if (isSuccess) {
        const { ids } = resources

        const tableContent = ids?.length
            ? ids.map(resourceId => <Resource key={resourceId} resourceId={resourceId} isAdmin={isAdmin}/>)
            : null

        content = (
            <div className='resource__list'>
                {tableContent}
            </div>
        )
    }

    return content
}
export default ResourcesList