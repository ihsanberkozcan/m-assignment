import { useState } from "react";

import ScreenSize from "./components/ScreenSize";
import LanguageFilter from "./components/LanguageFilter";

import data from "../data/data.json";
import "./App.css";

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const screenSizeArray = ["4", "4.7", "5.5", "5.8", "6.1", "6.5", "6.7"];

  const renderScreenShoot = (size, selectedLanguage) => {
    let mySize = "";

    size = parseFloat(size);

    if (
      size >= 5.5 &&
      data[selectedLanguage][size] === undefined &&
      data[selectedLanguage][6.5] !== undefined
    ) {
      mySize = "6.5";
    } else if (
      size >= 5.5 &&
      data[selectedLanguage][size] === undefined &&
      data[selectedLanguage][6.5] === undefined &&
      data.English[size] !== undefined
    ) {
      mySize = size.toString();
      selectedLanguage = "English";
    } else if (
      size >= 5.5 &&
      data[selectedLanguage][size] === undefined &&
      data[selectedLanguage][6.5] === undefined &&
      data.English[size] === undefined &&
      data.English["6.5"]
    ) {
      mySize = "6.5";
      selectedLanguage = "English";
    } else if (
      size < 5.5 &&
      data[selectedLanguage][size] === undefined &&
      data[selectedLanguage]["5.5"]
    ) {
      mySize = "5.5";
    } else if (
      data[selectedLanguage][size] === undefined &&
      data.English[size] !== undefined
    ) {
      mySize = size.toString();
      selectedLanguage = "English";
    } else if (data[selectedLanguage][size] !== undefined) {
      mySize = size.toString();
    }

    return data[selectedLanguage][mySize];
  };

  const ErrorMessage = (size) => {
    if (
      size >= 5.5 &&
      data[selectedLanguage][size] === undefined &&
      data[selectedLanguage][6.5] !== undefined
    ) {
      return "There are no " + size + " screenshots. For this reason, 6.5 screenshots are shown.";
    } else if (
      size >= 5.5 &&
      data[selectedLanguage][size] === undefined &&
      data[selectedLanguage][6.5] === undefined &&
      data.English[size] !== undefined
    ) {
      return (
        "There are no " +
        selectedLanguage +
        " " +
        size +
        " screenshots. For this reason, " +
        size +
        " English screenshots are shown."
      );
    } else if (
      size >= 5.5 &&
      data[selectedLanguage][size] === undefined &&
      data[selectedLanguage][6.5] === undefined &&
      data.English[size] === undefined &&
      data.English["6.5"]
    ) {
      return (
        "There are no " +
        selectedLanguage +
        " " +
        size +
        " screenshots. For this reason, 6.5 English screenshots are shown."
      );
    } else if (
      size < 5.5 &&
      data[selectedLanguage][size] === undefined &&
      data[selectedLanguage]["5.5"]
    ) {
      return "There are no " + size + " screenshots. For this reason, 5.5 screenshots are shown.";
    } else if (
      data[selectedLanguage][size] === undefined &&
      data.English[size] !== undefined
    ) {
      return (
        "There are no " +
        size +
        " screenshots. For this reason, " +
        size +
        " English screenshots shown."
      );
    } else if (data[selectedLanguage][size]) {
      return "";
    } else {
      return "No screenshots";
    }
  };

  return (
    <div className="container">
      <LanguageFilter setSelectedLanguage={setSelectedLanguage} />
      {screenSizeArray.map((size, index) => (
        <>
          <ScreenSize
            key={index}
            errorMessage={ErrorMessage(size)}
            screensizetitle={size}
            imagePaths={renderScreenShoot(size, selectedLanguage)}
          />
        </>
      ))}
    </div>
  );
}

export default App;
