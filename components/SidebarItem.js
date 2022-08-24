import React from "react"

const styles = {
    sidebarItem: `flex p-2 m-2 item-center hover:text-[#a3e635] hover:bg-gray-900 rounded-lg border`,
    icon: `mr-6  flex flex-col justify-self-center rounded-full p-2 bg-[#141519] `,
    title: `font-bold`,
}

const SidebarItem = ({ title, icon, activeIcon }) => {
    return (
        <div className={styles.sidebarItem}>
            <div className={styles.icon} style={{ color: title === activeIcon && "#3773f5" }}>
                {icon}
            </div>
            <div className={styles.title}>{title}</div>
        </div>
    )
}

export default SidebarItem
