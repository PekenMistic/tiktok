// components/Search.tsx
"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search as SearchIcon } from "lucide-react"

interface SearchProps {
  onSearch: (query: string) => void
}

export default function Search({ onSearch }: SearchProps) {
  const [query, setQuery] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-sm items-center space-x-2">
      <Input
        type="search"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button type="submit" size="icon">
        <SearchIcon className="h-4 w-4" />
        <span className="sr-only">Search</span>
      </Button>
    </form>
  )
}