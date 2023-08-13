import { Box, Text } from '@primer/react';
import './main.css';

export default function Error() {
  return (
    <>
      <Box className="dialog">
        <Box className="wrapper-top">
          <h1 className="message">Something has gone wrong</h1>
        </Box>
        <Text className="number">500</Text>
        <Box className="wrapper-bottom">
          <Text as="p" className="warning-message">
            Do not panic
          </Text>
          <Text as="p" className="suggestion">
            If refreshing doesn&apos;t help, <br />
            let us know.
          </Text>
        </Box>
      </Box>
      <footer className="footer"></footer>
    </>
  );
}
