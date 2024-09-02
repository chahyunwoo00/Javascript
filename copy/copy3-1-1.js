//근데 스프레드 연산자는 얕은 복사라고 알고있는데 깊은 복사라고 설명한 이유가
//arr의 속성을 다시 할당해서 새참조를 갖게 되기때문에 그렇게 설명한거지?

// 맞습니다. 스프레드 연산자(...)는 객체나 배열의 얕은 복사(shallow copy)를 
// 수행합니다. 즉, 스프레드 연산자는 최상위 레벨의 속성이나 요소를 복사하지만, 
// 내부의 객체나 배열은 참조를 공유하게 됩니다. 하지만, 스프레드 연산자를 사용하여 
// 배열 속성을 새로 할당하면, 배열 자체의 참조가 새로 만들어지므로 배열의 최상위 
// 레벨은 새로운 참조를 갖게 됩니다.

// 두 번째 인자에 속성을 새로 할당하면, 그 속성의 참조는 새로 만들어진 객체나
//  배열로 교체되기 때문에 원본과의 참조 충돌이 방지됩니다. 이는 얕은 복사의 특성과
//   결합하여 속성의 참조를 독립적으로 만들 수 있는 방법입니다.


const state = {
  user: {
    profile: {
      name: "Alice",
      address: {
        city: "Wonderland",
        zipCode: "12345"
      }
    },
    loggedIn: false,
    arr: [1, 2, 3, 4]
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
    // arr 배열은 복사되지 않으므로, 원본과 참조를 공유합니다.
  }
};

newState.user.arr[0] = 99;  // newState에서 arr의 첫 번째 요소를 변경합니다.

console.log(state.user.arr);  // [99, 2, 3, 4]
console.log(newState.user.arr);  // [99, 2, 3, 4]

const state = {
  user: {
    profile: {
      name: "Alice",
      address: {
        city: "Wonderland",
        zipCode: "12345"
      }
    },
    loggedIn: false,
    arr: [1, 2, 3, 4]
  }
};

const newState = {
  ...state,
  user: {
    ...state.user,
    profile: {
      ...state.user.profile,
      address: {
        ...state.user.profile.address,
        city: "New Wonderland"
      }
    },
    arr: [...state.user.arr]  // 깊은 복사
  }
};

newState.user.arr[0] = 99;  // newState의 arr의 첫 번째 요소를 변경합니다.

console.log(state.user.arr);  // [1, 2, 3, 4] (변경되지 않음)
console.log(newState.user.arr);  // [99, 2, 3, 4] (변경된 값)
