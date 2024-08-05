function ColorInput({ value, onChange }) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <input type="color" value={value} onChange={handleChange} />
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
}

export default ColorInput;
