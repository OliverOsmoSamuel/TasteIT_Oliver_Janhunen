import React from "react";
import * as Icon from "../../utilities/_icons";
import "./Search.scss";

const Search = ({
  className,
  containerStyle,
  errors,
  disabled,
  icon = "icon",
  inputStyle,
  name,
  onChange,
  placeholder = "Search by recipe name",
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
    <div className="search" style={wrapperStyle}>
      <div
        className="search__container"
        onClick={handleClick}
        style={containerStyle}
      >
        {icon && <Icon.Search className="search__icon" type={icon} />}
        <input
          className="search__input"
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
        <div className="search__error">Required!</div>
      )}
    </div>
  );
};

export default Search;
