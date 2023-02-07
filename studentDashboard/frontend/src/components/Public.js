import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Spiral!</span></h1>
                <Link to="/login">Login</Link>
            </header>
            <main className="public__main">
                <div className='public__main__text'>
                    <h2>How can we help young people develop as creative thinkers so that they’re prepared for life
    in this ever-changing world?</h2>
                    <p>Shift the focus of education from a broadcast model - instructors at the front, children in seats writing down word for word and sometimes repeating back - to a self-directed, project based approach</p>
                    <br />
                    <p>Spiral up creativity</p>
                </div>
                <img src='./img/SD_background3.jpg' className='public__hero__img' alt='spiral in rainbow colors' />
            </main>
            {/* <footer>
                <Link to="/login">Employee Login</Link>
            </footer> */}
        </section>

    )
    return content
}

export default Public