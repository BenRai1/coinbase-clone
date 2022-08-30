import React, { useState, useEffect } from "react"
import imageUrlBuilder from "@sanity/image-url"
import { client } from "../../lib/sanity"
import { BiCopy } from "react-icons/bi"
import { FaCheck } from "react-icons/fa"

const styles = {
    wrapper: `m-[1rem] border border-[#282b2f] rounded-lg flex flex-col`,
    qrCode: `border-b border-b-[#282b2f] p-[2rem] flex items-center justify-center`,
    selectedTokenContainer: `flex border-b border-b-[#282b2f] items-center py-[0.5rem] pl-[1rem]`,
    selectedTokenSymbol: `h-[1.5rem] mr-[1.5rem]`,
    selectedTokenName: `text-[1rem]`,
    addressContainer: `flex items-center p-[1rem] justify-between`,
    addressText: `text-[1.3rem]`,
    address: `text-[0.8rem] text-[#64748b]`,
    copy: `text-[1.5rem] hover:cursor-pointer`,
}

const Receive = ({ address, selectedToken, sanityTokens, thirdWebTokens }) => {
    const [imageUrl, setImageUrl] = useState(null)
    const [copied, setCopied] = useState(false)

    useEffect(() => {
        const url = imageUrlBuilder(client).image(selectedToken.logo.asset._ref).url()
        setImageUrl(url)
    }, [selectedToken])

    console.log("receive:", selectedToken)

    return (
        <div className={styles.wrapper}>
            <div className={styles.qrCode}>
                <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${address}`}
                />
            </div>
            <div className={styles.selectedTokenContainer}>
                <img src={imageUrl} className={styles.selectedTokenSymbol} />
                <div className={styles.selectedTokenName}>{selectedToken.name}</div>
            </div>
            <div className={styles.addressContainer}>
                <div>
                    <div className={styles.addressText}>{selectedToken.symbol} Address</div>
                    <div className={styles.address}>{address}</div>
                </div>
                <div
                    onClick={() => {
                        navigator.clipboard.writeText(address)
                        setCopied("true")
                    }}
                    className={styles.copy}
                >
                    {copied ? <FaCheck color="#27ad75" /> : <BiCopy />}
                </div>
            </div>
        </div>
    )
}

export default Receive
