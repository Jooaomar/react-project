import * as React from 'react'

import { 
  Card, 
  Stack, 
  Box, 
  Heading, 
  StackDivider, 
  Text,
  CardBody,
  CardHeader
} from '@chakra-ui/react'

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button
} from '@chakra-ui/react'

import { ChevronDownIcon } from '@chakra-ui/icons'



const IndexPage = () => {
  return (
    <main>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} colorScheme='pink'>
          Actions
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
      <Card>
      <CardHeader>
        <Heading size='md'>Client Report</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              Summary
            </Heading>
            <Text pt='2' fontSize='sm'>
              View a summary of all your clients over the last month.
            </Text>
          </Box>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              Overview
            </Heading>
            <Text pt='2' fontSize='sm'>
              Check out the overview of your clients.
            </Text>
          </Box>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              Analysis
            </Heading>
            <Text pt='2' fontSize='sm'>
              See a detailed analysis of all your business clients.
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
    </main>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>
export default IndexPage
