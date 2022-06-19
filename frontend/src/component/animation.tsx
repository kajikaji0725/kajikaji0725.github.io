import { useEffect } from 'react';
import '../assets/style/animation.scss';

export const Animation = () => {

    document.onanimationend = () => {
        console.log("終了");
    };

    useEffect(() => {

    })

    return (
        <div>
            <ul className="leaf">
                <li></li>
            </ul>
        </div>
    )
}