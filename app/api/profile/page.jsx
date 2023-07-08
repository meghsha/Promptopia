"use client"

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import Profile from "@components/Profile"

const MyProfile = () => {

    const [user, setuser] = useState({
        username: "",
        email: "",
        image: "",
        _id: ""
    })

    const handleEdit = () => {

    }

    const handleDelete = async () => {

    }

    useEffect(() => {
      const fetchPost = async () => {
        const response = await fetch('/api/user')
        const { data } = await response.json()
        setuser(data)
      }

      fetchPost();
    }, [])
    
    return (
        <div>
            <Profile 
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                name="My"
                desc="Welcome to your personalised profile page"
                data={user}
            />
        </div>
    )
}

export default MyProfile