import React, { useEffect, useState } from "react"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import { ThirdwebSDK } from "@3rdweb/sdk"
import { ethers, getDefaultProvider } from "ethers"

const sdk = new ThirdwebSDK(
    new ethers.Wallet(
        process.env.NEXT_PUBLIC_METAMASK_KEY,
        ethers.getDefaultProvider("https://rpc.ankr.com/eth_rinkeby")
    )
)

import Main from "../components/Main"

const styles = {
    wrapper: `flex color-white bg-[#0a0b0d] w-full`,
    containerRight: `flex-1 pb-[1rem]  ml-60 border-l-2 border-l-[#292b2f]`,
    sidebar: `fixed top-0 left-0   w-60 `,
    header: `sticky top-0 bg-[#0a0b0d]`,
    main: ``,
}

const Dashboard = ({ address }) => {
    const [sanityTokens, setSanityTokens] = useState([])
    const [thirdWebTokens, setThirdWebTokens] = useState([])
    useEffect(() => {
        const getSanityAndThirdWebTokens = async () => {
            const coins = await fetch(
                "https://8c0m40ri.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D'coins'%5D%7B%0A%20%20name%2C%20%0A%20%20usdPrice%2C%0A%20%20contractAddress%2C%20%0A%20%20symbol%2C%20%0A%20%20logo%7D"
            )
            const sanityTokens = (await coins.json()).result
            setSanityTokens(sanityTokens)
            setThirdWebTokens(
                sanityTokens.map((token) => sdk.getTokenModule(token.contractAddress))
            )
        }
        getSanityAndThirdWebTokens()
    }, [])
    console.log("Sanity tokens", sanityTokens)
    console.log("Third Web Tokens", thirdWebTokens)
    return (
        <div className={styles.wrapper}>
            <div className={styles.sidebar}>
                <Sidebar />
            </div>

            <div className={styles.containerRight}>
                <div className={styles.header}>
                    <Header
                        address={address}
                        sanityTokens={sanityTokens}
                        thirdWebTokens={thirdWebTokens}
                    />
                </div>
                <div className={styles.main}>
                    <Main
                        walletAddress={address}
                        sanityTokens={sanityTokens}
                        thirdWebTokens={thirdWebTokens}
                    />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
