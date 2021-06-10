import React from "react";

const MemeForm = (props) => {
  return (
    <>
      <div className="textInput ui centered card">
        <form onSubmit={props.onSubmit}>
          <input
            name="topText"
            value={props.topText}
            onChange={props.handleChange}
            placeholder="TOP TEXT"
            autoComplete="off"
          />
          <br />
          <input
            name="bottomText"
            value={props.bottomText}
            onChange={props.handleChange}
            placeholder="BOTTOM TEXT"
            autoComplete="off"
          />
          <br />
          <button>Gen</button>
        </form>
      </div>
      <div className="memeImg ui fluid medium centered image ">
        <h1 className="toptext">{props.topText}</h1>
        <img src={props.randomImg} alt="meme" />
        <h1 className="bottomtext">{props.bottomText}</h1>
      </div>
    </>
  );
};

export default MemeForm;
