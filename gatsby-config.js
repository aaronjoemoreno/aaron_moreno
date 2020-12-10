module.exports = {
  siteMetadata: {
    title: `AARON MORENO`,
    description: `Web Developer`,
    author: `@gatsbyjs`,
    bio: `Well, now that you know what I do...let me tell you a little bit more about who I am. I'm Aaron! I am a full stack developer from Albuquerque, NM. I have a beautiful wife named Brittany and full of energy son named Micah. I love to teach others. I used to be a trainer for Apple. I share ways code tutorials here: All The JS. I enjoy running, cooking, watching good movies, especially ones from the 80s and producing music. I also do a little blogging, which you can find below.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
