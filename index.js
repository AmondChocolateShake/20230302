

const moveBtnSt={
  width: "200px",
  height: "200px",
  backgroundColor: "#fff",
  border:"0",
  borderRadius: "50%",
  position: "fixed",
  bottom: "10px",
  left: "50vw",
  transform: "translate(-50%,0)",
  /* flex set */
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

const rootSt={
  width: "100vw",
  height: "100vh",
  backgroundColor: "cadetblue",
  border:"0",
  borderRadius: "0",
  position: "0",
  bottom: "0",
  left: "0",
  transform: "0",
  /* flex-set */
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

const mainSt={
  width: "500px",
  height: "500px",  
  backgroundColor: "0",
  border: "1px dotted black",
  borderRadius: "0",
  position: "0",
  bottom: "0",
  left: "0",
  transform: "0",
  /* flex-set */
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

const sectionSt={
  width: "0",
  height: "0",  
  backgroundColor: "0",
  border: "0",
  borderRadius: "0",
  position: "0",
  bottom: "0",
  left: "0",
  transform: "0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

const listSt={
  width: "100%",
  height: "50px",
  backgroundColor: "#fff",
  border: "1px solid black",
  borderRadius: "0",
  position: "0",
  bottom: "0",
  left: "0",
  transform: "0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

const firstSectionChildSt={
  width: "200px",
  height: "450px",
  backgroundColor: "0",
  border: "1px solid black",
  borderRadius: "0",
  position: "0",
  bottom: "0",
  left: "0",
  transform: "0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

const lastSectionChildSt={
  width: "200px",
  height: "450px",
  backgroundColor: "0",  
  border: "1px solid blue",
  borderRadius: "0",
  position: "0",
  bottom: "0",
  left: "0",
  transform: "0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}






function CreateNewElement(EName){
    let element=document.createElement(EName);
    return element;
}

//for문을 이용해서 스타일링 하고싶은데 감이 안옵니다.
function setStyle(element,style){
  if(!style.width=="0")element.style.width= style.width;
  if(!style.height=="0")element.style.height= style.height;
  if(!style.backgroundColor=="0")element.style.backgroundColor= style.backgroundColor;
  if(!style.border=="0")element.style.border= style.border;
  if(!style.borderRadius=="0")element.style.borderRadius= style.borderRadius;
  if(!style.position=="0")element.style.position= style.position;
  if(!style.bottom=="0")element.style.bottom= style.bottom;
  if(!style.left=="0")element.style.left= style.left;
  if(!style.transform=="0")element.style.transform= style.transform;
  if(!style.display=="0")element.style.display= style.display;
  if(!style.justifyContent=="0")element.style.justifyContent= style.justifyContent;
  if(!style.alignItems=="0")element.style.alignItems= style.alignItems;

}

function createList(parent){
  let list=CreateNewElement("ul");

  for(let i=0;i<5;i++){
    list.appendChild(CreateNewElement("li"));
    list.children[i].textContent="items-"+i;
    setStyle(list.children[i],listSt);
  }

  parent.appendChild(list);
  return list;
}

//CREATING LEFT SECTION
function createLeftSect(){
  let leftElement=CreateNewElement("section");
  leftElement.setAttribute("id","left-sect");
  setStyle(leftElement,firstSectionChildSt);
  let ul=createList(leftElement);

  return leftElement;
}


function createRightSect(){
  let rightElement=CreateNewElement("section");
  rightElement.setAttribute("id","right-sec");
  rightElement.appendChild(CreateNewElement("ul"));
  setStyle(rightElement,lastSectionChildSt);

  return rightElement;
}



/* root 엘리멘트 영역 생성 */
// root 생성 및 스타일링
let root=document.getElementById("root");
setStyle(root,rootSt);

// main 생성 및 스타일링
let main=CreateNewElement("main");
setStyle(main,mainSt);

// 좌우 섹션 생성 및 스타일링
let leftSect=createLeftSect();
let rightSect=createRightSect();
main.appendChild(leftSect);
main.appendChild(rightSect);
root.appendChild(main);

/* move button 영역 생성 */
let mBtn=document.getElementById("move-btn");
setStyle(mBtn,moveBtnSt);

let moveText=CreateNewElement("h1");
moveText.textContent="move!";
mBtn.appendChild(moveText);














