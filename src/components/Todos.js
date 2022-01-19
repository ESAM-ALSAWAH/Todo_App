import { Box, Heading, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import Todo from './Todo'

export const Todos = (props) => {
  const { EditTodo, todosFilter, deleteTodo, todos } = props
  const bg = useColorModeValue('#fff', '#25273c')
  const renderTodo = todosFilter?.map((item, index) => (
    <Todo
      key={index}
      item={item}
      deleteTodo={deleteTodo}
      EditTodo={EditTodo}
      todos={todos}
    />
  ))

  return (
    <Box my="10" w="100%" bgColor={bg} borderRadius="5px">
      {renderTodo.length ? (
        renderTodo
      ) : (
        <Heading p="10px" size="sm" textAlign="center">
          No todos to show ....
        </Heading>
      )}
    </Box>
  )
}
