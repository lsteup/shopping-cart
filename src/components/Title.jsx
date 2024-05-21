const Title = ({ title, text }) => {
  return (
    <div className="py-2 pb-4 md:px-16 max-w-5xl mx-auto">
      <p className="text-4xl font-semibold text-center mb-4 ">{title}</p>
      <p className="text-zinc-600 text-center">{text}</p>
    </div>
  );
};
export default Title;
