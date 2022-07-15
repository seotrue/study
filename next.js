1. getServerSideProps (SSR)

getServerSideProps 는 요청할때마다 html이 생성되기 때문에 데이터가 계속 업데이트 됩니다.
요청할때마다 데이터를 계속 불러오는 것이죠.
그래서 데이터를 새로 받아오면 그 데이터로 페이지가 렌더링 됩니다
```
//page

function Page({ data }) {
...
}

export async function getServerSideProps() {

  const res = await axios.get(`https://localholst:3065/user`)
  const data = res.data

  return { props: { data } }
}
```

page를 사용자가 요청하면 getServerSideProps 를 먼저 실행후 프론트가 서버에 직접요청 후 데이터를 받아와서 page 컴포넌트에 date를 props로 전달하여 렌더링 할 수 있습니다.
getServerSideProps 는 계속 데이터가 바뀌어야하는 페이지의 경우 사용합니다


2. getStaticProps, getStaticPaths (SSG)
html이 빌드타임에 생성됩니다.
빌드할때 데이터를 가져와서 html 을 생성후 사용자의 요청이 들어올때마다 빌드된 html 을 재사용합니다

```
/page

function Page({ data }) {
...
}

export async function getStaticProps() {

  const res = await axios.get(`https://localholst:3065/user`)
  const data = res.data

  return { props: { data } }
}
  ```
  아무래도 미리 html파일을 만들어놓고 요청시에 보여주기 때문에 성능적으로 봤을때 빠릅니다.
하지만 데이터가 계속 바뀌어야하는 페이지라면 이 방법은 쓰지 않는게 좋습니다.
내 페이지가 계속 업데이트 되지 않는페이지라면 ? 그때 이 getStaticProps 를 쓰는 것이 좋겠죠.

다이나믹 라우팅을 사용하여 정적페이지를 만들경우에 getStaticProps 를 사용한다면 getStaticPaths와 함께 써주어야 합니다.
