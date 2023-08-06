export const formatDate = (date: string) => {
    const d = new Date(date);
    // format date as dd.mm.yyyy
    return `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`;
};
