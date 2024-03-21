
export const formatDate = (date) => {
    const creationDate = new Date(date);
    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('es', options).format(creationDate);
    const formattedOutput = formattedDate.replace(/(\d+) de (\w+) de (\d+)/, '$1 de $2 / $3');
    return formattedOutput
}
