'use client'
import { UserIcon } from '@/icons'
import { useState, useRef, useEffect } from 'react'
import LogoutButton from './LogoutButton'

interface ProfileButtonProps {
  username?: string
}

const ProfileButton = ({ username }: ProfileButtonProps) => {
  const [open, setOpen] = useState<boolean>(false)

  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open])

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-first cursor-pointer relative"
      >
        <span className="text-lg font-semibold">{username}</span>

        <UserIcon className="size-8" />
      </button>

      {open && (
        <div className="absolute top-10 bg-first px-2 py-4 shadow-2xl rounded-md right-0 z-10">
          <LogoutButton />
        </div>
      )}
    </div>
  )
}

export default ProfileButton
