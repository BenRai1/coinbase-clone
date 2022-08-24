import React from "react"
import { coins } from "../static/coins"
import Coin from "./Coin"
import { BsThreeDotsVertical } from "react-icons/bs"

const styles = {
    main: "border border-[#282b2f] mt-3 rounded-lg w-full w-full max-w-2xl",
    title: `font-bold text-3xl py-4 pl-5`,
    titles: `flex justify-between px-5 border-t border-t-[#282b2f] py-1 items-center`,
    assets: ``,
    flex0: `flex-0`,
    flex1: `flex-1`,
    flex2: `flex-[2]`,
    flex3: `flex-[2]`,
}

const YourAssets = () => {
    return (
        <div className={styles.main}>
            <div className={styles.title}>YourAssets</div>
            <div className={styles.titles}>
                <div className={styles.flex3}>Name</div>
                <div className={styles.flex2}>Balance</div>
                <div className={styles.flex1}>Price</div>
                <div className={styles.flex1}>Allocation</div>
                <div className={styles.flex0}>
                    <BsThreeDotsVertical />
                </div>
            </div>
            <div>
                {coins.map((coin) => {
                    return (
                        <div>
                            <Coin coin={coin} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default YourAssets
