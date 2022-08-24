import React from "react"
import Image from "next/image"
import { BsFileX, BsThreeDotsVertical } from "react-icons/bs"
const styles = {
    asset: `border-t border-t-[#282b2f] px-5 py-2 flex items-center justify-between`,
    nameContainer: `flex items-center  text-align-left flex-[2]`,
    imageContainer: `mr-3 `,
    balanceContainer: `  flex-[2]`,
    priceContainer: `  flex-1`,
    allocationContainer: `  flex-1`,
    treeDotsContainer: `  flex-0`,
    secondRow: `text-s text-[#3f3f46]`,
}

const Coin = ({ coin }) => {
    const { name, sign, logo, balanceUsd, balanceCoin, priceUsd, change, allocation } = coin
    return (
        <div className={styles.asset}>
            <div className={styles.nameContainer}>
                <div className={styles.imageContainer}>
                    <Image src={logo} height={40} width={40} />
                </div>
                <div>
                    <div>{name}</div>
                    <div className={styles.secondRow}>{sign}</div>
                </div>
            </div>
            <div className={styles.balanceContainer}>
                <div>${balanceUsd}</div>
                <div className={styles.secondRow}>
                    {balanceCoin} {sign}
                </div>
            </div>
            <div className={styles.priceContainer}>
                <div>${priceUsd}</div>
                <div
                    className={styles.secondRow}
                    style={{ color: change < 0 ? "#f0616d" : "#26ad75" }}
                >
                    {change > 0 && "+"}
                    {change}%
                </div>
            </div>
            <div className={styles.allocationContainer}>{allocation}%</div>
            <div className={styles.treeDotsContainer}>
                <BsThreeDotsVertical />
            </div>
        </div>
    )
}

export default Coin
