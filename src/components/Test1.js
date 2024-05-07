import React, { useState, useEffect } from "react";
import priceImg2 from "../assets/img/price-2.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

export function Test1() {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-5">
            <div className="section-title mb-4">
              <h5 className="position-relative d-inline-block text-primary text-uppercase">
                Pricing Plan
              </h5>
              <h1 className="display-5 mb-0">pricingContent.title</h1>
            </div>
            <p className="mb-4">pricingContent.descriptio</p>
            <h5 className="text-uppercase text-primary">
              Call for Appointment
            </h5>
            <h1>ricingContent.contactNumber</h1>
          </div>

          <div className="col-lg-7">
            <OwlCarousel
              className="owl-theme price-carousel"
              items="2"
              autoplay={true}
              loop
              smartSpeed="1500"
              nav={true}
              autoplayHoverPause
              navText={[
                `<i class="bi bi-arrow-left"></i>`,
                `<i class="bi bi-arrow-right"></i>`,
              ]}
              responsive={{
                0: {
                  items: 1,
                },
                768: {
                  items: 2,
                },
              }}
            >
              <div className="item me-3 ms-3 mb-4">
                <div className="position-relative">
                  <img
                    className="img-fluid rounded-top"
                    src={priceImg2}
                    alt=""
                  />
                  <div
                    className="d-flex align-items-center justify-content-center bg-light rounded pt-2 px-3 position-absolute top-100 start-50 translate-middle"
                    style={{ zIndex: 2 }}
                  >
                    <h2 className="text-primary m-0">plan.Price</h2>
                  </div>
                </div>
                <div className="position-relative text-center bg-light border-bottom border-primary py-5 p-4">
                  <h4>plan.Title</h4>
                  <hr className="text-primary w-50 mx-auto mt-0" />

                  <div className="d-flex justify-content-between mb-3">
                    <span>benefit.Benefit</span>
                    <i className="fa fa-check text-primary pt-1" />
                  </div>

                  <a
                    href="appointment.html"
                    className="btn btn-primary py-2 px-4 position-absolute top-100 start-50 translate-middle"
                  >
                    Appointment
                  </a>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
}