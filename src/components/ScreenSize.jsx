import ScreenShot from "./ScreenShot";
import Alert from "./Alert";

function ScreenSize({ screensizetitle, imagePaths, errorMessage }) {
  return (
    <div className="screensizes">
      <h2 className="screensize-title">IPhone {screensizetitle} Display</h2>
      {errorMessage !== "" ? <Alert errorMessage={errorMessage} /> : null}
      <div className="galery">
        {imagePaths?.map((imagePath, index) => (
          <ScreenShot key={index} imagePath={imagePath} />
        ))}
      </div>
    </div>
  );
}

export default ScreenSize;
