import React from "react";

const Form = props => {
  return (
    <div>
      <form onSubmit={props.getWeather}>
        <input
          type="text"
          name="city"
          placeholder="City..."
          autoComplete="off"
        />
        <input
          type="text"
          name="country"
          placeholder="Country..."
          autoComplete="off"
        />
        <button>Get Weather</button>
      </form>
    </div>
  );
};

export default Form;
