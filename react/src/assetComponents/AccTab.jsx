// eslint-disable-next-line react/prop-types
export default function AccTab({ title, color, jumlah }) {
  return (
    <>
      <h5 className="text-gray-600 font-semibold">{title}</h5>
      <h5 className={`text-${color}-500`}>
        <b>{jumlah}</b>
      </h5>
    </>
  );
}
