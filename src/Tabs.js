import React, { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import emailjs from "emailjs-com";
import "./App.css";

const Tabs = () => {
  const [toggleState, setToggleState] = useState(1);
  const componentRef1 = useRef(null);
  const componentRef2 = useRef(null);
  const componentRef3 = useRef(null);

  const handlePrint1 = useReactToPrint({
    content: () => componentRef1.current,
    removeAfterPrint: true,
  });

  const handlePrint2 = useReactToPrint({
    content: () => componentRef2.current,
    removeAfterPrint: true,
  });

  const handlePrint3 = useReactToPrint({
    content: () => componentRef3.current,
    removeAfterPrint: true,
  });

  const toggleTab = (index) => {
    setToggleState(index);
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1pj9ao4",
        "template_2yo1unx",
        e.target,
        "user_JgocXP91CtgoU6nfxqQDm"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  }

  return (
    <>
      <h1>Analysis Dashboard</h1>
      <div className="container">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Tab 1
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Tab 2
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            Tab 3
          </button>
        </div>
        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <button className="btn" onClick={handlePrint1}>
              Print this out! 🖨️
            </button>
            <form onSubmit={sendEmail} className="frm">
              <input type="text" name="user_name" />
              <label>Share as Email</label>
              <input type="submit" value="Send" />
            </form>
            <hr />
            <img
              className="chart"
              ref={componentRef1}
              src="https://chartio.com/assets/dfd59f/tutorials/charts/grouped-bar-charts/c1fde6017511bbef7ba9bb245a113c07f8ff32173a7c0d742a4e1eac1930a3c5/grouped-bar-example-1.png"
              alt=""
            />
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <button className="btn" onClick={handlePrint2}>
              Print this out! 🖨️
            </button>
            <form onSubmit={sendEmail} className="frm">
              <input type="text" name="user_name" />
              <label>Share as Email</label>
              <input type="submit" value="Send" />
            </form>
            <hr />
            <img
              className="chart"
              ref={componentRef2}
              src="https://docs.mongodb.com/charts/master/images/charts/stacked-bar-chart-reference-small.png"
              alt=""
            />
          </div>

          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <button className="btn" onClick={handlePrint3}>
              Print this out! 🖨️
            </button>
            <form onSubmit={sendEmail} className="frm">
              <input type="text" name="user_name" className="emailfld" />
              <label>Share as Email</label>
              <input type="submit" value="Send" />
            </form>
            <hr />
            <img
              className="chart"
              ref={componentRef3}
              src="https://miro.medium.com/max/894/1*rYL8vrj-G8xJkzkqpQB1ow.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
