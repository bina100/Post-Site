import { ChangeEvent, useEffect, useState } from "react";
import { FC } from "react";
import { TextcellWrapper } from "./TextCell.styled";

interface TextCellProps {
  label: { title: string; icon?: string };
  $rows?: number;
  $cols?: number;
  text?: string;
  onChange: (inputValue: string) => void;
  disable?: boolean;
  placeholder?: string;
  $closeIcon?: boolean;
}
const TextCell: FC<TextCellProps> = ({
  label,
  text,
  disable = false,
  placeholder,
  onChange,
  $rows = 1,
  $cols = 20,
  $closeIcon = false,
}) => {
  const [textCellValue, setTextCellValue] = useState<string>(text ? text : "");
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isChange, setIsChange] = useState<boolean>(false);

  useEffect(() => {
    setTextCellValue(textCellValue);
  }, [textCellValue, onChange]);

  const changeTextAreaValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextCellValue(() => e.target.value);
    setIsChange(true);
    onChange(e.target.value);
  };

  const clearTextCell = () => {
    setIsChange((prevValue) => !prevValue);
    setTextCellValue(() => "");
    onChange("");
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
    }, 100);
  };

  return (
    <TextcellWrapper $rows={$rows} $closeIcon={$closeIcon}>
      <label htmlFor="text-cell">
        {label.icon && (
          <img src={label.icon} className="label-icon" alt="label-icon" />
        )}
        {label.title}
      </label>
      <div className="text-div">
        <textarea
          className="text-cell"
          id="text-cell"
          placeholder={placeholder}
          value={textCellValue}
          rows={$rows}
          cols={$cols}
          onChange={changeTextAreaValue}
          onFocus={() => setIsFocused(true)}
          onBlur={handleBlur}
          disabled={disable}
        />
        {$closeIcon && isChange && isFocused && (
          <img
            className={`x-icon`}
            src="/icons/x.svg"
            alt="x"
            onClick={() => clearTextCell()}
          />
        )}
      </div>
    </TextcellWrapper>
  );
};

export default TextCell;
