
const Button = ({ title, onClick, className, btnType }) => {
  return (
    <button type={btnType} className={className} onClick={onClick}>
      {title}
    </button>
  );
}

export default Button;
