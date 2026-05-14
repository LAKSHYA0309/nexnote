import Link from 'next/link'
import React from 'react'
import Trash from '../trash/trash'
import Settings from '../settings/settings' 
import { Settings as Setting, WorkflowIcon } from 'lucide-react' 
import { Trash2Icon } from 'lucide-react'
import { twMerge } from 'tailwind-merge'


type props={
workspaceid:string, 
className?:string, 
getCurrentElement?:(val:string)=>void  
}
const Nativenavigation = ({workspaceid,className,getCurrentElement}:props) => {
  return (
     <nav className={twMerge('my-2', className)}>
      <ul className="flex flex-col gap-2">
        <li>
          <Link
            className="group/native
            flex
             text-neutral-7
            transition-all
            gap-2
          "
            href={`/dashboard/${workspaceid}`}
          >
             <WorkflowIcon/>
            <span>My Workspace</span>
          </Link>
        </li>

        <Settings >
          <li
            className="group/native
            flex
            text-neutral-7
            transition-all
            gap-2
            cursor-pointer
          "
          >
            <Setting />
            <span>Settings</span>
          </li>
        </Settings>

        <Trash>
          <li
            className="group/native
            flex
            text-neutral-7
            transition-all
            gap-2
          "
          >
            <Trash2Icon />
            <span>Trash</span>
          </li>
        </Trash>
      </ul>
    </nav>
  )
}

export default Nativenavigation