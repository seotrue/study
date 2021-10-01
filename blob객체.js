### Blob 객체
1. Blob 객체란?

파일과 흡사한 불변 객체로 raw data이며, 데이터를 표현하기 때문에 

필연적으로 자바스크립트 네이티브 포맷이 아니다.

File 인터페이스는 기본적으로 Blob을 통해 이뤄지며, blob의 함수들을 

상속받고 확장하여 사용자 시스템의 파일을 지원해준다.

https://developer.mozilla.org/ko/docs/Web/API/Blob

 

new Blob()의 파라미터로 내용과 타입을 입력할 수 있는데

내용은 배열로 입력해야 하며 '\ufeff'를 CONTENT에 더해준 이유는

한글이 csv파일에서 깨지지 않도록 BOM을 지정하는 것이다. 

 

2. navigator.appVersion

사용중인 브라우저의 버전을 알 수 있는 있고, IE 브라우저를 구분하기 위해 indexOf('.NET) > 0 조건을 주었다.

만일 IE를 사용중이라면 window.navigator.msSaveBlob()으로 Blob객체를 파일 다운로드할 수 있다.

(IE에서는 a태그의 download property를 사용할 수 없어서 위와 같이 프로그래밍 해야 한다.)

 

3. URL.createObjectURL()

파라미터로 주어진 객체를 나타내는 URL을 포함한 DOMString을 생성하는 메소드이며,

생성된 URL을 특정 파일 혹은 Blob 객체를 가리킨다. 

a태그에 href 속성으로 URL을 지정하면 get방식이기 때문에 길이에 제한을 받지만

URL.createObjectURL()을 이용하여 생성된 URL의 경우는 길이의 제약이 없는 것으로 보인다.

https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL



출처: https://developer-syubrofo.tistory.com/103 [슈브로포의 개발 블로그]
