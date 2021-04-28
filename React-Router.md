### 1. 개요 
페이지 주소를 정의 할 때, 우리는 유동적인 값을 전달해야 할 때도 있습니다. 이는 파라미터와 쿼리로 나뉘어질 수 있는데요
```
파라미터: /profiles/velopert
```
```
쿼리: /about?details=true
```
> 일반적으로는 파라미터는 특정 id 나 이름을 가지고 조회를 할 때 사용하고,
쿼리의 경우엔 어떤 키워드를 검색하거나, 요청을 할 때 필요한 옵션을 전달 할 때 사용합니다.
### 2. URL Params
App.js에서 
src/App.js
이제 Profile 을 App 에서 적용해볼건데요, path 규칙에는 /profiles/:username 이라고 넣어주면 username 에 해당하는 값을 파라미터로 넣어주어서 Profile 컴포넌트에서 match props 를 통하여 전달받을 수 있게 됩니다.

### 2. URL Params
- /profile/velopert 이런식으로 뒷부분에 username 을 넣어줄 때 해당 값을 파라미터로 받아와보겠습니다.
```
import React from 'react';

// 프로필에서 사용 할 데이터
const profileData = {
  velopert: {
    name: '김민준',
    description:
      'Frontend Engineer @ Laftel Inc. 재밌는 것만 골라서 하는 개발자'
  },
  gildong: {
    name: '홍길동',
    description: '전래동화의 주인공'
  }
};

const Profile = ({ match }) => {
  // 파라미터를 받아올 땐 match 안에 들어있는 params 값을 참조합니다.
  const { username } = match.params;
  const profile = profileData[username];
  if (!profile) {
    return <div>존재하지 않는 유저입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;  
``` 


```import React from 'react';
import { Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profile from './Profile';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};

export default App;
```
>파라미터를 받아올 땐 match 안에 들어있는 params 값을 참조합니다.
match 객체안에는 현재의 주소가 Route 컴포넌트에서 정한 규칙과 어떻게 일치하는지에 대한 정보가 들어있습니다.

### 2. Query
- 쿼리는 라우트 컴포넌트에게 props 전달되는 location 객체에 있는 search 값에서 읽어올 수 있습니다.
> location 객체는 현재 앱이 갖고있는 주소에 대한 정보를 지니고있습니다.
> location 객체 예시

{
  key: 'ac3df4', // not with HashHistory!
  pathname: '/somewhere'
  search: '?some=search-string',
  hash: '#howdy',
  state: {
  
  여기서 search 값을 확인해야하는데, 이 값은 **문자열 형태**로 되어있습니다. **객체 형태로 변환하는건 우리가 직접 해주어야 합니다.**

이 작업은 **qs 라는 라이브러리를 사용**하여 쉽게 할 수 있습니다.

### src/About.js
About 컴포넌트에서 search 값에있는 detail 값을 받아와서, 해당 값이 true 일때 추가정보를 보여주도록 구현을 해보겠습니다.
```javascript
import React from 'react';
import qs from 'qs';

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true // /about?details=true 같은 쿼리 주소의 '?'를 생략해주는 옵션입니다.
  });
  const detail = query.detail === 'true'; // 쿼리의 파싱결과값은 문자열입니다.

  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트랍니다.</p>
      {detail && <p>추가적인 정보가 어쩌고 저쩌고..</p>}
    </div>
  );
};

export default About;
```

출처 : <https://react.vlpt.us/react-router/02-params-and-query.html | velopert>


### 뒤로가기 이벤트 제어

```
componentDidMount() {
    this._isMounted = true;
    window.onpopstate = ()=> {
      if(this._isMounted) {
        const { hash } = location;
        if(hash.indexOf('home')>-1 && this.state.value!==0)
          this.setState({value: 0})
        if(hash.indexOf('users')>-1 && this.state.value!==1)
          this.setState({value: 1})
        if(hash.indexOf('data')>-1 && this.state.value!==2)
          this.setState({value: 2})
      }
    }
  }
```

```
import { useHistory } from 'react-router-dom'


const [ locationKeys, setLocationKeys ] = useState([])
const history = useHistory()

useEffect(() => {
  return history.listen(location => {
    if (history.action === 'PUSH') {
      setLocationKeys([ location.key ])
    }

    if (history.action === 'POP') {
      if (locationKeys[1] === location.key) {
        setLocationKeys(([ _, ...keys ]) => keys)

        // Handle forward event

      } else {
        setLocationKeys((keys) => [ location.key, ...keys ])

        // Handle back event

      }
    }
  })
}, [ locationKeys, ])
```

출처 : <https://stackoverflow.com/questions/39342195/intercept-handle-browsers-back-button-in-react-router>
