

const moveBtnSt={
  width: "200px",
  height: "200px",
  backgroundColor: "#fff",
  border:"NULL",
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
  border:"NULL",
  borderRadius: "NULL",
  position: "NULL",
  bottom: "NULL",
  left: "NULL",
  transform: "NULL",
  /* flex-set */
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

const mainSt={
  width: "500px",
  height: "500px",  
  backgroundColor: "NULL",
  border: "1px dotted black",
  borderRadius: "NULL",
  position: "NULL",
  bottom: "NULL",
  left: "NULL",
  transform: "NULL",
  /* flex-set */
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

const sectionSt={
  width: "NULL",
  height: "NULL",  
  backgroundColor: "NULL",
  border: "NULL",
  borderRadius: "NULL",
  position: "NULL",
  bottom: "NULL",
  left: "NULL",
  transform: "NULL",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

const listSt={
  width: "100%",
  height: "50px",
  backgroundColor: "#fff",
  border: "1px solid black",
  borderRadius: "NULL",
  position: "NULL",
  bottom: "NULL",
  left: "NULL",
  transform: "NULL",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

const firstSectionChildSt={
  width: "200px",
  height: "450px",
  backgroundColor: "NULL",
  border: "1px solid black",
  borderRadius: "NULL",
  position: "NULL",
  bottom: "NULL",
  left: "NULL",
  transform: "NULL",
  display: "NULL",
  justifyContent: "NULL",
  alignItems: "NULL"
}

const lastSectionChildSt={
  width: "200px",
  height: "450px",
  backgroundColor: "NULL",  
  border: "1px solid blue",
  borderRadius: "NULL",
  position: "NULL",
  bottom: "NULL",
  left: "NULL",
  transform: "NULL",
  display: "NULL",
  justifyContent: "NULL",
  alignItems: "NULL"
}






function CreateNewElement(EName){
    let element=document.createElement(EName);
    return element;
}


function setStyle(element,style){
  // if(!style.width=="NULL")element.style.width= style.width;
  // if(!style.height=="NULL")element.style.height= style.height;
  // if(!style.backgrounColor=="NULL")element.style.backgroundColor= style.backgroundColor;
  // if(!style.border=="NULL")element.style.border= style.border;
  // if(!style.borderRadius=="NULL")element.style.borderRadius= style.borderRadius;
  // if(!style.position=="NULL")element.style.position= style.position;
  // if(!style.bottom=="NULL")element.style.bottom= style.bottom;
  // if(!style.left=="NULL")element.style.left= style.left;
  // if(!style.transform=="NULL")element.style.transform= style.transform;
  // if(!style.display=="NULL")element.style.display= style.display;
  // if(!style.justifyContent=="NULL")element.style.justifyContent= style.justifyContent;
  // if(!style.alignItems=="NULL")element.style.alignItems= style.alignItems;

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
  setStyle(rightElement.children[0],listSt);

  return rightElement;
}



/* root 엘리멘트 영역 생성 */
// root 생성 및 스타일링
let root=document.getElementById("root");
console.log(!rootSt.width=="NULL");






setStyle(root,rootSt);

// main 생성 및 스타일링
let main=CreateNewElement("main");
setStyle(main,mainSt);

// 좌우 섹션 생성 및 스타일링
let leftSect=createLeftSect();
setStyle(leftSect,sectionSt);
let rightSect=createRightSect();
setStyle(rightSect,sectionSt);

main.appendChild(leftSect);
main.appendChild(rightSect);

/* move button 영역 생성 */
let mBtn=document.getElementById("move-btn");
setStyle(mBtn,moveBtnSt);

let moveText=CreateNewElement("h1");
moveText.textContent="move!";
mBtn.appendChild(moveText);














