import React, { useState, useEffect } from 'react'
import { HStack, Heading, VStack } from '@chakra-ui/react'
import { ToggleTheme, AddTodo, Todos, TodosFilter } from './components'
import { useTodos } from './hooks/useTodos'

const App = () => {
  const [todos, addtodo, deleteTodo, EditTodo, DeleteCompletedTodo] = useTodos()
  const [todosFilter, setTodosFilter] = useState(todos)
  useEffect(() => {
    setTodosFilter((prev) => todos)
  }, [todos])
  const DeleteTodo = (id) => deleteTodo(id)
  return (
    <VStack w={['90%', 400, 500, 800]} m="auto" py="10">
      <HStack justifyContent="space-between" w="100%" my="10">
        <Heading>Todo</Heading>
        <ToggleTheme />
      </HStack>
      <VStack w="100%">
        <AddTodo addtodo={addtodo} />
        <Todos
          todos={todos}
          todosFilter={todosFilter}
          EditTodo={EditTodo}
          deleteTodo={DeleteTodo}
        />
        {/*        <TodosFilter
          setTodosFilter={setTodosFilter}
          DeleteCompletedTodo={DeleteCompletedTodo}
          todos={todos}
          length={todosFilter.length}
        /> */}
      </VStack>
    </VStack>
  )
}

export default App
