
import React from 'react'
import PageByPath from "@/pages/PageByPath";

export const Home: React.FC<{ title?: React.ReactNode }> = ({ title }) => {
  return ( <PageByPath path="/" /> )
}
export default Home
