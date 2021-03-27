import React from "react"
import Layout from "../components/layout.js"
import { useStaticQuery, graphql } from 'gatsby'

const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
        query {
            site {
                siteMetadata {
                    title
                    descriptionTitle
                    descriptionText
                    papoTitle
                    papoDescription
                }
            },
            allMarkdownRemark (
              limit:3
              sort: {
                fields: [frontmatter___date]
                order: DESC
              }
            ) {
                totalCount
                edges {
                    node {
                    id
                    frontmatter {
                        title
                        date(formatString: "DD MMMM, YYYY")
                        description
                        video
                    }
                    excerpt
                    }
                }
            }
        }
    `
  )
  return (
    <Layout>
      <div className="flex flex-wrap justify-center m-2">
        <div className="flex flex-wrap w-full px-8 py-16 mb-4">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 dark:text-gray-100">
              {data.site.siteMetadata.papoTitle}
            </h1>
            <div className="h-1 w-20 bg-indigo-500 dark:bg-indigo-400 rounded" />
          </div>
          <p className="lg:w-1/2 w-full leading-relaxe dark:text-gray-200">
            {data.site.siteMetadata.papoDescription}
          </p>
        </div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} className="w-full md:w-1/3 p-4">
            <div className="h-full shadow-xl bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden">
              <iframe className="h-64 lg:h-72 md:h-56 w-full object-center" title={node.frontmatter.title}
                src={node.frontmatter.video}>
              </iframe>
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 dark:text-gray-200 mb-1">
                  {node.frontmatter.date}
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 dark:text-gray-300 mb-3">{node.frontmatter.title}</h1>
                <p className="leading-relaxed mb-3 text-gray-400 dark:text-gray-200">
                  {node.frontmatter.description}
                </p>
                <div className="flex items-center flex-wrap ">
                  <a className="text-indigo-500 dark:text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0" href={node.frontmatter.video}>
                    Assita no youtube
                  <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout >
  )
}

export default IndexPage
