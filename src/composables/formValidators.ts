export function useValidators() {

    const regNames = /[a-zA-Z]+'/;
    // const regTopic
    // const regMessage

    const validateFirstName = (firstName: string): boolean => {
        if (regNames.test(firstName) && firstName.length > 3 && firstName.length < 40) {
            return true;
        }
        return false;
    };

    const validateLastName = (lastName: string): boolean => {
        if (regNames.test(lastName) && lastName.length > 3 && lastName.length < 40) {
            return true;
        }
        return false;
    };

    const validateTopic = (topic: string): boolean => {
        return false
    };

    const validateMessage = (message: string): boolean => {
        return false
    };

    const validateHoney = (honey: string|undefined): boolean => {
        if (honey === undefined) {
            return true;
        }
        return false;
    };

    return {
        validateFirstName,
        validateLastName,
        validateTopic,
        validateMessage,
        validateHoney
    }
}