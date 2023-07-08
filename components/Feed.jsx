"use client"

import { useState, useEffect } from "react"
import PromptCard from "./PromptCard"

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post, index) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}

const Feed = () => {

  const [searchText, setsearchText] = useState("")
  const [posts, setposts] = useState([])

  const handleSearchChange = (e) => {
    setsearchText(e.target.value)
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("api/prompt")
      const data = await response.json();
      setposts(data)
    }

    fetchPosts();
  }, [])

  return (
    <section className="feed">
      <form className="w-full flex-center relative">
        <input
          type="text"
          placeholder="Search for a tag or username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        >
        </input>

        <PromptCardList 
          data={posts}
          handleTagClick={() => {}}
        />
      </form>
    </section>
  )
}

export default Feed