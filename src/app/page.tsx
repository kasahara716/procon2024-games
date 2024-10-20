import { Box, Container, Typography } from '@mui/material';
import Link from 'next/link';
import { getProblems } from '../lib/problems';

export default function Page() {
    const problems = getProblems();
    return (
        <Container>
            {problems.map((problem) => {
                return (
                    <Box key={problem} sx={{ my: 2 }}>
                        <Link href={`/problems/${problem}`}>
                            <Typography>問題 {problem}</Typography>
                        </Link>
                    </Box>
                );
            })}
        </Container>
    );
}
