class FormUtils {
    static validateFloatInput(event, checkAgainst) {
        let floatInputRegex = /[1234567890.]|Backspace|Delete|ArrowRight|ArrowLeft|Tab|Enter/;
        if (!floatInputRegex.test(event.key)) {
            event.preventDefault();
        } else if (event.key === "." && checkAgainst.toString().includes(".")) {
            event.preventDefault();
        }
    }

    static validateIntegerInput(event) {
        let floatInputRegex = /[1234567890]|Backspace|Delete|ArrowRight|ArrowLeft|Tab|Enter/;
        if (!floatInputRegex.test(event.key)) {
            event.preventDefault();
        }
    }
}

export default FormUtils;