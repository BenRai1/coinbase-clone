import React, { useState } from "react"
import { navItems } from "../static/navItems"
import SidebarItem from "../components/SidebarItem"
import Image from "next/image"
import Logo from "../assets/cbLogo.png"
const styles = {
    sidebar: `h-screen border border-r-[#282b2f] w-60 bg-yellow-500`,
    logo: `mt-5 ml-5 mb-2 w-20 border mb-10`,
}

const Sidebar = () => {
    const [activeIcon, setActiveIcon] = useState(navItems[0].title)
    return (
        <div className={styles.sidebar}>
            <div className={styles.logo}>
                <Image src={Logo} />
            </div>
            {navItems.map((item) => {
                return (
                    <div onClick={() => setActiveIcon(item.title)}>
                        <SidebarItem title={item.title} icon={item.icon} activeIcon={activeIcon} />
                    </div>
                )
            })}
        </div>
    )
}

export default Sidebar
