import "react";

// eslint-disable-next-line react/prop-types
function ProdactCard({ title, description, price, category, image }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-[#a98274]">
      {image && <img src={image} alt={title} className="w-full h-81 object-cover" />}
      <div className="p-4">
        <h3 className="text-[#6a1b1a] text-lg font-bold">{title || "No Title"}</h3>
        <p className="text-[#6a1b1a] text-sm">{description || "No Description"}</p>
        <p className="text-[#6a1b1a] font-semibold mt-2">${price || "0.00"}</p>
        <p className="text-[#a98274] text-xs">Category: {category || "No Category"}</p>
      </div>
    </div>
  );
}

export default ProdactCard;
