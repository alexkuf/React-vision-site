const CheckBox = ({ theme, name, label, error, ...rest }) => {
  return (
    <div className="form-group form-check my-3">
      <input
        id={name}
        name={name}
        className={[
          "form-control",
          "form-check-input",
          "mb-1",
          error && "is - invalid",
        ]
          .filter(Boolean)
          .join(" ")}
        {...rest}
        style={{ padding: "1px" }}
      />
      <label htmlFor={name} className="text-start form-check-label">
        {label}
        {rest.required && <span className="text-danger ms-1">*</span>}
      </label>
      <span className="ivalid-feedback text-danger mb-5">{error}</span>
    </div>
  );
};

export default CheckBox;
