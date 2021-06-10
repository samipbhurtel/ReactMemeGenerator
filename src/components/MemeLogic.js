import React, { Component } from "react";
import MemeForm from "./MemeForm";

class MemeLogic extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImg: [],
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((respone) => {
        const { memes } = respone.data;
        console.log(memes);
        this.setState({
          allMemeImg: memes,
        });
      });
  }

  onSubmitHandler = (event) => {
    event.preventDefault();

    const randNum = Math.floor(Math.random() * this.state.allMemeImg.length);
    const randImg = this.state.allMemeImg[randNum].url;
    this.setState({
      randomImg: randImg,
    });
  };

  render() {
    return (
      <div>
        <MemeForm
          // topText={this.state.topText}
          // bottomText={this.state.bottomText}
          // Or can use {...this.state}
          {...this.state}
          handleChange={this.handleChange}
          onSubmit={this.onSubmitHandler}
        />
      </div>
    );
  }
}

export default MemeLogic;
