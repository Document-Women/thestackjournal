"use strict";(()=>{var e={};e.id=151,e.ids=[151],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},6249:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},5558:(e,t,r)=>{r.r(t),r.d(t,{config:()=>l,default:()=>d,routeModule:()=>g});var n={};r.r(n),r.d(n,{default:()=>u});var a=r(1802),s=r(7153),o=r(6249),i=r(9905);let u=async(e,t)=>{let{slug:r}=e.query,{edges:n,pageInfo:a}=await (0,i.f0)(r,e.body.endCursor);t.status(200).json({edges:n,pageInfo:a})},d=(0,o.l)(n,"default"),l=(0,o.l)(n,"config"),g=new a.PagesAPIRouteModule({definition:{kind:s.x.PAGES_API,page:"/api/tag/[slug]",pathname:"/api/tag/[slug]",bundlePath:"",filename:""},userland:n})},9905:(e,t,r)=>{r.d(t,{B:()=>o,M:()=>s,f0:()=>i});let n=process.env.WORDPRESS_API_URL||"";async function a(e="",{variables:t}={}){let r={"Content-Type":"application/json"};process.env.WORDPRESS_AUTH_REFRESH_TOKEN&&(r.Authorization=`Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`);let a=await fetch(n,{headers:r,method:"POST",body:JSON.stringify({query:e,variables:t})}),s=await a.json();if(s.errors)throw console.error(s.errors),Error("Failed to fetch API");return s.data}async function s(e,t="DATABASE_ID"){return(await a(`
    query PreviewPost($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        databaseId
        slug
        status
      }
    }`,{variables:{id:e,idType:t}})).post}async function o(e,t=""){let r=await a(`
    query getAllPostsByCategory($category: String!, $endCursor: String) {
      posts(first : 9, after: $endCursor, where: {categoryName: $category, status: PUBLISH}) {
        edges {
          node {
            author {
              node {
                name
                slug
              }
            }
            categories {
              edges {
                node {
                  name
                  slug
                  id
                  description
                }
              }
            }
            slug
            title
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  `,{variables:{category:e,endCursor:t}});return r?.posts}async function i(e,t=""){console.log(t);let r=await a(`
    query getAllPostsByTags($tag: String!, $endCursor: String) {
      posts(first: 9, after: $endCursor, where: {tag: $tag, status: PUBLISH}) {
        edges {
          node {
            author {
              node {
                name
                slug
              }
            }
            categories {
              edges {
                node {
                  name
                  slug
                  id
                }
              }
            }
            slug
            title
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  `,{variables:{tag:e,endCursor:t}});return r?.posts}},7153:(e,t)=>{var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},1802:(e,t,r)=>{e.exports=r(145)}};var t=require("../../../webpack-api-runtime.js");t.C(e);var r=t(t.s=5558);module.exports=r})();