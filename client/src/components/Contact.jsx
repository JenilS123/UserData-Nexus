import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Contact = () => {
  const [subject, setSubject] = useState("")
  const [textArea,setTextArea] = useState("")
  const [redirect, setRedirect] = useState(false);
  const [name, setName] = useState("");
  const [emails, setEmails] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post("http://localhost:8000/contact", {
        name,
        emails,
        subject,
        textArea,
      });
      if (data.status === 202) {
        alert("please send different data")
      } else {
        alert("message send successfully");
        setSubject("");
        setTextArea("");
      }
      
    } catch (error) {
      console.log("Contact submit Error : " + error);
      alert("message not send");
    }
  };

  useEffect(() => {
    try {
      axios
        .get("http://localhost:8000/contact")
        .then(({ data }) => {
          setName(data.names);
          setEmails(data.email);
        })
        .catch((error) => {
          if (error.response.status === 400) {
            console.log("contact fetch error ", error);
            setRedirect(true);
          }
        });
    } catch (error) {
      console.log("contact error " + error);
      setRedirect(true);
    }
  }, []);

  if (redirect) {
    return <Navigate to="/login"/>
  }

  return (
    <>
      <section className="section section-contact">
        <div className="container">
          <h2 className="common-heading">Contact Us</h2>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777314.7564005037!2d68.68518965454659!3d22.399501091967064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959051f5f0ef795%3A0x861bd887ed54522e!2sGujarat!5e0!3m2!1sen!2sin!4v1693714654447!5m2!1sen!2sin"
          title="map"
          width="100%"
          height="450"
          className="map"
          styles={{ border: "0" }}
          loading="lazy"
        ></iframe>

        <div className="section-contact-main contact-container">
          <form method="post">
            <div className="grid grid-two-column">
              <div>
                <label htmlFor="userName"></label>
                <input
                  type="text"
                  name="userName"
                  id="userName"
                  defaultValue={name}
                  placeholder="Name"
                />
              </div>
              <div>
                <label htmlFor="email"></label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  defaultValue={emails}
                  placeholder="abc@gmail.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject"></label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
                value={subject}
                onChange={(e)=>setSubject(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="textArea"></label>
              <textarea
                name="textArea"
                id="textArea"
                cols="30"
                rows="10"
                placeholder="Message"
                value={textArea}
                onChange={(e)=>setTextArea(e.target.value)}
              ></textarea>
            </div>
            <input
              type="submit"
              name="submit"
              className="btn"
              id="submit"
              value="send message"
              onClick={submit}
            />
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
