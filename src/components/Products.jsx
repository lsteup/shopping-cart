const Products = ({ num }) => {
  return (
    <div className="italic border-t-2 border-dotted border-zinc-300 border-b-2 py-3 mt-4 text-center text-zinc-600 text-sm">
      {num} results match your search
    </div>
  );
};
export default Products;
