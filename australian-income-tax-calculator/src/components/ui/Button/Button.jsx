import './Button.css';

const Button = ({ children, type, variant, onClick }) => (
  <button type={type} className={`btn btn-${variant}`} onClick={onClick}>{children}</button>
);

export default Button;
