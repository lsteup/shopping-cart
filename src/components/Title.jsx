const Title = ({ title, text }) => {
  return (
    <div className="py-2 pb-4">
      <p className="text-4xl font-semibold text-center mb-4">{title}</p>
      <p className="text-zinc-600">{text}</p>
    </div>
  );
};
export default Title;
