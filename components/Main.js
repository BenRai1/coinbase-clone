import React from "react"

import BalanceChart from "../components/BalanceChart"
import Portfolio from "./Portfolio"
import Promos from "../components/Promos"

const styles = {
    main: `flex justify-center  `,
    chart: `ml-[1rem] mr-[2rem] mt-[1rem] `,
    balanceChart: ``,
}

const Main = ({ walletAddress, thirdWebTokens, sanityTokens }) => {
    return (
        <div className={styles.main}>
            <div className={styles.chart}>
                <div className={styles.balanceChart}>
                    <BalanceChart
                        walletAddress={walletAddress}
                        sanityTokens={sanityTokens}
                        thirdWebTokens={thirdWebTokens}
                    />
                </div>
                <Portfolio />
            </div>
            <Promos />
        </div>
    )
}

export default Main
