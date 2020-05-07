import React, { Component, createRef } from "react";

import landingPage from "json/landingPage.json";
import Header from "parts/Header";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
import Categories from "parts/Categories";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = createRef();
  }

  showMostPicked() {
    window.scrollTo({
      top: 444,
      behavior: "smooth",
    });
  }
  render() {
    return (
      <>
        <Header {...this.props} />
        <Hero showMostPicked={this.showMostPicked} data={landingPage.hero} />
        <MostPicked ref={this.refMostPicked} data={landingPage.mostPicked} />
        <Categories data={landingPage.categories} />
      </>
    );
  }
}

export default LandingPage;
