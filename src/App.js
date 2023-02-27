import './App.css';
import Img from './components/img/Img';
import Button from './components/button/buttons';
import img1 from './image/img1.jpg';
import img2 from './image/img2.jpg';
import img3 from './image/img3.webp';
import img4 from './image/img4.jpg';
import { useCallback, useEffect, useState } from 'react';

function App() {
  const imageRangeLimit = 300;
  const incrementRange = 100;
  const [positionCarossel, setPositionCarossel] = useState(0);

  // Function to move to the next image
  const handleNextImage = useCallback(() => {
    positionCarossel <= -imageRangeLimit
      ? setPositionCarossel((p) => p * 0)
      : setPositionCarossel((p) => p - incrementRange);
  }, [positionCarossel]);

  // Function to move to the before image
  const handleBeforeImage = () => {
    positionCarossel >= 0
      ? setPositionCarossel((p) => p - imageRangeLimit)
      : setPositionCarossel((p) => p + incrementRange);
  };

  // useEffect to move to the next image in a 2 seconds loop
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextImage();
    }, 2000);

    return () => clearInterval(interval);
  }, [handleNextImage]);

  return (
    <div className="container-father">
      <Button onClick={handleBeforeImage} text={'<'} />
      <div className="container">
        <div style={{ marginLeft: `${positionCarossel}%` }} className="carossel">
          <Img src={img1} />
          <Img src={img2} />
          <Img src={img3} />
          <Img src={img4} />
        </div>
      </div>
      <Button onClick={handleNextImage} text={'>'} />
    </div>
  );
}

export default App;
