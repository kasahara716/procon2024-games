'use client';

import { FC, useEffect, useRef } from 'react';

const Board: FC<{ width: number; height: number; board: string[] }> = ({
    width,
    height,
    board,
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        board.forEach((line, y) => {
            const cells = line.split('');
            cells.forEach((cell, x) => {
                ctx.fillStyle =
                    cell === '0'
                        ? 'white'
                        : cell === '1'
                          ? 'red'
                          : cell === '2'
                            ? 'green'
                            : 'blue';
                ctx.fillRect(x, y, 1, 1);
            });
        });
    }, [width, height, board]);

    if (width <= 64) {
        return (
            <svg
                viewBox={`0 0 ${width} ${height}`}
                xmlns="http://www.w3.org/2000/svg"
            >
                {board.map((line, y) => {
                    const cells = line.split('');
                    return cells.map((cell, x) => {
                        return (
                            <rect
                                key={`${x}-${y}`}
                                x={x}
                                y={y}
                                width={1}
                                height={1}
                                fill={
                                    cell === '0'
                                        ? 'white'
                                        : cell === '1'
                                          ? 'red'
                                          : cell === '2'
                                            ? 'green'
                                            : 'blue'
                                }
                            />
                        );
                    });
                })}
            </svg>
        );
    }
    return (
        <canvas
            ref={canvasRef}
            width={width}
            height={height}
            style={{ width: '100%' }}
        />
    );
};

export default Board;
