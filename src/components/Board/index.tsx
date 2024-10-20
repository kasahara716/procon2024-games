import { FC } from 'react';

const Board: FC<{ width: number; height: number; board: string[] }> = ({
    width,
    height,
    board,
}) => {
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
};

export default Board;
