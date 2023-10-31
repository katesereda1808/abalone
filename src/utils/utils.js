const REG_EMAIL = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
const REG_LETTERS = /\p{L}+/u;
const REG_PHONE = /^[0-9()+\s-]{6,}$/;

export const getRegEx = (inputName) => {
    switch (inputName) {
        case 'name':
            // only letters
            return REG_LETTERS;

        case 'email':
            // validation
            return REG_EMAIL;

        case 'phone':
            // min and max of numbers
            return REG_PHONE;

        default:
            return '';
    }
};
