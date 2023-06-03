import { useEffect, useRef, useState } from 'react'

interface UseRegistrationProps {
  EMAIL_REGEX: RegExp,
  PASSWORD_REGEX: RegExp,
  USERNAME_REGEX: RegExp,
}

const useRegistration = ({
  EMAIL_REGEX,
  PASSWORD_REGEX,
  USERNAME_REGEX,
}: UseRegistrationProps) => {

  const [email, setEmail] = useState<string>("");
  const [emailFocus, setEmailFocus] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [matchFocus, setMatchFocus] = useState<boolean>(false);
  const [matchPassword, setMatchPassword] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordFocus, setPasswordFocus] = useState<boolean>(false);
  const [successfulRegistration, setSuccessfulRegistration] = useState<boolean>(false);
  const [usernameFocus, setUsernameFocus] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [validEmail, setValidEmail] = useState<boolean>(false);
  const [validMatch, setValidMatch] = useState<boolean>(false);
  const [validUsername, setValidUsername] = useState<boolean>(false);
  const [validPassword, setValidPassword] = useState<boolean>(false);
  const errorRef = useRef<any>(null);
  const usernameRef = useRef<any>(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  useEffect(() => {
    setValidUsername(USERNAME_REGEX.test(username));
  }, [username]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email))
  }, [email])
  

  useEffect(() => {
    setValidPassword(PASSWORD_REGEX.test(password));
    setValidMatch(password === matchPassword);
  }, [password, matchPassword]);

  useEffect(() => {
    setErrorMessage("");
  }, [email, username, password, matchPassword]);

  return ({
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
  })
}

export default useRegistration;