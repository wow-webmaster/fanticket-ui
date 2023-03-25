import { Icon } from "@iconify/react";
import { useState } from "react"

export default function CountChooser({current = 0}){
    const [value, setValue] = useState(current);
    const onPlus=()=>{
        setValue(value +1);
    }
    const onMinus = ()=>{
        setValue(value-1);
    }
    return(
        <div className="flex gap-2 items-center px-2">
            <button className="btn btn-primary bg-primary/30 border-primary/30 hover:bg-primary/50 btn-circle btn-sm" onClick={onMinus}><Icon className = "text-primary" icon = "ic:round-minus"></Icon></button>
            <span className="w-12 text-center">{value}</span>
            <button className="btn btn-primary bg-primary/30 border-primary/30 hover:bg-primary/50 btn-circle btn-sm" onClick={onPlus}><Icon className = "text-primary" icon = "ic:outline-plus"></Icon></button>

        </div>
    )
}