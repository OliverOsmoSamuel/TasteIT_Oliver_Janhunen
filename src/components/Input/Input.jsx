import React from "react";
import "./Input.scss";

const Input = ({
  className,
  containerStyle,
  errors,
  disabled,
  inputStyle,
  name,
  onChange,
  placeholder = "Placeholder",
  readOnly,
  required,
  type,
  value,
  wrapperStyle,
}) => {
  const inputRef = React.useRef(null);

  const handleClick = () => {
    if (inputRef && inputRef.current) inputRef.current.focus();
  };

  return (
    <div className="input" style={wrapperStyle}>
      <div
        className="input__container"
        onClick={handleClick}
        style={containerStyle}
      >
        <input
          className="input__input"
          ref={inputRef}
          aria-label={name}
          data-testid={name}
          tabIndex={0}
          type={type}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
          style={inputStyle}
          disabled={disabled}
          readOnly={readOnly}
        />
      </div>
      {errors && !value && required && (
        <div className="input__error">Required!</div>
      )}
    </div>
  );
};

export default Input;
