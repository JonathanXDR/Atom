'use client';
import { Box, Heading, Text } from '@primer/react';

export default function Error() {
  return (
    <>
      <Box className="dialog">
        <Box className="wrapper-top">
          <Heading as="h1" className="message">
            Something has gone wrong
          </Heading>
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
      <Box as="footer" className="footer"></Box>
    </>
  );
}
