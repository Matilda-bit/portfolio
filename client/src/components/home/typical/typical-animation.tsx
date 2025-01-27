export async function type(node: HTMLElement | null, ...args: Array<string | number | Function | Promise<any>>): Promise<void> {
    for (const arg of args) {
        switch (typeof arg) {
            case 'string':
                await edit(node, arg);
                break;
            case 'number':
                await wait(arg);
                break;
            case 'function':
                await arg(node, ...args);
                break;
            default:
                await arg;
        }
    }
}

async function edit(node: HTMLElement | null, text: string): Promise<void> {
    if (node) {
        const overlap = getOverlap(node.textContent || '', text);
        await perform(node, [...deleter(node.textContent || '', overlap), ...writer(text, overlap)]);
    }
}

async function wait(ms: number): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, ms));
}

async function perform(node: HTMLElement, edits: string[], speed: number = 75): Promise<void> {
    for (const op of editor(edits)) {
        op(node);
        // const sp = speed + speed * (Math.random() - 0.5);
        // console.log(sp)//random speed to look more as a human
        await wait(speed);
    }
}

export function* editor(edits: string[]): Generator<(node: HTMLElement) => void> {
    for (const edit of edits) {
        yield (node: HTMLElement) => requestAnimationFrame(() => node.textContent = edit);
    }
}

export function* writer(
    text: string,
    startIndex: number = 0,
    endIndex: number = text.length
): Generator<string> {
    const chars = [...text];
    while (startIndex < endIndex) {
        yield chars.slice(0, ++startIndex).join('');
    }
}

export function* deleter(
    text: string,
    startIndex: number = 0,
    endIndex: number = text.length
): Generator<string> {
    const chars = [...text];
    while (endIndex > startIndex) {
        yield chars.slice(0, --endIndex).join('');
    }
}

export function getOverlap(start: string, end: string): number {
    return [...start, NaN].findIndex((char, i) => end[i] !== char);
}