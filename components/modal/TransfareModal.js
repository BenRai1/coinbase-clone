import React, { useState } from "react"
import Transfer from "./Transfer"
import Receive from "./Receive"
import Transferring from "./Transferring"
import Transferred from "./Transferred"
import CoinSelector from "./CoinSelector"

const styles = {
    wrapper: `h-[35rem] w-[27rem] color-white border-2 border-[#282b2f] flex flex-col text-xl`,
    selector: `flex justify-evenly  w-full items-center h-[5rem]`,
    selected: `hover:bg-[#1a1b1d] hover:cursor-pointer w-[50%] h-full flex items-center justify-center font-bold text-[#3773f5]`,
    notselected: `hover:bg-[#1a1b1d] hover:cursor-pointer w-[50%] border border-[#282b2f] h-full flex items-center justify-center font-bold text-white`,
    action: `text-white`,
}

const TransfareModal = ({ sanityTokens, thirdWebTokens, address }) => {
    const [action, setAction] = useState("transferring")
    const [selectedToken, setSelectedToken] = useState(sanityTokens[0])

    const selectedModal = (option) => {
        switch (option) {
            case "send":
                return (
                    <Transfer
                        selectedToken={selectedToken}
                        thirdWebTokens={thirdWebTokens}
                        address={address}
                        setAction={setAction}
                    />
                )
            case "receive":
                return (
                    <Receive
                        address={address}
                        selectedToken={selectedToken}
                        sanityTokens={sanityTokens}
                        thirdWebTokens={thirdWebTokens}
                    />
                )
            case "transferring":
                return <Transferring />
            case "transferred":
                return <Transferred setAction={setAction} />
            case "select":
                return (
                    <CoinSelector
                        setAction={setAction}
                        selectedToken={selectedToken}
                        setSelectedToken={setSelectedToken}
                        sanityTokens={sanityTokens}
                        thirdWebTokens={thirdWebTokens}
                        address={address}
                    />
                )

            default:
                return (
                    <Transfer
                        selectedToken={selectedToken}
                        thirdWebTokens={thirdWebTokens}
                        address={address}
                        setAction={setAction}
                    />
                )
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.selector}>
                <p
                    className={action == "send" ? styles.selected : styles.notselected}
                    onClick={() => setAction("send")}
                >
                    Send
                </p>
                <p
                    className={action == "receive" ? styles.selected : styles.notselected}
                    //style={{ action } == "receive" && { color: "#3773f5" }}
                    onClick={() => setAction("receive")}
                >
                    Receive
                </p>
            </div>
            <div className="boder text-white">{selectedModal(action)}</div>
        </div>
    )
}

export default TransfareModal
