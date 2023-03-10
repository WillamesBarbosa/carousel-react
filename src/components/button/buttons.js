import P from 'prop-types';
import './style.css';

function Button({ text, onClick }) {
  return (
    <button onClick={onClick} className="buttons">
      {text}
    </button>
  );
}

Button.propTypes = {
  text: P.string.isRequired,
  onClick: P.func.isRequired,
};

export default Button;
