export default function OtpInputCompoent({
  size = 6,
  value = "",
  validationPattern = /[0-9]{1}/,
  onChange,
  className,
}) {
  const arr = new Array(size).fill("-");

  const handleInputChange = (e, index) => {
    const elem = e.target;
    const val = e.target.value;
    // check if the value is valid
    if (!validationPattern.test(val) && val !== "") return;

    // change the value of the upper state using onChange
    const valueArr = value.split("");
    valueArr[index] = val;
    const newVal = valueArr.join("").slice(0, 6);
    onChange(newVal);

    //focus the next element if there's a value
    if (val) {
      const next = elem.nextElementSibling;
      next?.focus();
    }
  };
  const handleKeyUp = (e) => {
    const current = e.currentTarget;
    if (e.key === "ArrowLeft" || e.key === "Backspace") {
      const prev = current.previousElementSibling;
      prev?.focus();
      prev?.setSelectionRange(0, 1);
      return;
    }

    if (e.key === "ArrowRight") {
      const prev = current.nextSibling;
      prev?.focus();
      prev?.setSelectionRange(0, 1);
      return;
    }
  };
  const handlePaste = (e) => {
    e.preventDefault();
    const val = e.clipboardData.getData("text").substring(0, size);
    onChange(val);
  };
  return (
    <div className="flex gap-2 w-full justify-center">
      {arr.map((_, index) => {
        return (
          <input
            key={index}
            onPaste={handlePaste}
            className={
              className ||
              `input input-bordered px-0 text-center w-14 h-14 focus:border-2`
            }
            onChange={(e) => handleInputChange(e, index)}
            onKeyUp={handleKeyUp}
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            pattern={validationPattern.source}
            maxLength={6}
            value={value.at(index) ?? ""}
          />
        );
      })}
    </div>
  );
}
