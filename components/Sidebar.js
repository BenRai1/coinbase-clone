import React, { useState } from "react"
import { navItems } from "../static/navItems"
import SidebarItem from "../components/SidebarItem"
import Image from "next/image"
import Logo from "../assets/cbLogo.png"
const styles = {
    sidebar: `sticky top-0 bg-[#0a0b0d]`,
    logoContainer: `border border-[#0a0b0d] `,
    logo: `mt-5 ml-5 mb-2 w-20 mb-7 `,
    items: ` py-[1rem]  `,
    scrollContainer: `h-screen overflow-y-auto hide-scrollbar `,
}

const Sidebar = () => {
    const [activeIcon, setActiveIcon] = useState(navItems[0].title)
    return (
        <div className={styles.sidebar}>
            <div className={styles.logoContainer}>
                <div className={styles.logo}>
                    <Image src={Logo} />
                </div>
            </div>
            <div className={styles.scrollContainer}>
                <div className={styles.items}>
                    {navItems.map((item) => {
                        return (
                            <div onClick={() => setActiveIcon(item.title)}>
                                <SidebarItem
                                    title={item.title}
                                    icon={item.icon}
                                    activeIcon={activeIcon}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
