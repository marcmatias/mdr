import * as React from "react"
import { graphql } from 'gatsby'
import tw from "twin.macro"

const Button = tw.button`
  bg-blue-500 hover:bg-blue-800 text-white p-2 rounded
`


const Test = ({ data }) => {
  return (
    <>
      <h1>Videos</h1>
      {data.allVideos.edges.map(x =>
        <div key={x.node.id}>
          <div>{x.node.title}</div>
          <div>{x.node.url}</div>
          <Button>Activate</Button>
        </div>
      )}
    </>
  )
}

export const query = graphql`
{
  allVideos {
    edges {
      node {
        id
        title
        url
        slug
      }
    }
  }
} `

export default Test