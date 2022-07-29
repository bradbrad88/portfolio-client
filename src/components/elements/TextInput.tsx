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
    <p className="mt-8 text-2xl">
      <label className="relative block h-fit">
        {area ? (
          <textarea
            value={value}
            name={autocomplete}
            onChange={handleChange}
            onBlur={onBlur}
            placeholder=" "
            autoComplete={autocomplete}
            className={
              (hintDisplay ? "border-b-orange-500" : "border-b-green") +
              " block peer w-full resize-none border-0 border-b-2 focus-visible:border-b-purple focus-visible:outline-none  bg-transparent"
            }
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
            className={
              (hintDisplay ? "border-b-orange-500" : "border-b-green") +
              " peer w-full border-0 border-b-2 border-b-green bg-transparent  focus-visible:outline-none focus:border-b-purple"
            }
          />
        )}
        <span className="absolute left-0 -top-6 text-sm text-[rgba(255,255,255,0.6)] -z-10 transition-all after:content-['...'] peer-placeholder-shown:top-0 peer-placeholder-shown:text-lg peer-focus:-top-6 peer-focus:text-sm">
          {placeholder}
        </span>
      </label>
      {hintDisplay && <span className="text-orange-300">{hintMessage}</span>}
    </p>
  );
};

export default TextInput;
