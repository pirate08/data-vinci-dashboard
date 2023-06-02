import React from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Image from 'next/image';
import { MdNotifications } from 'react-icons/md';
import Card1 from '@/components/partials/Card1';
import Table from '@/components/partials/Table';

const Links = [
  'Dashboard',
  'Products',
  'Orders',
  'Customers',
  'Message',
  'Reports',
];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('blue.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Image
              src='/logo4.png'
              width={100}
              height={40}
              alt='Shopify Logo'
            />
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton className='text-2xl cursor-pointer bg-gray-300 p-1 rounded-2xl'>
                <MdNotifications />
              </MenuButton>
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Log Out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>
        {/* --Card-- */}
        <Card1 />
        {/* --Table-- */}
        <div className='mt-10'>
          <Table />
        </div>
      </Box>
    </>
  );
}
