import React, { useEffect, useState } from "react"
import { GiWallet } from "react-icons/gi"
import imageUrlBuilder from "@sanity/image-url"
import { client } from "../../lib/sanity"

const styles = {
    containerSend: `m-[1rem] text-[#94a3b8] `,
    inputContainer: `h-[12rem] flex flex-col items-center justify-center justify-between py-[2rem]`,
    input: `flex  justify-center items-center`,
    inputAmmound: `text-7xl w-[20%] font-semibold bg-transparent text-right mr-[1rem]`,
    coinShort: `text-[#3773f5] text-5xl  `,
    requredField: `text-base`,
    containerSendToPayWith: `font-bold border border-[#282b2f] rounded-lg text-xl`,
    containerSendTo: `p-[1rem] flex items-center border-b border-b-[#282b2f]`,
    containerPayWith: `p-[1rem] flex items-center hover:cursor-pointer`,
    text: `w-[25%] `,
    symbol: `mx-[1rem]  h-[1.5rem] w-[1.5rem] text-gray-500 `,
    addressInput: `w-[13rem] rounded-lg px-1 bg-transparent `,
    coinName: `text-white font-semibold`,
    continueButton: `bg-[#3773f5] w-full text-xl text-white flex items-center justify-center rounded-lg h-[3rem] mt-[1rem] hover:bg-[#2563eb]`,
    ethBalance: `w-full flex justify-between items-center my-[2rem] `,
}

const Transfer = ({ selectedToken, thirdWebTokens, address, setAction }) => {
    const [amount, setAmount] = useState()
    const [recipient, setRecipient] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [activeThirdWebToken, setActiveThirdWebToken] = useState()
    const [balance, setBalance] = useState("Fetching...")

    useEffect(() => {
        const activeToken = thirdWebTokens.find(
            (token) => token.address == selectedToken.contractAddress
        )
        setActiveThirdWebToken(activeToken)
    }, [selectedToken, thirdWebTokens])

    useEffect(() => {
        const url = imageUrlBuilder(client).image(selectedToken.logo.asset._ref).url()
        setImageUrl(url)
    }, [selectedToken])

    useEffect(() => {
        const getBalance = async () => {
            const balance = await activeThirdWebToken.balanceOf(address)
            setBalance(balance.displayValue)
        }
        if (activeThirdWebToken) {
            getBalance()
        }
    }, [activeThirdWebToken])

    const sendCrypto = async (amount, recipient) => {
        console.log("sending Crypto...")

        if (activeThirdWebToken && amount && recipient) {
            setAction("transferring")
            const tx = await activeThirdWebToken.transfer(
                recipient,
                amount.toString().concat("000000000000000000")
            )

            console.log(tx)
            setAction("transferred")
        } else {
            console.log("Missing data")
        }
    }

    return (
        <div className={styles.action}>
            <div className={styles.containerSend}>
                <div className={styles.inputContainer}>
                    <div className={styles.input}>
                        <input
                            type="text"
                            placeholder="0"
                            className={styles.inputAmmound}
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                        <div className={styles.coinShort}>{selectedToken.symbol}</div>
                    </div>
                    {amount == "" && (
                        <div className={styles.requredField}>Amount is a requred field</div>
                    )}
                </div>
                <div className={styles.containerSendToPayWith}>
                    <div className={styles.containerSendTo}>
                        <div className={styles.text}>To</div>
                        <GiWallet className={styles.symbol} />
                        <input
                            className={styles.addressInput}
                            type="text"
                            placeholder="Address"
                            value={recipient}
                            onChange={(e) => setRecipient(e.target.value)}
                        />
                    </div>
                    <div className={styles.containerPayWith} onClick={() => setAction("select")}>
                        <div className={styles.text}>Pay with</div>
                        <img src={imageUrl} className={styles.symbol} />
                        <div className={styles.coinName}>{selectedToken.name}</div>
                    </div>
                </div>

                <button
                    className={styles.continueButton}
                    onClick={() => sendCrypto(amount, recipient)}
                >
                    Continue
                </button>
                <div className={styles.ethBalance}>
                    <div>{selectedToken.symbol} Balance</div>
                    <div>
                        {balance} {selectedToken.symbol}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transfer
