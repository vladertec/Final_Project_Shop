import PropTypes from "prop-types";

export default function CustomDropList({
  name,
  arr,
  register,
  camelizeDecode,
}) {
  return (
    <>
      <select {...register(name)} className="form__droplist">
        {arr.map((data) => (
          <option
            key={Math.random()}
            value={data}
            disabled={arr[0] === data && true}
          >
            {camelizeDecode(data)}
          </option>
        ))}
      </select>
    </>
  );
}

CustomDropList.propTypes = {
  name: PropTypes.string,
  arr: PropTypes.array,
  register: PropTypes.func,
  camelizeDecode: PropTypes.func,
};
