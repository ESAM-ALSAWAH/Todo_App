import {
  Box,
  Stack,
  Text,
  useColorModeValue,
  useMediaQuery,
} from '@chakra-ui/react'
import { darken, whiten } from '@chakra-ui/theme-tools'
import React from 'react'

export const TodosFilter = (props) => {
  const { setTodosFilter, todos, DeleteCompletedTodo, length } = props

  const [isSmallThan450] = useMediaQuery('(max-width: 450px)')
  const bg = useColorModeValue('#fff', '#25273c')
  const color = useColorModeValue('#333', '#ddd')
  const TextStyle = {
    cursor: 'pointer',
    fontSize: '13px',
    ':hover': {
      color: useColorModeValue(whiten('#000', 1), darken('#ddd', 20)),
    },
  }

  /* -------------------action on Todo --------------------- */

  const handleAllTodo = (e) => {
    activeText(e)

    setTodosFilter(todos)
  }
  const handleActiveTodo = (e) => {
    activeText(e)
    const arry = todos.filter((todo) => todo.completed === false)

    setTodosFilter(arry)
  }
  const handleCompletedTodo = (e) => {
    activeText(e)
    const arry = todos.filter((todo) => todo.completed === true)

    setTodosFilter(arry)
  }
  const activeText = (e) => {
    document
      .querySelectorAll('p')
      .forEach((el) => el.classList.remove('active'))
    e.target.classList.add('active')
  }

  console.log('re-render')
  return (
    <Box
      my="10"
      w="100%"
      bgColor={bg}
      borderRadius="5px"
      d="felx"
      alignItems="center"
    >
      <Stack
        display="flex"
        flexDirection={isSmallThan450 ? 'column' : 'row'}
        justifyContent="space-between"
        alignItems="center"
        p="20px 10px"
      >
        <Text cursor="context-menu" color={color} fontSize="13px">
          {length} items left
        </Text>
        <Box d="flex" gap="3">
          <Text
            className="active"
            sx={TextStyle}
            color={color}
            onClick={(e) => handleAllTodo(e)}
          >
            ALL
          </Text>
          <Text
            sx={TextStyle}
            color={color}
            onClick={(e) => handleActiveTodo(e)}
          >
            Active
          </Text>
          <Text
            sx={TextStyle}
            color={color}
            onClick={(e) => handleCompletedTodo(e)}
          >
            Completed
          </Text>
        </Box>
        <Text sx={TextStyle} color={color} onClick={DeleteCompletedTodo}>
          Clear Completed
        </Text>
      </Stack>
    </Box>
  )
}
