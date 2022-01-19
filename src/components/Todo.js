import { Box, Checkbox, HStack, IconButton } from '@chakra-ui/react'
import React from 'react'
import { CloseIcon } from '@chakra-ui/icons'
const Todo = (props) => {
  const { item, deleteTodo, EditTodo, todos } = props

  /* ------------------------- actions------------------------- */
  const handleCheack = (checked) => {
    const arry = todos

    const objIndex = arry.findIndex((obj) => obj.id === item.id)

    if (checked) {
      arry[objIndex].completed = true
      EditTodo(arry)
    } else {
      arry[objIndex].completed = false
      EditTodo(arry)
    }
  }

  return (
    <HStack
      justifyContent="space-between"
      sx={{
        pos: 'relative',
        padding: '1rem',
        borderBottom: '1px solid #ddd',
      }}
    >
      <Box
        w="92%"
        paddingInlineStart="6"
        position="relative"
        textAlign="justify"
        sx={{ textJustify: 'inter-word' }}
      >
        <Checkbox
          marginInlineEnd="3"
          pos="absolute"
          left="0"
          top="1"
          onChange={(e) => handleCheack(e.target.checked)}
          isChecked={item.completed}
        />
        {item.todo}
      </Box>
      <IconButton
        variant="outline"
        cursor="pointer"
        onClick={(e) => deleteTodo(item.id)}
        w="2"
        pos="absolute"
        right="5px"
        top="15px"
        p="0"
        minWidth="25px"
        height="25px"
        fontSize="8px"
        borderRadius="50%"
        icon={<CloseIcon />}
      />
    </HStack>
  )
}

export default Todo
