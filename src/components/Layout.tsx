import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'

function Layout() {
    return (
        <>
            <Header name="Sultanmuratov Shadiyar" tagline="Aspiring Web Developer" />
            <main className="page-main">
                <Outlet />
            </main>
            <Footer author="Sultanmuratov Shadiyar" year={2026} />
        </>
    )
}

export default Layout
