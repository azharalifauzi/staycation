import React, { forwardRef } from "react";

import Button from "elements/button/button";

const MostPicked = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="container">
      <h4 className="mb-3">Most Picked</h4>
      <div className="container-grid">
        {props.data.map((item, i) => (
          <div
            key={i}
            className={`item column-4 ${i === 0 ? "row-2" : "row-1"}`}
          >
            <div className="card card-featured">
              <div className="tag">
                ${item.price}
                <span className="font-weight-light">per {item.unit}</span>
              </div>
              <figure className="img-wrapper">
                <img
                  src={require(`../assets/images/most-picked-${i + 1}.jpg`)}
                  alt={item.name}
                  className="img-cover"
                />
              </figure>
              <div className="meta-wrapper">
                <Button
                  type="link"
                  href={`/properties/${item._id}`}
                  className="streched-link d-block text-white"
                >
                  <h5>{item.name}</h5>
                </Button>
                <span>
                  {item.city}, {item.country}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

export default MostPicked;
