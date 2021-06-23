// import { ArrowRightOutlined, BuildFilled, DeleteFilled } from "@ant-design/icons";

// const renderQuestions_ = questions.map((question, index) => {

//     const onChooseQuestion = () => {
//         setquestionId(question._id);
//         setchoosedQuestion(question);

//         setisQuestionEditOverayOpen(true);
//     }

//     const variabeles = {
//         questionId: question._id
//     }

//     Axios.post('/api/miniform/getChoices', variabeles)
//     .then(response => {
//         if(response.data.success){
//             console.log('선택지 목록을 가져옵니다.')
//             console.log(response.data);
//             console.log(response.data.choices);
//             setchoices(response.data.choices);
//         }else{
//             console.log(response.data.err);
//             alert("질문 목록 정보 가져오기에 실패하였습니다.")
//         }
//     });

//     const onQuestionDeleteBtnClicked = () => {

//         setisQuestionEditOverayOpen(false);

//         const variables = {
//             questionId: question._id
//         }

//         Axios.post('/api/miniForm/deleteQuestion', variables)
//                 .then(response => {
//                     if(response.data.success){
//                         alert('question을 성공적으로 삭제했습니다.')
//                         console.log(response.data);
//                         setquestionId(response.data.doc._id);
//                         setisQuestionEditOverayOpen(false);
//                     }else{
//                         alert('question 삭제에 실패했습니다.')
//                         console.log(response.data.err);
//                     }
//                 })
//     }

//     const onQuestionDuplicateBtnClicked = () => {

//         setisQuestionEditOverayOpen(false);

//         const variables = {
//             creator: user.userData._id,
//             miniformId: miniform.miniformData._id,
//             type: question.type,
//             title: question.title,
//             description: question.description
//         }

//         Axios.post('/api/miniForm/createQuestion', variables)
//                 .then(response => {
//                     if(response.data.success){
//                         alert('question을 성공적으로 업로드했습니다.')
//                         console.log(response.data);
//                         setquestionId(response.data.doc._id);
//                         setisQuestionEditOverayOpen(false);
//                     }else{
//                         alert('question 업로드에 실패했습니다.')
//                         console.log(response.data.err);
//                     }
//                 })
        
//     }

