export const Fieldset = ({ name, nameSection, register, required, count }) => {
    return (
        <fieldset>
            <div>
                <legend>{nameSection}</legend>
            </div>
            {[...Array(count)].map((_, index) => (
                <label key={index}>{index + 1}+
                    <input type="radio" name={name} value={index + 1} {...register(name, { required: required })} />
                </label>
            ))}

        </fieldset>
    )
}

