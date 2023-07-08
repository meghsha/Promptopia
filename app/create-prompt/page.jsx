"use client"

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import Form from '@components/Form'

const CreatePrompts = () => {
  const router = useRouter()
  const { data: session } = useSession()

  const [submitting, setsubmitting] = useState(false)
  const [post, setpost] = useState({
    tag: '',
    prompt: "",
  })

  const createPost = async (e) => {
    e.preventDefault();
    setsubmitting(true)

    try {
      // post a prompt in backend
      const response = await fetch('/api/prompt/new', {
        method: 'POST',
        body: JSON.stringify({
          tag: post.tag,
          prompt: post.prompt,
          userId: session?.user.id
        })
      })

      if(response.ok){
        router.push("/");
      }
    } catch (error) {
      console.log(error)
    } finally {
      setsubmitting(false)
    }
  }

  return (
    <Form 
      type="create"
      post={post}
      submitting={submitting}
      setpost={setpost}
      handleSubmit={createPost}
    />
  )
}

export default CreatePrompts