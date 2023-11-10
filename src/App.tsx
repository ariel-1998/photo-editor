import { ChangeEvent, useState } from "react";
import SidebarItem from "./components/SidebarItem";
import Slider from "./components/Slider";
import { DEFAULT_SIDEBAR_OPTIONS } from "./utils/constants";

function App() {
  const [options, setOptions] = useState(DEFAULT_SIDEBAR_OPTIONS);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedOption = options[selectedIndex];

  const handleRangeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setOptions((prevOptions) => {
      prevOptions[selectedIndex].value = +value;
      return [...prevOptions];
    });
  };

  const setImageStyle = () => {
    const filters = options.map((option) => {
      return `${option.property}(${option.value}${option.unit})`;
    });

    return { filter: filters.join(" ") };
  };

  console.log(setImageStyle());
  return (
    <div className="container">
      <div className="main-img" style={setImageStyle()} />
      <div className="sidebar">
        {options.map((option, index) => (
          <SidebarItem
            key={index}
            name={option.name}
            onClick={() => setSelectedIndex(index)}
            isActive={index === selectedIndex}
          />
        ))}
      </div>

      <Slider
        min={selectedOption.range.min}
        max={selectedOption.range.max}
        value={selectedOption.value}
        onChange={handleRangeChange}
      />
    </div>
  );
}

export default App;
