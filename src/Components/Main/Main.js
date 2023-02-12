import React from 'react'
import styles from './Main.module.css'
import one from './../../Assets/one.svg'
import two from './../../Assets/two.svg'

function Main() {
    return (
        <>
            <div className={styles.Main}>

                <div className={styles.subMain}>
                    <h3>Patient Module</h3>
                    <h1><span>Lungs</span> Tumor Detection</h1>
                    <div className={styles.upload}>
                        <p>Please Select Patient Image</p>
                        <div className={styles.all} >
                            <img className={styles.one} src={one} />
                            <div className={styles.file}>
                                <label htmlFor="image">Insert Image</label>
                                <input id='image' type='file' />
                            </div>
                            <img className={styles.two} src={two} />
                        </div>
                        <button>Submit</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Main