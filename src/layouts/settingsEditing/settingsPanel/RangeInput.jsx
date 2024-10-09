
import { useDispatch } from "react-redux";
import { updateSettings } from "../../../features/settingsProperties";
import FormRange from "react-bootstrap/esm/FormRange";

export default function RangeInput({ inputData }) {
  const dispatch = useDispatch();

  const handleInput = (e) => {
    dispatch(
      updateSettings({
        ...inputData,
        value: e.target.value,
      })
    );
  };

  return (
    <div>
      <label for={`${inputData.name}Range`} className="form-label">
        {inputData.name} : {inputData.value}
      </label>
      <FormRange
        disabled={!inputData.modifiable}
        type="range"
        className="form-range"
        min={inputData.minMax[0]}
        max={inputData.minMax[1]}
        value={inputData.value}
        step="1"
        onChange={handleInput}
        id={`${inputData.name}Range`}
      />
    </div>
  );
}
