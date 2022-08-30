import React from "react"
import CoinSelectorCoin from "../CoinSelectorCoin"

const styles = {
    containerCoinSelector: `m-[1rem] text-[#94a3b8] `,
    title: `w-full text-center font-[1.5rem] mb-[1rem]`,
}
const CoinSelector = ({
    setAction,
    selectedToken,
    setSelectedToken,
    sanityTokens,
    thirdWebTokens,
    address,
}) => {
    return (
        <div className={styles.containerCoinSelector}>
            <div className={styles.title}>Select Asset</div>
            {sanityTokens.map((token, index) => (
                <CoinSelectorCoin
                    token={token}
                    key={index}
                    selectedToken={selectedToken}
                    setSelectedToken={setSelectedToken}
                    thirdWebTokens={thirdWebTokens}
                    setAction={setAction}
                    address={address}
                />
            ))}
        </div>
    )

    // sanityTokens.map um die die Darstellung eines CoinSelectorCoins für jeden Tokens zu erstellen
}

export default CoinSelector
