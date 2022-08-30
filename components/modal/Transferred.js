import { serializeTransaction } from "ethers/lib/utils"
import React from "react"

const styles = {
    wrapper: `flex flex-col m-[1rem] font-bold items-center `,
    text: ` text-green-500 h-[15rem] pt-[3rem]  text-center `,
    button: `border rounded-full p-[0.5rem] w-1/2 `,
}

const Transferred = ({ setAction }) => {
    return (
        <div>
            <div className={styles.wrapper}>
                <div className={styles.text}> Transfer complete</div>
                <button
                    className={styles.button}
                    onClick={() => {
                        setAction("send")
                    }}
                >
                    Send more funds
                </button>
            </div>
        </div>
    )
}

export default Transferred
