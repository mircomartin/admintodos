import Image from 'next/image'
import Link from 'next/link'
import { CiBookmarkCheck, CiLogout } from 'react-icons/ci'
import { SidebarItem } from '.'
import { IoBasketOutline, IoCalendarOutline, IoCodeSharp, IoListOutline } from 'react-icons/io5'

const menuItems = [
  {
    path: '/dashboard',
    icon: <IoCalendarOutline size={40} />,
    title: 'Dashboard',
  },
  {
    path: '/dashboard/rest-todos',
    icon: <CiBookmarkCheck size={40} />,
    title: 'Rest Todos',
  },
  {
    path: '/dashboard/server-todos',
    icon: <IoListOutline size={40} />,
    title: 'Server Todos',
  },
  {
    path: '/dashboard/cookies',
    icon: <IoCodeSharp size={40} />,
    title: 'Cookies',
  },
  {
    path: '/dashboard/products',
    icon: <IoBasketOutline size={40} />,
    title: 'Productos',
  }
]

export const Sidebar = () => {
  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div>
        <div className="-mx-6 px-6 py-4">
          <Link href="/dashboard" title="home">
            <Image src="https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg" className="w-32" alt="tailus logo" width={0} height={0} />
          </Link>
        </div>

        <div className="mt-8 text-center">
          <Image src="https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp" alt="" className="m-auto rounded-full object-cover" width={112} height={112} />
            <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">Cynthia J. Watts</h5>
            <span className="hidden text-gray-400 lg:block">Admin</span>
        </div>

        <ul className="space-y-2 tracking-wide mt-8">
          {/* Active className: text-white bg-gradient-to-r from-sky-600 to-cyan-400 */}
          {
            menuItems.map((item, index) => (
              <SidebarItem key={index} {...item} />
            ))
          }
        </ul>
      </div>

      <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
        <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
          <CiLogout />
          <span className="group-hover:text-gray-700">Logout</span>
        </button>
      </div>
    </aside>
  )
}
