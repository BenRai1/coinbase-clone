import React, { useEffect, useState } from "react"
import { Line } from "react-chartjs-2"
import Chart from "chart.js/auto"
import { ThirdwebSDK } from "@3rdweb/sdk"
import { ethers, getDefaultProvider } from "ethers"

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
    balance: ` p-[1rem] border border-[#282b2f] rounded-lg`,
    balanceTitle: ` text-[#8a919e]`,
    balanceValue: ` text-[1.8rem] font-bold mb-[0.25rem] `,
}

const BalanceChart = ({ thirdWebTokens, sanityTokens, walletAddress }) => {
    const [walletBalance, setWalletBallance] = useState(0)

    const tokenToUSD = {}

    for (const token of sanityTokens) {
        tokenToUSD[token.contractAddress] = Number(token.usdPrice)
    }

    useEffect(() => {
        async function calculateTotalBalance() {
            const totalBalance = await Promise.all(
                thirdWebTokens.map(async (token) => {
                    const balance = await token.balanceOf(walletAddress)
                    return Number(balance.displayValue) * tokenToUSD[token.address]
                })
            )
            console.log("total Balance", totalBalance)
            setWalletBallance(totalBalance.reduce((acc, curr) => acc + curr, 0))
        }
        calculateTotalBalance()
    }, [thirdWebTokens, sanityTokens])

    console.log("Token to USD:", tokenToUSD)
    return (
        <div className={styles.wrapper}>
            <div className={styles.balance}>
                <div className={styles.balanceTitle}>Portfolio balance</div>
                <div className={styles.balanceValue}>$ {walletBalance.toLocaleString()}</div>
                <Line data={data} options={options} width={400} height={200}></Line>
            </div>
        </div>
    )
}

export default BalanceChart
