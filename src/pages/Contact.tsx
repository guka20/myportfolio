import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Footer } from "../components/Footer";
type GuestDataTypes = {
  name: string;
  email: string;
  message: string;
};
type FocusedDataTypes = {
  name: boolean;
  email: boolean;
  message: boolean;
};
type HandleInput = {
  target: {
    value: string;
    name: string;
  };
};
const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const Contact = () => {
  const [isFocused, setIsFocused] = useState<FocusedDataTypes>({
    name: false,
    email: false,
    message: false,
  } as FocusedDataTypes);
  const notifySuccess = () =>
    toast.success("Message sent successfully!", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const notifyError = () => {
    toast.error("Message did not send!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const [guestData, setGuestData] = useState<GuestDataTypes>({
    name: "",
    email: "",
    message: "",
  } as GuestDataTypes);

  const [isRobot, setIsRobot] = useState<boolean>(false);
  const [isButtonDisable, setIsButtonDisable] = useState<boolean>(false);
  useEffect(() => {
    emailjs.init("user_CqOF2xGmRkJUdquhTgaoK");
  }, []);
  useEffect(() => {
    if (
      isRobot &&
      guestData.name &&
      emailRegex.test(guestData.email) &&
      guestData.message
    ) {
      setIsButtonDisable(true);
    } else setIsButtonDisable(false);
  }, [guestData]);
  const handleInputChanges = (e: HandleInput) => {
    const { value, name } = e.target;
    setGuestData({ ...guestData, [name]: value });
  };
  const sendEmail = () => {
    emailjs
      .send("service_6gh4yaa", "template_58abdzz", guestData)
      .then(function () {
        notifySuccess();
        setTimeout(() => {
          window.location.reload();
        }, 4000);
      })
      .catch(notifyError);
  };
  return (
    <>
      <section className="about_page">
        <ToastContainer />
        <aside className="infromations">
          <h1>Write Me</h1>
          <div className="input-pleace">
            <label>Name*</label>
            <input
              onBlur={() => setIsFocused({ ...isFocused, name: true })}
              className="input"
              placeholder="Name"
              name="name"
              value={guestData.name}
              onChange={handleInputChanges}
            />
            <span
              className="validation"
              style={{
                opacity: !isFocused.name || guestData.name ? 0 : 1,
              }}
            >
              Please input name
            </span>
          </div>
          <div className="input-pleace">
            <label>E-mail*</label>
            <input
              onBlur={() => setIsFocused({ ...isFocused, email: true })}
              className="input"
              name="email"
              placeholder="example@gmail.com"
              value={guestData.email}
              onChange={handleInputChanges}
            />
            <span
              className="validation"
              style={{
                opacity:
                  !isFocused.email ||
                  (guestData.email && emailRegex.test(guestData.email))
                    ? 0
                    : 1,
              }}
            >
              Please input correct email
            </span>
          </div>
          <div className="verification">Verification</div>
          <div className="not-robot">
            <input
              type="checkbox"
              onClick={(e) => setIsRobot(e.currentTarget.checked)}
            />
            I am not a robot
          </div>
        </aside>
        <main className="message">
          <header className="header">
            <div>Message*</div>
            <span
              className="validation"
              style={{
                opacity: !isFocused.message || guestData.message ? 0 : 1,
              }}
            >
              Please write text
            </span>
          </header>
          <div className="message-pleace">
            <div
              className="message-box"
              contentEditable="true"
              onBlur={() => setIsFocused({ ...isFocused, message: true })}
              data-text="Write text here..."
              onInput={(e) =>
                setGuestData({
                  ...guestData,
                  message: e.currentTarget.outerText,
                })
              }
            />
          </div>
          <button disabled={!isButtonDisable} onClick={sendEmail}>
            SEND MESSAGE
          </button>
        </main>
      </section>
    </>
  );
};
