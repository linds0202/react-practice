import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import useTitle from '../../hooks/useTitle'

const Welcome = () => {

    const { username, isManager, isAdmin } = useAuth()

    useTitle(`Blossom & Vine: ${username}`)

    const date = new Date()
    const today = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(date)

    const content = (
        <section className="welcome">

            <p>{today}</p>

            <h1>Welcome { username }!</h1>

            <p><Link to="/dash/notes">View Orders</Link></p>

            <p><Link to="/dash/notes/new">Add new Order</Link></p>

            <p><Link to="/dash/resources">View Resources</Link></p>

            <p><Link to="/dash/resources/new">Add new Resource</Link></p>

            {(isManager || isAdmin) && <p><Link to="/dash/users">View User Settings</Link></p>}

            {(isManager || isAdmin) && <p><Link to="/dash/users/new">Add new User</Link></p>}

        </section>
    )

    return content
}

export default Welcome