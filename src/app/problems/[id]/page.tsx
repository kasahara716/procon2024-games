import { Box, Container, Typography } from '@mui/material';
import { getProblemData, getProblems } from '../../../lib/problems';

export default function Page({ params }: { params: { id: string } }) {
    // const mapData = getProblemData(params.id);
    return (
        <Container>
            <Box>
                <Typography>Problem {params.id}</Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
                {/* <Field mapData={mapData} /> */}
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
