import fs from 'fs';

export function getProblems() {
    const files = fs.readdirSync('./problemdata');

    return files
        .filter((file) => {
            return file.endsWith('.json');
        })
        .map((file) => {
            return file.substring(0, file.length - 4);
        });
}

export function getProblemData(id: string): any {
    const mapDataStr = fs.readFileSync(`./problemdata/${id}.json`, 'utf-8');

    return JSON.parse(mapDataStr);
}
