import { useWeb3 } from "@3rdweb/hooks"
import Dashboard from "../pages/Dashboard.js"

const styles = {
    wrapper: `bg-[#0a0b0d] w-screen h-screen grid place-items-center text-white`,
    walletConnector: `grid place-items-center`,
    connectButton: `bg-[#3773f5] rounded-lg text-black p-2 font-medium mb-3`,
    details: `text-white text-center`,
}

export default function Home() {
    const { address, connectWallet } = useWeb3()
    return (
        <div className={styles.wrapper}>
            {address ? (
                <Dashboard address={address} />
            ) : (
                <div className={styles.walletConnector}>
                    <button
                        className={styles.connectButton}
                        onClick={() => connectWallet("injected")}
                    >
                        Connect Wallet
                    </button>
                    <h1 className={styles.details}>
                        You need to be on Chrome to be
                        <br /> able to run this app.
                    </h1>
                </div>
            )}
        </div>
    )
}
