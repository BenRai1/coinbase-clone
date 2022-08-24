import React, { useEffect, useState } from "react"
import { Line } from "react-chartjs-2"
import Chart from "chart.js/auto"
const data = {
    labels: [`Nov`, `Dec`, `Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`],
    datasets: [
        {
            fill: false,
            lineTension: 0.1,
            backgroundColor: "#3773f5",
            borderColor: "#3773f5",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "#3773f5",
            pointBackgroundColor: "#3773f5",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#3773f5",
            pointHoverBorderColor: "#3773f5",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 72, 45, 67, 55, 42],
        },
    ],
}
const options = { plugins: { legend: { display: false } } }

const styles = {
    wrapper: ``,
    balance: ` border border-[#282b2f] rounded-lg`,
    balanceTitle: `text-[#8a919e]`,
    balanceValue: `text-[1.8rem] font-bold my-[0.5rem] `,
}

const BalanceChart = () => {
    const [sanityTokens, setSanityTokens] = useState([])

    useEffect(() => {
        console.log("check")
        // const getCoins = async () => {
        //     try {
        //         const coins = await fetch(
        //             "https://eanwvhaq.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D'coins'%5D%7B%0A%20%20name%2C%20%0A%20%20usdPrice%2C%0A%20%20contractAddress%2C%20%0A%20%20symbol%2C%20%0A%20%20logo%7D"
        //         )
        //         const tempSanityTokens = await coins.json()
        //         setSanityTokens(tempSanityTokens.result)
        //         console.log(tempSanityTokens.result)
        //     } catch (error) {
        //         console.log(error)
        //     }
        // }
        // return getCoins()
    }, [])
    return (
        <div className={styles.wrapper}>
            <div className={styles.balance}>
                <div className={styles.balanceTitle}>Portfolio balance</div>
                <div className={styles.balanceValue}>
                    $ 600.000{/* {walletBalance.toLocalString()} */}
                </div>
                <Line data={data} options={options} width={400} height={200}></Line>
            </div>
        </div>
    )
}

export default BalanceChart
