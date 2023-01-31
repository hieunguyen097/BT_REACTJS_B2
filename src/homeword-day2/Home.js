import React, { Component } from "react";

import "./Home.css";

export default class home extends Component {
  productGlasses = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  state = {
    name: "GUCCI G8850U",
    url: "./glassesImage/v1.png",
  };

  changeGlasses = (name, url) => {
    this.setState({
      name: name,
      url: url,
    });
  };

  render() {
    let { url, name } = this.state;
    return (
      <div className="bg">
        <div className="title">
          <h1> TRY GLASSES APP ONLINE</h1>.
        </div>
        <div className="content">
          <div className="img-left">
            <div>
              <img src="./glassesImage/model.jpg" className="img-model"></img>
              <div className="content-glasses">
                <img src={url} alt="1"></img>
              </div>
              <div className="glasses-info">
                <h3>{name}</h3>
                <p>
                  Light pink square lenses define these sunglasses, ending with
                  amother of pearl effect tip.
                </p>
              </div>
            </div>
          </div>
          <div className="img-right">
            <img src="./glassesImage/model.jpg" className="img-model"></img>
          </div>
        </div>

        <div className="glasses">
          <img
            src="./glassesImage/g1.jpg"
            onClick={() => {
              this.changeGlasses(
                "GUCCI G8850U",
                "./glassesImage/v1.png",
                "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
              );
            }}
          ></img>
          <img
            src="./glassesImage/g2.jpg"
            onClick={() => {
              this.changeGlasses(
                "GUCCI G8759H",
                "./glassesImage/v2.png",
                "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
              );
            }}
          ></img>
          <img
            src="./glassesImage/g3.jpg"
            onClick={() => {
              this.changeGlasses("DIOR D6700HQ", "./glassesImage/v3.png");
            }}
          ></img>
          <img
            src="./glassesImage/g4.jpg"
            onClick={() => {
              this.changeGlasses("DIOR D6005U", "./glassesImage/v4.png");
            }}
          ></img>
          <img
            src="./glassesImage/g5.jpg"
            onClick={() => {
              this.changeGlasses("PRADA P8750", "./glassesImage/v5.png");
            }}
          ></img>
          <img
            src="./glassesImage/g6.jpg"
            onClick={() => {
              this.changeGlasses("PRADA P9700", "./glassesImage/v6.png");
            }}
          ></img>
          <img
            src="./glassesImage/g7.jpg"
            onClick={() => {
              this.changeGlasses("FENDI F8750", "./glassesImage/v7.png");
            }}
          ></img>
          <img
            src="./glassesImage/g8.jpg"
            onClick={() => {
              this.changeGlasses("FENDI F8500", "./glassesImage/v8.png");
            }}
          ></img>
          <img
            src="./glassesImage/g9.jpg"
            onClick={() => {
              this.changeGlasses("FENDI F4300", "./glassesImage/v9.png");
            }}
          ></img>
        </div>
      </div>
    );
  }
}
