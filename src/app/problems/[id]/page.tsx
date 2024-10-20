import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Container,
    Grid2,
    Typography,
} from '@mui/material';
import {
    getProblemData,
    getProblems,
    getTeikeiNukigata,
} from '../../../lib/problems';
import Board from '../../../components/Board';

export default function Page({ params }: { params: { id: string } }) {
    const problemData = getProblemData(params.id);
    const teikeiNukigata = getTeikeiNukigata();
    return (
        <Container>
            <Box>
                <Typography>Problem {params.id}</Typography>
            </Box>
            <Box>
                <Grid2 container>
                    <Grid2 size={{ sm: 6, xs: 12 }}>
                        <Card>
                            <CardHeader title="初期状態" />
                            <CardContent>
                                <Board
                                    width={problemData.board.width}
                                    height={problemData.board.height}
                                    board={problemData.board.start}
                                />
                            </CardContent>
                        </Card>
                    </Grid2>
                    <Grid2 size={{ sm: 6, xs: 12 }}>
                        <Card>
                            <CardHeader title="完成状態" />
                            <CardContent>
                                <Board
                                    width={problemData.board.width}
                                    height={problemData.board.height}
                                    board={problemData.board.goal}
                                />
                            </CardContent>
                        </Card>
                    </Grid2>
                </Grid2>
            </Box>
            <Box paddingTop={4}>
                <Typography variant="h4">定型抜き型情報</Typography>
                <Grid2 container>
                    {teikeiNukigata.map((pattern) => (
                        <Grid2 key={pattern.p} size={{ xs: 6, sm: 3, md: 2 }}>
                            <Card>
                                <CardHeader title={`Patter ${pattern.p}`} />
                                <CardContent>
                                    <Board
                                        width={pattern.width}
                                        height={pattern.height}
                                        board={pattern.cells}
                                    />
                                </CardContent>
                            </Card>
                        </Grid2>
                    ))}
                </Grid2>
                <Typography variant="h4">一般抜き型情報</Typography>
                <Grid2 container>
                    {problemData.general.patterns.map((pattern) => (
                        <Grid2 key={pattern.p} size={{ xs: 6, sm: 3, md: 2 }}>
                            <Card>
                                <CardHeader title={`Patter ${pattern.p}`} />
                                <CardContent>
                                    <Board
                                        width={pattern.width}
                                        height={pattern.height}
                                        board={pattern.cells}
                                    />
                                </CardContent>
                            </Card>
                        </Grid2>
                    ))}
                </Grid2>
            </Box>
        </Container>
    );
}

export async function generateStaticParams() {
    const problems = getProblems();

    return problems.map((problem) => {
        return { id: problem };
    });
}
