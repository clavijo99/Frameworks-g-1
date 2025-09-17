import { useState } from "react";

export default function InpuntCustom({ isPassword }) {


    const [showPassword, setShowPAssword] = useState(false)

    return (
        <div className="flex border rounded">
            <input type={isPassword ? showPassword ? 'text' : 'password' : 'text'} />
            {isPassword && <div onClick={() => setShowPAssword((v) => !v)}>
                {showPassword ? '🙈' : '👀'}
            </div>}
        </div>
    )

}