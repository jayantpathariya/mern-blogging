import { InputHTMLAttributes, createElement, useState } from "react";
import { Eye, EyeOff, icons } from "lucide-react";

import styles from "./input.module.css";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: keyof typeof icons;
};

const Input = ({ icon, ...props }: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  function toggleShowPassword() {
    setShowPassword((prev) => !prev);
  }

  return (
    <div className={styles.inputContainer}>
      {createElement(icons[icon], {
        className: styles.inputIcon,
        size: 18,
      })}
      <input
        {...props}
        className={styles.input}
        type={showPassword ? "text" : props.type}
      />
      {props.type === "password" &&
        (showPassword ? (
          <EyeOff className={styles.leftIcon} onClick={toggleShowPassword} />
        ) : (
          <Eye className={styles.leftIcon} onClick={toggleShowPassword} />
        ))}
    </div>
  );
};

export default Input;
