import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Blossom & Vine Order Tracker</span></h1>
                <Link to="/login" className='login-button'>Login</Link>
            </header>
            <main className="public__main">
                <div className='public__main__text'>
                    <h2>Track your daily order flow</h2>
                    <p>Easily stay on top of your orders with this simple task tracker</p>
                </div>
            </main>
        </section>

    )
    return content
}

export default Public