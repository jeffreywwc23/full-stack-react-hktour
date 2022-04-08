import React, { useState, useEffect } from 'react';
import { useWindowScroll } from 'react-use';
import './ScrollToTop.css';
import { FaCaretUp } from 'react-icons/fa'

export default function ScrollToTop() {
    const { y: pageYOffset } = useWindowScroll();
    const [visible, setVisiblity] = useState(false);

    useEffect(() => {
        if (pageYOffset > 400) {
            setVisiblity(true);
        } else {
            setVisiblity(false);
        }
    }, [pageYOffset])

    if (!visible) {
        return false;
    }

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

    return (
        <div className="scroll-to-top" onClick={scrollToTop}>
            <FaCaretUp className="arrow" />
        </div>
    )
}
