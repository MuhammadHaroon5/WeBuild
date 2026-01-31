import React from "react";

function Contact() {
  return (
    <div className="w-full px-5 py-40 lg:px-32">
      <h3 className="py-1 my-5 text-2xl font-bold tracking-wide border-l-4 border-yellow-600 md:border-l-8 ps-2 sm:text-3xl md:text-4xl md:tracking-wider lg:ps-7">
        Contact
      </h3>
      <div className="container mt-3 bg-sucess">
        <div className="d-flex colaqua">
          <div className="d-flex flex-column align-items-center justify-content-between">
            <div className="d-flex">
              <div className="p-4 contact d-flex flex-column justify-content-center align-items-center">
                <div className="contact-logo-wrapper">
                  <img className="w-10" src="./icons/contact (1).png" alt="" />
                </div>
                <h5 className="mt-1 hfont contact-heading ">Phone Number</h5>
                <p className="t-font contact-sub-heading">+923169761638</p>
                <p className="t-font contact-sub-heading">+923169761638</p>
              </div>
              {/*  */}
              <div className="p-4 contact d-flex flex-column justify-content-center align-items-center">
                <div className="contact-logo-wrapper">
                  <img className="w-10" src="./icons/contact (2).png" alt="" />
                </div>
                <h5 className="mt-1 hfont contact-heading ">Email Address</h5>
                <p className="t-font contact-sub-heading">haroobrf@gmail.com</p>
                <p className="t-font contact-sub-heading">xyz123@gmail.com</p>
              </div>
            </div>
            {/*  */}
            <div className="d-flex justify-content-center">
              <div className="p-4 contact d-flex flex-column justify-content-center align-items-center">
                <div className="contact-logo-wrapper">
                  <img className="w-10" src="./icons/contact (3).png" alt="" />
                </div>
                <h5 className="mt-1 hfont contact-heading ">Office Address</h5>
                <p className="t-font contact-sub-heading">
                  Peshawar, pakistan - 5000115
                </p>
                <p className="hidden t-font contact-sub-heading">h</p>
              </div>
              <div className="p-4 contact d-flex flex-column justify-content-center align-items-center">
                <div className="contact-logo-wrapper">
                  <img className="w-10" src="./icons/contact (3).png" alt="" />
                </div>
                <h5 className="mt-1 hfont contact-heading ">Follow Us</h5>
                <p className="t-font contact-sub-heading">
                  <span className="followWrapper">
                    <img
                      className="w-10"
                      src="./icons/followus (1).png"
                      alt="f"
                    />
                  </span>
                  <span className="followWrapper">
                    <img
                      className="w-10"
                      src="./icons/followus (2).png"
                      alt="in"
                    />
                  </span>
                </p>
                <p className="t-font contact-sub-heading">
                  <span className="followWrapper">
                    <img
                      className="w-10"
                      src="./icons/followus (3).png"
                      alt="i"
                    />
                  </span>
                  <span className="followWrapper">
                    <img
                      className="w-10"
                      src="./icons/followus (4).png"
                      alt="t"
                    />
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="touchBg d-flex flex-column align-items-start justify-content-between">
            <h5 className="text-white hfont contact-main-heading mauto">
              Get In Touch
            </h5>
            <input className="contact-input" placeholder="Name" type="text" />
            <input className="contact-input" placeholder="Email" type="text" />
            <input className="contact-input" placeholder="Phone" type="text" />
            <textarea
              className="contact-input area"
              placeholder="Message"
            ></textarea>
            <button className="mt-3 mybutton mauto">Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
