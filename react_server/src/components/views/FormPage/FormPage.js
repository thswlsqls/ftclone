import { AlignLeftOutlined, AppstoreFilled, ArrowLeftOutlined, ArrowRightOutlined, BankFilled, BoxPlotFilled, BuildFilled, CalendarFilled, CheckOutlined, CloseCircleFilled, CloseCircleOutlined, CloseOutlined, CreditCardFilled, DeleteFilled, DownOutlined, EditFilled, EllipsisOutlined, EyeFilled, FacebookFilled, FolderFilled, FunnelPlotFilled, GroupOutlined, LinkedinFilled, LinkOutlined, MailFilled, MessageOutlined, NumberOutlined, PhoneFilled, PictureFilled, PlusOutlined, SelectOutlined, SettingFilled, SignalFilled, StarFilled, TwitterSquareFilled } from '@ant-design/icons';
import { Select } from 'antd';
import Axios from 'axios';
import Avatar from 'antd/lib/avatar/avatar';
import { Option } from 'antd/lib/mentions';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { chooseMiniform } from "../../../REDUX_actions/miniform_actions";
import './formPagestyles2.css';
import questionTypeCollection from './questionTypeCollection';

function FormPage() {

    var user = { userData :{
        isAuth: false
        },
    };

    let state = useSelector(state => state)

    if(state.user.userData){
        user = state.user;
    } 

    const {miniform} = useSelector(state => state);

    const [navState, setnavState] = useState("Create")
    const [tapState, settapState] = useState("Editor")
    const [LCWstate, setLCWstate] = useState(false);
    const [questionType, setquestionType] = useState("Multiple Choice")
    const [isNameInputFocused, setisNameInputFocused] = useState(false)
    const [isFormInitModalOpen, setisFormInitModalOpen] = useState(true)
    
    const [formName, setformName] = useState("my miniform");
    const [formType, setformType] = useState("Select form type")

    const [miniformId, setminiformId] = useState("");

    const [isQuestionTypeDialogOpen, setisQuestionTypeDialogOpen] = useState(false)
    const [questionTypeMouseEnter, setquestionTypeMouseEnter] = useState("Welcome Screen");

    const [choosedQuestion, setchoosedQuestion] = useState({})
    const [questionTitle, setquestionTitle] = useState(`${choosedQuestion == {} ?  "" : choosedQuestion.title }`);
    const [questionDescription, setquestionDescription] = useState(`${choosedQuestion == {} ? "" : choosedQuestion.description}`);
    const [questionId, setquestionId] = useState(`${choosedQuestion == {} ? "" :  choosedQuestion._id}`);
    const [questions, setquestions] = useState([])
    const [isQuestionEditOverayOpen, setisQuestionEditOverayOpen] = useState(false)

    const [isMenuOpened, setisMenuOpened] = useState(false);
    const [thisMenuFocused, setthisMenuFocused] = useState("")

    const [choices, setchoices] = useState([])
    const [choiceNo, setchoiceNo] = useState("")
    const [choiceContent, setchoiceContent] = useState("")
    const [choiceId, setchoiceId] = useState("")
    const [selectedChoice, setselectedChoice] = useState({});
    const [thisQuestionChoices, setthisQuestionChoices] = useState([]);

    const [isPublished, setisPublished] = useState(false);

    const dispatch = useDispatch();
    
    useEffect(() => {

        console.log(miniform);
            
        setminiformId(miniform.miniformData._id);

        const variabeles = {
            miniformId: miniform.miniformData._id
        }

        Axios.post('/api/miniform/getQuestions', variabeles)
        .then(response => {
            if(response.data.success){
                console.log('질문 목록을 가져옵니다.')
                console.log(response.data);
                console.log(response.data.questions);
                setquestions(response.data.questions);
            }else{
                console.log(response.data.err);
                alert("질문 목록 정보 가져오기에 실패하였습니다.")
            }
        });

        if(window.innerWidth <= 1024){
            
            const variabeles = {
                miniformId: miniform.miniformData._id
            }

            Axios.post('/api/miniform/getThisMiniformChoices', variabeles)
            .then(response => {
                if(response.data.success){
                    console.log(response.data);
                    alert("733 getThisMiniformChoices")
                    setchoices(response.data.choices);
                    console.log(response.data.choices);
                }else{
                    console.log(response.data.err);
                    alert("질문 목록 정보 가져오기에 실패하였습니다.")
                }
            });
        
        }

    }, [])


    const onNavClickHandler = (thisNavSValue) =>{
        console.log(thisNavSValue);
        setnavState(thisNavSValue);

        console.log(miniformId)

        const variabeles = {
            miniformId: miniform.miniformData._id
        }

        Axios.post('/api/miniform/getQuestions', variabeles)
        .then(response => {
            if(response.data.success){
                console.log('질문 목록을 가져옵니다.')
                console.log(response.data);
                console.log(response.data.questions);
                setquestions(response.data.questions);
            }else{
                console.log(response.data.err);
                alert("질문 목록 정보 가져오기에 실패하였습니다.")
            }
        });

        if(thisNavSValue == "Create"){
           console.log(miniformId)
        }

        const variabeles2 = {
            miniformId: miniform.miniformData._id
        }

        Axios.post('/api/miniform/getThisMiniformChoices', variabeles2)
        .then(response => {
            if(response.data.success){
                console.log(response.data);
                alert("733 getThisMiniformChoices")
                setchoices(response.data.choices);
                console.log(response.data.choices);
            }else{
                console.log(response.data.err);
                alert("질문 목록 정보 가져오기에 실패하였습니다.")
            }
        });
    
    }

    const onTapListClickHandler = (thisTapValue) => {
        console.log(thisTapValue);
        settapState(thisTapValue);
    }

    const onQuestionClickHandler = () => {
        console.log("the one question clicked");
    }

    const contextMenuTrigger = () => {
        console.log("the contextMenuTrigger clicked");
    }

    const layoutContainerWrapper = (LCWstate) => {
        console.log(LCWstate);
        setLCWstate(LCWstate);
    }

    const onQuestionTitleChange = (e) => {
        console.log(e.target.innerText);
        console.log("the question title changed...")
        setquestionTitle(e.target.innerText);
    }
    
    const onQuestionDescriptionChange = (e) => {
        console.log(e.target.innerText);
        console.log("the question description changed...")
        setquestionDescription(e.target.innerText);
    }

    const onQuestionDescriptionFocused = (e) => {
        setquestionDescription(e.target.innerText);
    }

    const onQuestionDescriptionBlured = () => {

        const variables = {
            questionId: choosedQuestion._id,
            description: questionDescription
        }
// overwidth 1024px
        Axios.post('/api/miniForm/updateQuestion', variables)
                .then(response => {
                    if(response.data.success){
                        // alert('question을 성공적으로 업데이트했습니다.')
                        console.log(response.data.doc);
                        setquestionId(response.data.doc._id);
                    }else{
                        alert('question 업데이트에 실패했습니다.')
                        console.log(response.data.err);
                    }
                })

    }

    const onAddCONTENT = () => {
        console.log("the add content button clicked")
        console.log(miniform.miniformData._id)
        setisQuestionTypeDialogOpen(true);
    }

    const onAddENDINGS = () => {
        console.log("the add ending button clicked")
    }

    const onOutcomeClickHandler = () =>{
        console.log("the one outcome clicked");
    }

    const questionTypeTrigger = () => {
        console.log("the question type trigger clicked");
    }

    const onInputFieldFocus = (isFocused) => {
        console.log("the form name input field focus state changed");
        setisNameInputFocused(isFocused)
    }

    const onFormInitModalBtnClick = (e) => {
        console.log("the form init modal button clicked");
        setisFormInitModalOpen(false);

        console.log(user.userData._id);

        const variables2 = {
            miniformId: miniform.miniformData._id,
            creator: user.userData._id,
            name: formName,
            type: formType,
        }
                
        Axios.post('/api/miniForm/updateForm', variables2)
        .then(response => {
            if(response.data.success){
                alert('miniform을 성공적으로 업데이트했습니다.')   
                console.log(response.data);           
                // setminiformId(response.data.doc._id);      
                // dispatch(chooseMiniform(response.data.doc))
            }else{
                alert('miniform 업데이트에 실패했습니다.')
            }
        })
        
    }

    const onModalClosebtnClick = () => {
        console.log("the form inir modal close button clicked");
        setisFormInitModalOpen(false);
    }

    const onFormNameChanged = (e) => {
        console.log("the form name input value changed")
        setformName(e.currentTarget.value);
        console.log("formName: " +e.currentTarget.value);
        console.log(formName);
    }

    const onFormTypeChanged = (e) => {
        console.log("the form category changed");
        setformType(e)
        console.log("formType: "+e)
        console.log(formType);
    }
   
    const questionTypeDialogMouseLeave = () => {
        console.log("mouse leaved from the question type dialog")
        setisQuestionTypeDialogOpen(false);
    }

    const onAddChoicebtnClick = () => {

        console.log("add choice btn clicked");
        
        const variables = {
            questionId: choosedQuestion._id,
            title: questionTitle,
            description: questionDescription
        }
// underwidth 1024px
        Axios.post('/api/miniForm/updateQuestion', variables)
                .then(response => {
                    if(response.data.success){
                        // alert('question을 성공적으로 업데이트했습니다.')
                        console.log(response.data.doc);
                        setquestionId(response.data.doc._id);
                    }else{
                        alert('question 업데이트에 실패했습니다.')
                        console.log(response.data.err);
                    }
                })

        const variables2 = {
            miniformId: miniform.miniformData._id,
            questionId: choosedQuestion._id,
            choiceContent: choiceContent
        }

        Axios.post('/api/miniForm/createChoice', variables2)
        .then(response => {
            if(response.data.success){
                alert('choice를 성공적으로 업로드했습니다.')
                console.log(response.data);
                setchoiceId(response.data.doc._id);
            }else{
                alert('choice 업로드에 실패했습니다.')
                console.log(response.data.err);
            }
        })
    }

    const onQuestionTypeSelectClose = () => {
        setisQuestionTypeDialogOpen(false);
    }

    const onQuestionEditCloseBtnClicked = () => {
        setisQuestionEditOverayOpen(false);
    }

    const renderQuestionTypes = questionTypeCollection.map((type, index) => {

        const typeSelect = (type) => {
            console.log(type);
            setquestionTypeMouseEnter(type);
        }

        const onAddContentClicked = (type) => {
            
            console.log(miniform.miniformData._id);

            const variables = {
                creator: user.userData._id,
                miniformId: miniform.miniformData._id,
                type: questionTypeMouseEnter,
                title: "",
                description: ""
            }
    
            Axios.post('/api/miniForm/createQuestion', variables)
                    .then(response => {
                        if(response.data.success){
                            alert('question을 성공적으로 업로드했습니다.')
                            console.log(response.data);
                            setquestionId(response.data.doc._id);
                        }else{
                            alert('question 업로드에 실패했습니다.')
                            console.log(response.data.err);
                        }
                    })
        
        }

        return(
            <li data-qa={`${type.data_qa}`} size="8" className="ListItem-sc-__lexhmg-1 beQSzM">
                <div onClick={()=>{onAddContentClicked(type.type)}}  onMouseEnter={()=>typeSelect(type.type)} data-block-type={`${type.data_block_type}`} data-qa="single-block-item" tabIndex="-1" className={`block-list-item__BlockWrapper-sc-52d0uv-0 ${type.type == questionTypeMouseEnter ? "htSASQ" : "jSfoCz"}`}>
                    <div cursor="pointer" data-qa={`${type.data_qa_pointer}`} className="Container-sc-__sc-1aileh0-0 dJlSis">
                        <div orientation="horizontal" className="Split-sc-__sc-3xe4fi-0 bxrZiA">
                            <div className="SplitItem-sc-__sc-3xe4fi-1 ecyykU">
                                <div orientation="horizontal" className="Split-sc-__sc-3xe4fi-0 bxrZiA">
                                    <div className="SplitItem-sc-__sc-3xe4fi-1 fAMIiV">
                                        <div kind="default" className={`LabelledIconBox-sc-__caci07-0 ${type.className}`}>
                                            <div height="auto" width="auto" color="#131313" className="Align-sc-__sc-4yw49j-0 IconRoot-sc-__sc-1eorqw0-0 bcBwDa">
                                                {type.icon}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div width="remaining" className="SplitItem-sc-__sc-3xe4fi-1 gkjeRC">
                                <span fontWeight="medium" fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 fZCQsO">
                                    {type.type}
                                </span>
                                <span color="description" fontWeight="medium" fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 block-list-item__OneLineText-sc-52d0uv-1 eldsOx">
                                    {type.discription}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        )
    })



    // under 1024px?
    const renderQuestionTypes_ = questionTypeCollection.map((type, index) => {

        const typeSelect = (type) => {
            console.log(type);
            setquestionTypeMouseEnter(type);
        }

        const onAddContentClicked = (type) => {
            
            console.log(miniform.miniformData._id);

            const variables = {
                creator: user.userData._id,
                miniformId: miniform.miniformData._id,
                type: questionTypeMouseEnter,
                title: questionTitle,
                description: questionDescription
            }
    
            Axios.post('/api/miniForm/createQuestion', variables)
                    .then(response => {
                        if(response.data.success){
                            alert('question을 성공적으로 업로드했습니다.')
                            console.log(response.data);
                            setquestionId(response.data.doc._id);
                        }else{
                            alert('question 업로드에 실패했습니다.')
                            console.log(response.data.err);
                        }
                    })

            console.log("the question added with type selected");
        }

        return(
            <li data-qa={`${type.data_qa}`} size="8" className="ListItem-sc-__lexhmg-1 beQSzM">
                <div onClick={()=>{onAddContentClicked(type.type)}}  onMouseEnter={()=>typeSelect(type.type)} data-block-type={`${type.data_block_type}`} data-qa="single-block-item" tabIndex="-1" className={`block-list-item__BlockWrapper-sc-52d0uv-0 ${type.type == questionTypeMouseEnter ? "htSASQ" : "jSfoCz"}`}>
                    <div cursor="pointer" data-qa={`${type.data_qa_pointer}`}  className="Container-sc-__sc-1aileh0-0 dJlSis">
                        <div orientation="horizontal" className="Split-sc-__sc-3xe4fi-0 bxrZiA">
                            <div className="SplitItem-sc-__sc-3xe4fi-1 ecyykU">
                                <div orientation="horizontal" className="Split-sc-__sc-3xe4fi-0 bxrZiA">
                                    <div className="SplitItem-sc-__sc-3xe4fi-1 fAMIiV">
                                        <div kind="default" className={`LabelledIconBox-sc-__caci07-0 ${type.className}`}>
                                            <div height="auto" width="auto" color="#131313" className="Align-sc-__sc-4yw49j-0 IconRoot-sc-__sc-1eorqw0-0 bcBwDa">
                                                {type.icon}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div width="remaining" className="SplitItem-sc-__sc-3xe4fi-1 gkjeRC">
                                <span fontWeight="medium" fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 fZCQsO">
                                    {type.type}
                                </span>
                                <span color="description" fontWeight="medium" fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 block-list-item__OneLineText-sc-52d0uv-1 eldsOx">
                                    {type.discription}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        )
    })

    const onThisChoiceClicked = (choice) => {
        setselectedChoice(choice);
        setchoiceContent(choice.choiceContent);
    }

    const onChoiceInput = (e) => {
        console.log(e.target.innerText);
        setchoiceContent(e.target.innerText);
    }
    const onChoiceInputFocused = (choice) => {
        setselectedChoice(choice);
        setchoiceContent(choice.choiceContent);
    }

    const onChoiceInputBlured = () => {
     
        const variables = {
            choiceId: selectedChoice._id,
            choiceContent: choiceContent
        }

        Axios.post('/api/miniForm/updateChoice', variables)
                .then(response => {
                    if(response.data.success){
                        console.log(response.data);
                        // setquestionId(response.data.doc._id);
                        setchoiceContent("");
                        setselectedChoice({});
                    }else{
                        alert('choice 업데이트에 실패했습니다.')
                        console.log(response.data.err);
                    }
                })
    }

    const renderCoices = choices.map((choice, index, err) => {
        
        const onChoiceSelected = (choice) => {
            setselectedChoice(choice);
            console.log(choice._id);
        }

        const onThisChoiceClicked = (choice) => {
            setselectedChoice(choice);
        }

        const onChoiceDeleteBtnClicked = () => {

            const variabeles = {
                choiceId: choice._id
            }

            Axios.delete('/api/miniform/deleteChoice', {data: variabeles})
            .then(response => {
                if(response.data.success){
                    alert("choice를 성공적으로 삭제했습니다.")
                }else{
                    console.log(response.data.err);
                    alert("질문 목록 정보 가져오기에 실패하였습니다.")
                }
            });

        }

        return (
            <li  aria-disabled="false" aria-selected="false" className="base-choice__Root-sc-5koeqf-0 drLzBL checkbox-choice__ChoiceRoot-m4g23g-0 ksyabb" tabIndex="0" style={{marginBottom: "8px", marginRight: "0px", width: "100%"}} data-force-focused={selectedChoice._id==choice._id ? "true" :"false"} >
                <div className="key-helper__Root-p7s0zv-0 iLxcoS">
                    <div className="key-helper__KeyHelperWrapper-p7s0zv-1 ghFPzf" aria-hidden="true">
                        <div className="key-helper__HintWrapper-p7s0zv-5 ARZge">
                            <div className="key-helper__Hint-p7s0zv-3 jKGbWg">
                                <span className="key-helper__Letter-p7s0zv-2 jYALOT">
                                    {String.fromCharCode(65+index)}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div  className="checkbox-choice__ChoiceContent-m4g23g-1 sKZfw">
                    <div className="text__TextWrapper-sc-1t2ribu-0 cSDVNt">
                        <div style={{cursor: "renderCoices"}}   onClick={()=>onChoiceSelected(choice)} onInput={onChoiceInput} onChange={onChoiceInput} onFocus={()=>onChoiceInputFocused(choice)} onBlur={()=>onChoiceInputBlured()} suppressContentEditableWarning={true} contentEditable="true" className={`${selectedChoice._id == choice._id ? "" : "text__TextWrapper-sc-1t2ribu-0 cSDVNt styled-components__InnerChoiceText-cykob3-0 uRMpe"}`}>
                            {choice.choiceContent }&nbsp;
                            <div className={`editor__QuillTheme-sc-8wm7iv-0 bkKbFd ${selectedChoice._id == choice._id ? "" : "hidden"}`}>
                                <div className="editor__QuillStyles-sc-8wm7iv-1 dxoHLO">
                                    <div className="notranslate ql-container ql-bubble" data-qa="quill-choice-editor">
                                        <div className="ql-editor" onClick={()=>onThisChoiceClicked(choice)}  style={{cursor: "renderCoices"}}  onInput={onChoiceInput} onChange={onChoiceInput} onFocus={()=>onChoiceInputFocused(choice)} onBlur={()=>onChoiceInputBlured()} suppressContentEditableWarning={true} contentEditable="true" data-placeholder="choice">
                                            {/* {`${selectedChoice._id == choice._id ? choice.choiceContent : "  " }`}&nbsp; */}
                                        </div>
                                        <div className="ql-tooltip ql-hidden">
                                            <span className="ql-tooltip-arrow"></span>
                                            <div className="ql-tooltip-editor">
                                                <input  suppressContentEditableWarning={true} contentEditable="true" type="text" >
                                                    
                                                </input>
                                                <a className="ql-close"></a>
                                            </div>
                                            <div className="ql-toolbar">
                                                <span className="ql-formats">
                                                    <button type="button" className="ql-bold">
                                                        <svg viewBox="0 0 18 18">
                                                            <line className="ql-stroke" x1="7" x2="13" y1="4" y2="4"></line>
                                                            <line className="ql-stroke" x1="5" x2="11" y1="14" y2="14"></line>
                                                            <line className="ql-stroke" x1="8" x2="10" y1="14" y2="4"></line>
                                                       </svg>
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                        <div style={{display: "none", position: "absolute"}}>
                                            <ul></ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button onClick={()=>onChoiceDeleteBtnClicked()} className={`delete-choice__StyledButton-sc-12fxobp-0 ${selectedChoice._id == choice._id ? "lhRHnU" : "yfJuq"}`}>
                        <CloseCircleOutlined  style={{color : "rgb(255, 255, 255)", border:"none"}}/>
                    </button>
                </div>
            </li>
        )
    }) 

    const renderQuestions = questions.map((question, index) => {

        const onChooseQuestion = () => {

            setchoosedQuestion(question)
            setquestionTitle(choosedQuestion.title)
            setquestionType(choosedQuestion.type)
            setquestionDescription(choosedQuestion.description)
            console.log(`선택한 질문은 : ${choosedQuestion._id}`)
            console.log(choices.filter((choice) => choice.questionId == question._id));
            setthisQuestionChoices(choices.filter((choice) => choice.questionId == question._id));

            const variabeles = {
                questionId: question._id
            }

            Axios.post('/api/miniform/getChoices', variabeles)
            .then(response => {
                if(response.data.success){
                    setchoices(response.data.choices);
                }else{
                    console.log(response.data.err);
                    alert("질문 목록 정보 가져오기에 실패하였습니다.")
                }
            });

        }

        const onMenuBtnClicked = (bool) => {
            setisMenuOpened(!isMenuOpened)
            console.log(isMenuOpened);
        }


      return (
        <li onClick={()=>{onChooseQuestion()}} aria-selected={question._id == choosedQuestion._id ? "true" : "false"} id="01F3V45F8JBND5CDSGZJ3TDK91" className={`question-list-item__SidebarItemWrapper-b28pj3-0 ${question._id == choosedQuestion._id ? "dHqQVN" : "csiUCD"}`}>
            {/*  the question thumbnail wrapper */}
            <div color="#FFFFFF"  className="thumbnail__ThumbnailWrapper-sc-17ddkz8-0 iqyBeY">
                <div aria-label="Split right: right half of the screen for media, left half for question and answer" role="radio" className="layouts__LayoutWrapper-sc-1wqokta-15 fIKBRs">
                    <div className="layouts__TextArea-sc-1wqokta-4 icMinf">
                        <div className="layouts__BaseLayout-sc-1wqokta-12 layouts__SideLayoutWrapper-sc-1wqokta-13 hmBUjq">
                            <div color="#000000" className="layouts__Basebar-sc-1wqokta-0 layouts__Longbar-sc-1wqokta-3 iEeCAf">
                            </div>
                            <div color="#000000" className="layouts__Basebar-sc-1wqokta-0 layouts__Shortbar-sc-1wqokta-1 fwNRUV">
                            </div>
                        </div>
                    </div>
                    <div className="layouts__ImgAreaBase-sc-1wqokta-5 layouts__ImgAreaSideFull-sc-1wqokta-6 layouts__ImgAreaRightSideFull-sc-1wqokta-8 cbaSQN">
                    </div>
                </div>
            </div>
            {/* the question title */}
            <div className="question-list-item__TextWrapper-b28pj3-1 kUkuNw">
                <span fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 iNznib">
                    <span fontWeight="bold" fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 question-list-item__QuestionIndexText-b28pj3-2 hRgohg">
                        1 . 
                        {`${question.title === "undefined"?"":question.title}`}
                    </span>
                </span>
            </div>
            <span onClick={()=>onMenuBtnClicked()} className={`question-list-item__MenuButton-b28pj3-3 hqCPsZ ${question._id == choosedQuestion._id ? "" : "hidden"}`}>
                <span>
                    <div data-qa="context-menu-trigger">
                        <div height="32px" width="32px" className="Align-sc-__sc-4yw49j-0 IconRoot-sc-__sc-1eorqw0-0 hjLktl context-menu__OptionsButton-sc-1g9e3a3-3 jwyYGN">
                            <EllipsisOutlined/>
                        </div>
                    </div>
                </span>
            </span>
        </li>
      )      
    })

    // under 1024px? 
    const renderCoices_ = (question) => choices.filter((choice, index) => choice.questionId == question._id).map((choice, index)=>{
            
        const onChoiceInput = (e) => {
            console.log(e.target.innerText);
            setchoiceContent(e.target.innerText)
        }

        const onChoiceSelected = (choice) => {
            setselectedChoice(choice);
            console.log(choice._id);
        }

        const onThisChoiceClicked = (choice) => {
            setselectedChoice(choice);
        }

        const onChoiceDeleteBtnClicked = () => {

            const variabeles = {
                choiceId: choice._id
            }

            Axios.delete('/api/miniform/deleteChoice', {data: variabeles})
            .then(response => {
                if(response.data.success){
                    alert("choice를 성공적으로 삭제했습니다.")
                }else{
                    console.log(response.data.err);
                    alert("질문 목록 정보 가져오기에 실패하였습니다.")
                }
            });

        }

        return (
            <li  ria-disabled="false" aria-selected="false" className="base-choice__Root-sc-5koeqf-0 drLzBL checkbox-choice__ChoiceRoot-m4g23g-0 ksyabb" tabIndex="0" style={{marginBottom: "8px", marginRight: "0px", width: "100%"}} data-force-focused={selectedChoice._id==choice._id ? "true" :"false"} >
                <div className="key-helper__Root-p7s0zv-0 iLxcoS">
                    <div className="key-helper__KeyHelperWrapper-p7s0zv-1 ghFPzf" aria-hidden="true">
                        <div className="key-helper__HintWrapper-p7s0zv-5 ARZge">
                            <div className="key-helper__Hint-p7s0zv-3 jKGbWg">
                                <span className="key-helper__Letter-p7s0zv-2 jYALOT">
                                    {String.fromCharCode(65+index)}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div  className="checkbox-choice__ChoiceContent-m4g23g-1 sKZfw">
                    <div className="text__TextWrapper-sc-1t2ribu-0 cSDVNt">
                        <div onClick={()=>onThisChoiceClicked(choice)} style={{cursor: "renderCoices"}}  onInput={onChoiceInput} onChange={onChoiceInput} onFocus={()=>onChoiceInputFocused(choice)} onBlur={()=>onChoiceInputBlured()}  suppressContentEditableWarning={true} contentEditable="true" className={`${selectedChoice._id == choice._id ? "" : "text__TextWrapper-sc-1t2ribu-0 cSDVNt styled-components__InnerChoiceText-cykob3-0 uRMpe"}`}>
                            {/* {`${selectedChoice._id == choice._id ?  "" : choice.choiceContent }`}&nbsp; */}
                            {choice.choiceContent}&nbsp;&nbsp;
                            <div className={`editor__QuillTheme-sc-8wm7iv-0 bkKbFd ${selectedChoice._id == choice._id ? "" : "hidden"}`}>
                                <div className="editor__QuillStyles-sc-8wm7iv-1 dxoHLO">
                                    <div className="notranslate ql-container ql-bubble" data-qa="quill-choice-editor">
                                        <div className="ql-editor" onClick={()=>onThisChoiceClicked(choice)}  onInput={onChoiceInput} onChange={onChoiceInput} onFocus={()=>onChoiceInputFocused(choice)} onBlur={()=>onChoiceInputBlured()} suppressContentEditableWarning={true} contentEditable="true" data-placeholder="choice">
                                            {/* {`${selectedChoice._id == choice._id ? choice.choiceContent : "" }`} */}
                                            {/* {choice.choiceContent} */}
                                        </div>
                                        <div className="ql-tooltip ql-hidden">
                                            <span className="ql-tooltip-arrow"></span>
                                            <div className="ql-tooltip-editor">
                                                <input onInput={onChoiceInput}  type="text" data-formula="e=mc^2" data-link="https://www.typeform.com" data-video="Embed URL"></input>
                                                <a className="ql-close"></a>
                                            </div>
                                            <div className="ql-toolbar">
                                                <span className="ql-formats">
                                                    <button type="button" className="ql-bold">
                                                        <svg viewBox="0 0 18 18">
                                                            <line className="ql-stroke" x1="7" x2="13" y1="4" y2="4"></line>
                                                            <line className="ql-stroke" x1="5" x2="11" y1="14" y2="14"></line>
                                                            <line className="ql-stroke" x1="8" x2="10" y1="14" y2="4"></line>
                                                       </svg>
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                        <div style={{display: "none", position: "absolute"}}>
                                            <ul></ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button onClick={()=>onChoiceDeleteBtnClicked()} className={`delete-choice__StyledButton-sc-12fxobp-0 ${selectedChoice._id == choice._id ? "lhRHnU" : "yfJuq"}`}>
                        <CloseCircleOutlined  style={{color : "rgb(255, 255, 255)", border:"none"}}/>
                    </button>
                </div>
            </li>
        )
    })


    // under 1024px
    const renderQuestions_ = questions.map((question, index) => {
        
        const onChooseQuestion = () => {
            setchoosedQuestion(question);
            
            setisQuestionEditOverayOpen(true);
            
            console.log(`선택한 질문은 : ${choosedQuestion._id}`)
            
            console.log(choices.filter((choice) => choice.questionId == question._id));
            setthisQuestionChoices(choices.filter((choice) => choice.questionId == question._id));

        }

        const onMouseEnterQuestion = () => {
            setchoosedQuestion(question);
        }
        
        const onQuestionDeleteBtnClicked = () => {

            setisQuestionEditOverayOpen(false);

            const variables = {
                questionId: question._id
            }
    
            Axios.delete('/api/miniForm/deleteQuestion', {data: variables})
                    .then(response => {
                        if(response.data.success){
                            alert('question을 성공적으로 삭제했습니다.')
                            // setquestionId(response.data.doc._id);
                            // setisQuestionEditOverayOpen(false);
                            choices.filter((choice) => choice.questionId == response.data.doc._id).forEach(
                                element => {
                                    const variabeles = {
                                        choiceId: element._id
                                    }
                                Axios.post('/api/miniform/deleteChoice', variabeles)
                                .then(response => {
                                    if(response.data.success){
                                        alert("choice를 성공적으로 삭제했습니다.")
                                    }else{
                                        console.log(response.data.err);
                                        alert("질문 목록 정보 가져오기에 실패하였습니다.")
                                    }
                                });
                           });
                        }else{
                            alert('question 삭제에 실패했습니다.')
                            alert(response.data.err);
                        }
                    })

                    
                // const variables = {
                //     questionId: choosedQuestion._id
                // }
            }

        const onQuestionDuplicateBtnClicked = () => {

            setisQuestionEditOverayOpen(false);

            const variables = {
                creator: user.userData._id,
                miniformId: miniform.miniformData._id,
                type: question.type,
                title: question.title,
                description: question.description
            }

            // const variables2 = {
            //     creator: user.userData._id,
            //     miniformId: miniform.miniformData._id,
            //     type: choosedQuestion.type,
            //     title: choosedQuestion.title,
            //     description: choosedQuestion.description
            // }
    
            Axios.post('/api/miniForm/createQuestion', variables)
                    .then(response => {
                        if(response.data.success){
                            alert('question을 성공적으로 업로드했습니다.')
                            setquestionId(response.data.doc._id);
                            choices.filter((choice) => choice.questionId == question._id).forEach(
                                element => {
                                    const variables = {
                                        miniformId: miniform.miniformData._id,
                                        questionId: response.data.doc._id,
                                        choiceContent: element.choiceContent
                                    }
                                    Axios.post('/api/miniForm/createChoice', variables)
                                    .then(response => {
                                        if(response.data.success){
                                            alert('choice를 성공적으로 업로드했습니다.')
                                            console.log(response.data);
                                            // setchoiceId(response.data.doc._id);
                                        }else{
                                            alert('choice 업로드에 실패했습니다.')
                                            console.log(response.data.err);
                                        }
                                    })
                                });
                        }else{
                            alert('question 업로드에 실패했습니다.')
                            alert(response.data.err);
                        }
                    })            
        }

        return (
            <div onClick={()=>onChooseQuestion()} onMouseEnter={()=>onMouseEnterQuestion()} className="mobile-blocks__BlockCardWrapper-e89vlz-2 cZBBpo">
                <div className="Card-sc-__i4fuko-0 block-card__StyledCard-sc-1hulqrn-0 KMSms">
                    <div className="block-card__BlockPreview-sc-1hulqrn-1 dMzmnt">
                        <div  className="base-styles__BaseStyle-sc-1oava9b-0 eCIkjX" style={{height: "100%"}}>
                            <div fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif" className="font-loader__Root-sc-1fy2i3z-0 cjaqNS">
                                <div  className="blocks__Root-sc-1biwhcv-0 fxyRAm">
                                    <div className="structure__QuestionGroupHeaderPositioner-sc-110lqy5-0 leiYjO"></div>
                                        <div className="background__Background-esq3f2-0 dnoZnt"></div>
                                        <section  className="block-section__LayoutWrapper-vw1wyv-0 iUMTIq">
                                            <div className="block-section__Section-vw1wyv-1 ciJWyh">
                                                <div className="layout-container__AnimationLayer-sc-1ektm8w-5 loaOtL">
                                                    <div className="layout-container__SlideEditorWrapper-sc-1ektm8w-2 gqTwKu">
                                                        <div className="layout-container__BlueBorder-sc-1ektm8w-1 ddvUqr">
                                                            <div className="block-structure__Root-sc-1esu8nk-2 cHnjJw">
                                                                <div className="block-structure__ContentWrapper-sc-1esu8nk-3 ihRIGN">
                                                                    <div className="layout-container__Root-fb7y4k-0 eqzgCG">
                                                                        <div className="spacer__Spacer-sc-11bdvt0-0 ivwqbk">
                                                                            <div>
                                                                                <div>
                                                                                    <div className="question-header__HeaderWrapper-z8zey9-3 kmXpQb">
                                                                                        <div className="question-header__CounterPosition-z8zey9-1 jpSUgR">
                                                                                            <div className="question-header__CounterWrapper-z8zey9-2 HTMcj">
                                                                                                <div className="responsive-spacer__SpacerWrapper-sc-2bvre0-0 byBIsc">
                                                                                                    <div className="question-header__CounterContent-z8zey9-0 phqXL">
                                                                                                        <span className="text__TextWrapper-sc-1t2ribu-0 dItgWa">
                                                                                                            <span aria-hidden="true">1</span>
                                                                                                        </span>
                                                                                                        <div className="spacer__Spacer-sc-11bdvt0-0 hmrdyC">
                                                                                                            <ArrowRightOutlined />
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="text__TextWrapper-sc-1t2ribu-0 hfwBJe">
                                                                                            <div className="title-wrapper__EditorWrapper-sc-1lndwj3-0 dCEpnJ">
                                                                                                <span fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 text-with-variables__StyledText-p8jim8-0 kHLYPD">
                                                                                                    {`${question.title === "undefined"?"":question.title}`}
                                                                                                </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="responsive-spacer__SpacerWrapper-sc-2bvre0-0 greOqb">
                                                                                        {/* <p className="text__TextWrapper-sc-1t2ribu-0 fJzfNd"></p> */}
                                                                                            <span fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 text-with-variables__StyledText-p8jim8-0 kHLYPD">
                                                                                                {`${question.description === "undefined"?"":question.description}`}
                                                                                            </span>
                                                                                        {/* </p> */}
                                                                                    </div>
                                                                                </div>
                                                                                <div className="responsive-spacer__SpacerWrapper-sc-2bvre0-0 ePKbAa">
                                                                                    <div className="choice-list__DraggableWrapper-sc-1t4szy6-0 MDMuf">
                                                                                        <div className="choices-layout__StyledDiv-qpux4o-0 jooQcT" style={{position: "relative"}}>
                                                                                            <ul className="choices-layout__ChoicesLayoutWrapper-qpux4o-1 bArHQn">
                                                                                                
                                                                                                {renderCoices_(question)}

                                                                                            </ul>
                                                                                            <div style={{visibility: "hidden", 
                                                                                                                    display: "inline", 
                                                                                                                    width: "0px", 
                                                                                                                    height: "0px", 
                                                                                                                    zIndex: "-1'", 
                                                                                                                    overflow: "hidden", 
                                                                                                                    margin: "0px", 
                                                                                                                    padding: "0px"}} className="erd_scroll_detection_container erd_scroll_detection_container_animation_active">
                                                                                                <div dir="ltr" className="erd_scroll_detection_container" style={{position: "absolute",
                                                                                                                                                                                                                    flex: "0 0 auto",
                                                                                                                                                                                                                    overflow: "hidden", 
                                                                                                                                                                                                                    zIndex: "-1",
                                                                                                                                                                                                                    visibility: "hidden",
                                                                                                                                                                                                                    width: "100%", 
                                                                                                                                                                                                                    height: "100%", 
                                                                                                                                                                                                                    left: "0px", 
                                                                                                                                                                                                                    top: "0px"}}>
                                                                                                    <div className="erd_scroll_detection_container" style={{position: "absolute", flex: "0 0 auto", overflow: "hidden", zIndex: "-1", visibility: "hidden", inset: "-22px -21px -21px -22px"}}>
                                                                                                        <div style={{position: "absolute", flex: "0 0 auto", overflow: "scroll", zIndex: "-1", visibility: "hidden", width: "100%", height: "100%"}}>
                                                                                                            <div style={{position: "absolute", left: "0px", top: "0px", width: "689px", height: "141px"}}></div>
                                                                                                        </div>
                                                                                                        <div style={{position: "absolute", flex: "0 0 auto", overflow: "scroll", zIndex: "-1", visibility: "hidden", width: "100%", height: "100%"}}>
                                                                                                            <div style={{position: "absolute", width: "200%", height: "200%"}}></div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="layout-container__Positioner-sc-1ektm8w-0 lmdOTj">
                                                            <span>
                                                                <div>
                                                                    <div className="layout-container__ChoiceMenuButton-sc-1ektm8w-3 dKqvRS">
                                                                        <div height="auto" width="auto"  color="notification" className="Align-sc-__sc-4yw49j-0 IconRoot-sc-__sc-1eorqw0-0 lgXscy layout-container__MenuIcon-sc-1ektm8w-4 lnTfzP">
                                                                            <span className="SVGInline">
                                                                                <svg></svg>
                                                                            </span>
                                                                        </div>
                                                                        <span fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 gEWZOm">Multiple Choice</span>
                                                                    </div>
                                                                </div>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <div className="blocks__LayoutWrapper-sc-1biwhcv-1 itpNEP">
                                            <div style={{display: "block", transition: "all 200ms ease 0s", opacity: "1"}}>
                                                <div className="block-media__Wrapper-sc-13u0f85-0 fXznvb">
                                                    <div className="block-media__AttachmentWrapper-sc-13u0f85-1 ejWnWg">
                                                        <div className="block-media__FilterWrapper-sc-13u0f85-2 fPJPWB"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="erd_scroll_detection_container erd_scroll_detection_container_animation_active" style={{visibility: "hidden", display: "inline", width: "0px", height: "0px", zIndex: "-1", overflow: "hidden", margin: "0px", padding: "0px"}}>
                                            <div dir="lDutr" className="erd_scroll_detection_container" style={{position: "absolute", flex: "0 0 auto", overflow: "hidden", zIndex: "-1", visibility: "hidden", width: "100%", height: "100%", left: "0px", top: "0px"}}>
                                                <div className="erd_scroll_detection_container" style={{position: "absolute", flex: "0 0 auto", overflow: "hidden", zIndex: "-1", visibility: "hidden", inset: "-22px -21px -21px -22px"}}>
                                                    <div style={{position: "absolute", left: "0px", top: "0px", width: "1060px", height: "265px"}}></div>
                                                </div>
                                                <div style={{position: "absolute", flex: "0 0 auto", overflow: "scroll", zIndex: "-1", visibility: "hidden", width: "100%", height: "100%"}}>
                                                    <div style={{position: "absolute", width: "200%", height: "200%"}}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="block-card__PointerTrap-sc-1hulqrn-3 cNRoUc"></div>
                        </div>
                        <div className="block-card__Footer-sc-1hulqrn-4 bdgEVv">
                        <button style={{zIndex:"1200"}} onClick={()=>{onQuestionDuplicateBtnClicked()}} type="button" className="ButtonRoot-sc-__sc-1vu0deq-0 goutua block-card__StyledButton-sc-1hulqrn-5 hlLnOL">
                            <div orientation="horizontal" className="Distribute-sc-__sc-1s2i8aq-0 YOXft">
                                <div height="auto" width="auto" color="#262627" className="Align-sc-__sc-4yw49j-0 IconRoot-sc-__sc-1eorqw0-0 buHmdN">
                                    <BuildFilled className="goutua" style={{padding:"0px", width: "16px", height:"16px" }}/>               
                                </div>
                                <span fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 goutua">Duplicate</span>
                            </div>
                        </button>
                        {questions.length > 1 && 
                        <button style={{zIndex:"1300"}} onClick={()=>onQuestionDeleteBtnClicked()} type="button" className="ButtonRoot-sc-__sc-1vu0deq-0 goutua block-card__StyledButton-sc-1hulqrn-5 hlLnOL">
                            <div orientation="horizontal" className="Distribute-sc-__sc-1s2i8aq-0 YOXft">
                                <div height="auto" width="auto" color="#262627" className="Align-sc-__sc-4yw49j-0 IconRoot-sc-__sc-1eorqw0-0 buHmdN">
                                    <DeleteFilled className="goutua" style={{padding:"0px", width: "16px", height:"16px" }}/>
                                </div>
                                <span style={{padding:"0px"}}  fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 djRoaw goutua">Delete</span>
                            </div>    
                        </button>}
                    </div>
                </div>
            </div>
        )
    })

    const onQuestionDuplicateBtnClicked = () => {

        setisQuestionEditOverayOpen(false);

        const variables = {
            creator: user.userData._id,
            miniformId: miniform.miniformData._id,
            type: choosedQuestion.type,
            title: choosedQuestion.title,
            description: choosedQuestion.description
        }

        Axios.post('/api/miniForm/createQuestion', variables)
                .then(response => {
                    if(response.data.success){
                        alert('question을 성공적으로 업로드했습니다.')
                        setquestionId(response.data.doc._id);
                    }else{
                        alert('question 업로드에 실패했습니다.')
                        alert(response.data.err);
                    }
                })
    }
    
    const onThisMenuFocused = (thisMenu) => {
        console.log(thisMenu);
        setthisMenuFocused(thisMenu);
    }

    const onMenuMouseLeaved = () => {
        setisMenuOpened(false)
    }

    const onDuplicateBtnClicked = () => {
        console.log("onDuplicateBtnClicked");
        setisMenuOpened(false);

        const variables = {
            creator: user.userData._id,
            miniformId: miniform.miniformData._id,
            type: choosedQuestion.type,
            title: choosedQuestion.title,
            description: choosedQuestion.description
        }

        Axios.post('/api/miniForm/createQuestion', variables)
                .then(response => {
                    if(response.data.success){
                        alert('question을 성공적으로 업로드했습니다.')
                        // setquestionId(response.data.doc._id);
                        // setisQuestionEditOverayOpen(false);
                        choices.forEach(element => {
                            const variables = {
                                questionId: response.data.doc._id,
                                choiceContent: element.choiceContent
                            }
        
                            Axios.post('/api/miniForm/createChoice', variables)
                            .then(response => {
                                if(response.data.success){
                                    alert('choice를 성공적으로 업로드했습니다.')
                                    console.log(response.data);
                                    // setchoiceId(response.data.doc._id);
                                }else{
                                    alert('choice 업로드에 실패했습니다.')
                                    console.log(response.data.err);
                                }
                            })
                        });
                    } else{
                        alert('question 업로드에 실패했습니다.')
                        alert(response.data.err);
                    }
                })

    }

    const onDeleteBtnClicked = () => {
        console.log("onDeleteBtnClicked");
        setisMenuOpened(false);

        const variables = {
            questionId: choosedQuestion._id
        }

        Axios.delete('/api/miniForm/deleteQuestion', {data: variables})
                .then(response => {
                    if(response.data.success){
                        alert('question을 성공적으로 삭제했습니다.')
                        // setquestionId(response.data.doc._id);
                        // setisQuestionEditOverayOpen(false);
                    }else{
                        alert('question 삭제에 실패했습니다.')
                        alert(response.data.err);
                    }
                })
        
        choices.forEach(element => {
            const variabeles = {
                choiceId: element._id
            }

            Axios.post('/api/miniform/deleteChoice', variabeles)
            .then(response => {
                if(response.data.success){
                    alert("choice를 성공적으로 삭제했습니다.")
                }else{
                    console.log(response.data.err);
                    alert("질문 목록 정보 가져오기에 실패하였습니다.")
                }
            });
        })

    }

    const onQuestionTitleFocused = (e) => {
        setquestionTitle(e.target.innerText);
    }

    const onQuestionTitleBlured = () => {

        const variables = {
            questionId: choosedQuestion._id,
            title: questionTitle
        }

        Axios.post('/api/miniForm/updateQuestion', variables)
                .then(response => {
                    if(response.data.success){
                        // alert('question을 성공적으로 업데이트했습니다.')
                        console.log(response.data.doc);
                        setquestionId(response.data.doc._id);
                    }else{
                        alert('question 업데이트에 실패했습니다.')
                        console.log(response.data.err);
                    }
                })

    }
    
    const onPublishBtnClickedOverWidth1024px = () => {
        setisPublished(!isPublished);
    }

    const onPublishBtnClickedUnderWidth1024px = () => {
        setisPublished(!isPublished);
    }

    const onPublishBoxCloseBtnClickedOverWidth1024px = () => {
        setisPublished(false);
        console.log("퍼블리쉬 버튼 클릭")
    }

    const onPublishBoxCloseBtnClickedUnderWidth1024px = () => {
        setisPublished(false);
        console.log("퍼블리쉬 버튼 클릭")
    }

    const publishedFormAddrInput = useRef();

    const onPublishedAddrCopyBtnClicked = () => {
        const inputRef = publishedFormAddrInput.current;
        inputRef.select();
        document.execCommand("copy");
    }

    return (
        <div>
        <div id="FormPageWrapper">
            <div className="BaseStylesRoot-sc-__gqan6a-0 cnpIbj app__Root-sc-1pn0tbg-0 eVitkP notranslate" id="BaseStyleRoot">
                <div  height="full" orientation="vertical" className="Split-sc-__sc-3xe4fi-0 iCtogy">
                    <div className="SplitItem-sc-__sc-3xe4fi-1 app__HeaderSplitItem-sc-1pn0tbg-2 ldxajq"> 
                        <div>
                            <div className="BaseStylesRoot-sc-__gqan6a-0 cnpIbj">
                                <header>
                                    {/* over 1024px width */}
                                    <div className="form-header__HeaderWrapper-sc-51s4gn-0 ilmZBE">
                                        <div className="Container-sc-__sc-1aileh0-0 fSFqod"> 
                                            <div className="form-header__HeaderSections-sc-51s4gn-1 guvTis">
                                                <div className="form-header__LeftSection-sc-51s4gn-2 iUNcNQ">
                                                    <div orientation="horizontal" className="Split-sc-__sc-3xe4fi-0 bxrZiA">
                                                        <div className="SplitItem-sc-__sc-3xe4fi-1 imHIcZ">
                                                            <div width="100%" height="100%" className="Align-sc-__sc-4yw49j-0 iAnQnN" >
                                                                <a  color="default" href="/workspace/#" className="Link-sc-__sc-2xj0ye-0 dXhofX">
                                                                    <div height="auto" width="auto" className="Align-sc-__sc-4yw49j-0 IconRoot-sc-__sc-1eorqw0-0 kKgMaN">
                                                                        <ArrowLeftOutlined />
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div width="remaining" className="SplitItem-sc-__sc-3xe4fi-1 gkjeRC">
                                                            <div className="form-header__FormTitleWrapper-sc-51s4gn-5 fpRTrc">
                                                                <div className="InlineEditorRoot-sc-__sc-3cr9on-0 fULyBt">
                                                                    <input   placeholder="My form" aria-label="Form title" className="Input-sc-__sc-3cr9on-1 ctshIc" />
                                                                    <div  className="InputSizer-sc-__sc-3cr9on-2 ehUdGi">
                                                                        My form
                                                                        <span className="EmptyCharacter-sc-__sc-3cr9on-3 RQYuW">&nbsp;</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-header__CenterSection-sc-51s4gn-3 jdWpuh">
                                                    <div width="100%" height="100%" className="Align-sc-__sc-4yw49j-0 iAnQnN">
                                                        <div role="navigation" className="TabListRoot-sc-__n8xd2n-0 kiBFtb form-tabs__TabListStyled-sc-19yg2st-0 fabtXo">
                                                            <div className={ `TabRoot-sc-__qct27t-1 ${navState === "Create" ? "kJZdri" : "cLKpIB"}` } kind="line">
                                                                <a onClick={()=>{onNavClickHandler("Create")}} className={ `TabButton-sc-__qct27t-0 ${navState === "Create" ? "eacufQ" : "fKIgkg"}` } href="#" id="form-tab-create" kind="line"  >
                                                                    Create
                                                                </a>
                                                            </div>
                                                            <div className={ `TabRoot-sc-__qct27t-1 ${navState === "Integrate" ? "kJZdri" : "cLKpIB"}` } kind="line">
                                                                <a onClick={()=>{onNavClickHandler("Integrate")}} className={ `TabButton-sc-__qct27t-0 ${navState === "Integrate" ? "eacufQ" : "fKIgkg"}` } href="#" id="form-tab-create" kind="line"  >
                                                                    Integrate
                                                                </a>
                                                            </div>
                                                            <div className={ `TabRoot-sc-__qct27t-1 ${navState === "Share" ? "kJZdri" : "cLKpIB"}` } kind="line">
                                                                <a onClick={()=>{onNavClickHandler("Share")}} className={ `TabButton-sc-__qct27t-0 ${navState === "Share" ? "eacufQ" : "fKIgkg"}` } href="#" id="form-tab-create" kind="line"  >
                                                                    Share
                                                                </a>
                                                            </div>
                                                            <div className={ `TabRoot-sc-__qct27t-1 ${navState === "Results" ? "kJZdri" : "cLKpIB"}` } kind="line">
                                                                <a onClick={()=>{onNavClickHandler("Results")}} className={ `TabButton-sc-__qct27t-0 ${navState === "Results" ? "eacufQ" : "fKIgkg"}` } href="#" id="form-tab-create" kind="line"  >
                                                                    Results
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-header__RightSection-sc-51s4gn-4 iwsCkd">
                                                    <div width="100%" height="100%" className="Align-sc-__sc-4yw49j-0 cLVNgn">
                                                        <div orientation="horizontal" className="Distribute-sc-__sc-1s2i8aq-0 cloQoE" >
                                                            <div orientation="horizontal" className="Split-sc-__sc-3xe4fi-0 bxrZiA">
                                                                <div className="SplitItem-sc-__sc-3xe4fi-1 bTJYBJ">
                                                                    <div orientation="horizontal" className="Distribute-sc-__sc-1s2i8aq-0 jtRrpT">
                                                                        <button aria-label="Preview form" color="default" className="IconButtonRoot-sc-__nzc5pg-0 ehgqcT view-button__CustomButton-zt5wi4-0 bwWrll">
                                                                            <div height="auto" width="auto" color="default" className="Align-sc-__sc-4yw49j-0 IconRoot-sc-__sc-1eorqw0-0 buHmdN">
                                                                                <EyeFilled />
                                                                            </div>
                                                                        </button>
                                                                        <div className="draft-buttons__OnboardingHintWrapper-sc-2yzo29-0 jAweLF">
                                                                            <button onClick={()=>onPublishBtnClickedOverWidth1024px()} type="button" aria-controls="kitt-1"  aria-haspopup="true" aria-expanded="false" className="ButtonRoot-sc-__sc-1vu0deq-0 guETIw">
                                                                                <div orientation="horizontal" className="Distribute-sc-__sc-1s2i8aq-0 YOXft">
                                                                                       <span fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 djRoaw">
                                                                                            Publish
                                                                                        </span> 
                                                                                </div>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="SplitItem-sc-__sc-3xe4fi-1 ccRZgC">
                                                                    <div height="32px" width="1px" className="Container-sc-__sc-1aileh0-0 kgktIc">

                                                                    </div>
                                                                </div>
                                                                <div className="SplitItem-sc-__sc-3xe4fi-1 bTJYBJ">
                                                                    <div className="Spacer-sc-__sc-1d4woe-0 hwgVef">
                                                                        <button type="button" className="ButtonRoot-sc-__sc-1vu0deq-0 jqIssi">
                                                                            <div orientation="horizontal" className="Distribute-sc-__sc-1s2i8aq-0 YOXft">
                                                                                <span fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 djRoaw">
                                                                                    Upgrade
                                                                                </span>
                                                                            </div>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                                <div className="SplitItem-sc-__sc-3xe4fi-1 bTJYBJ">
                                                                    <div className="account-dropdown__Root-sc-1eei6rg-0 cwxzZw">
                                                                        <button aria-controls="kitt-1" aria-haspopup="true" aria-expanded="false" className="account-dropdown__Button-sc-1eei6rg-1 bZMmtP">
                                                                            <div orientation="horizontal" className="Distribute-sc-__sc-1s2i8aq-0 jtRrpT">
                                                                                <div  className="PictureWrapper-sc-__sc-15cvr7j-0 gBiwdq">
                                                                                    <Avatar style={{ color: 'rgb(255, 255, 255)', backgroundColor: 'rgb(150 206 220)' }}>
                                                                                        {`${user.userData.user_name}`}
                                                                                    </Avatar>
                                                                                </div>  
                                                                            </div>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*  under 1024px width */}
                                    <div className="mobile-form-header__HolderWrapper-r6732i-0 dufeIb">
                                        <div className="mobile-form-header__HeaderSections-r6732i-1 VhTvV">
                                            <div className='"mobile-form-header__LeftSection-r6732i-2 fcIerJ'>
                                                <a color="inherit" href="/workspace" className="Link-sc-__sc-2xj0ye-0 mobile-form-header__FormsHeaderLink-r6732i-6 eeTIzf">
                                                    <div height="auto" width="auto" className="Align-sc-__sc-4yw49j-0 IconRoot-sc-__sc-1eorqw0-0 kKgMaN mobile-form-header__InlineIcon-r6732i-5 jEyIZK">
                                                        <ArrowLeftOutlined />
                                                    </div>
                                                </a>
                                                <div className="mobile-form-header__FormTitleWrapper-r6732i-3 obXqX">
                                                    <div className="InlineEditorRoot-sc-__sc-3cr9on-0 fULyBt">
                                                        <input  placeholder={`${miniform.miniformData.name}`} aria-label="Form title"  className="Input-sc-__sc-3cr9on-1 ctshIc">
                                                        
                                                        </input>
                                                        <div className="InputSizer-sc-__sc-3cr9on-2 ehUdGi" >
                                                            My miniform
                                                            <span className="EmptyCharacter-sc-__sc-3cr9on-3 RQYuW"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mobile-form-header__RightSection-r6732i-4 cUnRBE">
                                                <div orientation="horizontal" className="Distribute-sc-__sc-1s2i8aq-0 cloQoE">
                                                    <div orientation="horizontal" className='Split-sc-__sc-3xe4fi-0 bxrZiA'>
                                                        <div className="SplitItem-sc-__sc-3xe4fi-1 bmzhhT">
                                                            <div className="draft-buttons__OnboardingHintWrapper-sc-2yzo29-0 jAweLF">
                                                                <button onClick={()=>onPublishBtnClickedUnderWidth1024px()} type="button" aria-controls="kitt-30" aria-haspopup="true" aria-expanded="false" className="ButtonRoot-sc-__sc-1vu0deq-0 YKMJw">
                                                                    <div orientation="horizontal"  className="Distribute-sc-__sc-1s2i8aq-0 YOXft">
                                                                        <span fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 djRoaw">Publish</span>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="SplitItem-sc-__sc-3xe4fi-1 ecyykU">
                                                            <button type="button" aria-controls="kitt-19" aria-haspopup="true" aria-expanded="false" className="ButtonRoot-sc-__sc-1vu0deq-0 dJfcQU">
                                                                <div orientation="horizontal" className="Distribute-sc-__sc-1s2i8aq-0 YOXft">
                                                                    <EllipsisOutlined style={{color:"black", width:"14px", height:"24px", flex:"0 0 auto"}} />
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="scroll-hidden-form-tabs__HolderWrapper-ezm0my-0 XPGou">
                                        <div role="navigation" className="TabListRoot-sc-__n8xd2n-0 kiBFtb form-tabs__TabListStyled-sc-19yg2st-0 fabtXo">
                                            <div className={`TabRoot-sc-__qct27t-1 ${navState == "Create" ? "lhCuIP" : "gqrimE"}`} kind="line">
                                                <a  onClick={()=>{onNavClickHandler("Create")}} href="#" id="form-tab-create" kind="line" tabIndex="0" className={`TabButton-sc-__qct27t-0 ${navState == "Create" ? "eacufQ" : "fKIgkg"}`}>
                                                    Create
                                                </a>
                                            </div>
                                            <div className={`TabRoot-sc-__qct27t-1 ${navState == "Connect" ? "lhCuIP" : "gqrimE"}`} kind="line">
                                                <a  onClick={()=>{onNavClickHandler("Connect")}} href="#" id="form-tab-integrate" kind="line" tabIndex="0" className={`TabButton-sc-__qct27t-0 ${navState == "Connect" ? "eacufQ" : "fKIgkg"}`}>
                                                    Connect
                                                </a>
                                            </div>
                                            <div className={`TabRoot-sc-__qct27t-1 ${navState == "Share" ? "lhCuIP" : "gqrimE"}`} kind="line">
                                                <a  onClick={()=>{onNavClickHandler("Share")}} href="#" id="form-tab-share" kind="line" tabIndex="0" className={`TabButton-sc-__qct27t-0 ${navState == "Share" ? "eacufQ" : "fKIgkg"}`}>
                                                    Share
                                                </a>
                                            </div>
                                            <div className={`TabRoot-sc-__qct27t-1 ${navState == "Results" ? "lhCuIP" : "gqrimE"}`} kind="line">
                                                <a  onClick={()=>{onNavClickHandler("Results")}} href="#" id="form-tab-results" kind="line" tabIndex="0" className={`TabButton-sc-__qct27t-0 ${navState == "Results" ? "eacufQ" : "fKIgkg"}`}>
                                                    Results
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="AnimateRoot-sc-__sc-8m2keq-0 cvpDBt">
                                            <div></div>
                                        </div>
                                    </div>

                                </header>
                            </div>
                        </div>
                    </div>
                    <div height="remaining" className="SplitItem-sc-__sc-3xe4fi-1 app__RelativeSplitItem-sc-1pn0tbg-1 gOiDLx">
                        <div className={`layouts__Body-v1luab-0 ${ window.innerWidth >= 1024 ? "egqdBl" : "eLCyzm"}`}>
                            {/* under 1024px width */}
                            <div className="mobile-builder__Root-n3zerq-0 hyeiyl">
                                <div>
                                    <span fontWeight="bold" fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 mobile-blocks__StyledTitle-e89vlz-1 nYeOV">
                                        Content
                                    </span>
                                    {renderQuestions_}
                                    <span fontWeight="bold" fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 mobile-blocks__StyledTitle-e89vlz-1 nYeOV">Endings</span>
                                    <div className="mobile-blocks__BlockCardWrapper-e89vlz-2 cZBBpo">
                                        <div className="Card-sc-__i4fuko-0 block-card__StyledCard-sc-1hulqrn-0 KMSms">
                                            <div className="block-card__BlockPreview-sc-1hulqrn-1 dMzmnt">
                                                <div className="base-styles__BaseStyle-sc-1oava9b-0 eCIkjX" style={{height: "100%"}}>
                                                    <div className="font-loader__Root-sc-1fy2i3z-0 cjaqNS" fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif" >
                                                        <div className="background__Background-esq3f2-0 dnoZnt">
                                                            <div className="erd_scroll_detection_container erd_scroll_detection_container_animation_active" style={{visibility: "hidden", display: "inline", width: "0px", height: "0px", zIndex: "-1", overflow: "hidden", margin: "0px", padding: "0px"}}>
                                                                <div dir="ltr" className="erd_scroll_detection_container" style={{position: "absolute", flex: "0 0 auto", overflow: "hidden", zIndex: "-1", visibility: "hidden", width: "100%", height: "100%", left: "0px", top: "0px"}}>
                                                                    <div className="erd_scroll_detection_container" style={{position: "absolute", flex: "0 0 auto", overflow: "hidden", zIndex: "-1", visibility: "hidden", inset: "-22px -21px -21px -22px"}}>
                                                                        <div style={{position: "absolute", flex: "0 0 auto", overflow: "scroll", zIndex: "-1", visibility: "hidden", width: "100%", height: "100%"}}>
                                                                            <div style={{position: "absolute", left: "0px", top: "0px", width: "1060px", height: "265px"}}></div>
                                                                        </div>
                                                                        <div style={{position: "absolute", flex: "0 0 auto", overflow: "scroll", zIndex: "-1", visibility: "hidden", width: "100%", height: "100%"}}>
                                                                            <div style={{position: "absolute", width: "200%", height: "200%"}}></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ending-screen__Wrapper-sc-1674nq6-1 kvsETv">
                                                            <section className="screen__LayoutWrapper-sc-9mfxmi-2 eWiMGk">
                                                                <div className="screen__Root-sc-9mfxmi-3 efSKfO">
                                                                    <div className="screen__ScreenContentWrapper-sc-9mfxmi-4 xMFmN" tabIndex="0">
                                                                        <div className="screen__ScreenContent-sc-9mfxmi-6 jWocL">
                                                                            <div className="screen__InlineContent-sc-9mfxmi-7 hTVNpX">
                                                                                <div className="screen__ContentWrapperInner-sc-9mfxmi-11 jhhrQK">
                                                                                    <div className="screen__Body-sc-9mfxmi-8 bhzfuY">
                                                                                        <div className="responsive-distribute__DistributeWrapper-sc-197rgmk-0 gOuhvF screen__DistributeFullWidth-sc-9mfxmi-5 eXjDjj">
                                                                                            <h1 className="text__TextWrapper-sc-1t2ribu-0 hfwBJe ending-screen__ContentHigherIndex-sc-1674nq6-0 hbMLzH">
                                                                                                <span fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 text-with-variables__StyledText-p8jim8-0 kHLYPD">. . .</span>
                                                                                            </h1>
                                                                                            <div className="text__TextWrapper-sc-1t2ribu-0 bxybTe">
                                                                                                <span fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 text-with-variables__StyledText-p8jim8-0 kHLYPD"></span>
                                                                                            </div>
                                                                                            <div className="distribute__Distribute-sc-11h4bn4-0 dYytsd">
                                                                                                <a aria-label="Share on Facebook" rel="noopener noreferrer" target="_blank" title="Share on Facebook">
                                                                                                    <FacebookFilled className="FacebookFilled" style={{width:"32px", height:"32px"}} />
                                                                                                </a>
                                                                                                <a aria-label="Share on Twitter" rel="noopener noreferrer" target="_blank" title="Share on Twitter">
                                                                                                    <TwitterSquareFilled className="TwitterSquareFilled" style={{width:"32px", height:"32px"}} />
                                                                                                </a>
                                                                                                <a  aria-label="Share on LinkedIn" rel="noopener noreferrer" target="_blank" title="Share on LinkedIn">
                                                                                                    <LinkedinFilled className="LinkedinFilled" style={{width:"32px", height:"32px"}} />
                                                                                                </a>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="screen__InlineButtonWrapper-sc-9mfxmi-9 hCSPDf">
                                                                                        <div className="submit__Root-sc-1ra8r4w-0 gMdIav">
                                                                                            <div className="submit__SubmitWrapper-sc-1ra8r4w-2 cwflsP">
                                                                                                <button tabIndex="0" className="button__ButtonWrapper-sc-1g3rldj-0 doOFHv">
                                                                                                    <span className="button__FlexWrapper-sc-1g3rldj-1 krLxeS">
                                                                                                        <span className="button__ButtonTextWrapper-sc-1g3rldj-4 duUvpQ">
                                                                                                            <span className="text__TextWrapper-sc-1t2ribu-0 cSDVNt">
                                                                                                                reload
                                                                                                            </span>
                                                                                                        </span>
                                                                                                    </span>
                                                                                                </button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </section>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="block-card__PointerTrap-sc-1hulqrn-3 cNRoUc"></div>
                                            </div>
                                            <div className="block-card__Footer-sc-1hulqrn-4 bdgEVv">
                                                <button type="button" style={{zIndex:"12"}} onClick={()=>{onQuestionDuplicateBtnClicked()}} className="ButtonRoot-sc-__sc-1vu0deq-0 goutua block-card__StyledButton-sc-1hulqrn-5 hlLnOL">
                                                    <div orientation="horizontal" className="Distribute-sc-__sc-1s2i8aq-0 YOXft">
                                                        <div height="auto" width="auto" color="#262627" className="Align-sc-__sc-4yw49j-0 IconRoot-sc-__sc-1eorqw0-0 buHmdN">
                                                            <BuildFilled className="goutua" style={{padding:"0px", width: "16px", height:"16px" }}/>
                                                        </div>
                                                        <span style={{padding:"0px"}} fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 goutua djRoaw">Duplicate</span>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <button onClick={()=>onAddCONTENT()} color="#FFF" className="IconButtonRoot-sc-__nzc5pg-0 cfxsyi add-block-button__StyledButton-sc-1p8q5b4-0 dVtckW">
                                    <div height="auto" width="auto" color="#FFF" className="Align-sc-__sc-4yw49j-0 IconRoot-sc-__sc-1eorqw0-0 lgXscy">
                                        <PlusOutlined style={{color:"rgb(255, 255, 255, 255)"}}/>
                                    </div>
                                </button>
                                </div>
                            </div>

                            {/* over width 1024px */}
                            <div className="layouts__Content-v1luab-1 fAtpob">
                                <div className="layouts__Wrapper-v1luab-2 jUFFeq">
                                    <div className="layouts__SideBarColumn-v1luab-5 gECteh">
                                        {/*  the  tabList box */}
                                        <div className="Container-sc-__sc-1aileh0-0 dRjYjr">
                                            <div role="tablist" className="TabListRoot-sc-__n8xd2n-0 kiBFtb">
                                                <div className={`TabRoot-sc-__qct27t-1 ${tapState === "Editor"? "bwiAez" : "bTyAJA" } sidebar-tabs__TabPanel-sc-10mklsu-0 iBMRtB`} kind="line">
                                                    <button onClick={()=>{onTapListClickHandler("Editor")}} className={`TabButton-sc-__qct27t-0 ${tapState === "Editor" ? "eacufQ" : "fKIgkg"}`} id="sidebar:editor"  kind="line" tabIndex="0" role="tab" >
                                                        Editor
                                                    </button>
                                                </div>
                                                <div className={`TabRoot-sc-__qct27t-1 ${tapState === "Design"? "bwiAez" : "bTyAJA" } sidebar-tabs__TabPanel-sc-10mklsu-0 iBMRtB`} kind="line">
                                                    <button onClick={()=>{onTapListClickHandler("Design")}} className={`TabButton-sc-__qct27t-0 ${tapState === "Design" ? "eacufQ" : "fKIgkg"}`} id="sidebar:editor"  kind="line" tabIndex="0" role="tab" >
                                                        Design
                                                    </button>
                                                </div>
                                                <div className={`TabRoot-sc-__qct27t-1 ${tapState === "Logic"? "bwiAez" : "bTyAJA" } sidebar-tabs__TabPanel-sc-10mklsu-0 iBMRtB`} kind="line">
                                                    <button onClick={()=>{onTapListClickHandler("Logic")}} className={`TabButton-sc-__qct27t-0 ${tapState === "Logic" ? "eacufQ" : "fKIgkg"}`} id="sidebar:editor"  kind="line" tabIndex="0" role="tab" >
                                                        Logic
                                                    </button>
                                                </div>
                                                <div className={`TabRoot-sc-__qct27t-1 ${tapState === "Settings"? "bwiAez" : "bTyAJA" } sidebar-tabs__TabPanel-sc-10mklsu-0 iBMRtB`} kind="line">
                                                    <button onClick={()=>{onTapListClickHandler("Settings")}} className="TabButton-sc-__qct27t-0 eacufQ" id="sidebar:logic"  kind="line" tabIndex="0" role="tab" >
                                                        <div height="32px" width="32px" aria-label="Settings" className="Align-sc-__sc-4yw49j-0 IconRoot-sc-__sc-1eorqw0-0 hjLktl">
                                                            <SettingFilled />
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* the tapListContent box */}
                                        <div data-qa="content" direction="toLeft" className="tabs-content__TabContent-sc-1kv69ar-0 dQaYub">
                                            <div data-qa="sidebar-editor" className="editor-tab__Wrapper-sc-7lz13s-0 kNougy">
                                                <div className="questions-header__TabHeader-sc-1yohr5d-1 clzdRw">
                                                    <span fontWeight="bold" fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 questions-header__Title-sc-1yohr5d-0 hUDnWa">Content</span>
                                                    <button aria-label="Add new question" color="icon" aria-controls="kitt-68" aria-haspopup="true" aria-expanded="false" className="IconButtonRoot-sc-__nzc5pg-0 csrFFP">
                                                        <div height="auto" width="auto" color="icon" className="Align-sc-__sc-4yw49j-0 IconRoot-sc-__sc-1eorqw0-0 kKgMaN">
                                                            <PlusOutlined onClick={()=>{onAddCONTENT()}}/>
                                                        </div>
                                                    </button>
                                                </div>
                                                {/*  the CONTENT questionList wrapper */}
                                                <div className="question-list__ScrollerWrapper-sc-1llrpeu-0 dFupnp">
                                                    <div data-qa="question-list">
                                                        {/* the one question component */}
                                                        <div onClick={()=>{onQuestionClickHandler()}} tabIndex="0" aria-labelledby="rbd-lift-instruction-2" draggable="false" className="question-list__ItemWrapper-sc-1llrpeu-1 jgFKvP">
                                                            
                                                            {renderQuestions}

                                                        </div>
                                                    </div>
                                                    <span fontSize="12px" className="use-smart-ellipsis__SmartEllipsisContainer-sc-155ogti-0 kBuIxu">
                                                        . . .
                                                    </span>
                                                </div>
                                                {/* the ENDINGS list wrapper */}
                                                <div height="184px" style={{height: "184px", transition: "height 0.3s cubic-bezier(0.77, 0, 0.175, 1) 0s"}}>
                                                    <div className="resizable-panel__DraggableHandle-sc-7u6h1m-2 iZHzNF">
                                                        <div className="resizable-panel__IconDrag-sc-7u6h1m-1 foOEDE"></div>
                                                    </div>
                                                    <div className="outcomes-header__Wrapper-sc-57y6p9-0 jjKpRO">
                                                        <div className="outcomes-header__TitleWrapper-sc-57y6p9-1 linCmL">
                                                            <span fontWeight="bold" fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 outcomes-header__Title-sc-57y6p9-2 fckgrQ">
                                                                Endings
                                                            </span>
                                                        </div>
                                                        <button aria-label="Add a new ending. You can add multiple endings and use logic to determine which one people see." color="icon" className="IconButtonRoot-sc-__nzc5pg-0 csrFFP">
                                                            <div height="auto" width="auto" color="icon" className="Align-sc-__sc-4yw49j-0 IconRoot-sc-__sc-1eorqw0-0 kKgMaN">
                                                                <PlusOutlined onClick={()=>{onAddENDINGS()}}/>
                                                            </div>
                                                        </button>
                                                    </div>
                                                    {/* the one ENDING */}
                                                    <div className="outcome-list__Wrapper-sc-665phe-0 gZVDrs">
                                                        <div>
                                                            <div onClick={()=>{onOutcomeClickHandler()}} tabIndex="0" aria-labelledby="rbd-lift-instruction-5" draggable="false" className="outcome-list__ItemWrapper-sc-665phe-1 fMCyXo">
                                                                <div id="f07ffe02-d861-4019-90a8-c8df386ab148" className="outcome-list-item__OutcomeItemWrapper-j4f52u-0 ekBhod">
                                                                    <div color="#FFFFFF" className="thumbnail__ThumbnailWrapper-sc-17ddkz8-0 iqyBeY">
                                                                        <div aria-label="Default: show question text only, no media" role="radio" className="layouts__LayoutWrapper-sc-1wqokta-15 fIKBRs"> 
                                                                            <div className="layouts__TextArea-sc-1wqokta-4 icMinf">
                                                                                <div className="layouts__BaseLayout-sc-1wqokta-12 bIgpKy">
                                                                                    <div color="#000000" className="layouts__Basebar-sc-1wqokta-0 layouts__Longbar-sc-1wqokta-3 iEeCAf">
                                                                                    </div>
                                                                                    <div color="#000000" className="layouts__Basebar-sc-1wqokta-0 layouts__Shortbar-sc-1wqokta-1 fwNRUV">
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="outcome-list-item__TextWrapper-j4f52u-1 iSfhfF">
                                                                        <span fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 iNznib">
                                                                            <span fontWeight="bold" fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 outcome-list-item__OutcomeIndexText-j4f52u-2 brePwX">
                                                                                A .
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <span fontSize="12px" className="use-smart-ellipsis__SmartEllipsisContainer-sc-155ogti-0 kBuIxu">
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*  the Editor Container */}
                                    <div className="layouts__EditorContent-v1luab-6 hzHkzs">
                                        <div className="components__Root-sc-28x6ww-0 ehDiGw">
                                            <div className="Card-sc-__i4fuko-0 components__ToolkitBuilderWrapper-sc-28x6ww-1 koVsxP">
                                                <div className="background-editor__PopoverWrapper-sc-19z91ma-2 cOtYgu">
                                                    <span>
                                                        <div onClick={()=>{contextMenuTrigger()}}>
                                                            <div className="background-editor__BackgroundButton-sc-19z91ma-0 eyhELp">
                                                                <div height="auto" width="auto" color="notification" className="Align-sc-__sc-4yw49j-0 IconRoot-sc-__sc-1eorqw0-0 lgXscy background-editor__Icon-sc-19z91ma-1 kvBFJk">
                                                                    <EditFilled />
                                                                </div>
                                                                <span fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 djRoaw">Layout</span>
                                                            </div>
                                                        </div>
                                                    </span>
                                                </div>
                                                <div className="base-styles__BaseStyle-sc-1oava9b-0 eCIkjX" style={{height: "100%"}}> 
                                                    <div fontFamily="system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif" className="font-loader__Root-sc-1fy2i3z-0 cjaqNS">
                                                        <div className="blocks__Root-sc-1biwhcv-0 fxyRAm">
                                                            <div className="structure__QuestionGroupHeaderPositioner-sc-110lqy5-0 leiYjO"></div>
                                                            <div className="background__Background-esq3f2-0 dnoZnt"></div>
                                                            <section className="block-section__LayoutWrapper-vw1wyv-0 iUMTIq">
                                                                <div  className="block-section__Section-vw1wyv-1 jJhpKt">
                                                                    <div className="layout-container__AnimationLayer-sc-1ektm8w-5 loaOtL">
                                                                        <div onMouseEnter={()=>{layoutContainerWrapper(true)}} onMouseLeave={()=>{layoutContainerWrapper(false)}}  className="layout-container__SlideEditorWrapper-sc-1ektm8w-2 kmHnVe">
                                                                            <div className={`layout-container__BlueBorder-sc-1ektm8w-1 ${LCWstate ? "hHJtsx" : "liwGr"}`}>
                                                                                <div className="block-structure__Root-sc-1esu8nk-2 cHnjJw">
                                                                                    <div className="block-structure__ContentWrapper-sc-1esu8nk-3 gZAxJk">
                                                                                        <div className="layout-container__Root-fb7y4k-0 eqzgCG">
                                                                                            <div className="spacer__Spacer-sc-11bdvt0-0 fewBJT">
                                                                                                <div>
                                                                                                    <div>
                                                                                                        <div className="question-header__HeaderWrapper-z8zey9-3 kmXpQb">
                                                                                                            <div className="question-header__CounterPosition-z8zey9-1 jpSUne">
                                                                                                                <div className="question-header__CounterWrapper-z8zey9-2 HTMcj">
                                                                                                                    <div className="responsive-spacer__SpacerWrapper-sc-2bvre0-0 bvFBgj">
                                                                                                                        <div className="question-header__CounterContent-z8zey9-0 phqXL">
                                                                                                                            <span className="text__TextWrapper-sc-1t2ribu-0 eWQkLc">
                                                                                                                                <span aria-hidden="true">1</span>
                                                                                                                            </span>
                                                                                                                            <div className="spacer__Spacer-sc-11bdvt0-0 ibpIBo">
                                                                                                                                <ArrowRightOutlined />
                                                                                                                            </div>                                                                             
                                                                                                                        </div>
                                                                                                                    </div>                                             
                                                                                                                </div>
                                                                                                            </div>           
                                                                                                            <div className="text__TextWrapper-sc-1t2ribu-0 fNiPtZ">
                                                                                                                <div className="title-wrapper__EditorWrapper-sc-1lndwj3-0 dCEpnJ">
                                                                                                                    <div>
                                                                                                                        <div className="editor__QuillTheme-sc-8wm7iv-0 bkKbFd">
                                                                                                                            <div className={`editor__QuillStyles-sc-8wm7iv-1 ${questionTitle === "undefined" ? "bMirq" : "dnbWfE"}`}>
                                                                                                                                <div className="notranslate ql-container ql-bubble">
                                                                                                                                    <div   onFocus={onQuestionTitleFocused} onBlur={()=>onQuestionTitleBlured()} onInput={onQuestionTitleChange} suppressContentEditableWarning={true} contentEditable="true" className={`ql-editor ${questionTitle === "" ? "ql-blank" : ""}`} data-placeholder="Your question here. Recall information with @"  >
                                                                                                                                        {`${choosedQuestion.title === "undefined" ? "" : choosedQuestion.title}`}
                                                                                                                                    </div>
                                                                                                                                    <div className="ql-tooltip ql-hidden">
                                                                                                                                         <span className="ql-tooltip-arrow"></span>    
                                                                                                                                         <div className="ql-tooltip-editor">
                                                                                                                                            <input type="text"></input>
                                                                                                                                            <a className="ql-close"></a>
                                                                                                                                         </div>
                                                                                                                                         <div className="ql-toolbar">
                                                                                                                                             <span className="ql-formats">
                                                                                                                                                <button type="button"></button>
                                                                                                                                                <button type="button"></button>
                                                                                                                                                <button type="button"></button>
                                                                                                                                             </span>
                                                                                                                                         </div>                                                                                   
                                                                                                                                    </div>
                                                                                                                                    <div style={{display: "none", position: "absolute"}}>
                                                                                                                                        <ul></ul>                                          
                                                                                                                                    </div>
                                                                                                                                </div>                                                    
                                                                                                                            </div>                                        
                                                                                                                        </div>
                                                                                                                    </div>                                                                     
                                                                                                                </div>
                                                                                                            </div>                                                                             
                                                                                                        </div>
                                                                                                        <div className="responsive-spacer__SpacerWrapper-sc-2bvre0-0 greOqb">
                                                                                                            <div className="text__TextWrapper-sc-1t2ribu-0 gWtgKM">
                                                                                                                <div>
                                                                                                                    <div className="editor__QuillTheme-sc-8wm7iv-0 bkKbFd">
                                                                                                                        <div className="editor__QuillStyles-sc-8wm7iv-1 eUMnMv">
                                                                                                                            <div className="notranslate ql-container ql-bubble">
                                                                                                                                <div style={{
                                                                                                                                        margin: "0px",
                                                                                                                                        padding: "0px",
                                                                                                                                        counterReset: "list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0"
                                                                                                                                    }} onInput={onQuestionDescriptionChange}  onFocus={onQuestionDescriptionFocused} onBlur={()=>onQuestionDescriptionBlured()} suppressContentEditableWarning={true} contentEditable="true" data-placeholder="Description (optional)" className={`ql-editor ${questionDescription === "" ? "ql-blank" : ""}`}>
                                                                                                                                        {`${choosedQuestion.description === "undefined" ? "" : choosedQuestion.description}`}
                                                                                                                                </div>
                                                                                                                                <div className="ql-tooltip ql-hidden">
                                                                                                                                    <span className="ql-tooltip-arrow"></span>                                                         
                                                                                                                                    <div className="ql-tooltip-editor">
                                                                                                                                        <input type="text"></input>
                                                                                                                                        <a className="ql-close"></a>
                                                                                                                                    </div>
                                                                                                                                    <div className="ql-toolbar">
                                                                                                                                        <span className="ql-formats">
                                                                                                                                            <button type="button" className="ql-bold"></button>
                                                                                                                                            <button type="button" className="ql-italic"></button>
                                                                                                                                            <button type="button" className="ql-link"></button>
                                                                                                                                        </span>                                                          
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                                <div style={{display: "none", position: "absolute"}}>
                                                                                                                                    <ul></ul>
                                                                                                                                </div>
                                                                                                                            </div>    
                                                                                                                        </div>                                                                                              
                                                                                                                    </div>
                                                                                                                </div>                               
                                                                                                            </div>                                                                              
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className="responsive-spacer__SpacerWrapper-sc-2bvre0-0 ePKbAa">
                                                                                                        <div className="choice-list__DraggableWrapper-sc-1t4szy6-0 MDMuf">
                                                                                                            <div style={{position: "relative"}} className="choices-layout__StyledDiv-qpux4o-0 jooQcT">
                                                                                                                {/* the choice-answer-list wrapper */}
                                                                                                                <ul className="choices-layout__ChoicesLayoutWrapper-qpux4o-1 bArHQn">
                                                                                                                    
                                                                                                                    {renderCoices}
                                                                                                                    
                                                                                                                    <li index="4" style={{marginBottom: "8px", marginRight: "0px", width: "100%"}}>
                                                                                                                        <button onClick={()=>{onAddChoicebtnClick()}} style={{color: "#0445AF"}} type="button" className="styled-components__AddChoiceButton-cykob3-1 ncxsD">
                                                                                                                            Add choice
                                                                                                                        </button>
                                                                                                                        <span fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 gEWZOm"></span>                                                        
                                                                                                                    </li>

                                                                                                                </ul>
                                                                                                                {/* 화면너비가 1024px 이하일 때, 디스플레이되는 것으로 보임 */}
                                                                                                                <div className="erd_scroll_detection_container erd_scroll_detection_container_animation_active" style={{visibility:"hidden", display: "inline", width: "0px", height: "0px", zIndex: "-1", overflow: "hidden", margin: "0px", padding: "0px"}}>
                                                                                                                    <div></div>                                                        
                                                                                                                </div>
                                                                                                            </div>    
                                                                                                        </div>                                                  
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div className={`layout-container__Positioner-sc-1ektm8w-0 ${LCWstate ? "dtDKYx" : "lmdOTj" }`}>
                                                                                <span>
                                                                                    <div onClick={()=>{questionTypeTrigger()}}>
                                                                                        <div className="layout-container__ChoiceMenuButton-sc-1ektm8w-3 dKqvRS">
                                                                                            <div height="auto" width="auto" color="notification" className="Align-sc-__sc-4yw49j-0 IconRoot-sc-__sc-1eorqw0-0 lgXscy layout-container__MenuIcon-sc-1ektm8w-4 lnTfzP">
                                                                                                <EditFilled />
                                                                                            </div>
                                                                                            <span fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 gEWZOm"> {`${questionType}`}</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </section>
                                                            <div className="blocks__LayoutWrapper-sc-1biwhcv-1 jDtBBd">
                                                                <div style={{display: "block", transition: "all 200ms ease 0s", opacity: "1"}}>
                                                                    <div className="block-media__Wrapper-sc-13u0f85-0 ivwDDr">
                                                                        <div className="block-media__AttachmentWrapper-sc-13u0f85-1 ejWnWg">
                                                                            <div className="block-media__FilterWrapper-sc-13u0f85-2 fPJPWB">
                                                                                <picture className="image__StyledPicture-p7rduw-0 dElKxs">
                                                                                    <source srcSet="https://images.typeform.com/images/WMALzu59xbXQ/image/default-firstframe.png" media="(prefers-reduced-motion: reduce)"></source>
                                                                                    <img alt src="https://images.typeform.com/images/WMALzu59xbXQ/image/default" style={{display: "block", margin: "0px auto", width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 50%"}}></img>
                                                                                </picture>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    
                </div>
                
                {/* the notification */}
                <div className="NotificationRoot-sc-__sc-1eupdtg-0 hmMpzb">
                    <div className="AnimateRoot-sc-__sc-8m2keq-0 cQYmAv">
                        <div></div>
                    </div>
                </div>
                {/* the animationRoot */}
                <div>
                    <div className="AnimateRoot-sc-__sc-8m2keq-0 cvpDBt">
                        <div></div>
                    </div>
                    <div>
                        <div className={`BackdropContainer-sc-__a7lwzj-0 ${isFormInitModalOpen ? "jzmcaW" : "bkKbFd"}`}>
                            <div className="Backdrop-sc-__a7lwzj-1 fcKMCA"></div>
                        </div>
                        <div className="AnimateRoot-sc-__sc-8m2keq-0 ecRhfR PopupContainer-sc-__a7lwzj-2 bFxksY">
                            <div>
                                {/* the modal background overlay */}
                                <div className={`PopupCardContainer-sc-__a7lwzj-3 ${isFormInitModalOpen ? "fRlzcx" : "bkKbFd"}`}>
                                    <div className="PopupCardOuter-sc-__a7lwzj-4 dbMfrt">
                                        <div aria-modal="true"  role="dialog" aria-labelledby="kitt-0" className="PopupCard-sc-__a7lwzj-5 jmAevp">
                                            <div className="ModalHeader-sc-__sc-1bbjezq-0 kRLcas">
                                                <span fontFamily="brand" fontWeight="light" className='Text-sc-__sc-1h7ebrz-0 eboKn'>
                                                    <div id="kitt-0" className="ModalTitle-sc-__sc-1bbjezq-1 cxoCLM">
                                                        Bring your new miniform to life
                                                    </div>
                                                </span>
                                                <button onClick={()=>{onModalClosebtnClick()}} aria-label="Close dialog" color="#898989" className="IconButtonRoot-sc-__nzc5pg-0 dLWUeh CloseButton-sc-__a7lwzj-6 jfacfp">
                                                    <div height="auto" width="auto" color="#898989"  className="Align-sc-__sc-4yw49j-0 IconRoot-sc-__sc-1eorqw0-0 kKgMaN" >
                                                        <CloseOutlined />
                                                    </div>
                                                </button>
                                            </div>
                                            <span className="ModalBody-sc-__sc-1bbjezq-2 kILttj">
                                                <div className="Spacer-sc-__sc-1d4woe-0 jwFlxb">
                                                    <span fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 djRoaw" >
                                                        Give it a name
                                                    </span>
                                                </div>
                                                <div className="StringInputRoot-sc-__iwhi9i-0 fxNpjC" width="full">
                                                    <div className={`InputFieldBox-sc-__iwhi9i-2 ${isNameInputFocused ? "jAFmxf" : "faAOWX"}`}>
                                                        <div className="InputFieldWrapper-sc-__iwhi9i-3 cYgUZh">
                                                            <input onChange={onFormNameChanged} onFocus={()=>onInputFieldFocus(true)} onBlur={()=>onInputFieldFocus(false)} placeholder="My new miniform" type="text" className="Input-sc-__iwhi9i-1 hpXKSO" placeholder={`${miniform.miniformData.name}`}></input>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="Spacer-sc-__sc-1d4woe-0 iDXULS">
                                                    <div orientation="horizontal" className="Distribute-sc-__sc-1s2i8aq-0 ixBBus">
                                                        <span fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 djRoaw">
                                                            What are you creating?
                                                        </span>
                                                        <button className="default-trigger__Trigger-sc-1dniq72-0 bwIJyo">
                                                            <span color="icon" cursor="pointer" fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 dCmpRS">(?)</span>
                                                        </button>
                                                    </div>
                                                </div>

                                                <Select className="Content-sc-__sc-1rh8p95-0 gwIBdN jqAyMK" defaultValue={`${miniform.miniformData.type}`}  onChange={onFormTypeChanged}>
                                                    <Option value="Research survey">Research survey</Option>
                                                    <Option value="Request form">Request form</Option>
                                                    <Option value="Registration form">Registration form</Option>
                                                    <Option value="Quiz">Quiz</Option>
                                                    <Option value="Poll">Poll</Option>
                                                    <Option value="Payment form">Payment form</Option>
                                                    <Option value="Order form">Order form</Option>
                                                    <Option value="Lead gen form">Lead gen form</Option>
                                                    <Option value="Feadback form">Feadback form</Option>
                                                    <Option value="Contact form">Contact form</Option>
                                                    <Option value="Checklist">Checklist</Option>
                                                    <Option value="Application form">Application form</Option>
                                                    <Option value="Other">Other</Option>
                                                </Select>
           
                                            </span>
                                            <div className="ModalFooter-sc-__sc-1bbjezq-3 jjrAZy">
                                                <div className="Spacer-sc-__sc-1d4woe-0 fxrSnb">
                                                    <button onClick={()=>{onFormInitModalBtnClick()}} type="button" className="ButtonRoot-sc-__sc-1vu0deq-0 guETIw">
                                                        <div orientation="horizontal" className="Distribute-sc-__sc-1s2i8aq-0 YOXft">
                                                            <span fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 djRoaw">
                                                                Continue
                                                            </span>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div>
                    <div onMouseLeave={()=>onMenuMouseLeaved()} className={`AnimateRoot-sc-__sc-8m2keq-0 cvpDBt ${isMenuOpened ? "" : "hidden"} ${window.innerWidth < 1024 ? "hidden":""}`}>
                        <div>
                            <div style={{left: "252px", top: "172px"}} className="context-menu__MenuContainer-sc-1g9e3a3-2 kbfBOe fade-enter-done">
                                <div className="Card-sc-__i4fuko-0 context-menu__StyledCard-sc-1g9e3a3-1 gAclSl">
                                    <div>
                                        <ul className="ListRoot-sc-__lexhmg-0 cHUehc">
                                            <li  size="5" className="ListItem-sc-__lexhmg-1 cVJeTy">
                                                <div onMouseEnter={()=>onThisMenuFocused("Duplicate")} height="5" className={`context-menu__MenuItem-sc-1g9e3a3-0 ${thisMenuFocused === "Duplicate" ? "dwvvZp" : "sVKlS"}`}>
                                                    <span onClick={()=>onDuplicateBtnClicked()} fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 efKJKA">
                                                        Duplicate                                                                                          
                                                    </span>
                                                </div>
                                            </li>
                                            <li  size="5" className="ListItem-sc-__lexhmg-1 cVJeTy">
                                                <div onMouseEnter={()=>onThisMenuFocused("Delete")} height="5" className={`context-menu__MenuItem-sc-1g9e3a3-0 ${thisMenuFocused === "Delete" ? "dwvvZp" : "sVKlS"}`}>
                                                    <span fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 efKJKA">
                                                        <span onClick={()=>onDeleteBtnClicked()} fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 djRoaw">
                                                            Delete
                                                        </span>
                                                    </span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* question edit overay under width 1024px  */}
                <div className={`modal__OverlayBackdrop-mqulxh-0 ${isQuestionEditOverayOpen ? "fJMwDr" : "hidden"}`}>
                    <div content="medium" className="modal__ModalWrapper-mqulxh-1 gbrXkk">
                        <div className="modal__ModalHeader-mqulxh-2 mobile-blocks__StyledModalHeader-e89vlz-0 iCUicp">
                            <button onClick={()=>{onQuestionEditCloseBtnClicked()}} color="icon" className="IconButtonRoot-sc-__nzc5pg-0 frYGev">
                                <div height="auto" width="auto" color="icon" className="Align-sc-__sc-4yw49j-0 IconRoot-sc-__sc-1eorqw0-0 kKgMaN">
                                    <ArrowLeftOutlined/>
                                </div>
                            </button>
                        </div>
                        <div className="modal__ModalBody-mqulxh-3 fwESWZ">
                            <div className='"base-styles__BaseStyle-sc-1oava9b-0 eCIkjX' style={{height: "100%"}}>
                                <div fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif" className="font-loader__Root-sc-1fy2i3z-0 cjaqNS">
                                    <div className="blocks__Root-sc-1biwhcv-0 fxyRAm">
                                        <div className="structure__QuestionGroupHeaderPositioner-sc-110lqy5-0 leiYjO">
                                            <div className="background__Background-esq3f2-0 dnoZnt"></div>
                                            <section className="block-section__LayoutWrapper-vw1wyv-0 iUMTIq">
                                                <div className="block-section__Section-vw1wyv-1 ciJWyh">
                                                    <div className="layout-container__AnimationLayer-sc-1ektm8w-5 loaOtL">
                                                        <div className="layout-container__SlideEditorWrapper-sc-1ektm8w-2 gqTwKu">
                                                            <div className="layout-container__BlueBorder-sc-1ektm8w-1 ddvUqr">
                                                                <div className="block-structure__Root-sc-1esu8nk-2 cHnjJw">
                                                                    <div className="block-structure__ContentWrapper-sc-1esu8nk-3 gZAxJk">
                                                                        <div className="layout-container__Root-fb7y4k-0 eqzgCG">
                                                                            <div className="spacer__Spacer-sc-11bdvt0-0 ivwqbk">
                                                                                <div>
                                                                                    <div>
                                                                                        <div className="question-header__HeaderWrapper-z8zey9-3 kmXpQb">
                                                                                            <div className="question-header__CounterPosition-z8zey9-1 jpSUgR">
                                                                                                <div className="question-header__CounterWrapper-z8zey9-2 HTMcj">
                                                                                                    <div className="responsive-spacer__SpacerWrapper-sc-2bvre0-0 byBIsc">
                                                                                                        <div className="question-header__CounterContent-z8zey9-0 phqXL">
                                                                                                            <span className="text__TextWrapper-sc-1t2ribu-0 dItgWa">
                                                                                                                <span aria-hidden="true">1</span>
                                                                                                            </span>
                                                                                                            <div className="spacer__Spacer-sc-11bdvt0-0 hmrdyC">
                                                                                                                <ArrowRightOutlined />
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="text__TextWrapper-sc-1t2ribu-0 hfwBJe">
                                                                                                <div className="title-wrapper__EditorWrapper-sc-1lndwj3-0 dCEpnJ">
                                                                                                    <div>
                                                                                                        <div className="editor__QuillTheme-sc-8wm7iv-0 bkKbFd">
                                                                                                            <div className={`editor__QuillStyles-sc-8wm7iv-1 ${questionTitle == "" ? "hhgvdq" : "bMirq"}`}>
                                                                                                                <div className="notranslate ql-container ql-bubble">
                                                                                                                    <div id="underWidth1024pxQuestionTitle" className={`ql-editor ${questionTitle === "" ? "ql-blank" : ""}`} onFocus={onQuestionTitleFocused} onBlur={()=>onQuestionTitleBlured()} onInput={onQuestionTitleChange} suppressContentEditableWarning={true} contentEditable="true" data-placeholder="Your question here. Recall information with @">
                                                                                                                        {`${choosedQuestion.title === "undefined" ? "" : choosedQuestion.title}`}
                                                                                                                    </div>
                                                                                                                    <div className="ql-toolbar"><div></div></div>
                                                                                                                </div>
                                                                                                                <div style={{display: "none", position: "absolute"}}>
                                                                                                                    <ul></ul>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="responsive-spacer__SpacerWrapper-sc-2bvre0-0 greOqb">
                                                                                        <div className="text__TextWrapper-sc-1t2ribu-0 fJzfNd">
                                                                                            <div>
                                                                                                <div className="editor__QuillTheme-sc-8wm7iv-0 bkKbFd">
                                                                                                    <div className="editor__QuillStyles-sc-8wm7iv-1 eUMnMv">
                                                                                                        <div className="notranslate ql-container ql-bubble">
                                                                                                            <div onInput={onQuestionDescriptionChange} onFocus={onQuestionDescriptionFocused} onBlur={()=>onQuestionDescriptionBlured()} className={`ql-editor ${questionDescription === "" ? "ql-blank" : ""}`} suppressContentEditableWarning={true} contentEditable="true" data-placeholder="Description (optional)">
                                                                                                                {`${choosedQuestion.description === "undefined"?"":choosedQuestion.description}`}
                                                                                                            </div>
                                                                                                            <div className="ql-tooltip ql-hidden">
                                                                                                                <span className="ql-tooltip-arrow"></span>
                                                                                                                <div className="ql-tooltip-editor">
                                                                                                                    <input type="text" ></input>
                                                                                                                    <a className="ql-close"></a>
                                                                                                                </div>
                                                                                                                <div className="ql-toolbar">
                                                                                                                    <span className="ql-formats"></span>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            <div style={{display: "none", position: "absolute"}}>
                                                                                                                <ul></ul>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="responsive-spacer__SpacerWrapper-sc-2bvre0-0 ePKbAa">
                                                                                    <div className="choice-list__DraggableWrapper-sc-1t4szy6-0 MDMuf">
                                                                                        <div className="choices-layout__StyledDiv-qpux4o-0 jooQcT" style={{position: "relative"}}>
                                                                                            <ul className="choices-layout__ChoicesLayoutWrapper-qpux4o-1 bArHQn">
                                                                                                
                                                                                                {renderCoices_(choosedQuestion)}
                                                                                                
                                                                                                <li index="4" style={{marginBottom: "8px", marginRight: "0px", width: "100%"}}>
                                                                                                    <button onClick={()=>{onAddChoicebtnClick()}} style={{color:"#0445AF"}} type="button"  className="styled-components__AddChoiceButton-cykob3-1 ncxsD">
                                                                                                        Add choice
                                                                                                    </button>
                                                                                                    <span fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 gEWZOm"></span>
                                                                                                </li>

                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>.
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div>
                    <div className={`modal__OverlayBackdrop-mqulxh-0 ${isQuestionTypeDialogOpen ? "fJMwDr" : "hidden"}`}>
                        <div content="medium" className="modal__ModalWrapper-mqulxh-1 gbrXkk">
                            <div className="modal__ModalHeader-mqulxh-2 add-block-button__StyledModalHeader-sc-1p8q5b4-1 jnCNLh">
                                <span fontWeight="medium" fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 dHDJaP" >Choose a question type</span>
                                <button onClick={() => {onQuestionTypeSelectClose()}} color="icon" className="IconButtonRoot-sc-__nzc5pg-0 qBDNa">
                                    <div height="auto" width="auto" color="icon" className="Align-sc-__sc-4yw49j-0 IconRoot-sc-__sc-1eorqw0-0 kKgMaN">
                                        <CloseOutlined />
                                    </div>
                                </button>
                            </div>
                            <div className="modal__ModalBody-mqulxh-3 fwESWZ">
                                <div className="block-list__ListWrapper-sc-17ryc9y-1 jPqcNm">
                                    <ul className="ListRoot-sc-__lexhmg-0 cHUehc block-list__StyledList-sc-17ryc9y-0 jMxKqG">
                                       
                                        {renderQuestionTypes_}

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>   

        </div>
        {/* the question type dialog*/}
        <div className="loading-container">
            <div className="placeholder-header">
                <div className="placeholder-svg-wrapper">
                    <svg></svg>
                </div>
            </div>
            <div className="placeholder-content">
                <div className="placeholder-spinner">
                    <span>Hold tight—just getting this page ready</span>
                </div>
            </div>
        </div>
        <script type="text/javascript"></script>
        <div id="pricing-dialog">
            <div className="BaseStylesRoot-sc-__gqan6a-0 cDwFLx">
                <div className="AnimateRoot-sc-__sc-8m2keq-0 cNLyGj">
                    <div></div>
                </div>
            </div>
        </div>
        <script type="text/javascript"></script>
        <script type="text/javascript"></script>
        <noscript></noscript>
        <iframe></iframe>
        <script type="text/javascript"></script>
        <script src=""></script>
        <div>
            <img></img>
        </div>
        <script src=""></script>
        <script type="text/javascript"></script>

        {/* <div className={`BaseStylesRoot-sc-__gqan6a-0 cnpIbj ${"hidden"}`}>
            <div id="kitt-2" tabindex="-1" role="dialog" data-qa="share-popup-content" aria-hidden="false" className="PopoverRoot-sc-__ru1bae-0 qZjNA" style={{position: "absolute", inset: "0px auto auto 0px", margin: "0px", transform: "translate3d(494px, 60px, 0px)"}} data-popper-placement="bottom">
                <div className="Card-sc-__i4fuko-0 sc-fzokOt cYhfSS">
                    <div className="sc-fznZeY gJlwEu">
                        <div className="sc-AxgMl cVmQYF">
                            <div className="sc-fzozJi dteCCc">
                                <span font-weight="bold" font-family="sans" className="Text-sc-__sc-1h7ebrz-0 lcJwja">Get the link</span>
                                <div className="sc-fzoLsD fYZyZu">
                                    <div height="auto" width="auto" color="icon" className="Align-sc-__sc-4yw49j-0 IconRoot-sc-__sc-1eorqw0-0 kKgMaN">
                                        <CloseOutlined onClick={()=>onPublishBoxCloseBtnClickedUnderWidth1024px()}/>
                                    </div>
                                </div>
                            </div>
                            <div className="Spacer-sc-__sc-1d4woe-0 DdrMM"></div>
                            <div className="sc-AxheI eXzlnr">
                                <div className="StringInputRoot-sc-__iwhi9i-0 fxNpjC sc-AxmLO bbyvAH" width="full">
                                    <div className="InputFieldBox-sc-__iwhi9i-2 faAOWX">
                                        <div className="InputFieldWrapper-sc-__iwhi9i-3 cYgUZh">
                                            <input data-qa="url" aria-label="copy url" type="text" className="Input-sc-__iwhi9i-1 hpXKSO" value={`https://www.my-awssimplified.com/${user.userData._id}/to/${miniform.miniformData._id}`}></input>
                                        </div>
                                    </div>
                                </div>
                                <button type="button" data-qa="copy-button" aria-label="copy button" className="ButtonRoot-sc-__sc-1vu0deq-0 guETIw sc-Axmtr fntVGa">
                                    <div orientation="horizontal" className="Distribute-sc-__sc-1s2i8aq-0 YOXft">
                                        <span font-family="sans" className="Text-sc-__sc-1h7ebrz-0 djRoaw">Copy</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        
        <div className="BaseStylesRoot-sc-__gqan6a-0 cnpIbj">
            <div className="AnimateRoot-sc-__sc-8m2keq-0 cvpDBt">
                 <div></div>                                                                                                               
            </div>                                                                                                                 
        </div>
        <div className={`BaseStylesRoot-sc-__gqan6a-0 cnpIbj ${isPublished ? "" : "hidden"}`}>
            <div id="kitt-0" tabindex="-1" role="dialog" data-qa="share-popup-content" aria-hidden="false" className="PopoverRoot-sc-__ru1bae-0 qZjNA" style={{ osition: "absolute", inset: "0px auto auto 0px", margin: "0px", transform: "translate3d(607px, 48px, 0px)"}} data-popper-placement="bottom">
                <div  className="Card-sc-__i4fuko-0 sc-fzokOt cYhfSS">
                    <div className="sc-fznZeY gJlwEu">
                        <div className="sc-AxgMl cVmQYF">
                            <div className="sc-fzozJi dteCCc">
                                <span font-weight="bold" font-family="sans" className="Text-sc-__sc-1h7ebrz-0 lcJwja">Get the link</span>
                                 <div className="sc-fzoLsD fYZyZu">
                                     <div height="auto" width="auto" color="icon" className="Align-sc-__sc-4yw49j-0 IconRoot-sc-__sc-1eorqw0-0 kKgMaN">
                                         <CloseOutlined onClick={()=>onPublishBoxCloseBtnClickedOverWidth1024px()} />
                                     </div>
                                 </div>
                            </div>
                            <div className="Spacer-sc-__sc-1d4woe-0 DdrMM"></div>
                            <div className="sc-AxheI eXzlnr">
                                <div className="StringInputRoot-sc-__iwhi9i-0 fxNpjC sc-AxmLO bbyvAH" width="full">
                                    <div className="InputFieldBox-sc-__iwhi9i-2 faAOWX">
                                        <div className="InputFieldWrapper-sc-__iwhi9i-3 cYgUZh">
                                            <input ref={publishedFormAddrInput} data-qa="url" aria-label="copy url" type="text" className="Input-sc-__iwhi9i-1 hpXKSO" value={`https://www.my-awssimplified.com/${user.userData._id}/to/${miniform.miniformData._id}`}></input>
                                        </div>
                                    </div>
                                </div>
                                <button onClick={()=>onPublishedAddrCopyBtnClicked()} type="button" data-qa="copy-button" aria-label="copy button" className="ButtonRoot-sc-__sc-1vu0deq-0 guETIw sc-Axmtr fntVGa">
                                    <div orientation="horizontal" className="Distribute-sc-__sc-1s2i8aq-0 YOXft">
                                        <span font-family="sans" className="Text-sc-__sc-1h7ebrz-0 djRoaw">Copy</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div onMouseLeave={() => questionTypeDialogMouseLeave()} className={`BaseStylesRoot-sc-__gqan6a-0 ${isQuestionTypeDialogOpen ? "cnpIbj" : "hidden"} ${window.innerWidth < 1024 ? "hidden" : ""}`}>
            <div id="kitt-6" tabIndex="-1" role="dialog" aria-hidden="false" className="PopoverRoot-sc-__ru1bae-0 qZjNA" 
            style={{margin: "0px", position: "absolute", inset: "0px auto auto 0px", transform: "translate3d(248px, 112px, 0px)"}}>
                <div className="AnimateRoot-sc-__sc-8m2keq-0 OPHsS">
                    <div>
                        <div className="Card-sc-__i4fuko-0 lmVUMO scaleFromTopLeft-enter-done">
                            <div data-qa="new-block-menu" className="popover-new-block-menu__MenuWrapper-sc-1s5xjfs-0 bTHdiI">
                                <div className="Container-sc-__sc-1aileh0-0 bFXSzT">
                                    <span fontWeight="medium" fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 dHDJaP">
                                        Choose a question type
                                    </span>
                                </div>
                                <div data-qa="block-list-popover" className="block-list__ListWrapper-sc-17ryc9y-1 jPVlfP">
                                    <ul className="ListRoot-sc-__lexhmg-0 cHUehc block-list__StyledList-sc-17ryc9y-0 hRjKxK">
                                        {renderQuestionTypes}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default FormPage
