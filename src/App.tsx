import { ChangeEvent, useEffect, useState } from "react";
import SidebarItem from "./components/SidebarItem";
import Slider from "./components/Slider";
import { DEFAULT_SIDEBAR_OPTIONS } from "./utils/constants";
import { SelectedImageModel } from "./models/SelectedImageModel";
import { SidebaOptionModel } from "./models/SidebarOptionModel";
import DownloadBtn from "./components/DownloadBtn";
import FileInput from "./components/FileInput";
import { deepCopyingJson } from "./utils/methods";
import defaultImg from "./assets/wallpaer.jpg";

function App() {
  const [options, setOptions] = useState<SidebaOptionModel[]>(
    deepCopyingJson(DEFAULT_SIDEBAR_OPTIONS)
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<SelectedImageModel>({
    url: "",
    name: "",
  });
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

  useEffect(() => {
    setSelectedImage({ url: defaultImg, name: "default" });
  }, []);

  return (
    <div className="container">
      <div
        className="main-img"
        style={{
          ...setImageStyle(),
          backgroundImage: selectedImage.url
            ? `url(${selectedImage.url})`
            : "none",
        }}
      />
      <div className="sidebar">
        {options.map((option, index) => (
          <SidebarItem
            key={index}
            name={option.name}
            onClick={() => setSelectedIndex(index)}
            isActive={index === selectedIndex}
          />
        ))}
        <FileInput
          setOptions={setOptions}
          setSelectedImage={setSelectedImage}
        />
        <DownloadBtn image={selectedImage} filter={setImageStyle().filter} />
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
