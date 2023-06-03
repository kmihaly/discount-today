import { CCallout } from '@coreui/react'

const PasswordRequirements = (): JSX.Element => {
    return (
        <CCallout color="warning">
            <ul>
                <li>8-24 karakter hosszú legyen</li>
                <li>Tartalmazzon kis betűt, nagy betűt, számot, speciális karaktert</li>
                <li>Speciális karakterek: {" "}
                    <span aria-label="exclamation mark">!</span>{" "}
                    <span aria-label="at symbol">@</span>{" "}
                    <span aria-label="hashtag">#</span>{" "}
                    <span aria-label="dollar sign">$</span>{" "}
                    <span aria-label="percent">%</span>
                </li>
            </ul>
        </CCallout>
    )
}

export default PasswordRequirements