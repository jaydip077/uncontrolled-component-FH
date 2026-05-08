import React, { useState } from "react";
// import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    phone: "",
    doctor: "",
    date: "",
    time: "",
    message: "",
  });

  // Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const showToastMessage = () => {
    toast.success("Success Notification !", {
      position: "top-right",
    });
  };

  // Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Swal.fire({
    //   title: "Appointment Booked!",
    //   html: `
    //     <b>Name:</b> ${data.fullname}<br/>
    //     <b>Email:</b> ${data.email}<br/>
    //     <b>Phone:</b> ${data.phone}<br/>
    //     <b>Doctor:</b> ${data.doctor}<br/>
    //     <b>Date:</b> ${data.date}<br/>
    //     <b>Time:</b> ${data.time}
    //   `,
    //   icon: "success",
    //   confirmButtonColor: "#0d6efd",
    // });

    showToastMessage();

    // Reset Form
    setData({
      fullname: "",
      email: "",
      phone: "",
      doctor: "",
      date: "",
      time: "",
      message: "",
    });
  };

  return (
    <>
      <section className="appointment-section">
        <div className="container">
          <div className="row shadow-lg rounded-4 overflow-hidden">
            
            {/* Left Grid Form */}
            <div className="col-lg-6 col-md-12 form-box">
              <h2 className="fw-bold text-primary mb-3">
                Book Doctor Appointment
              </h2>

              <p className="text-muted mb-4">
                Fill the form below and schedule your appointment with our
                specialist doctor.
              </p>
               <ToastContainer />
              <form onSubmit={handleSubmit}>
                
                <div className="mb-3">
                  <input
                    type="text"
                    name="fullname"
                    className="form-control"
                    placeholder="Full Name"
                    value={data.fullname}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email Address"
                    value={data.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="tel"
                    name="phone"
                    className="form-control"
                    placeholder="Phone Number"
                    value={data.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <select
                    name="doctor"
                    className="form-select"
                    value={data.doctor}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Doctor</option>
                    <option>Dr. Smith</option>
                    <option>Dr. John</option>
                    <option>Dr. Emily</option>
                  </select>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input
                      type="date"
                      name="date"
                      className="form-control "
                      value={data.date}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <input
                      type="time"
                      name="time"
                      className="form-control"
                      value={data.time}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <textarea
                    name="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    value={data.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-100 py-2">
                  Book Appointment
                </button>

              </form>
            </div>

            {/* Right Grid Image */}
            <div className="col-lg-6 col-md-12 p-0 image-box">
              <img
                src="https://www.shutterstock.com/image-vector/cute-baby-boy-doctor-costume-600nw-2642592209.jpg"
                alt="Doctor Image"
                className="img-fluid w-100 h-100"
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}