import { useForm } from "react-hook-form";

export const Fieldset = ({ name, nameSection, required, count }) => {
    const { register } = useForm();
    return (
        <fieldset>
            <div>
                <legend>{nameSection}</legend>
            </div>
            {[...Array(count)].map((_, index) => (
                <label key={index}>{index + 1}+
                    <input type="radio" name={name} value={index + 1} {...register(`${name}`, { required: required })} />
                </label>
            ))}

        </fieldset>
    )
}

