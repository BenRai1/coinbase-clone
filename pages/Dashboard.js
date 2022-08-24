import React from "react"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"

import Main from "../components/Main"

const styles = {
    wrapper: `flex  border border-red-500 bg-[#0a0b0d] color-white border bg-blue-500 w-screen overflow-hidden`,
    mainContainer: `flex-1`,
    sidebar: ``,
}

const Dashboard = ({ address }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.sidebar}>
                <Sidebar />
            </div>
            <div className={styles.mainContainer}>
                <Header address={address} />
                <Main />
            </div>
        </div>
    )
}

export default Dashboard
