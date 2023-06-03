import {
    CAlert,
    CButton,
    CCallout,
    CForm,
    CFormInput,
    CInputGroup,
    CInputGroupText,
} from "@coreui/react";
import { cilLockLocked, cilUser } from "@coreui/icons";
import CIcon from "@coreui/icons-react";

import PasswordRequirements from './PasswordRequirements';
import PasswordStrengthBar from 'react-password-strength-bar';
import apiURL from '../../constants/apiUrl.constant';
import useRegistration from './useRegistration';
import { TextPageContent } from '../../components'
import { axiosPublic } from '../../api/axios';


const USERNAME_REGEX = /^(?=.{4,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const Registration = () => {

    const {
        email,
        emailFocus,
        errorMessage,
        errorRef,
        matchFocus,
        matchPassword,
        password,
        passwordFocus,
        setEmail,
        setEmailFocus,
        setErrorMessage,
        setMatchFocus,
        setMatchPassword,
        setPassword,
        setPasswordFocus,
        setSuccessfulRegistration,
        setUsername,
        setUsernameFocus,
        username,
        usernameFocus,
        usernameRef,
        validEmail,
        validMatch,
        validPassword,
        validUsername
    } = useRegistration({
        EMAIL_REGEX,
        PASSWORD_REGEX,
        USERNAME_REGEX,
    });

    console.log('validUsername: ', validUsername);

    const handleRegistrationButton = async () => {
        const usename_validation = USERNAME_REGEX.test(username);
        const password_validation = PASSWORD_REGEX.test(password);
        const email_validation = EMAIL_REGEX.test(email);

        if (!usename_validation || !password_validation || !email_validation) {
            setErrorMessage("Érvénytelen regisztrációs adatok");
            return;
        }

        try {
            const response = await axiosPublic.post(
                apiURL.register,
                JSON.stringify({ email, password, username }),
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true,
                }
            );
            console.log('response: ', response);

            if (response.status === 201) {
                setSuccessfulRegistration(true);
                setUsername("");
                setPassword("");
                setMatchPassword("");
                return;
            }
            setErrorMessage("Regisztráció sikertelen");
        } catch (err) {
            console.log('err: ', err);
            if (!err?.response) {
                setErrorMessage("A szerver nem válaszol");
            } else if (err.response?.status === 409) {
                setErrorMessage("A felhasználónév foglalt");
            } else {
                setErrorMessage("Regisztráció sikertelen");
            }
            errorRef.current.focus();
        }
    };



    return (
        <TextPageContent title="Regisztráció">
            <>
                <CForm>
                    <p className="text-medium-emphasis">Hozz létre saját fiókot!</p>
                    {errorMessage &&
                        <CAlert aria-live="assertive" color="danger" ref={errorRef}>
                            {errorMessage}
                        </CAlert>
                    }
                    <CInputGroup className="mb-3">
                        <CInputGroupText>
                            <CIcon icon={cilUser} />
                        </CInputGroupText>
                        <CFormInput
                            autoComplete="off"
                            onBlur={() => setUsernameFocus(false)}
                            onChange={(e) => setUsername(e.target.value)}
                            onFocus={() => setUsernameFocus(true)}
                            placeholder="Felhasználónév"
                            ref={usernameRef}
                            required
                            value={username}
                            {...username ? validUsername ? { valid: true } : { invalid: true } : null}
                        />
                    </CInputGroup>
                    {
                        username && usernameFocus && !validUsername &&
                        <CCallout color="warning">
                            <ul>
                                <li>4-20 karakter hosszú legyen</li>
                                <li>Csak kis betűt, nagy betűt és számokat használhatsz</li>
                            </ul>
                        </CCallout>
                    }
                    <CInputGroup className="mb-3">
                        <CInputGroupText>@</CInputGroupText>
                        <CFormInput
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            onBlur={() => setEmailFocus(false)}
                            onFocus={() => setEmailFocus(true)}
                            placeholder="Email"
                            required
                            value={email}
                            {...email ? validEmail ? { valid: true } : { invalid: true } : null}
                        />
                    </CInputGroup>
                    {
                        email && emailFocus && !validEmail &&
                        <CCallout color="warning">
                            Pl. my_email@address.com
                        </CCallout>
                    }
                    <CInputGroup className="mb-3">
                        <CInputGroupText>
                            <CIcon icon={cilLockLocked} />
                        </CInputGroupText>
                        <CFormInput
                            autoComplete="off"
                            onBlur={() => setPasswordFocus(false)}
                            onChange={(e) => setPassword(e.target.value)}
                            onFocus={() => setPasswordFocus(true)}
                            placeholder="Jelszó"
                            required
                            type="password"
                            value={password}
                            {...password ? validPassword ? { valid: true } : { invalid: true } : null}

                        />
                    </CInputGroup>
                    <PasswordStrengthBar
                        minLength={8}
                        password={password}
                        scoreWords={["Nagyon gyenge", "Gyenge", "Közepes", "Erős", "Nagyon erős"]}
                        shortScoreWord="Túl rövid"
                    />
                    {
                        password && passwordFocus && !validPassword &&
                        <PasswordRequirements />
                    }
                    <CInputGroup className="mb-4">
                        <CInputGroupText>
                            <CIcon icon={cilLockLocked} />
                        </CInputGroupText>
                        <CFormInput
                            autoComplete="off"
                            onBlur={() => setMatchFocus(false)}
                            onChange={(e) => setMatchPassword(e.target.value)}
                            onFocus={() => setMatchFocus(true)}
                            placeholder="Jelszó megerősítése"
                            required
                            type="password"
                            value={matchPassword}
                            {...matchPassword ? validMatch ? { valid: true } : { invalid: true } : null}

                        />
                    </CInputGroup>
                    {matchPassword && matchFocus && !validMatch &&
                        <CCallout color="warning">
                            A két jelszónak egyeznie kell
                        </CCallout>
                    }
                </CForm>
                <div className='mb-3'>
                    <CButton color="success text-white" onClick={handleRegistrationButton} >Saját fiók létrehozása</CButton>
                </div>
                <p>
                    A regisztráció után lehetőséged van keresési feltételeket (kedvenceket) beállítani, amik
                    alapján gyorsan tudsz keresni, továbbá hírlevelünkben is a kedvenceidnek megfelelő
                    akciókról, kedvezményekről tájékoztatunk. A regisztrációval vállalod a feliratkozást
                    hírlevelünkre, melyről bármikor leiratkozhatsz.
                </p>
            </>
        </TextPageContent>

    )
}

export default Registration