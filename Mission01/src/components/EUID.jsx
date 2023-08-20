import EUID from '../assets/EUID.svg';

function EUIDButton() {
return(
    <button
        type="button" className="EUID">
        <img src={EUID} alt="이듬" />
    </button>
    )
}

export default EUIDButton;