interface SectionTitleProp {
  message: string;
}
const SectionTitle = ({ message }: SectionTitleProp) => {
  return (
    <div className="flex items-center justify-start w-full gap-4 ">
      <span className="select-none w-full h-[2px] dark:bg-turquoise/80 bg-zeus/80 "></span>
      <div className="text-3xl select-none text-nowrap text-clip bg-clip-text">
        {message}
      </div>
      <span className="select-none w-full h-[2px] dark:bg-turquoise/80 bg-zeus/80"></span>
    </div>
  );
};

export default SectionTitle;
