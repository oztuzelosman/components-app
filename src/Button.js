import classnames from "classnames";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) {
  const classes = classnames("flex items-center px-3 py-1.5 border", {
    "bg-blue-500 text-white border-blue-500 ": primary,
    "bg-gray-900 text-white border-gray-900": secondary,
    "bg-green-500 text-white border-green-700 ": success,
    "bg-purple-500 border-purple-500 text-white  ": warning,
    "bg-red-500 text-white border-red-500": danger,
    "rounded-full": rounded,
    "bg-white": outline,
    "text-blue-700": outline && primary,
    "text-gray-700": outline && secondary,
    "text-green-600": outline && success,
    "text-purple-300": outline && warning,
    "text-red-600": outline && danger,
  });
  return <button className={classes}>{children}</button>;
}

Button.propTypes = {
  checkvariationValue: ({ primary, secondary, success, warning, danger }) => {
    const totalVal =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (totalVal > 1) {
      return new Error("only one can be true");
    }
  },
};

export default Button;
