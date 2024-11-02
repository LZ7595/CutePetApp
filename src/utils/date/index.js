function getRelativeTime(publishTimeStamp, format = 'date') {
    const currentTimeStamp = Date.now();
    const oneHourInMillis = 60 * 60 * 1000;
    const oneDayInMillis = 24 * 60 * 60 * 1000;
    const oneWeekInMillis = 7 * oneDayInMillis;

    const diffInMillis = currentTimeStamp - publishTimeStamp;

    if (format === 'date') {
        if (diffInMillis < oneHourInMillis) {
            const minutes = Math.floor(diffInMillis / (60 * 1000));
            return `${minutes}分钟前`;
        } else if (diffInMillis < oneDayInMillis) {
            const hours = Math.floor(diffInMillis / (60 * 60 * 1000));
            return `${hours}小时前`;
        } else if (diffInMillis < oneWeekInMillis) {
            const days = Math.floor(diffInMillis / oneDayInMillis);
            return `${days}天前`;
        } else {
            const publishDate = new Date(publishTimeStamp);
            const year = publishDate.getFullYear();
            const month = String(publishDate.getMonth() + 1).padStart(2, '0');
            const day = String(publishDate.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
        }
    } else if (format === 'full') {
        const publishDate = new Date(publishTimeStamp);
        const year = publishDate.getFullYear();
        const month = String(publishDate.getMonth() + 1).padStart(2, '0');
        const day = String(publishDate.getDate()).padStart(2, '0');
        const hours = String(publishDate.getHours()).padStart(2, '0');
        const minutes = String(publishDate.getMinutes()).padStart(2, '0');
        const seconds = String(publishDate.getSeconds()).padStart(2, '0');
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }
}
export { getRelativeTime };