import React from "react"
import { TailSpin } from "react-loader-spinner"

const styles = {
    wrapper: `flex flex-col items-center h-full m-[1rem] `,
    text: `mb-[3rem]`,
}

const Transfarring = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.text}>Transfarring...</div>

            <TailSpin
                height="80"
                width="80"
                radius="1"
                color="#3773f5"
                ariaLabel="three-dots-loading"
                wrapperStyle
                wrapperClass
            />
        </div>
    )
}

export default Transfarring
