export const dynamic = 'force-dynamic'
export const revalidate = 0

import prisma from '@/app/lib/prisma'
import { NewTodo, TodosGrid } from '@/todos'

export const metadata = {
 title: 'Listado de Todos',
 description: 'SEO Title',
};

const RestTodosPage = async () => {

  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc'} })
  return (
    <div>
      <NewTodo />
      <TodosGrid todos={ todos } />
    </div>
  )
}

export default RestTodosPage