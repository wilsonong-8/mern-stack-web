const FormImage = ({ type, name, onChange, labelText,multiple }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        name={name}
        multiple={multiple}
        accept=".jpg,.jpeg,.png"
        onChange={onChange}
        className="form-input"
      />
    </div>
    
  );
};

export default FormImage;
