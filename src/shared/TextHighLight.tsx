interface TextHighLightProp {
  message: string;
}

const TextHighLight = ({ message }: TextHighLightProp) => {
  return (
    <span className="inline-block font-semibold cursor-pointer group ">
      {message}
      &nbsp;
      <span className=" max-w-0 block group-hover:max-w-full transition-all duration-700 h-[0.25px] bg-turquoise"></span>
    </span>
  );
};

export default TextHighLight;
