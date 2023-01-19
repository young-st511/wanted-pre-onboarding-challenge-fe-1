# 원티드 CRUD 특강 TODO 프로젝트

# Youngs Todo
- 심플한 UI와 경계 없는 UX를 목표로 하고 있습니다!
- 새로운 기술을 익혔을 때의 테스트 배드도 겸하고 있습니다

## 폴더 구조
```bash
📦src
 ┣ 📂api
 ┣ 📂assets
 ┣ 📂components
 ┃ ┣ 📂NavBar
 ┃ ┣ 📂styles
 ┃ ┗ 📂widgets
 ┃ ┃ ┣ 📂empty
 ┃ ┃ ┗ 📂form
 ┣ 📂contexts
 ┣ 📂data
 ┣ 📂features
 ┃ ┣ 📂auth
 ┃ ┃ ┗ 📂api
 ┃ ┣ 📂sign_up
 ┃ ┃ ┗ 📂api
 ┃ ┗ 📂todolist
 ┃ ┃ ┣ 📂api
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📂TodoCard
 ┃ ┃ ┃ ┗ 📂TodoEditer
 ┃ ┃ ┣ 📂queries
 ┃ ┃ ┗ 📂types
 ┣ 📂hooks
 ┃ ┗ 📂auth
 ┣ 📂pages
 ┃ ┣ 📂LogIn
 ┃ ┣ 📂Root
 ┃ ┣ 📂SignUp
 ┃ ┗ 📂Todos
 ┣ 📂themes
 ┣ 📂types
 ┃ ┗ 📂form
 ┗ 📂utils
```
- 새로운 기술을 익혔을 때 테스트 배드로 사용하기 위해 최대한 최소 기능 단위로 나누어 파일을 관리하고 있습니다.
- 적용해 보고 싶은 기술이 생겼을 때 필요한 부분만 바꿔서 사용할 수 있지 않을까 기대하고 있습니다.

---

## 기능

### 심플한 UI
**로그인 폼**
![로그인 폼](https://user-images.githubusercontent.com/56586322/213447513-04a2e1c0-0de2-4613-ba5d-b6ee133c47fa.png)

**회원가입 폼**
![회원가입 폼](https://user-images.githubusercontent.com/56586322/213447415-32798965-3c60-4a98-b15c-9e38dd584eea.png)

```typescript
function FormInput<TForm extends FieldValues>({
  label,
  name,
  error,
  isError,
  register,
  options,
  autoComplete = "off",
  ...rest
}: Props<TForm>) {
  return (
    <S.Label isError={isError}>
      <S.LabelTitle>{label}</S.LabelTitle>
      <S.Input
        {...register(name, options)}
        {...rest}
        autoComplete={autoComplete}
      />
      {error && <S.Error>{error}</S.Error>}
    </S.Label>
  );
}s
```
- 폼 관련 컴포넌트들을 공통 widget으로 만들어 디자인적인 통일감을 높이고 향후 폼의 확장성을 높였습니다.
- 에러 역시 FormInput widget에서 자체적으로 처리하게 하였습니다.

### 경계 없는 유저 경험
**추가**
![추가](https://user-images.githubusercontent.com/56586322/213449232-9b5dd92a-05fc-4071-9d0c-673d913ce9c3.gif)

**수정**
![수정](https://user-images.githubusercontent.com/56586322/213449415-4b6703dc-c157-4ca7-88e6-a41f13e71aba.gif)

- Todo 추가 시 최대한 유저 경험에 경계가 없도록 UI를 동일하게 만들었습니다
- 수정 버튼을 눌렀을 때 수정 폼으로 자연스럽게 넘어가도록 구현하였습니다.

## 추가해야 할 사항
### 진행 중
- ReactQuery v4로 이동
- Suspense 및 Skeleton UI 적용

### 진행 예정
- 상세 정보 모달창 추가
- Todo List에 완료 여부 추가 (BackEnd 공부 필요함)
- Error Boundary 사용해보기
- 수정 및 삭제 햄버거 메뉴로 

