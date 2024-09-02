//리덕스 상태변화할때 예시
const state = {
  user: {
      profile: {
          name: "Alice",
          address: {
              city: "Wonderland",
              zipCode: "12345"
          }
      },
      loggedIn: false
  }
};
const newState = {
  ...state,  // 최상위 레벨 얕은 복사
  user: {
      ...state.user,  // user 객체 얕은 복사
      profile: {
          ...state.user.profile,  // profile 객체 얕은 복사
          address: {
              ...state.user.profile.address,  // address 객체 얕은 복사
              city: "New Wonderland"  // city 속성만 변경
          }
      }
  }
};
console.log(state)
console.log(newState)