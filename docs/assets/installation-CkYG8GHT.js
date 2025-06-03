import{k as t,j as n}from"./entry.client-BP9oHj2V.js";const l="Цей розділ допоможе вам встановити та розпочати роботу з клієнтським SDK для Medical System API.",o=[{depth:2,value:"Встановлення та використання SDK Клієнта",id:"встановлення-та-використання-sdk-клієнта",children:[{depth:3,value:"1. Отримання SDK",id:"1-отримання-sdk"},{depth:3,value:"2. Встановлення",id:"2-встановлення"}]}],a={title:"Installation Guide",id:"installation"};function i(s){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...t(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h2,{id:"встановлення-та-використання-sdk-клієнта",children:"Встановлення та використання SDK Клієнта"}),`
`,n.jsx(e.p,{children:"Цей розділ допоможе вам встановити та розпочати роботу з клієнтським SDK для Medical System API."}),`
`,n.jsx(e.h3,{id:"1-отримання-sdk",children:"1. Отримання SDK"}),`
`,n.jsxs(e.p,{children:["Ми згенерували клієнтський SDK за допомогою ",n.jsx(e.strong,{children:"OpenAPI Generator"})," на базі нашої OpenAPI специфікації. Ви можете знайти код SDK у нашому репозиторії на GitHub:"]}),`
`,n.jsxs(e.p,{children:["(",n.jsx(e.a,{href:"https://github.com/AlenaYanish/MedicalSystemAPI/tree/main/",children:"https://github.com/AlenaYanish/MedicalSystemAPI/tree/main/"}),")"]}),`
`,n.jsx(e.h3,{id:"2-встановлення",children:"2. Встановлення"}),`
`,n.jsx(e.p,{children:"Залежно від мови програмування, яку ви обрали для генерації SDK, процес встановлення може відрізнятися. Нижче наведено приклад для JavaScript/Node.js, що є типовим для багатьох згенерованих клієнтів."}),`
`,n.jsx(e.p,{children:`For Node.js
npm
To publish the library as a npm, please follow the procedure in "Publishing npm packages".`}),`
`,n.jsx(e.p,{children:"Then install it via:"}),`
`,n.jsxs(e.p,{children:[`npm install medical_system_api --save
git
If the library is hosted at a git repository, e.g. `,n.jsx(e.a,{href:"https://github.com/GIT_USER_ID/GIT_REPO_ID",children:"https://github.com/GIT_USER_ID/GIT_REPO_ID"})," then install it via:"]}),`
`,n.jsx(e.p,{children:`npm install GIT_USER_ID/GIT_REPO_ID --save
For browser
The library also works in the browser environment via npm and browserify. After following the above steps with Node.js and installing browserify with npm install -g browserify, perform the following (assuming main.js is your entry file):`}),`
`,n.jsx(e.p,{children:`browserify main.js > bundle.js
Then include bundle.js in the HTML pages.`}),`
`,n.jsx(e.p,{children:`Webpack Configuration
Using Webpack you may encounter the following error: "Module not found: Error: Cannot resolve module", most certainly you should disable AMD loader. Add/merge the following section to your webpack config:`}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-http",inline:"false",className:"",children:`module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}


`})})]})}function d(s={}){const{wrapper:e}={...t(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{d as default,l as excerpt,a as frontmatter,o as tableOfContents};
//# sourceMappingURL=installation-CkYG8GHT.js.map
