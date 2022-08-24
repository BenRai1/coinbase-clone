import React from "react"

const styles = {
    wrapper: ` border-b-2 border-b-[#292b2f] py-3 px-[1rem] items-center flex justify-between `,
    title: `text-4xl font-bold flex-1 `,
    buttonContainer: `flex justify-border`,
    walletContainer: `border border-[#27ad75] rounded-full px-5`,
    walletConnected: `font-bold text-[#16a34a] `,
    buySell: `bg-[#3773f5] rounded-lg px-2 font-bold text-black ml-3`,
    sendReceive: `ml-3 font-bold text-white border border border-[#282b2f] p-3 rounded-lg`,
}

const Header = ({ address }) => {
    const addressShort = { address }
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>Assets</div>
            <div className={styles.walletContainer}>
                <div className={styles.walletConnected}>Wallet Connected</div>
                <div>
                    {address.slice(0, 7)}...{address.slice(35)}
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.buySell}>Buy / Sell</button>
                <button className={styles.sendReceive}>Send / Receive</button>
            </div>
        </div>
    )
}

export default Header