//     return (
//         <div onClick={()=>{onChooseQuestion()}} className="mobile-blocks__BlockCardWrapper-e89vlz-2 cZBBpo">
//             <div className="Card-sc-__i4fuko-0 block-card__StyledCard-sc-1hulqrn-0 KMSms">
//                 <div className="block-card__BlockPreview-sc-1hulqrn-1 dMzmnt">
//                     <div  className="base-styles__BaseStyle-sc-1oava9b-0 eCIkjX" style={{height: "100%"}}>
//                         <div font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif" className="font-loader__Root-sc-1fy2i3z-0 cjaqNS">
//                             <div  className="blocks__Root-sc-1biwhcv-0 fxyRAm">
//                                 <div className="structure__QuestionGroupHeaderPositioner-sc-110lqy5-0 leiYjO"></div>
//                                     <div className="background__Background-esq3f2-0 dnoZnt"></div>
//                                     <section  className="block-section__LayoutWrapper-vw1wyv-0 iUMTIq">
//                                         <div className="block-section__Section-vw1wyv-1 ciJWyh">
//                                             <div className="layout-container__AnimationLayer-sc-1ektm8w-5 loaOtL">
//                                                 <div className="layout-container__SlideEditorWrapper-sc-1ektm8w-2 gqTwKu">
//                                                     <div className="layout-container__BlueBorder-sc-1ektm8w-1 ddvUqr">
//                                                         <div className="block-structure__Root-sc-1esu8nk-2 cHnjJw">
//                                                             <div className="block-structure__ContentWrapper-sc-1esu8nk-3 ihRIGN">
//                                                                 <div className="layout-container__Root-fb7y4k-0 eqzgCG">
//                                                                     <div className="spacer__Spacer-sc-11bdvt0-0 ivwqbk">
//                                                                         <div>
//                                                                             <div>
//                                                                                 <div className="question-header__HeaderWrapper-z8zey9-3 kmXpQb">
//                                                                                     <div className="question-header__CounterPosition-z8zey9-1 jpSUgR">
//                                                                                         <div className="question-header__CounterWrapper-z8zey9-2 HTMcj">
//                                                                                             <div className="responsive-spacer__SpacerWrapper-sc-2bvre0-0 byBIsc">
//                                                                                                 <div className="question-header__CounterContent-z8zey9-0 phqXL">
//                                                                                                     <span className="text__TextWrapper-sc-1t2ribu-0 dItgWa">
//                                                                                                         <span aria-hidden="true">1</span>
//                                                                                                     </span>
//                                                                                                     <div className="spacer__Spacer-sc-11bdvt0-0 hmrdyC">
//                                                                                                         <ArrowRightOutlined />
//                                                                                                     </div>
//                                                                                                 </div>
//                                                                                             </div>
//                                                                                         </div>
//                                                                                     </div>
//                                                                                     <div className="text__TextWrapper-sc-1t2ribu-0 hfwBJe">
//                                                                                         <div className="title-wrapper__EditorWrapper-sc-1lndwj3-0 dCEpnJ">
//                                                                                             <span font-family="sans" className="Text-sc-__sc-1h7ebrz-0 text-with-variables__StyledText-p8jim8-0 kHLYPD">
//                                                                                                 {`${question.title === "undefined"?"":question.title}`}
//                                                                                             </span>
//                                                                                         </div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                                 <div className="responsive-spacer__SpacerWrapper-sc-2bvre0-0 greOqb">
//                                                                                     {/* <p className="text__TextWrapper-sc-1t2ribu-0 fJzfNd"></p> */}
//                                                                                         <span font-family="sans" className="Text-sc-__sc-1h7ebrz-0 text-with-variables__StyledText-p8jim8-0 kHLYPD">
//                                                                                             {`${question.description === "undefined"?"":question.description}`}
//                                                                                         </span>
//                                                                                     {/* </p> */}
//                                                                                 </div>
//                                                                             </div>
//                                                                             <div className="responsive-spacer__SpacerWrapper-sc-2bvre0-0 ePKbAa">
//                                                                                 <div className="choice-list__DraggableWrapper-sc-1t4szy6-0 MDMuf">
//                                                                                     <div className="choices-layout__StyledDiv-qpux4o-0 jooQcT" style={{position: "relative"}}>
//                                                                                         <ul className="choices-layout__ChoicesLayoutWrapper-qpux4o-1 bArHQn">
                                                                                            
//                                                                                             {renderCoices}

