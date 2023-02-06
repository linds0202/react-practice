import { store } from '../../app/store'
import { notesApiSlice } from '../notes/notesApiSlice'
import { usersApiSlice } from '../users/usersApiSlice'
import { resourcesApiSlice } from '../resources/resourcesApiSlice'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

const Prefetch = () => {
    //only runs when component mounts because it has an empty dependency arr
    useEffect(() => {
        store.dispatch(notesApiSlice.util.prefetch('getNotes', 'notesList', { force: true }))
        store.dispatch(usersApiSlice.util.prefetch('getUsers', 'usersList', { force: true }))
        store.dispatch(resourcesApiSlice.util.prefetch('getResources', 'resourcesList', { force: true }))
    }, [])

    return <Outlet />
}

export default Prefetch