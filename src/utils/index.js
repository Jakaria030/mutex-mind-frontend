export const formatEmail = (email) => {
    const [name, domain] = email.split("@");

    if (name.length <= 4) {
        return `${name}...@${domain}`;
    }

    return `${name.slice(0, 2)}.....${name.slice(-2)}@${domain}`;
};

export const generateSlug = (text) => {
    return text
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "") // remove special chars
        .replace(/\s+/g, "-") // spaces → dash
        .replace(/-+/g, "-"); // multiple dashes → single
};