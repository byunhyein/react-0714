# 제목1

<!-- # 하고 띄어쓰기하고 제목 해야 제목 텍스트로 .. 인식된다~ -->

## 제목2

### 제목3

#### 제목4

##### 제목5

###### 리액트 앱 설치

- 개발서버 실행
  1. `npm run dev`

---

###### 리액트 앱 실행

- npm 모듈 설치
  1. `npm i`

---

#### 저장소를 깃으로 관리하기!

- 다음 명령어들은 GitHub에 첫 번째 커밋을 올리기 위한 과정입니다.


1. ! 현재 폴더를 Git 저장소로 초기화합니다. (최초 1회만 실행, 이후는 재할당 / 초기화는 항상 1번만)

```bash
git init
```


2. README.md 파일을 커밋할 준비 상태로 올립니다.
   1. `git add 파일명`
   2. `.` (마침표) : 변경 이력이 있는 파일만 선택
   3. `*` (애스터리스크 / 와일드카드) : 모든 파일 선택

```bash
git add .
```


3. 스테이지에 올라간 변경 내용을 "first commit"이라는 메시지로 저장합니다.

```bash
git commit -m "first commit"
```


4. ! 현재 브랜치 이름을 기본 이름인 main으로 변경합니다. (최초 1회만 실행)

```bash
git branch -M main
```


5. ! GitHub 저장소를 원격 저장소로 등록합니다. 여기서 origin은 저장소의 별칭입니다. (최초 1회만 실행)

```bash
git remote add origin https://github.com/byunhyein/react-0714.git
```


6. 로컬의 main 브랜치를 GitHub의 origin 저장소에 업로드합니다.
   - `-u`는 이후 `git pull`이나 `git push`를 편하게 하기 위해 업스트림 브랜치를 설정합니다.

```bash
git push -u origin main
```

(2회차부터는 add commit push 로테이션 시키기)
