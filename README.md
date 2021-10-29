# JS-Practice
생활코딩 자바 스크립트

## 2021.10.26 기존 코드를 복습하고 컨텐츠 생성, 별개의 JS파일 생성
querySelector vs uerySelectorAll
첫번째거 고르기 vs 전체 골라서 nodeList로 반환

## 2021.10.27 FE 복습
1. link vs script -> Google Font를 넣을 때 link로 하는 것이 더 빠르고 만약 빌드하는 과정에서 flatten하는 것이 있으면 문제 발생 가능
2. 손으로 틀을 짜고 하는 것이 바람직함

## 2021.10.28 유튜브 클론 코딩
overflow-x: hidden;/* Hide horizontal scrollbar */
<script defer></script> //에 defer하는 이유: after page load -> JS load

## 2021.10.29 유튜브 클론 코딩 리뷰
button, button:focus{border:none;cursor:pointer;outline:none;} -> reset button css
### for in vs for of
for(property in myTagList) {
    myTagList[property].style.color = "white";
}
vs
for(element of myTagList) {
    element.style.color="white";
}
### Element
ClassList.toggle vs ClassList.remove/add
