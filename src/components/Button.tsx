import ClipLoader from "react-spinners/ClipLoader";
import { ButtonProps } from "./@types/Button";

const Button: React.FC<ButtonProps> = ({
  loading,
  className,
  children,
  loader,
  variant,
  color = "default",
  icon,
  loaderColor,
  loaderSize,
  disabled,
  ...rest
}) => {
  const btnVariant = (variant && `btn-${variant}`) || "";
  const btnColor = (color && `-color-${color}`) || "";
  const props = {
    className: `c-btn btn flex flex:center-all ${btnVariant} ${className} ${btnColor}`,
    disabled: disabled || loading || false,
    ...rest,
  };

  return (
    <button {...props}>
      {loading ? (
        loader || (
          <ClipLoader color={loaderColor || "#fff"} size={loaderSize || 22} />
        )
      ) : icon ? (
        <>
          <span>{children}</span>
          {typeof icon === "string" ? (
            <span className="material-icons">{icon}</span>
          ) : (
            icon
          )}
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
