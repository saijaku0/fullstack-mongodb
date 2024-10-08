import type { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

export function Announcement({ children }: Props) {
    return <div className='bg-white w-screen p-5 text-center'>{ children } </div>
}