
// import React, { useEffect, useState } from 'react'
// const [choiceContent, setchoiceContent] = useState("")

// const renderCoices = choices.map((choice, err) => {

//     const onChoiceInput = (e) => {
//         console.log(e)
//         console.log(e.target.innerText);
//         setchoiceContent(e.target.innerText)
//     }

//     const onChoiceSelected = (choice) => {
//         console.log(choice._id);
//         console.log("Asdasd")
//     }

//     return (
//         <li  aria-disabled="false" aria-selected="false" className="base-choice__Root-sc-5koeqf-0 esxXJo checkbox-choice__ChoiceRoot-m4g23g-0 ksyabb" tabindex="0" style={{marginBottom: "8px", marginRight: "0px", width: "100%"}}>
//             <div className="key-helper__Root-p7s0zv-0 iLxcoS">
//                 <div className="key-helper__KeyHelperWrapper-p7s0zv-1 ghFPzf" aria-hidden="true">
//                     <div className="key-helper__HintWrapper-p7s0zv-5 ARZge">
//                         <div className="key-helper__Hint-p7s0zv-3 jKGbWg">
//                             <span onClick={()=>onChoiceSelected(choice)}  className="key-helper__Letter-p7s0zv-2 jYALOT">
//                                 A
//                             </span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div  className="checkbox-choice__ChoiceContent-m4g23g-1 sKZfw">
//                 <div className="text__TextWrapper-sc-1t2ribu-0 cSDVNt">
//                     <div onInput={onChoiceInput}  style={{cursor: "text"}}contenteditable="true" className="text__TextWrapper-sc-1t2ribu-0 cSDVNt styled-components__InnerChoiceText-cykob3-0 uRMpe ql-editor">
//                         {`${choice.choiceContent}`}&nbsp;&nbsp;
//                     </div>
//                 </div>
//                 <button className="delete-choice__StyledButton-sc-12fxobp-0 yfJuq">
//                     <span className="icon__Boundary-sc-2r3yc0-0 bYBMUi"></span>
//                 </button>
//             </div>
//         </li>
//     )
// }) 