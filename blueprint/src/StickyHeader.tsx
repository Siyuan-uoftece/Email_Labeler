import React, {useState} from "react"

function StickyHeader() {
    const [fixed, setFixed] = useState(false);

    function handleHeaderChange() {
        if (window.scrollY >= 600) {
            setFixed(true)
        } else {
            setFixed(false)
        }
    }
    window.addEventListener("scroll", handleHeaderChange)

    return(
        <div className={fixed ? "sticky-header-two" : "sticky-header"}>
          <p className="sticky-name">MailLabeler</p>
        </div>
    )
}

export default StickyHeader