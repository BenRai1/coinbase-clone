import React from "react"

const styles = {
    wrapper: `mt-[1rem] pr-[1rem]`,
    offerCard: `w-[21rem] h-[11rem] border border-[#282b2f] mb-[1rem] p-[1.2rem] flex flex-col rounded-lg`,
    title: `mb-[0.1rem] text-[1.5rem] font-bold `,
    description: `text-[1.1rem]`,
    placeholder: `flex-1`,
    additional: `flex align-itmes-center justify-between font-bold text-[1.1rem]`,
    span: `text-[#8a919e] text-[1rem]`,
}

const Promos = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.offerCard}>
                <div className={styles.title}>Yeald erned</div>
                <div className={styles.description}>Earn up to CO 2.84% APY on your crypto</div>
                <div className={styles.placeholder}></div>
                <div className={styles.additional}>
                    $0.000066 <span className={styles.span}>2,84% APY</span>
                </div>
            </div>
            <div className={styles.offerCard}>
                <div className={styles.title}>Learn and Earn</div>
                <div className={styles.description}>
                    Learn about Crypto and earn Crypto by doing it
                </div>
                <div className={styles.placeholder}></div>
                <div className={styles.additional} style={{ color: "#3773f5" }}>
                    Veryify Identity
                </div>
            </div>
        </div>
    )
}

export default Promos
