import './index.scss';

const InputComponent = ({ title, placeholder, valueSetter, inputType = 'input', maxLength, disabled = false }) => {
    return (
        <div className="information-filling-item">
            <span className="information-filling-title">{title}</span>
            {inputType === 'textarea'? (
                <textarea
                    className="information-filling-input-big"
                    placeholder={placeholder}
                    maxLength={maxLength}
                    onChange={(e) => valueSetter(e.target.value)}
                    disabled={disabled}
                />
            ) : (
                <input
                    className="information-filling-input"
                    placeholder={placeholder}
                    maxLength={maxLength}
                    onChange={(e) => valueSetter(e.target.value)}
                    disabled={disabled}
                />
            )}
        </div>
    );
};

export default InputComponent;