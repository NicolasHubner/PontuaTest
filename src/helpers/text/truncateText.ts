export function truncateText(text: string, maxLength: number): string {
    if (text.length <= maxLength) {
        return text;
    }

    const trimmedText = text.trim();

    const words = trimmedText.split(' ');

    let truncatedText = '';

    for (let i = 0; i < maxLength; i++) {
        if (words[i]) {
            truncatedText += words[i] + ' ';

            if (i === maxLength - 1) {
                truncatedText = truncatedText.slice(0, -1) + ' ...';
            }
            if (words[i].endsWith('.')) {
                truncatedText = truncatedText.slice(0, -2) + '.';
            }
        }
    }

    return truncatedText;
}
