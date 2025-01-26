"use client"
import "./styleS.css"
import Image from 'next/image'
import { useEffect, useState } from "react";

export default function SignInPage() {
  const [inputValue, setInputValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    resestInputs()
    setInputValue(event.target.value);
    
  };

  const handlePasswordChange = (event) => {
    resestInputs()
    setPasswordValue(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    resestInputs()
    setCheckboxValue(event.target.checked);
  };

  function resestInputs() {
    document.querySelectorAll(".ds-input--error").forEach((input) => {
      input.classList.remove("ds-input--error");
  });
  document.querySelectorAll(".ds-form-item--error").forEach((input) => {
    // input.classList.remove("ds-form-item--error");
    input.innerHTML = "";
});
  }

  const validateForm = () => {
    const newErrors = {};
    if (!inputValue) {
      newErrors.inputValue = "Please enter the phone number / email address.";
    }
    if (!passwordValue) {
      newErrors.passwordValue = "Please enter the password.";
    }
    if (!checkboxValue) {
      newErrors.checkboxValue = "You must agree to the terms and conditions.";
    }
    return newErrors;
  };


  const handleSubmit = async (e) => {
    console.log('submitting form');
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const response = await fetch('http://localhost:3000/api/auth/signin', {
      
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inputValue, passwordValue }),
    });
    
    const data = await response.json();

    if (response.ok && !data.error) {
      window.location.href = '/playground';
    } else {
      console.log(data.error)
      setErrors({ inputValue: data.error || 'Something went wrong' });  
    }
  };

  useEffect(() => {
    const passwordToggle = document.querySelector(".ds-input__password-toggle");
    if (passwordToggle) {
      passwordToggle.addEventListener("click", () => {
        const passwordInput = document.querySelectorAll(".ds-input__input")[1];
        passwordInput.type = passwordInput.type === "password" ? "text" : "password";
      });
    }

    // Cleanup the event listener when the component is unmounted
    return () => {
      if (passwordToggle) {
        passwordToggle.removeEventListener("click", () => {
          const passwordInput = document.querySelectorAll(".ds-input__input")[1];
          passwordInput.type = passwordInput.type === "password" ? "text" : "password";
        });
      }
    };
  }, []);

  return (
    <div id="root">
      <div className="c994dda2">
        <div className="c279e7ba"></div>
        <div className="ad066d2e">
          <div className="ds-theme" style={{ "--ds-rgb-hover": "245 245 245", "--ds-rgb-primary": "77 107 254", "--ds-button-hover-color": "#2563EB", fontSize: "var(--ds-font-size-m)", lineHeight: "var(--ds-line-height-m)" }}>
            <div className="ds-auth-form-wrapper">
              <div className="ds-sign-up-form__icon">
                <Image
                  src="/images/Zcode.png"
                  alt="Zcode Logo"
                  width={1780}
                  height={565}
                  className="max-w-28"
                />
              </div>
              <div className="ds-sign-up-form__tips">One Zcode account is all you need to access to all Zcode AI services.<br></br>
              Only email registration is supported in your region.</div>
              <form onSubmit={handleSubmit}>
                <div className="ds-form-item ds-form-item--none ds-form-item--label-m">
                  <div className="ds-form-item__content">
                    <div className={`dnInputBg ds-input ds-input--none ds-input--bordered ds-input--l ${errors.inputValue ? 'ds-input--error' : ''}`}>
                      <div className="ds-input__icon">
                        <div className="ds-icon" style={{ fontSize: "1em", width: "1em", height: "1em" }}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g fill="none">
                              <path d="M5.25 4h13.5a3.25 3.25 0 0 1 3.245 3.066L22 7.25v9.5a3.25 3.25 0 0 1-3.066 3.245L18.75 20H5.25a3.25 3.25 0 0 1-3.245-3.066L2 16.75v-9.5a3.25 3.25 0 0 1 3.066-3.245L5.25 4h13.5h-13.5zM20.5 9.373l-8.15 4.29a.75.75 0 0 1-.603.043l-.096-.042L3.5 9.374v7.376a1.75 1.75 0 0 0 1.606 1.744l.144.006h13.5a1.75 1.75 0 0 0 1.744-1.607l.006-.143V9.373zM18.75 5.5H5.25a1.75 1.75 0 0 0-1.744 1.606L3.5 7.25v.429l8.5 4.473l8.5-4.474V7.25a1.75 1.75 0 0 0-1.607-1.744L18.75 5.5z" fill="currentColor"></path>
                            </g>
                          </svg>
                        </div>
                      </div>
                      <input type="text" onChange={handleInputChange} className="ds-input__input" placeholder="Phone number / email address" size="1" />
                    </div>
                  </div>
                  {errors.inputValue && <div className="ds-form-item__feedback ds-form-item--error" data-transform-origin="top">{errors.inputValue}</div>}
                </div>
                <div className="ds-form-item ds-form-item--none ds-form-item--label-m">
                  <div className="ds-form-item__content">
                    <div className={`ds-input ds-input--none ds-input--bordered ds-input--l ${errors.passwordValue ? 'ds-input--error' : ''}`}>
                      <div className="ds-input__icon">
                        <div className="ds-icon" style={{ fontSize: "1em", width: "1em", height: "1em" }}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g fill="none">
                              <path d="M12 2a4 4 0 0 1 4 4v2h1.75A2.25 2.25 0 0 1 20 10.25v9.5A2.25 2.25 0 0 1 17.75 22H6.25A2.25 2.25 0 0 1 4 19.75v-9.5A2.25 2.25 0 0 1 6.25 8H8V6a4 4 0 0 1 4-4zm5.75 7.5H6.25a.75.75 0 0 0-.75.75v9.5c0 .414.336.75.75.75h11.5a.75.75 0 0 0 .75-.75v-9.5a.75.75 0 0 0-.75-.75zm-5.75 4a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3zm0-10A2.5 2.5 0 0 0 9.5 6v2h5V6A2.5 2.5 0 0 0 12 3.5z" fill="currentColor"></path>
                            </g>
                          </svg>
                        </div>
                      </div>
                      <input type="password" onChange={handlePasswordChange} className="ds-input__input" placeholder="Password" size="1" />
                      <div className="ds-input__password-toggle">
                        <div className="ds-icon-button" tabIndex="0">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"></path>
                            <circle cx="256" cy="256" r="80" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"></circle>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  {errors.passwordValue && <div className="ds-form-item__feedback ds-form-item--error" data-transform-origin="top">{errors.passwordValue}</div>}
                </div>
                <div className="ds-form-item ds-form-item--none ds-form-item--label-m">
                  <div className="ds-form-item__content">
                    <div className={`ds-checkbox-wrapper ds-checkbox-wrapper--block ds-checkbox-wrapper--s ${errors.checkboxValue ? 'ds-input--error' : ''}`}>
                      <div className="ds-checkbox-align-wrapper">
                        <input onChange={handleCheckboxChange} style={{ margin: "0 10px 0 0", cursor: "pointer" }} type="checkbox" />
                      </div>
                      <div className="ds-checkbox-label">I confirm that I have read, consent and agree to DeepSeek's <a href="#" target="_blank" rel="noopener noreferrer" className="ds-a ds-a--link">
                        <span aria-hidden="true" tabIndex="-1" style={{ position: "fixed", userSelect: "none", opacity: 0, width: "0px", height: "0px", display: "block" }}></span>Terms of Use </a> and <a href="#" target="_blank" rel="noopener noreferrer" className="ds-a ds-a--link">
                        <span aria-hidden="true" tabIndex="-1" style={{ position: "fixed", userSelect: "none", opacity: 0, width: "0px", height: "0px", display: "block" }}></span>Privacy Policy </a>. </div>
                    </div>
                  </div>
                  {errors.checkboxValue && <div className="ds-form-item__feedback ds-form-item--error" data-transform-origin="top">{errors.checkboxValue}</div>}
                </div>
                <button style={{width:"100%"}} type="submit" className="ds-button ds-button--primary ds-button--filled ds-button--rect ds-button--block ds-button--l ds-sign-up-form__register-button" tabIndex="0">Sign Up</button>
              </form>
              <div className="ds-sign-in-form__form-footer">
                <div role="button" className="ds-button ds-button--primary ds-button--text ds-button--rect ds-button--m" tabIndex="0">Forgot password?</div>
                <a href="./sign_in"><div role="button" className="ds-button ds-button--primary ds-button--text ds-button--rect ds-button--m" tabIndex="0">Sign In</div></a>
              </div>
              <div className="ds-divider" style={{ margin: "16px 0px" }}>
                <div className="ds-divider__left"></div>
                <div className="ds-divider__content">OR</div>
                <div className="ds-divider__right"></div>
              </div>
              <div role="button" className="ds-button ds-button--secondary ds-button--bordered ds-button--rect ds-button--block ds-button--l" tabIndex="0" style={{ marginBottom: "16px" }}>
                <div className="ds-button__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" style={{ width: "16px", height: "16px" }}>
                    <path fill="#4285f4" fillOpacity="1" fillRule="evenodd" stroke="none" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"></path>
                    <path fill="#34a853" fillOpacity="1" fillRule="evenodd" stroke="none" d="M9.003 18c2.43 0 4.467-.806 5.956-2.18l-2.909-2.26c-.806.54-1.836.86-3.047.86-2.344 0-4.328-1.584-5.036-3.711H.96v2.332C2.44 15.983 5.485 18 9.003 18z"></path>
                    <path fill="#fbbc05" fillOpacity="1" fillRule="evenodd" stroke="none" d="M3.964 10.712c-.18-.54-.282-1.117-.282-1.71 0-.593.102-1.17.282-1.71V4.96H.957C.347 6.175 0 7.55 0 9.002c0 1.452.348 2.827.957 4.042l3.007-2.332z"></path>
                    <path fill="#ea4335" fillOpacity="1" fillRule="evenodd" stroke="none" d="M9.003 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.464.891 11.428 0 9.002 0 5.485 0 2.44 2.017.96 4.958L3.967 7.29c.708-2.127 2.692-3.71 5.036-3.71z"></path>
                  </svg>
                </div>Log in with Google
              </div>
              <div role="button" className="ds-button ds-button--secondary ds-button--bordered ds-button--rect ds-button--block ds-button--l" tabIndex="0" style={{ marginBottom: "16px" }}>
                <div className="ds-button__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="96px" height="96px"><path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"/><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"/></svg>
                </div>Log in with Facebook
              </div>
            </div>
          </div>
        </div>
        <div className="cc447402">
          <div className="ds-auth-footer">
            <span className="ds-text ds-text--label2">&nbsp;·&nbsp;</span>
            <a href="#" className="ds-a ds-a--link">
              <span aria-hidden="true" tabIndex="-1" style={{ position: "fixed", userSelect: "none", opacity: 0, width: "0px", height: "0px", display: "block" }}></span>
              <span className="ds-text ds-text--label2">Contact us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}