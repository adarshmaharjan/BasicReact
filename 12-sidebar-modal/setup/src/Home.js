import React, { useContext } from "react"
import { FaBars } from "react-icons/fa"
import { AppContext, useGlobalContext } from "./context"
const Home = () => {
    // const data = useContext(AppContext)
    const data = useGlobalContext()
    // console.log(data)
    const { openSidebar, openModal } = data
    return (
        <main>
            <button className="sidebar-toggle" onClick={openSidebar}>
                <FaBars />
            </button>
            <button className="btn" onClick={openModal}>
                Show Modal
            </button>
        </main>
    )
}

export default Home
