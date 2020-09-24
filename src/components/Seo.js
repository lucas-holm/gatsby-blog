import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

//Seo component with metadata that will end up in the <head> tag of the html-document.
export const Seo = ({ description, keywords, title, image, url, author }) => {
  const site = "https://lucas-holm-gatsby-blog.netlify.app/"
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        //we use the data from the graphql query to fill the meta-object with values.
        //if we havn't passed in any of our own values, we use the values we get from
        //the graphql query.
        const metaDescription = description
          ? description
          : data.site.siteMetadata.description
        const metaTitle = title ? title : data.site.siteMetadata.title
        const metaAuthor = author ? author : data.site.siteMetadata.author
        const metaUrl = url ? url : data.site.siteMetadata.url
        const metaImage = image
          ? `${site}${image}`
          : data.site.siteMetadata.image
        const metaKeywords = keywords
          ? keywords
          : ["gatsby blog", "gatsby MDX blog"]
        return (
          <Helmet
            title={title}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: metaTitle,
              },
              {
                property: `og:author`,
                content: metaAuthor,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                property: `og:image`,
                content: metaImage,
              },
              {
                property: `og:url`,
                content: metaUrl,
              },
              {
                name: `twitter:card`,
                content: `summary_large_image`,
              },

              {
                name: `twitter:title`,
                content: metaTitle,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
              {
                name: `twitter:image`,
                content: metaImage,
              },
            ].concat(
              metaKeywords && metaKeywords.length > 0
                ? {
                    name: `keywords`,
                    content: metaKeywords.join(`, `),
                  }
                : []
            )}
          />
        )
      }}
    />
  )
}

//Graphql query to get metadata for the site from the gatsby-config.
const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        image
      }
    }
  }
`
