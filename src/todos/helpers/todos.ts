import { Todo } from '@prisma/client'

export const updateTodo = async ( id: string, complete: boolean ): Promise<Todo> => {

  const body = { complete: complete };
  const res = await fetch(`/api/todos/${ id }`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  if (res.status !== 200) {
    throw new Error(res.statusText)
  }

  const todo = await res.json();

  return todo;
}

export const createTodo = async ( description: string ): Promise<Todo> => {
  
  const body = { description: description };
  const todo = await fetch('/api/todos/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  }).then((res) => res.json());

  return todo;
}

export const deleteCompletedTodos = async (  ): Promise<void> => {
  await fetch('/api/todos/', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  }).then((res) => res.json());
}