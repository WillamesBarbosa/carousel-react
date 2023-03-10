import P from 'prop-types';
import './style.css';

function Img({ src }) {
  return (
    <div className="container-carossel">
      <img src={src} />;
    </div>
  );
}

Img.propTypes = {
  src: P.string.isRequired,
};

export default Img;
