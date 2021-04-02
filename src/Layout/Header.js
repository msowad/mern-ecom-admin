import React from "react"
import AccountMenu from "./AccountMenu"
import MessageMenu from "./MessageMenu"
import SearchInput from "./SearchInput"

export default function Header() {
  return (
    <>
      <SearchInput />
      <div>
        <MessageMenu />
        <AccountMenu />
      </div>
    </>
  )
}
