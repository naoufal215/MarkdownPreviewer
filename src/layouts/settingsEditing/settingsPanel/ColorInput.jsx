import { useDispatch } from "react-redux";
import { updateSettings } from "../../../features/settingsProperties";
import FormRange from "react-bootstrap/esm/FormRange";
import { FormControl } from "react-bootstrap";

export default function ColorInput({inputData}) {
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
        <label for={`${inputData.name}`} class="form-label">
            ${inputData.name}
        </label>
        
        <FormControl
          disabled={!inputData.modifiable}
          type="color"
          className="form-control-color"
          value={inputData.value}
          onChange={handleInput}
          id={`${inputData.name}`}
        />
      </div>
    );
}
