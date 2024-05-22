const Title = ({ title, text }) => {
  return (
    <div className="py-2 pb-4 md:px-16 max-w-5xl mx-auto">
      <p className="text-4xl font-semibold text-center my-8 uppercase">
        {title}
      </p>
      <p className="text-zinc-700 text-lg text-center">{text}</p>
    </div>
  );
};
export default Title;
