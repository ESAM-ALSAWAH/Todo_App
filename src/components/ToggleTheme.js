import React from 'react'
import { useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
export const ToggleTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <React.Fragment>
      {colorMode === 'light' ? (
        <MoonIcon onClick={toggleColorMode} cursor="pointer" />
      ) : (
        <SunIcon onClick={toggleColorMode} cursor="pointer" />
      )}
    </React.Fragment>
  )
}
