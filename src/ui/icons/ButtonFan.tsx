const ButtonFan = ({
  fill,
  width = "186",
  height = "187",
  className,
}: {
  fill: string;
  width?: string;
  height?: string;
  className?: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 186 187"
      fill="none"
      role="img"
      aria-label="ButtonFan Icon"
    >
      <title>ButtonFan Icon</title>
      <desc>A visual representation of the ButtonFan Icon</desc>
      <path
        d="M36.7126 21.3666L24.5183 20.3831L20.8792 65.5019L33.0735 66.4854L36.7126 21.3666Z"
        fill={fill}
      />
      <path
        d="M167.336 147.232L122.221 150.868L123.203 163.061L168.319 159.425L167.336 147.232Z"
        fill={fill}
      />
      <path
        d="M119.471 75.4976L110.821 66.8473L81.4101 96.2582L90.0603 104.908L119.471 75.4976Z"
        fill={fill}
      />
    </svg>
  );
};

export default ButtonFan;
