import {useState} from "react";

type Props = {
    percentage: number;

}
export const ProgressBars = ({percentage}: Props) => {

    const styles = `h-1 bg-green-300`;
    return (
        <div className={styles} style={{'width':`${percentage}%`}}></div>
    )

}