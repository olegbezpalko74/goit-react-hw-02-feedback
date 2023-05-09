import { Feedback } from './Feedback/Feedback';
import { Box } from './Box';

export const App = () => {
  return (
    <Box p={25} textAlign="center" height={'100vh'}>
      <Feedback />
    </Box>
  );
};
