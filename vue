vue

- Vue.set
Vue.set(vm.items, indexOfItem, newValue)
별칭 :  vm.$set(vm.items, indexOfItem, newValue)

 Vue.set(object, propertyName, value) 메소드를 사용하여 중첩된 객체에 반응형 속성을 추가할 수 있습니다.

var vm = new Vue({
  data: {
    userProfile: {
      name: 'Anika'
    }
  }
})

Vue.set(vm.userProfile, 'age', 27)

- v-bind

- computed
var vm = new Vue({
  el: '#example',
  data: {
    message: '안녕하세요'
  },
  computed: {
    // 계산된 getter
    reversedMessage: function () {
      // `this` 는 vm 인스턴스를 가리킵니다.
      return this.message.split('').reverse().join('')
    }
  }
})

- computed vs 메소드
<p>뒤집힌 메시지: "{{ reversedMessage() }}"</p>
methods: {
  reversedMessage: function () {
    return this.message.split('').reverse().join('')
  }
}
-  차이점은 computed 속성은 종속 대상을 따라 저장(캐싱)된다는 것 이에 비해 메소드를 호출하면 렌더링을 다시 할 때마다 항상 함수를 실행합니다.

- computed 속성 vs watch 속성

watch : watch는 Vue 인스턴스의 특정 프로퍼티가 변경될때 지정한 콜백함수가 실행되는 기능이다. 
watch 속성은 '지켜보다'라는 의미를 가지고, data 혹은 computed 속성의 데이터 값이 변경될 때 실행되는 속성이다.
출처: https://mosei.tistory.com/entry/Vuejs-Watch-사용-방법 [씹어먹는 블로그:티스토리]


[v-for]
- 배열 뿐만 아니라  객체의 속성도 반복 할수 있다.
키에 대한 두번째 전달 인자를 제공할 수도 있습니다.
<div v-for=(value, name) in object>
{{name}} : {{}value}
</div>
<div v-for="(value, name, index) in object">
</div>

Maintaing State
데이터 항목의 순서가 변경된 경우 항목의 순서와 일치 하도록 DOM요소를 이동하는 대신  Vue는
각 요소를 적절한 위치에 패치하고 해당 인덱스에서 렌더링 할 내용을 바녕하는지 확인

목록의 출력 결과가 하위 컴포넌트 상태 또는 임시 돔의 상태에 의존하지 않느 경우에 적합

Vue에서 개별 DOM s노드를 추적하고 기존 엘리먼트를 재사용, 재정렬하기 위해서는  v-for의  각 항목들에 고유한 키 속성을 제공
key에 대해 이상적인 값은 각 항목을 식별할수 있는 고유한 id v-bind를 사용하여 동적 가베 바인딩

<div v-for=item in items v-bind:key='item.id'>


[이벤트 핸들링]
<button v-on:click="">
// $event변수를 사용해 메소드에 전달
<button v-on:click="warn('문구',$event)">
