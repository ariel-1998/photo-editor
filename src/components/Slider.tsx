import React from "react";

type SliderProps = {
  min: number;
  max: number;
  value: number;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
};

const Slider: React.FC<SliderProps> = ({ min, max, value, onChange }) => {
  return (
    <div className="slider-container">
      <input
        type="range"
        className="slider"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Slider;
