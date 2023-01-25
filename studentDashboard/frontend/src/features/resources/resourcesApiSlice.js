import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice"

const resourcesAdapter = createEntityAdapter({})

const initialState = resourcesAdapter.getInitialState()

export const resourcesApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getResources: builder.query({
            query: () => '/resources',
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            },
            keepUnusedDataFor: 5,
            transformResponse: responseData => {
                const loadedResources = responseData.map(resource => {
                    resource.id = resource._id
                    return resource
                })
                return resourcesAdapter.setAll(initialState, loadedResources)
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'Resource', id: 'LIST' },
                        ...result.ids.map(id => ({ type: 'Resource', id }))
                    ]
                } else return [{ type: 'Resource', id: 'LIST' }]
            }
        }),
    }),
})

export const {
    useGetResourcesQuery,
} = resourcesApiSlice

// returns the query result object
export const selectResourcesResult = resourcesApiSlice.endpoints.getResources.select()

// creates memoized selector
const selectResourcesData = createSelector(
    selectResourcesResult,
    resourcesResult => resourcesResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllResources,
    selectById: selectResourceById,
    selectIds: selectResourceIds
    // Pass in a selector that returns the resources slice of state
} = resourcesAdapter.getSelectors(state => selectResourcesData(state) ?? initialState)