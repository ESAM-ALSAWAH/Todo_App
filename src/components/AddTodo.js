import React, { useState } from 'react'
import {
  FormControl,
  InputGroup,
  InputLeftAddon,
  Input,
  Checkbox,
  useColorModeValue,
} from '@chakra-ui/react'

export const AddTodo = (props) => {
  const { addtodo } = props
  const bg = useColorModeValue('#fff', '#25273c')
  const [inputValue, setInputValue] = useState('')
  const [completed, setCompleted] = useState(false)
  const handlSubmit = () =>
    addtodo({ id: Math.random(), todo: inputValue, completed })
  return (
    <FormControl
      bgColor={bg}
      onKeyUp={(e) => {
        if (e.keyCode === 13) {
          handlSubmit()
          setInputValue('')
          setCompleted(false)
        }
      }}
    >
      <InputGroup w="100%">
        <InputLeftAddon
          children={
            <Checkbox
              onChange={(e) => setCompleted((prev) => e.target.checked)}
              isChecked={completed}
            />
          }
        />
        <Input
          type="text"
          placeholder="Create a new todo ..."
          value={inputValue}
          onChange={(e) => setInputValue((prev) => e.target.value)}
          _focus={{
            boxShadow: 'none',
          }}
        />
      </InputGroup>
    </FormControl>
  )
}
