import React from "react"
import Modal from "react-modal"
import { useRouter } from "next/router"
import TransferModal from "../components/modal/TransfareModal.js"
import Link from "next/link"

Modal.setAppElement("#__next")

const styles = {
    wrapper: ` border-b-2 border-b-[#292b2f] py-3 px-[1rem] items-center flex justify-between `,
    title: `text-4xl font-bold flex-1 `,
    buttonContainer: `flex justify-border`,
    walletContainer: `border border-[#27ad75] rounded-full px-5`,
    walletConnected: `font-bold text-[#16a34a] `,
    buySell: `bg-[#3773f5] rounded-lg px-2 font-bold text-black ml-3`,
    sendReceive: `ml-3 font-bold text-white border border border-[#282b2f] p-3 rounded-lg`,
}

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#0a0b0d",
        padding: 0,
        border: "none",
    },
    overlay: {
        backgroundColor: "rgba(10, 11, 13, 0.75)",
    },
}

const Header = ({ address }) => {
    const router = useRouter()
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
                <Link href={"/?transfer=1"}>
                    <button className={styles.sendReceive}>Send / Receive</button>
                </Link>
            </div>
            <Modal
                isOpen={!!router.query.transfer}
                onRequestClose={() => router.push("/")}
                style={customStyles}
            >
                <TransferModal />
            </Modal>
        </div>
    )
}

export default Header
