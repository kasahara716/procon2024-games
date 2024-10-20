import fs from 'fs';

type Nukigata = {
    /** パターン番号 */
    p: number;
    width: number;
    height: number;
    cells: string[];
};

type Problem = {
    /** ボード */
    board: {
        /** 横幅 */
        width: number;
        /** 高さ */
        height: number;
        /** 初期状態 */
        start: string[];
        /** 完成状態 */
        goal: string[];
    };
    /** 一般型情報 */
    general: {
        /** 一般型の個数 */
        n: number;
        /** 一般型のパターン */
        patterns: Nukigata[];
    };
};

export function getProblems() {
    const files = fs.readdirSync('./problemdata');

    return files
        .filter((file) => {
            return file.endsWith('.json');
        })
        .map((file) => {
            return file.substring(0, file.length - 5);
        });
}

export function getProblemData(id: string): Problem {
    const mapDataStr = fs.readFileSync(`./problemdata/${id}.json`, 'utf-8');

    return JSON.parse(mapDataStr);
}

export function getTeikeiNukigata(): Nukigata[] {
    const nukigata = fs.readFileSync(`./teikeinukigata.json`, 'utf-8');

    return JSON.parse(nukigata);
}
