export const formatEmail = (email) => {
    const [name, domain] = email.split("@");

    if (name.length <= 4) {
        return `${name}...@${domain}`;
    }

    return `${name.slice(0, 2)}.....${name.slice(-2)}@${domain}`;
};