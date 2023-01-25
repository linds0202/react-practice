import { useGetResourcesQuery } from "./resourcesApiSlice"
import Resource from "./Resource"

const ResourcesList = () => {
    const {
        data: resources,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetResourcesQuery()

    let content

    if (isLoading) content = <p>Loading...</p>

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    }

    if (isSuccess) {
        const { ids } = resources

        const tableContent = ids?.length
            ? ids.map(resourceId => <Resource key={resourceId} resourceId={resourceId} />)
            : null

        content = (
            <table className="table table--resources">
                <thead className="table__thead">
                    <tr>
                        <th scope="col" className="table__th resource__title">Name</th>
                        <th scope="col" className="table__th resource__title">Desc</th>
                        <th scope="col" className="table__th resource__title">Link</th>
                        <th scope="col" className="table__th resource__title">Tags</th>
                        <th scope="col" className="table__th resource__title">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {tableContent}
                </tbody>
            </table>
        )
    }

    return content
}
export default ResourcesList