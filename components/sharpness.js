import styles from '../styles/Sharpness.module.css';

export default function Sharpness({ top, bottom }) {

    return (
        <div className={styles.sharpnesses}>            
            <svg width={100} height={10}>
                <rect width={top.red} height={15} fill='#8f0b0b' x={0}></rect>
                <rect width={top.orange} height={15} fill='#c43e12' x={top.red}></rect>
                <rect width={top.yellow} height={15} fill='#deb214' x={top.red + top.orange}></rect>
                <rect width={top.green} height={15} fill='#0f750d' x={top.red + top.orange + top.yellow}></rect>
                <rect width={top.blue} height={15} fill='#0d0d75' x={top.red + top.orange + top.yellow + top.green}></rect>
                <rect width={top.white} height={15} fill='#d1d1d1' x={top.red + top.orange + top.yellow + top.green + top.blue}></rect>
                <rect width={top.purple} height={15} fill='#6216a8' x={top.red + top.orange + top.yellow + top.green + top.blue + top.white}></rect>                    
            </svg>    
            <svg width={100} height={10}>
                <rect width={bottom.red} height={15} fill='#8f0b0b' x={0}></rect>
                <rect width={bottom.orange} height={15} fill='#c43e12' x={bottom.red}></rect>
                <rect width={bottom.yellow} height={15} fill='#deb214' x={bottom.red + bottom.orange}></rect>
                <rect width={bottom.green} height={15} fill='#0f750d' x={bottom.red + bottom.orange + bottom.yellow}></rect>
                <rect width={bottom.blue} height={15} fill='#0d0d75' x={bottom.red + bottom.orange + bottom.yellow + bottom.green}></rect>
                <rect width={bottom.white} height={15} fill='#d1d1d1' x={bottom.red + bottom.orange + bottom.yellow + bottom.green + bottom.blue}></rect>
                <rect width={bottom.purple} height={15} fill='#6216a8' x={bottom.red + bottom.orange + bottom.yellow + bottom.green + bottom.blue + bottom.white}></rect>                    
            </svg>                            
        </div>
    )
}