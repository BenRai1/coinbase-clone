import React, { useEffect, useState } from "react"
import imageUrlBuilder from "@sanity/image-url"
import { client } from "../lib/sanity"
import { GiCheckMark } from "react-icons/gi"

const styles = {
    wrapper: ` flex items-center py-[0.25rem] px-[0.25rem] mb-[0.5rem] hover:cursor-pointer  hover:bg-gray-500 rounded-lg overflow-hidden`,
    coinSymbol: ` h-[1.8rem] mr-[1rem] rounded-full overflow-hidden items-center`,
    nameContainer: `flex-1`,
    coinName: `text-[1.25rem] mb-[0.2rem] text-white mx-[0]`,
    symbol: `text-[0.9rem]`,
    balance: ``,
    checkmark: `text-[#22c55e] mx-[1rem]`,
}

const CoinSelectorCoin = ({
    token,
    setSelectedToken,
    selectedToken,
    thirdWebTokens,
    setAction,
    address,
}) => {
    const url = imageUrlBuilder(client).image(token.logo.asset._ref).url()

    const [balance, setBalance] = useState("Fetching...")

    useEffect(() => {
        async function getBalance() {
            let activeThirdWebToken = thirdWebTokens.find(
                (thirdWebToken) => thirdWebToken.address == token.contractAddress
            )
            let balance = await activeThirdWebToken.balanceOf(address)
            setBalance(balance.displayValue.split(".")[0])
        }
        getBalance()
    }, [])

    function onClickAction() {
        setSelectedToken(token)
        setAction("send")
    }

    return (
        <div
            className={styles.wrapper}
            style={{ background: token == selectedToken && "#0369a1" }}
            onClick={() => onClickAction()}
        >
            <img src={url} className={styles.coinSymbol} />
            <div className={styles.nameContainer}>
                <div className={styles.coinName}>{token.name}</div>
                <div className={styles.symbol}>{token.symbol}</div>
            </div>
            <div className={styles.balance}>
                {balance} {token.symbol}
            </div>
            <div className={styles.checkmark}>
                {Boolean(token == selectedToken) && <GiCheckMark />}
            </div>
        </div>
    )

    // den Coin mit samt des Symbols darstellen
    // wenn der Coin selected wurde, dann mit Border markieren
}

export default CoinSelectorCoin
