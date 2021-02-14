# study
1. async / promise
2. git 명령어
3. reducer/react-thunk

#### svg
- text 정렬 및 일반 css 는 안먹는다
- fabic.js 라이브러리 캔버스를 svg로 변환/json으로 변환  
  1. textBox 사용 시 <g><text><tspan></tspan</text></g> 로 구조화 
  2. tspan 제거 함수  
  
   ```function deleteTspan(svg) {
    let tspanTagMatch = svg.match(/<tspan.*>(.*)<\/tspan>/); 
    let tspanString = null;
    let text = null;
    let x = null;
    let y = null;
    let groupString = null;
    let matrixString = null;
    let xMatrix = null;
    let yMatrix = null;
    let transformedSvg = svg;
    if (tspanTagMatch && tspanTagMatch.length > 1) {
        text = tspanTagMatch[1];

        tspanString = tspanTagMatch[0];
        let coordMatch = tspanString.match(/x="(-?\d*\.?\d+)" y="(-?\d*\.?\d+)"/);
        if (coordMatch && coordMatch.length > 2) {
            x = parseFloat(coordMatch[1]);
            y = parseFloat(coordMatch[2]);
        }

        let groupTagMatch = svg.match(/<g transform.*>/);
        if (groupTagMatch) {
            groupString = groupTagMatch[0];

            // groupString is like <g transform="matrix(a b c d e f)" style=""  > where e = xMatrix et f = yMatrix
            let matrixMatch = groupString.match(/matrix\((-?\d*\.?\d+) (-?\d*\.?\d+) (-?\d*\.?\d+) (-?\d*\.?\d+) (-?\d*\.?\d+) (-?\d*\.?\d+)\)/);
            if (matrixMatch && matrixMatch.length > 6) {
                matrixString = matrixMatch[0];
                xMatrix = parseFloat(matrixMatch[5]);
                yMatrix = parseFloat(matrixMatch[6]);

                if (x !== null && y !== null && xMatrix !== null && yMatrix !== null &&
                    text !== null && tspanString !== null && groupString !== null && matrixString !== null) {

                    let newMatrixString = 'matrix(' + matrixMatch[1] + ' ' + matrixMatch[2] + ' ' + matrixMatch[3] + ' ' + matrixMatch[4] + ' ' +
                        (x + xMatrix) + ' ' + (y + yMatrix) + ')';

                    transformedSvg = svg
                        .replace(matrixString, newMatrixString)
                        .replace(tspanString, text)
                }
            }
        }
    }

    return transformedSvg;
} ```  
##  


### let sum = a => async b => { return a + b; }의 형태 의미
```
let sum = function(a) {
    return async function(b) {
        return a + b;
    };
}
```  

## 참고 URL
- javascript localstorage 저장/JSON.stringify(), JSON.parse()[https://studyingych.tistory.com/28 ]
- 인피니트 스크롤(리액트)[https://y0c.github.io/2019/06/30/react-infinite-scroll/]
- 정규식 [https://beomy.tistory.com/21]
- 개발자 질문 [https://hashcode.co.kr/]
- vlpt 리덕스 [https://redux-advanced.vlpt.us/2/01.html]
- 모던 자바스크립트 [https://ko.javascript.info/]
- 타입스크립트 [https://joshua1988.github.io/ts/intro.html]
- ES6 축약 기법 [https://chanspark.github.io/2017/11/28/ES6-%EA%BF%80%ED%8C%81.html]
- 에러문법 [https://nodejs.org/api/errors.html#errors_common_system_errors]
- git [https://mylko72.gitbooks.io/git/content/commit/remove.html]
- [README.me 작성법](https://tinydew4.gitbooks.io/gitbook/content/ko/syntax/markdown.html#headings)
- [웹프로그래밍 튜토리얼](https://poiemaweb.com/)
- [MDN](https://developer.mozilla.org/ko/docs/Web/Tutorials)
- [캡팁판교ES6](https://joshua1988.github.io/es6-online-book/template-literal.html#%EC%97%AC%EB%9F%AC-%EC%A4%84%EC%97%90-%EA%B1%B8%EC%B3%90-%EB%AC%B8%EC%9E%90%EC%97%B4-%EC%84%A0%EC%96%B8%ED%95%98%EA%B8%B0)

### 웹팩
- 웹팩[https://joshua1988.github.io/webpack-guide/guide.html]

### 개발자 블로그
- [김정환 블로그](https://jeonghwan-kim.github.io/series/2019/12/09/frontend-dev-env-npm.html)
- [캡틴판교 블로그](https://joshua1988.github.io/)
- [제로초](https://www.zerocho.com/)

### 디자인패턴
- https://delivan.dev/react/programming-patterns-with-react-hooks-kr/
- https://snowfleur.tistory.com/129
- [비지니스로직](https://mommoo.tistory.com/67)
