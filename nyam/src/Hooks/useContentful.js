import {createClient} from 'contentful'

const useContentful = ()=>{
  
   const client =  createClient({
        space:process.env.REACT_APP_contentfulSpace,
        accessToken:process.env.REACT_APP_contentfulAccessToken,
        host:'cdn.contentful.com'
    })
}

export default useContentful;