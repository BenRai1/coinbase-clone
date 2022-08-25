import React, { useState } from "react"
import { GiWallet } from "react-icons/gi"
import { SiEthereum } from "react-icons/si"

const styles = {
    wrapper: `h-[35rem] w-[27rem] color-white border-2 border-[#282b2f] flex flex-col text-xl`,
    selector: `flex justify-evenly  w-full items-center h-[5rem]`,
    selected: `hover:bg-[#1a1b1d] hover:cursor-pointer w-[50%] h-full flex items-center justify-center font-bold text-[#3773f5]`,
    notselected: `hover:bg-[#1a1b1d] hover:cursor-pointer w-[50%] border border-[#282b2f] h-full flex items-center justify-center font-bold text-white`,
    action: `text-white`,
    containerSend: `m-[1rem] text-[#94a3b8] `,
    inputContainer: `h-[12rem] flex flex-col items-center justify-center justify-between py-[2rem]`,
    input: `flex  justify-center items-end`,
    inputAmmound: `text-7xl w-[20%] font-semibold bg-transparent text-right mr-[1rem]`,
    coinShort: `text-[#3773f5] text-5xl  `,
    requredField: `text-base`,

    containerSendToPayWith: `font-bold border border-[#282b2f] rounded-lg text-xl`,
    containerSendTo: `p-[1rem] flex items-center border-b border-b-[#282b2f]`,
    containerPayWith: `p-[1rem] flex items-center`,
    text: `w-[25%] `,
    symbol: `mx-[1rem]  h-[1.5rem] w-[1.5rem] text-gray-500 `,
    addressInput: `w-[13rem] rounded-lg px-1 bg-transparent `,
    coinName: `text-white font-semibold`,
    button: `bg-[#3773f5] w-full text-xl text-white flex items-center justify-center rounded-lg h-[3rem] mt-[1rem]`,
    ethBalance: `w-full flex justify-between items-center my-[2rem] `,
}

const TransfareModal = () => {
    const [action, setAction] = useState("send")
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

            {action == "send" ? (
                <div className={styles.action}>
                    <div className={styles.containerSend}>
                        <div className={styles.inputContainer}>
                            <div className={styles.input}>
                                <input
                                    type="text"
                                    placeholder="0"
                                    className={styles.inputAmmound}
                                />
                                <div className={styles.coinShort}>ETH</div>
                            </div>
                            <div className={styles.requredField}>Amount is a requred field</div>
                        </div>
                        <div className={styles.containerSendToPayWith}>
                            <div className={styles.containerSendTo}>
                                <div className={styles.text}>To</div>
                                <GiWallet className={styles.symbol} />
                                <input
                                    className={styles.addressInput}
                                    type="text"
                                    placeholder="Address"
                                />
                            </div>
                            <div className={styles.containerPayWith}>
                                <div className={styles.text}>Pay with</div>
                                <SiEthereum className={styles.symbol} />
                                <div className={styles.coinName}>Ethereum</div>
                            </div>
                        </div>

                        <button className={styles.button}>Continue</button>
                        <div className={styles.ethBalance}>
                            <div>ETH balance</div>
                            <div>Fetching...ETH</div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={styles.action}>Receiven</div>
            )}
        </div>
    )
}

export default TransfareModal
