'use client';
import { Box, Heading, Text } from '@primer/react';
import './main.css';

export default function NotFound() {
  return (
    <>
      <Box className="dialog">
        <Box className="wrapper-top">
          <Heading as="h1" className="message">
            This page could not be found
          </Heading>
        </Box>
        <Text className="number">404</Text>
        <Box className="wrapper-bottom">
          <Text as="p" className="warning-message">
            Do not panic
          </Text>
          <Text as="p" className="suggestion">
            Perhaps you misspelled the url or it has been removed.
          </Text>
        </Box>
      </Box>
      <Box as="footer" className="footer"></Box>
    </>
  );
}
