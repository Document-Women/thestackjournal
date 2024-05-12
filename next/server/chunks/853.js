exports.id=853,exports.ids=[853],exports.modules={3590:(e,s,t)=>{"use strict";t.d(s,{Z:()=>a});var r=t(997);function a({children:e,...s}){return r.jsx("div",{className:"container mx-auto px-5 lg-px-10",...s,children:e})}},2814:(e,s,t)=>{"use strict";t.d(s,{Z:()=>l});var r=t(997),a=t(968),n=t.n(a),o=t(4658);function i(){return(0,r.jsxs)(n(),{children:[r.jsx("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"}),r.jsx("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"}),r.jsx("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"}),r.jsx("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),r.jsx("link",{rel:"mask-icon",href:"/favicon/safari-pinned-tab.svg",color:"#000000"}),r.jsx("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),r.jsx("meta",{name:"msapplication-TileColor",content:"#000000"}),r.jsx("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"}),r.jsx("meta",{name:"theme-color",content:"#000"}),r.jsx("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),r.jsx("meta",{name:"description",content:`${o.yf}.`}),r.jsx("meta",{property:"og:image",content:o.vC})]})}function l({preview:e,children:s,...t}){return(0,r.jsxs)(r.Fragment,{children:[r.jsx(i,{}),r.jsx("div",{className:"min-h-screen",...t,children:r.jsx("main",{children:s})})]})}},6276:(e,s,t)=>{"use strict";t.d(s,{Z:()=>u});var r=t(997),a=t(6689),n=t(5675),o=t.n(n),i=t(1664),l=t.n(i),d=t(7437),c=t(1139);let u=()=>{let[e,s]=(0,a.useState)(!1),[t,n]=(0,a.useState)(!1),i=(0,a.useRef)(),u=["Startups","Dear Tech Sis","Founders","Essays","News"],g=["Awards","Events","Opportunities","Industry Report"],h=()=>{s(!e)},p=e=>{i.current&&!i.current.contains(e.target)&&n(!1)};return(0,a.useEffect)(()=>(t?window.addEventListener("click",p):window.removeEventListener("click",p),()=>{window.removeEventListener("click",p)}),[t]),(0,r.jsxs)(r.Fragment,{children:[r.jsx("div",{className:"hidden lg:block py-8",children:(0,r.jsxs)("div",{className:"p-4 columns-3__",children:[r.jsx(l(),{href:"/",className:"w-1/5 inline-block align-middle",children:r.jsx(o(),{src:"/images/the-stack-journal-logo.png",alt:"",width:300,height:60})}),r.jsx("div",{className:"w-3/5 inline-block align-middle",children:(0,r.jsxs)("ul",{className:"flex justify-center text-sm",children:[u.map((e,s)=>r.jsx("li",{className:"mx-3",children:r.jsx("a",{href:`/category/${(0,d.Of)(e.toLocaleLowerCase())}`,className:"capitalize text-purple-800 border-b border-white hover:pb-1 hover:border-purple-800",children:e})},s)),(0,r.jsxs)("li",{className:"relative mx-3",onClick:()=>{n(!t)},ref:i,children:[(0,r.jsxs)("a",{href:"#",className:"flex items-start text-purple-800 border-b border-white hover:pb-1 hover:border-purple-800",children:["More",r.jsx("svg",{className:`ml-1 h-6 w-6 ${t?"transform rotate-180":""}`,fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 0 1 1.414-1.414L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1-.001-1.413z",clipRule:"evenodd"})})]}),r.jsx("div",{className:`flex absolute z-10 bg-white mt-1 border rounded-base shadow-lg ${t?"block":"hidden"}`,children:(0,r.jsxs)("div",{className:"flex justify-between px-8 py-4",children:[r.jsx("ul",{className:"flex flex-col text-nowrap",children:g.map((e,s)=>r.jsx("li",{className:"my-2",children:r.jsx("a",{href:`/category/${(0,d.Of)(e.toLocaleLowerCase())}`,className:"border-b border-white hover:pb-1 hover:border-purple-800",children:e})},s))}),r.jsx("img",{src:"https://via.placeholder.com/300x75",alt:"placeholder",className:"hidden ml-4 pl-8 border-l border-gray-300"})]})})]})]})}),r.jsx("div",{className:"w-1/5 hidden align-middle",children:"search bar "})]})}),r.jsx("div",{className:"lg:hidden my-3",children:(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[r.jsx("a",{href:"#",className:"text-2xl font-bold",children:r.jsx(o(),{src:"/images/the-stack-journal-logo.png",alt:"",width:180,height:50})}),r.jsx("button",{onClick:h,className:"flex items-center px-3 py-2 rounded hover:bg-gray-200",children:r.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})})]})}),e&&r.jsx("div",{className:"fixed inset-0 z-50 bg-black bg-opacity-50",children:(0,r.jsxs)("div",{className:"h-full absolute inset-x-0 px-5 pt-2__ bg-white",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between my-3",children:[r.jsx("a",{href:"/",className:"text-2xl font-bold",children:r.jsx(o(),{src:"/images/the-stack-journal-logo.png",alt:"",width:180,height:50})}),r.jsx("button",{onClick:h,className:"px-3 py-2 rounded hover:bg-gray-200",children:r.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})})]}),r.jsx(c.Z,{}),r.jsx("ul",{className:"text-2xl",children:[...u,...g].map((e,s)=>r.jsx("li",{className:"py-3",children:r.jsx("a",{href:`/category/${(0,d.Of)(e.toLocaleLowerCase())}`,className:"text-purple-800 hover:underline",children:e})},s))})]})})]})}},1139:(e,s,t)=>{"use strict";t.d(s,{Z:()=>a});var r=t(997);function a({tall:e=null}){return r.jsx("hr",{className:`border-accent-2 ${e?"my-12 lg:my-20":"my-8 lg:my-10"}`})}},9011:(e,s,t)=>{"use strict";t.d(s,{B:()=>c,DT:()=>d,M:()=>n,Y4:()=>l,Yr:()=>g,ds:()=>h,f0:()=>u,h9:()=>o,tG:()=>i});let r=process.env.WORDPRESS_API_URL||"";async function a(e="",{variables:s}={}){let t={"Content-Type":"application/json"};process.env.WORDPRESS_AUTH_REFRESH_TOKEN&&(t.Authorization=`Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`);let a=await fetch(r,{headers:t,method:"POST",body:JSON.stringify({query:e,variables:s})}),n=await a.json();if(n.errors)throw console.error(n.errors),Error("Failed to fetch API");return n.data}async function n(e,s="DATABASE_ID"){return(await a(`
    query PreviewPost($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        databaseId
        slug
        status
      }
    }`,{variables:{id:e,idType:s}})).post}async function o(){let e=await a(`
    {
      posts(first: 10000) {
        edges {
          node {
            slug
            id
            tags {
              edges {
                node {
                  name
                }
              }              
            }
            categories {
              edges {
                node {
                  name
                }
              }              
            }
          }
        }
      }
    }
  `);return e?.posts}async function i(){return await a(`
    {
      categories(first: 20) {
        edges {
          node {
            slug
            name
            link
          }
        }
      }
    }
  `)}async function l(){return await a(`
    {
      tags(first: 100) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)}async function d(e){let s=await a(`
    query AllPosts {
      posts(first: 100, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            title
            excerpt
            slug
            date
            categories(first: 1) {
              edges {
                node {
                  name
                  slug
                }
              }
            }
            extras {
              isCoverStory
              isFeatured
            }
            featuredImage {
              node {
                sourceUrl
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
          }
        }
      }
    }
  `,{variables:{onlyEnabled:!e,preview:e}});return s?.posts}async function c(e,s=""){let t=await a(`
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
  `,{variables:{category:e,endCursor:s}});return t?.posts}async function u(e,s=""){console.log(s);let t=await a(`
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
  `,{variables:{tag:e,endCursor:s}});return t?.posts}async function g(e,s,t){let r=await a(`
    query AllPosts($categories: [ID]!, $tags: [String]!) {
      posts(first: 4, where: {categoryIn: $categories, tagSlugIn: $tags}) {
        edges {
          node {
            title
            excerpt
            slug
            date
            categories(first: 1) {
              edges {
                node {
                  name
                  slug
                }
              }
            }
            featuredImage {
              node {
                sourceUrl
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
          }
        }
      }
    }
  `,{variables:{categories:[s],tags:t}});return r.posts.edges=r.posts.edges.filter(({node:s})=>s.slug!==e),r?.posts}async function h(e,s,t){let r=s&&t?.post,n=Number.isInteger(Number(e))?Number(e)===r.id:e===r.slug,o=n&&r?.status==="draft",i=n&&r?.status==="publish",l=await a(`
    fragment AuthorFields on User {
      name
      firstName
      lastName
      avatar {
        url
      }
    }
    fragment PostFields on Post {
      title
      excerpt
      slug
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
      author {
        node {
          ...AuthorFields
        }
      }
      categories {
        edges {
          node {
            name
            slug
            categoryId
          }
        }
      }
      tags(first: 3) {
        edges {
          node {
            name
          }
        }
      }
    }
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...PostFields
        content
        ${i?`
        revisions(first: 1, where: { orderby: { field: MODIFIED, order: DESC } }) {
          edges {
            node {
              title
              excerpt
              content
              author {
                node {
                  ...AuthorFields
                }
              }
            }
          }
        }
        `:""}
      }
      
      posts(first: 5, where: {orderby: {field: DATE, order: DESC}}) {
        edges {
          node {
            ...PostFields
          }
        }
      }
      categories {
        edges {
          node {
            name
            slug
          }
        }
      }
    }
  `,{variables:{id:o?r.id:e,idType:o?"DATABASE_ID":"SLUG"}});if(o&&(l.post.slug=r.id),i&&l.post.revisions){let e=l.post.revisions.edges[0]?.node;e&&Object.assign(l.post,e),delete l.post.revisions}return l}},4658:(e,s,t)=>{"use strict";t.d(s,{OX:()=>n,vC:()=>a,yf:()=>r});let r="The Stack Journal | Your tech source; women by women",a="https://pbs.twimg.com/profile_images/1717871792323264512/tVsGvCry_400x400.jpg",n="TheStackJournal"},7437:(e,s,t)=>{"use strict";t.d(s,{Cz:()=>i,O7:()=>a,Of:()=>n,Td:()=>r,bQ:()=>o,kC:()=>l});let r=(e,s,t=e.length)=>e.filter(e=>e.node.categories.edges.some(({node:e})=>e.name===s)).slice(0,t),a=e=>e[Math.round(Math.random()*e.length)],n=e=>e.split(" ").join("-"),o=e=>e.split("-").join(" "),i=async(e,s,t)=>{try{let r=await (await fetch("/api/mailer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({subject:e,message:s})})).json();console.log({data:r}),t(!0),setTimeout(()=>{t(!1)},3e3)}catch(e){console.error(e)}},l=e=>e[0].toUpperCase()+e.slice(1)},1484:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});var r=t(997);t(9517);let a=function({Component:e,pageProps:s}){return r.jsx(e,{...s})}},6100:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>n});var r=t(997),a=t(6859);function n(){return(0,r.jsxs)(a.Html,{lang:"en",children:[(0,r.jsxs)(a.Head,{children:[r.jsx("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),r.jsx("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),r.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Mulish&display=swap",rel:"stylesheet"})]}),(0,r.jsxs)("body",{children:[r.jsx(a.Main,{}),r.jsx(a.NextScript,{})]})]})}},9517:()=>{}};