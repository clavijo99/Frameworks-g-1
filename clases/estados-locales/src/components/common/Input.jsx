import { useState } from "react";

export default function InpuntCustom({isPassword}){


    const [showPassword, setShowPAssword] = useState(false)

    return (
        <div>
            <input type="text" />
            <div>
                { showPassword ? '🙈' : '👀' }
            </div>
        </div>
    )

}