interface Proptypes {
  value: string;
  placeholder: string;
  hintMessage?: string;
  hintDisplay?: boolean;
  type?: string;
  autocomplete?: string;
  area?: boolean;
  onChange: (val: string) => void;
  onBlur: () => void;
}

const TextInput = ({
  value,
  placeholder,
  hintMessage,
  hintDisplay,
  type = "text",
  autocomplete = "",
  area = false,
  onChange,
  onBlur,
}: Proptypes) => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = e => {
    onChange(e.target.value);
  };

  return (
    <p style={{ position: "relative" }}>
      <label>
        {area ? (
          <textarea
            value={value}
            name={autocomplete}
            onChange={handleChange}
            onBlur={onBlur}
            placeholder=" "
            autoComplete={autocomplete}
            className={hintDisplay ? "error" : ""}
          ></textarea>
        ) : (
          <input
            value={value}
            type={type}
            name={autocomplete}
            onChange={handleChange}
            onBlur={onBlur}
            placeholder=" "
            autoComplete={autocomplete}
            className={hintDisplay ? "error" : ""}
          />
        )}
        <span>{placeholder}</span>
      </label>
      {hintDisplay && <span className="error">{hintMessage}</span>}
    </p>
  );
};

export default TextInput;
