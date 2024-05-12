"use strict";(()=>{var e={};e.id=157,e.ids=[157],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},6249:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},6057:(e,t,r)=>{r.r(t),r.d(t,{config:()=>l,default:()=>d,routeModule:()=>g});var s={};r.r(s),r.d(s,{default:()=>u});var a=r(1802),n=r(7153),o=r(6249),i=r(9905);async function u(e,t){let{secret:r,id:s,slug:a}=e.query;if(!process.env.WORDPRESS_PREVIEW_SECRET||r!==process.env.WORDPRESS_PREVIEW_SECRET||!s&&!a)return t.status(401).json({message:"Invalid token"});let n=await (0,i.M)(s||a,s?"DATABASE_ID":"SLUG");if(!n)return t.status(401).json({message:"Post not found"});t.setPreviewData({post:{id:n.databaseId,slug:n.slug,status:n.status}}),t.writeHead(307,{Location:`/posts/${n.slug||n.databaseId}`}),t.end()}let d=(0,o.l)(s,"default"),l=(0,o.l)(s,"config"),g=new a.PagesAPIRouteModule({definition:{kind:n.x.PAGES_API,page:"/api/preview",pathname:"/api/preview",bundlePath:"",filename:""},userland:s})},9905:(e,t,r)=>{r.d(t,{B:()=>o,M:()=>n,f0:()=>i});let s=process.env.WORDPRESS_API_URL||"";async function a(e="",{variables:t}={}){let r={"Content-Type":"application/json"};process.env.WORDPRESS_AUTH_REFRESH_TOKEN&&(r.Authorization=`Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`);let a=await fetch(s,{headers:r,method:"POST",body:JSON.stringify({query:e,variables:t})}),n=await a.json();if(n.errors)throw console.error(n.errors),Error("Failed to fetch API");return n.data}async function n(e,t="DATABASE_ID"){return(await a(`
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
  `,{variables:{tag:e,endCursor:t}});return r?.posts}},7153:(e,t)=>{var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},1802:(e,t,r)=>{e.exports=r(145)}};var t=require("../../webpack-api-runtime.js");t.C(e);var r=t(t.s=6057);module.exports=r})();