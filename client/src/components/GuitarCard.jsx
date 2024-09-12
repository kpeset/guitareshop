/* eslint-disable react/prop-types */
export default function GuitarCard({ guitar }) {
  return (
    <div className="guitar_card">
      <h2>{guitar.name}</h2>
      <h5>{guitar.type_name}</h5>
      <img
        alt={guitar.name}
        src={`${import.meta.env.VITE_API_URL}/uploads${guitar.image}`}
      />
      <h4>{guitar.price} euros</h4>
      <p>{guitar.description}</p>
    </div>
  );
}
