import { useState } from "react";

interface ButtonProps {
    title: string
    onPress: () => void
    count: number
}
export default function Button(this: any, props: ButtonProps){
    const {title, onPress,count} = props
    
    return(
    <button className="bbutton" type="submit" onClick={onPress} >{title + " " + count}</button>
    );
}