//                                                                                         </ul>
//                                                                                         <div style={{visibility: "hidden", 
//                                                                                                                 display: "inline", 
//                                                                                                                 width: "0px", 
//                                                                                                                 height: "0px", 
//                                                                                                                 zIndex: "-1'", 
//                                                                                                                 overflow: "hidden", 
//                                                                                                                 margin: "0px", 
//                                                                                                                 padding: "0px"}} className="erd_scroll_detection_container erd_scroll_detection_container_animation_active">
//                                                                                             <div dir="ltr" className="erd_scroll_detection_container" style={{position: "absolute",
//                                                                                                                                                                                                                 flex: "0 0 auto",
//                                                                                                                                                                                                                 overflow: "hidden", 
//                                                                                                                                                                                                                 zIndex: "-1",
//                                                                                                                                                                                                                 visibility: "hidden",
//                                                                                                                                                                                                                 width: "100%", 
//                                                                                                                                                                                                                 height: "100%", 
//                                                                                                                                                                                                                 left: "0px", 
//                                                                                                                                                                                                                 top: "0px"}}>
//                                                                                                 <div className="erd_scroll_detection_container" style={{position: "absolute", flex: "0 0 auto", overflow: "hidden", zIndex: "-1", visibility: "hidden", inset: "-22px -21px -21px -22px"}}>
//                                                                                                     <div style={{position: "absolute", flex: "0 0 auto", overflow: "scroll", zIndex: "-1", visibility: "hidden", width: "100%", height: "100%"}}>
//                                                                                                         <div style={{position: "absolute", left: "0px", top: "0px", width: "689px", height: "141px"}}></div>
//                                                                                                     </div>
//                                                                                                     <div style={{position: "absolute", flex: "0 0 auto", overflow: "scroll", zIndex: "-1", visibility: "hidden", width: "100%", height: "100%"}}>
//                                                                                                         <div style={{position: "absolute", width: "200%", height: "200%"}}></div>
//                                                                                                     </div>
//                                                                                                 </div>
//                                                                                             </div>
//                                                                                         </div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div className="layout-container__Positioner-sc-1ektm8w-0 lmdOTj">
//                                                         <span>
//                                                             <div>
//                                                                 <div className="layout-container__ChoiceMenuButton-sc-1ektm8w-3 dKqvRS">
//                                                                     <div height="auto" width="auto"  color="notification" className="Align-sc-__sc-4yw49j-0 IconRoot-sc-__sc-1eorqw0-0 lgXscy layout-container__MenuIcon-sc-1ektm8w-4 lnTfzP">
//                                                                         <span className="SVGInline">
//                                                                             <svg></svg>
//                                                                         </span>
//                                                                     </div>
//                                                                     <span font-family="sans" className="Text-sc-__sc-1h7ebrz-0 gEWZOm">Multiple Choice</span>
//                                                                 </div>
//                                                             </div>
//                                                         </span>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </section>
//                                     <div className="blocks__LayoutWrapper-sc-1biwhcv-1 itpNEP">
//                                         <div style={{display: "block", transition: "all 200ms ease 0s", opacity: "1"}}>
//                                             <div className="block-media__Wrapper-sc-13u0f85-0 fXznvb">
//                                                 <div className="block-media__AttachmentWrapper-sc-13u0f85-1 ejWnWg">
//                                                     <div className="block-media__FilterWrapper-sc-13u0f85-2 fPJPWB"></div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="erd_scroll_detection_container erd_scroll_detection_container_animation_active" style={{visibility: "hidden", display: "inline", width: "0px", height: "0px", zIndex: "-1", overflow: "hidden", margin: "0px", padding: "0px"}}>
//                                         <div dir="lDutr" className="erd_scroll_detection_container" style={{position: "absolute", flex: "0 0 auto", overflow: "hidden", zIndex: "-1", visibility: "hidden", width: "100%", height: "100%", left: "0px", top: "0px"}}>
//                                             <div className="erd_scroll_detection_container" style={{position: "absolute", flex: "0 0 auto", overflow: "hidden", zIndex: "-1", visibility: "hidden", inset: "-22px -21px -21px -22px"}}>
//                                                 <div style={{position: "absolute", left: "0px", top: "0px", width: "1060px", height: "265px"}}></div>
//                                             </div>
//                                             <div style={{position: "absolute", flex: "0 0 auto", overflow: "scroll", zIndex: "-1", visibility: "hidden", width: "100%", height: "100%"}}>
//                                                 <div style={{position: "absolute", width: "200%", height: "200%"}}></div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="block-card__PointerTrap-sc-1hulqrn-3 cNRoUc"></div>
//                     </div>
//                     <div className="block-card__Footer-sc-1hulqrn-4 bdgEVv">
//                     <button style={{zIndex:"1200"}} onClick={()=>{onQuestionDuplicateBtnClicked()}} type="button" className="ButtonRoot-sc-__sc-1vu0deq-0 goutua block-card__StyledButton-sc-1hulqrn-5 hlLnOL">
//                         <div orientation="horizontal" className="Distribute-sc-__sc-1s2i8aq-0 YOXft">
//                             <div height="auto" width="auto" color="#262627" className="Align-sc-__sc-4yw49j-0 IconRoot-sc-__sc-1eorqw0-0 buHmdN">
//                                 <BuildFilled className="goutua" style={{padding:"0px", width: "16px", height:"16px" }}/>               
//                             </div>
//                             <span font-family="sans" className="Text-sc-__sc-1h7ebrz-0 goutua">Duplicate</span>
//                         </div>
//                     </button>
//                     {questions.length > 1 && 
//                     <button style={{zIndex:"1300"}} onClick={()=>{onQuestionDeleteBtnClicked()}} type="button" className="ButtonRoot-sc-__sc-1vu0deq-0 goutua block-card__StyledButton-sc-1hulqrn-5 hlLnOL">
//                         <div orientation="horizontal" className="Distribute-sc-__sc-1s2i8aq-0 YOXft">
//                             <div height="auto" width="auto" color="#262627" className="Align-sc-__sc-4yw49j-0 IconRoot-sc-__sc-1eorqw0-0 buHmdN">
//                                 <DeleteFilled className="goutua" style={{padding:"0px", width: "16px", height:"16px" }}/>
//                             </div>
//                             <span style={{padding:"0px"}}  font-family="sans" className="Text-sc-__sc-1h7ebrz-0 djRoaw goutua">Delete</span>
//                         </div>    
//                     </button>}
//                 </div>
//             </div>
//         </div>
//     )
// })