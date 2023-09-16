import { injectDescriptionLinks } from '@/helpers/descriptionHelper';
import { ContactProps } from '@/types/ContactProps';
import { Box, Heading, Link, Text } from '@primer/react';
import React from 'react';
import './ContactLegacy.css';

interface ContactLegacyProps {
  contacts: ContactProps[];
}

const ContactLegacy: React.FC<ContactLegacyProps> = ({ contacts }) => {
  return (
    <Box as="section" className="section section--contact">
      <Box className="wrapper no-pad">
        <Box className="columns">
          {contacts.map((contact, index) => {
            const description = contact.description?.paragraphs.map(
              (paragraph, index) =>
                injectDescriptionLinks(
                  paragraph.text ?? '',
                  paragraph.links,
                  index
                )
            );

            return (
              <Box className="column" key={index}>
                <Heading as="h3">{contact.title.text}</Heading>
                {description}

                {contact.tables &&
                  contact.tables.map((table, index) => (
                    <Box
                      as="table"
                      className="welcome-contact-table"
                      key={index}
                    >
                      <Box as="tbody">
                        {table.data.map((row, index) => (
                          <Box as="tr" key={index}>
                            <Box as="td">{row.title?.text}</Box>
                            <Box as="td">
                              <Link href={row.link?.url}>
                                {row.link?.title}
                              </Link>
                            </Box>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  ))}
                {contact.links &&
                  contact.links.map((link, index) => (
                    <Text as="p" className="welcome-cta" key={index}>
                      <Link
                        href={link.url}
                        className="welcome-button"
                        target="_blank"
                      >
                        {link.title}
                      </Link>
                    </Text>
                  ))}
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default ContactLegacy;
