export function stringInterpolation(input: string, placeholders: any | any[]) {
    const isArray = Array.isArray(placeholders);
    const regexPlaceholder: RegExp = /\{[0-9]+\}/g;
    const regexPhIndex: RegExp = /[0-9]+/i;
    let output: string = input;

    output.match(regexPlaceholder)?.forEach((m) => {
        output = output.replace(m, isArray ? String(placeholders[Number(m.match(regexPhIndex))]) : String(placeholders));
    });
    return output;
};