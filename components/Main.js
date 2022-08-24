import React from "react"

import BalanceChart from "../components/BalanceChart"
import YourAssets from "./Portfolio"
import Promos from "../components/Promos"

const styles = {
    main: ` bg-green-500 flex justify-center overflow-y-auto `,
    chart: `border mr-[2rem] justify-center mt-[1rem]`,
}

const Main = () => {
    return (
        <div className={styles.main}>
            <div className={styles.chart}>
                <BalanceChart />
                <YourAssets />
            </div>
            <Promos />
        </div>
    )
}

export default Main
