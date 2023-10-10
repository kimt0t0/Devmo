export function useValidators() {

    const regNames = /^[\wéêèàùô\-\']+$/;
    const regTopic = /^[\wéêèàùô\-\'\s]+$/;

    const validateInput = (input: string, regex: RegExp): boolean => {
        return regex.test(input);
    };

    const validateFirstName = (firstName: string): boolean => {
        let isValid = validateInput(firstName, regNames);
        isValid ?
            console.log('- Prénom valide')
            :
            console.log('- Prénom invalide');
        return isValid;
    }

    const validateLastName = (lastName: string): boolean => {
        let isValid = validateInput(lastName, regNames);
        isValid ?
            console.log('- Nom valide')
            :
            console.log('- Nom invalide');
        return isValid;
    }

    const validateTopic = (topic: string): boolean => {
        let isValid = validateInput(topic, regTopic);
        isValid ?
            console.log('- Sujet valide')
            :
            console.log('- Sujet invalide');
        return isValid;
    }

    const validateHoney = (honey: string | undefined): boolean => {
        if (honey === undefined) {
            return true;
        }
        return false;
    };

    return {
        validateFirstName,
        validateLastName,
        validateTopic,
        validateHoney
    }
}