export const dynamic = 'force-dynamic'
export const revalidate = 0

import prisma from '@/app/lib/prisma'
import { NewTodo, TodosGrid } from '@/todos'

export const metadata = {
 title: 'Server Todos',
 description: 'SEO Title',
};

const ServerTodosPage = async () => {

  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc'} })
  return (
    <div>
      <h3 className='text-3xl mb-5'>Server Actions</h3>
      <NewTodo />
      <TodosGrid todos={ todos } />
    </div>
  )
}

export default ServerTodosPage