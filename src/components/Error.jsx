const Error = ({ mensaje }) => {
  return (
    <p className="bg-red-600 text-white p-2 text-center mb-3 font-bold">
      {mensaje}
    </p>
  );
};

export default Error;
