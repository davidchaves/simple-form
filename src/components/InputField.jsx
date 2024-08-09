const InputField = ({ label, name, type, value, onChange, placeholder, minlength }) => (
  <>
    <label>
      {label}:
      <br />
      <input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        minLength={minlength}
        required
      />
      <br />
    </label>
  </>
);
export default InputField;
