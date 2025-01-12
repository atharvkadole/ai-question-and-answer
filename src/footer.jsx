import './footer.css'
import { useState } from 'react'
export default function Footer({ getquery }) {
    const [quary, setQuary] = useState("")
    const handlesubmit = (e) => {
        console.log(e.key);
        if (e.key === "Enter") {
            getquery(quary);
        }
    }
    return (
        <>
        <footer>
            <input type="text" onKeyDown={handlesubmit} onChange={(e) =>  setQuary(e.target.value) } value={quary} placeholder="Enter your quary" className="footer-input" id="footer-input" name="footer-input" required autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" autoFocus />
            <button  onClick={() => { getquery(quary) }    } type="submit" className="footer-button" id="footer-button" name="footer-button">Search</button>
        </footer>
        </>
    )
}