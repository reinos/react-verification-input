export interface VerificationInputProps {
  value?: string;
  length?: number;
  validChars?: string;
  placeholder?: string;
  autoFocus?: boolean;
  inputProps?: object;
  containerProps?: object;
  classNames?: {
    container?: string;
    character?: string;
    characterInactive?: string;
    characterSelected?: string;
  };
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

declare const VerificationInput: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<VerificationInputProps> &
    React.RefAttributes<HTMLInputElement>
>;
export default VerificationInput;
