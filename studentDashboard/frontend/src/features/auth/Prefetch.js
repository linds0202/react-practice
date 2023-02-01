import { store } from '../../app/store'
import { notesApiSlice } from '../notes/notesApiSlice'
import { usersApiSlice } from '../users/usersApiSlice'
import { resourcesApiSlice } from '../resources/resourcesApiSlice'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

const Prefetch = () => {
    //only runs when component mounts because it has an empty dependency arr
    useEffect(() => {
        console.log('subscribing')
        //Creates manual subscription to notes and users
        const notes = store.dispatch(notesApiSlice.endpoints.getNotes.initiate())
        const users = store.dispatch(usersApiSlice.endpoints.getUsers.initiate())
        const resources = store.dispatch(resourcesApiSlice.endpoints.getResources.initiate())

        return () => {
            console.log('unsubscribing')
            notes.unsubscribe()
            users.unsubscribe()
            resources.unsubscribe()
        }
    }, [])

    return <Outlet />
}

export default Prefetch