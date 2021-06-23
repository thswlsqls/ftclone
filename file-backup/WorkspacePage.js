import Avatar from 'antd/lib/avatar/avatar';
import React, { useEffect, useRef, useState } from 'react'
import Axios from 'axios';
import { Link, withRouter } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { chooseMiniform } from "../../../REDUX_actions/miniform_actions";

import './WorkspacePageStyles.css';
import { AntDesignOutlined, AppstoreFilled, ArrowDownOutlined, BranchesOutlined, CloseOutlined, DownOutlined, EllipsisOutlined, EyeInvisibleFilled, LayoutFilled, LogoutOutlined, PlusOutlined, QuestionOutlined, RightOutlined, SearchOutlined, StarFilled, TeamOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import templates from './templates';

function WorkspacePage(props) {

    var user = { userData :{
        isAuth: false
        },
    };

    let state = useSelector(state => state)

    if(state.user.userData){
        user = state.user;
    } 

    const {miniform} = useSelector(state => state);
    const [miniforms, setminiforms] = useState([])
    const [configureOpenMiniformId, setconfigureOpenMiniformId] = useState("")
    const [IsTemplateOpen, setIsTemplateOpen] = useState(false)

    const [formName, setformName] = useState("my miniform");
    const [formType, setformType] = useState("Select form type")
    const [miniformId, setminiformId] = useState("");
    const [clickedThema, setclickedThema] = useState("Research")

    const dispatch = useDispatch();

    const onStartFromScratchBtnClicked = () => {
        const variables = {
            creator: user.userData._id,
            name: formName,
            type: formType,
        }

        Axios.post('/api/miniForm/createForm', variables)
                .then(response => {
                    if(response.data.success){
                        alert('miniform을 성공적으로 업로드했습니다.')   
                        console.log(response.data.doc._id)   
                        setminiformId(response.data.doc._id);      
                        dispatch(chooseMiniform(response.data.doc));
                    }else{
                        alert('miniform 업로드에 실패했습니다.')
                    }
                })

        setIsTemplateOpen(false);
    }

    useEffect(() => {

        const variabeles = {
            creator: user.userData._id
        }

        Axios.post('/api/miniform/getMyMinifoms', variabeles)
            .then(response => {
                if(response.data.success){
                    console.log('나의 미니폼 목록을 가져옵니다.')
                    setminiforms(response.data.miniforms);
                    alert(`${user.userData.user_name}님의 미니폼 목록 가져오기에 성공했습니다.`)
                }else{
                    alert("나의 미니폼 목록 정보 가져오기에 실패하였습니다.")
                }
            });
            
    }, [state])

    const HelpAndInspirations = [
        {
            id:"",
            className: "iwfGng",
            icon: <QuestionOutlined style={{color:"#0487AF"}}/>,	
            title: "Help Center",
        },
        {
            id:"",
            className: "iwfGng",
            icon: <TeamOutlined style={{color:"#ffba49"}}/>,	
            title: "Ask the community",
        },
        {
            id:"",
            className: "dlxjOE",
            icon: <StarFilled style={{color:"#e04f78"}}/>,	
            title: "Learn the basics",
        },
        {
            id:"",
            className: "cFzWdS",
            icon: <BranchesOutlined style={{color:"#ffba49"}}/>,	
            title: "Branch or skip questions",
        },
        {
            id:"",
            className: "gtOhlR",
            icon: <EyeInvisibleFilled style={{color:"#3C6997"}}/>,	
            title: "Pull in info you already know",
        },
        {
            id:"",
            className: "cuxHpY",
            icon: <LayoutFilled style={{color:"#a086c4"}}/>,	
            title: "Embed your miniform",
        }
    ]

    const renderHelpInspiration = HelpAndInspirations.map((item, index) => {

        return(
            <li className="ListItem-sc-__lexhmg-1 iqLhzO">
                <a color="description" href="#" rel="noopener noreferrer" tabIndex="0" target="_blank" className="Link-sc-__sc-2xj0ye-0 Izdvl">
                    <div className="help-center-content__ItemWrapper-sc-1x892rx-1 ggxbaB">
                        <div orientation="horizontal" className="Distribute-sc-__sc-1s2i8aq-0 hEcBFA">
                            <div height="8px" width="8px" color="#0487AF" className={`Align-sc-__sc-4yw49j-0 IconRoot-sc-__sc-1eorqw0-0 ${item.className}`}>
                                {item.icon}
                            </div>
                            <div className="Container-sc-__sc-1aileh0-0 dLafVM">{item.title}</div>
                        </div>
                    </div>
                </a>
            </li>
        )
    })

    
    const renderMiniforms = miniforms.map((thisMiniform, index) => {

        const onClickMiniform = (thisMiniform) => {
            dispatch(chooseMiniform(thisMiniform))
            console.log(thisMiniform._id);
        } 

        const onMiniformDelete = (thisMiniform) => {
            
            console.log("미니폼 삭제")
            
            const variables = {
                miniformId: thisMiniform._id
            }
    
            Axios.post('/api/miniForm/deleteMiniform', variables)
                    .then(response => {
                        if(response.data.success){
                            alert('Miniform을 성공적으로 삭제했습니다.')
                            console.log(response.data);
                        }else{
                            alert('Miniform 삭제에 실패했습니다.')
                            console.log(response.data.err);
                        }
                    })
        }    

            const onConfigureBtnClicked = (thisMiniform, isOpen) => {

                dispatch(chooseMiniform(thisMiniform))
                setconfigureOpenMiniformId(thisMiniform._id);

            }

            const onConfigureBoxBlur = (thisMiniform) => {

                setconfigureOpenMiniformId("none");
            }
            
        return(
            <div onClick={() => {onClickMiniform(thisMiniform)}} className="Spacer-sc-__sc-1d4woe-0 bjpiAG">
                <div draggable="true">
                    <div className="form-item__Wrapper-sc-1z05hji-0 fbEZaU">
                        <div height="full" orientation="vertical" className="Split-sc-__sc-3xe4fi-0 iCtogy">
                            <div height="remaining" className="SplitItem-sc-__sc-3xe4fi-1 gkXDOi">
                                <div className="common__BadgeWrapper-al6yvw-1 bxzZYu"></div>
                                <Link to ="/form">
                                    <a className="form-item__FormThemeContainer-sc-1z05hji-1 gZoKDU">
                                        <div orientation="vertical" className="Distribute-sc-__sc-1s2i8aq-0 form-item__TitleDistribute-sc-1z05hji-2 gSHohH">
                                            <div width="100%" height="100%" className="Align-sc-__sc-4yw49j-0 iAnQnN">
                                                <span fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 form-item__FormTitle-sc-1z05hji-3 dceSQW">
                                                    {thisMiniform.name}
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                            <div className="SplitItem-sc-__sc-3xe4fi-1 bTJYBJ">
                                <div className="footer__FooterContainer-sc-1mz4tdg-0 WQIxd">
                                    <div orientation="horizontal" className="Spread-sc-__sc-1pjvgl-0 boZfPv">
                                        <a href="#" className="Link-sc-__sc-2xj0ye-0 responses-text__NoResponsesLink-sc-1yb3968-1 iPaOQl">
                                            <span fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 dHUPFW">
                                                No responses
                                            </span>
                                        </a>

                                        <div onBlur={() => onConfigureBoxBlur(thisMiniform)} style={{left:"0px"}} className={`BaseStylesRoot-sc-__gqan6a-0 cnpIbj ${configureOpenMiniformId == thisMiniform._id ?  "":"hidden"}`}>
                                            <div id="Menu" tabIndex="-1" role="menu" className="PopoverRoot-sc-__ru1bae-0 qZjNA footer__FooterMenuWrapper-sc-1mz4tdg-1 kJKnNq" aria-hidden="false" style={{margin: "0px", position: "absolute", inset: "auto auto -25px -275px", transform: "translate3d(420px, -54px, 0px)"}}>
                                                <div color="default" className="Card-sc-__i4fuko-0 MenuWrapper-sc-__sc-10t333h-0 lhUXne">
                                                    <div className="footer-menu__FooterMenuContainer-sc-8h8glm-0 esBYDO">
                                                        <div className="Container-sc-__cx9ooi-1 cHYKAS footer-menu__StyledSlidingMenu-sc-8h8glm-1 fBPRZc">
                                                            <div className="Animations-sc-__cx9ooi-2 jPKgpp">
                                                                <div>
                                                                    <div className="SlidingMenuContent-sc-__cx9ooi-3 kpkyHu">
                                                                        <div color="default" id="slide-main" className="Card-sc-__i4fuko-0 liZhgM">
                                                                            <div className="footer-menu-slide__OptionsWrapper-i8aqn2-0 ccuEIc">
                                                                                <div className="footer-menu-slide__Group-i8aqn2-2 jDDZhR">
                                                                                    <div className="footer-menu-slide__Option-i8aqn2-1 borgAh">
                                                                                        <a href="#" target="_blank" className="Link-sc-__sc-2xj0ye-0 footer-menu-slide__OptionLink-i8aqn2-3 cGrrMg">
                                                                                            <span fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 dHUPFW">View</span>
                                                                                            <div height="auto" width="auto" aria-hidden="true" className="Align-sc-__sc-4yw49j-0 IconRoot-sc-__sc-1eorqw0-0 kKgMaN footer-menu-slide__IconWithLeftPadding-i8aqn2-7 iosjwf">
                                                                                                <LogoutOutlined />
                                                                                            </div>
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="footer-menu-slide__Option-i8aqn2-1 borgAh">
                                                                                        <button className="footer-menu-slide__OptionButtonWrapper-i8aqn2-6 gCSgyP">
                                                                                            <span fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 dHUPFW">
                                                                                                Rename
                                                                                            </span>
                                                                                        </button>
                                                                                    </div>
                                                                                    <div className="footer-menu-slide__Option-i8aqn2-1 borgAh">
                                                                                        <button className="footer-menu-slide__OptionButtonWrapper-i8aqn2-6 gCSgyP">
                                                                                            <span fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 dHUPFW">
                                                                                                Duplicate
                                                                                            </span>
                                                                                        </button>
                                                                                    </div>
                                                                                    <div className="footer-menu-slide__Option-i8aqn2-1 borgAh">
                                                                                        <a href="#" target="_self" className="Link-sc-__sc-2xj0ye-0 footer-menu-slide__OptionLink-i8aqn2-3 cGrrMg">
                                                                                            <span fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 dHUPFW">
                                                                                                Connect
                                                                                            </span>
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="footer-menu-slide__Option-i8aqn2-1 borgAh">
                                                                                        <a href="#" target="_self" className="Link-sc-__sc-2xj0ye-0 footer-menu-slide__OptionLink-i8aqn2-3 cGrrMg">
                                                                                            <span fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 dHUPFW">
                                                                                                Share
                                                                                            </span>
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="footer-menu-slide__Option-i8aqn2-1 borgAh">
                                                                                        <a href="#" target="_self" className="Link-sc-__sc-2xj0ye-0 footer-menu-slide__OptionLink-i8aqn2-3 cGrrMg">
                                                                                            <span fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 dHUPFW">
                                                                                                Results
                                                                                            </span>
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="footer-menu-slide__Option-i8aqn2-1 borgAh">
                                                                                        <a href="#" className="RouterLink-sc-__cx9ooi-0 YCIEI footer-menu-slide__StyledSlideLinkContainer-i8aqn2-4 kGDlHk">
                                                                                            <div orientation="horizontal" className="Split-sc-__sc-3xe4fi-0 giqhxk">
                                                                                                <div width="160px" className="SplitItem-sc-__sc-3xe4fi-1 kDBDvt">
                                                                                                    <span fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 dHUPFW">
                                                                                                        Copy to
                                                                                                    </span>
                                                                                                </div>
                                                                                                <div className="SplitItem-sc-__sc-3xe4fi-1 bTJYBJ">
                                                                                                    <div width="100%" height="100%" className="Align-sc-__sc-4yw49j-0 iAnQnN">
                                                                                                        <div height="auto" width="auto" color="default" className="Align-sc-__sc-4yw49j-0 IconRoot-sc-__sc-1eorqw0-0 buHmdN">
                                                                                                            <RightOutlined/>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="footer-menu-slide__Option-i8aqn2-1 borgAh">
                                                                                        <a href="#" className="RouterLink-sc-__cx9ooi-0 YCIEI footer-menu-slide__StyledSlideLinkContainer-i8aqn2-4 kGDlHk">
                                                                                            <div orientation="horizontal" className="Split-sc-__sc-3xe4fi-0 giqhxk">
                                                                                                <div width="160px" className="Text-sc-__sc-1h7ebrz-0 kDBDvt">
                                                                                                    <span fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 dHUPFW">
                                                                                                        Move to
                                                                                                    </span>
                                                                                                </div>
                                                                                                <div className="SplitItem-sc-__sc-3xe4fi-1 bTJYBJ">
                                                                                                    <div width="100%" height="100%" className="Align-sc-__sc-4yw49j-0 iAnQnN">
                                                                                                        <div height="auto" width="auto" color="default" className="Align-sc-__sc-4yw49j-0 IconRoot-sc-__sc-1eorqw0-0 buHmdN">
                                                                                                            <RightOutlined/>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="footer-menu-slide__Group-i8aqn2-2 jDDZhR">
                                                                                    <div className="footer-menu-slide__Option-i8aqn2-1 borgAh">
                                                                                        <button onClick={()=>onMiniformDelete(thisMiniform)} className="footer-menu-slide__OptionButtonWrapper-i8aqn2-6 gCSgyP">
                                                                                            <span color="danger" fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 ceQsUB">
                                                                                                Delete
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <button  onClick={()=>{onConfigureBtnClicked(thisMiniform, true)}} aria-label="form item menu" color="icon" aria-controls="kitt-5" aria-haspopup="true" aria-expanded={configureOpenMiniformId == miniform._id ? "true":"false"} className="IconButtonRoot-sc-__nzc5pg-0 fNOSPO">
                                            
                                            <div height="auto" width="auto" color="icon" className="Align-sc-__sc-4yw49j-0 IconRoot-sc-__sc-1eorqw0-0 kKgMaN">
                                                <EllipsisOutlined/>       

                                            </div>
                                        </button> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    const Themas = [
        {
            id:"",
            no: "0",
            title: "Research"
        },
        {
            id:"",
            no: "1",
            title: "Feedback"
        },
        {
            id:"",
            no: "2",
            title: "Registration"
        },
        {
            id:"",
            no: "3",
            title: "Application"
        },
        {
            id:"",
            no: "4",
            title: "Quiz"
        },
        {
            id:"",
            no: "5",
            title: "Giveaway"
        },
        {
            id:"",
            no: "6",
            title: "Request"
        },
        {
            id:"",
            no: "7",
            title: "Order"
        },
        {
            id:"",
            no: "8",
            title: "Lead capture"
        },
        {
            id:"",
            no: "9",
            title: "Poll"
        },
        {
            id:"",
            no: "10",
            title: "Report"
        },
        {
            id:"",
            no: "11",
            title: "Other"
        },
    ]

    const onThemaClicked = (thema) => {
        setclickedThema(thema);
        console.log(thema);
        console.log(clickedThema);
    }

    const renderThema = Themas.map((thema, index) =>{

        return(
            <li size="6" className="ListItem-sc-__lexhmg-1 fjLXfu">
                <div orientation="vertical" className="Distribute-sc-__sc-1s2i8aq-0 gZsQxG">
                   <button onClick={()=>onThemaClicked(thema.title)} href={`#${thema.title.toUpperCase()}`}  data-qa="template-gallery-sidebar-research" tabIndex="0" className="categories-list__TextWrapper-jpzyxm-0 dekGqy">
                        <span fontWeight={clickedThema == thema.title ? "bold" : "regular"} fontFamily="sans" className={`Text-sc-__sc-1h7ebrz-0 ${clickedThema == thema.title ? "lcJwja" : "NRjTd"}`}>
                            <a  fontWeight={clickedThema == thema.title ? "bold" : "regular"}  style={{color:"black"}} href={`#${thema.title.toUpperCase()}`}>{thema.title}</a>
                            <a  style={{opacity:"0"}} href={`#${thema.title.toUpperCase()}`}>thisIsAnchorthisIsAnchor</a> 
                        </span>
                    </button>
                </div>
            </li>
        )
    })

    const templateHolders = [
        {
            id:"",
            thema: "RESEARCH",
            img: "",
            title:""
        },
        {
            id:"",
            thema: "FEEDBACK",
            img: "",
            title:""
        },
        {
            id:"",
            thema: "REGISTRATION",
            img: "",
            title:""
        },
        {
            id:"",
            thema: "APPLICATION",
            img: "",
            title:""
        },
        {
            id:"",
            thema: "QUIZ",
            img: "",
            title:""
        },
        {
            id:"",
            thema: "GIVEAWAY",
            img: "",
            title:""
        },
        {
            id:"",
            thema: "REQUEST",
            img: "",
            title:""
        },
        {
            id:"",
            thema: "ORDER",
            img: "",
            title:""
        },
        {
            id:"",
            thema: "LEAD CAPTURE",
            img: "",
            title:""
        },
        {
            id:"",
            thema: "POLL",
            img: "",
            title:""
        },
        {
            id:"",
            thema: "REPORT",
            img: "",
            title:""
        },
        {
            id:"",
            thema: "OTHER",
            img: "",
            title:""
        }
    ]

    const renderTemplateHolder = templateHolders.map((thema, index)=>{

            const renderTemplates = templates.filter((template) => template.thema == thema.thema).map((template, index) => {

                return(
                    <div className="Spacer-sc-__sc-1d4woe-0 vIhjp">
                        <div className="animation-wrap__AnimationWrap-sc-1vtol0v-0 template-thumbnail__Wrap-sc-1snl4le-0 iAHIwK">
                            <button data-qa-form-id="sQt6ZB" className="template-thumbnail__WrappedButton-sc-1snl4le-1 kzaZYi">
                                <div height="192px" orientation="vertical" width="192px" className="Split-sc-__sc-3xe4fi-0 fJEAbV">
                                    <div height="120px" className="SplitItem-sc-__sc-3xe4fi-1 glYncc">
                                        <img alt={template.alt} src={template.img} className="template-thumbnail__ThumbnailImg-sc-1snl4le-2 qKCDL">
                                        </img>
                                    </div>
                                    <div height="remaining" className="SplitItem-sc-__sc-3xe4fi-1 gkXDOi">
                                        <div width="100%" height="100%" className="Align-sc-__sc-4yw49j-0 fAJgpU">
                                            <div className="Spacer-sc-__sc-1d4woe-0 kxMcMe">
                                                <span color="highContrast" fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 fjOXco">{template.title}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                )
            })

        return (
            <div id={`${thema.thema}`}>
                <span fontFamily="sans" fontWeight="semibold" className="Text-sc-__sc-1h7ebrz-0 template-list__TemplatesListHeader-sc-1qbj7ci-3 eGoEyo">
                    {thema.thema}
                </span>
                <div className="template-list__TemplatesListHeaderDivider-sc-1qbj7ci-4 cBuLBt"></div>
                <div className="Spacer-sc-__sc-1d4woe-0 cpKzWy"></div>
                <div data-qa="template-gallery-templates-research" className="template-list__Templates-sc-1qbj7ci-1 ldSmLg">
                    
                    {renderTemplates}

                </div>
            </div>
        )
    })

    const renderTemplateHolder_ =  templateHolders.map((template, index) => {

        const renderTemplates_ = templates.filter((thema) => thema.thema == template.thema).map((template, index) => {

            return(
                <div className="Spacer-sc-__sc-1d4woe-0 kaFntP">
                    <div className="animation-wrap__AnimationWrap-sc-1vtol0v-0 template-thumbnail__Wrap-sc-1snl4le-0 iAHIwK">
                        <button data-qa-form-id="sQt6ZB" className="template-thumbnail__WrappedButton-sc-1snl4le-1 kzaZYi">
                            <div height="136px" orientation="vertical" width="136px" className="Split-sc-__sc-3xe4fi-0 bGsMJh">
                                <div height="80px" className="SplitItem-sc-__sc-3xe4fi-1 cTgFqr">
                                    <img alt={template.alt} src={template.img} className="template-thumbnail__ThumbnailImg-sc-1snl4le-2 qKCDL">
                                    </img>
                                </div>
                                <div height="remaining" className="SplitItem-sc-__sc-3xe4fi-1 gkXDOi">
                                    <div width="100%" height="100%" className="Align-sc-__sc-4yw49j-0 fAJgpU">
                                        <div className="Spacer-sc-__sc-1d4woe-0 fhoehq">
                                            <span color="highContrast" fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 kOhvLx">
                                                {template.title}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            )
        })

        return (
            <div  id={`${template.thema}`}>
            <span fontFamily="sans" fontWeight="semibold" className="Text-sc-__sc-1h7ebrz-0 template-list__TemplatesListHeader-sc-1qbj7ci-3 eGoEyo">
                {template.thema}
            </span>
            <div className="template-list__TemplatesListHeaderDivider-sc-1qbj7ci-4 cBuLBt">
            </div>
            <div className="Spacer-sc-__sc-1d4woe-0 cpKzWy">
            </div>
            <div data-qa="template-gallery-templates-research" className="template-list__Templates-sc-1qbj7ci-1 hedXlD">
                {renderTemplates_}
            </div>
            </div>
        )
    }) 

    const onTemplatesGalleryBtnClicked = () => {
        setIsTemplateOpen(true);
    }

    const onTemplatesGalleryCloseBtnClicked = () => {
        setIsTemplateOpen(false);
    }

    return (
        <div>
            <div id="WorkspacePageWrapper">
                <div className="BaseStylesRoot-sc-__gqan6a-0 cnpIbj app__Root-sc-1yawme2-1 hnDBwc">
                    <div height="full"  style={{ display: IsTemplateOpen ? "none" : "flex"}} orientation="vertical" className={`Split-sc-__sc-3xe4fi-0 iCtogy ${IsTemplateOpen ? "hidden" : ""}`}>
                        <div className="SplitItem-sc-__sc-3xe4fi-1 bTJYBJ">
                            <div>
                                <div className="BaseStylesRoot-sc-__gqan6a-0 cnpIbj">
                                    <header>
                                        <div className={`workspace-header__HeaderSections-sc-1b4cv31-0 ${window.innerWidth >= 1024 ? "hLmXSw" : "tLTEp"}`}>
                                            <div className={`workspace-header__LeftSection-sc-1b4cv31-1 ${window.innerWidth >= 1024 ? "hWgMpw" : "doYpAx"}`}>
                                                <div className="logo__LogoOuterContainer-sc-18kmhdh-0 gMEExr">
                                                    <a href="/"  aria-label="logo" className="Link-sc-__sc-2xj0ye-0 logo__Link-sc-18kmhdh-1 bgPVVY">
                                                        <div className="LogoRoot-sc-__z2yz42-0 lnkbKQ">
                                                            <span className="SVGInline">Miniform</span>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className={`workspace-header__RightSection-sc-1b4cv31-2 ${window.innerWidth >= 1024 ? "bxqokg" : "fqaCxc"}`}>
                                                <div className="Spacer-sc-__sc-1d4woe-0 hwgVef">
                                                    <button type="button" className="ButtonRoot-sc-__sc-1vu0deq-0 jqIssi">
                                                        <div orientation="horizontal" className="Distribute-sc-__sc-1s2i8aq-0 YOXft">
                                                            <span fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 djRoaw">Upgrade</span>
                                                        </div>
                                                    </button>
                                                </div>
                                                <div className="account-dropdown__Root-sc-1eei6rg-0 cwxzZw">
                                                    <button aria-controls="kitt-0" aria-haspopup="true" aria-expanded="false" className="account-dropdown__Button-sc-1eei6rg-1 bZMmtP">
                                                        <div orientation="horizontal" className="Distribute-sc-__sc-1s2i8aq-0 jtRrpT">
                                                            <div aria-label="sample - EUNBIN SON" className="PictureWrapper-sc-__sc-25cvr7j-0 gBiwdq">
                                                                <Avatar style={{ color: 'rgb(255, 255, 255)', backgroundColor: 'rgb(150 206 220)' }}>
                                                                     {`${user.userData.user_name}`} 
                                                                </Avatar>
                                                            </div>
                                                            <div className={`account-dropdown__DropdownHeader-sc-1eei6rg-2 ${window.innerWidth >= 1024 ? "ljTjQQ" : "hidden"}`}>
                                                                <span fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 account-dropdown__AccountTitle-sc-1eei6rg-3 fsixvv">
                                                                    {`${user.userData.user_name}`} 
                                                                </span>
                                                                <div height="auto" width="auto" className="Align-sc-__sc-4yw49j-0 IconRoot-sc-__sc-1eorqw0-0 kKgMaN">
                                                                    <DownOutlined style={{height:"12px", width:"7px"}}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
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
                        <div height="remaining" className="SplitItem-sc-__sc-3xe4fi-1 gkXDOi">
                            <div className={`app__Content-sc-1yawme2-0 ${window.innerWidth >= 1024 ? "Fnjnv" : "ldqHCM"}`}>
                                <div height="full" orientation="horizontal" className="Split-sc-__sc-3xe4fi-0 dcZbpq">
                                    <div width="medium" className={`SplitItem-sc-__sc-3xe4fi-1 ${window.innerWidth >= 1024 ? "boDQXT" : "hidden"}`}>
                                        <div height="full" className="Container-sc-__sc-1aileh0-0 iLQLva">
                                            <div className="ScrollContentRoot-sc-__sc-1ukpyz-2 fYNELf workspace-list__StyledScrollContent-qj082h-0 bBkvCH">
                                                <div className="TopSectionWrapper-sc-__sc-1ukpyz-0 gsWjGi">
                                                    <div className="Container-sc-__sc-1aileh0-0 kRYykD">
                                                        <div className="Spread-sc-__sc-1pjvgl-0 hiPzrC">
                                                            <div className="Distribute-sc-__sc-1s2i8aq-0 hBthWr">
                                                                <span fontWeight="medium" fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 hFlZym">Workspaces</span>
                                                            </div>
                                                            <div orientation="horizontal" className="Distribute-sc-__sc-1s2i8aq-0 cloQoE">
                                                                <button aria-label="Add workspace" color="icon" className="IconButtonRoot-sc-__nzc5pg-0 iMvpsK">
                                                                    <div height="auto" width="auto" color="icon" className="Align-sc-__sc-4yw49j-0 IconRoot-sc-__sc-1eorqw0-0 kKgMaN">
                                                                        <PlusOutlined/>
                                                                    </div>
                                                                </button>
                                                                <button aria-label="Search" color="icon" className="IconButtonRoot-sc-__nzc5pg-0 iMvpsK">
                                                                    <div height="auto" width="auto" color="icon" className="Align-sc-__sc-4yw49j-0 IconRoot-sc-__sc-1eorqw0-0 kKgMaN">
                                                                        <SearchOutlined/>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div tabIndex="0" className="ChildrenWrapper-sc-__sc-1ukpyz-3 ewwvsh">
                                                    <ul className="ListRoot-sc-__lexhmg-0 cHUehc">
                                                        <li size="1" className="ListItem-sc-__lexhmg-1 kWEeRK">
                                                            <div>
                                                                <a className="Link-sc-__sc-2xj0ye-0 workspace-list__Link-qj082h-1 bVvwNe">
                                                                    <div className="workspace-list__WrapperVerticalMenuItem-qj082h-2 lZZbi">
                                                                        <div orientation="horizontal" className="Spread-sc-__sc-1pjvgl-0 hiPzrC">
                                                                            <span color="#262627" fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 fTINAE">My workspace</span>
                                                                            <div orientation="horizontal" className="Distribute-sc-__sc-1s2i8aq-0 hBthWr">
                                                                                <span color="description" fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 workspace-list__FormsCount-qj082h-4 dNrUBp">n</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="BottomSectionWrapper-sc-__sc-1ukpyz-1 dkkjtr">
                                                    <div className="workspace-list__Wrapper-qj082h-3 cFSeRk">
                                                        <div className="help-center-content__Wrapper-sc-1x892rx-2 etUGBw">
                                                            <div className="help-center-content__Wrapper-sc-1x892rx-2 etUGBw">
                                                                <div className="Container-sc-__sc-1aileh0-0 jkcFtr">
                                                                    <button aria-expanded="true" className="help-center-content__TitleWrapper-sc-1x892rx-0 jHClve">
                                                                        <div orientation="horizontal" className="Spread-sc-__sc-1pjvgl-0 boZfPv">
                                                                            <span fontWeight="medium" fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 hFlZym">Help & Inspiration</span>
                                                                            <div height="auto" width="auto"  className="Align-sc-__sc-4yw49j-0 IconRoot-sc-__sc-1eorqw0-0 kKgMaN">
                                                                                <DownOutlined/>
                                                                            </div>
                                                                        </div>
                                                                    </button>
                                                                    <div className="help-center-content__ContentWrapper-sc-1x892rx-3 hZgqXE">
                                                                        <div className="Container-sc-__sc-1aileh0-0 knqyNX">
                                                                            <ul className="ListRoot-sc-__lexhmg-0 cHUehc">
                                                                                {renderHelpInspiration}
                                                                            </ul>
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
                                    <div width="remaining" className="SplitItem-sc-__sc-3xe4fi-1 gkjeRC">
                                        <div className="workspace-content__MainSection-sc-5zixv2-0 kqanub">
                                            <div className={`partial-overlay__OverlayWrapper-sc-1tj5dlf-1 ${window.innerWidth >= 1025 ? "hidden" : "fHYdYy"}`}>
                                                <div></div>
                                            </div>
                                            <div height="full" className="Container-sc-__sc-1aileh0-0 euPdWC">
                                                <div className="workspace-content__Scroller-sc-5zixv2-1 hoJuMq">
                                                    <div className={`Container-sc-__sc-1aileh0-0 ${window.innerWidth >= 1025 ? "hidden" : "bUeYFy"}`}>
                                                        <div orientation="horizontal" className="Spread-sc-__sc-1pjvgl-0 hiPzrC">
                                                            <div orientation="horizontal" className="Distribute-sc-__sc-1s2i8aq-0 hBthWr">
                                                                <div className="Container-sc-__sc-1aileh0-0 bKTrgS">
                                                                    <button aria-label="workspaces" color="icon" className="IconButtonRoot-sc-__nzc5pg-0 fNOSPO">
                                                                        <div height="auto" width="auto" color="icon" className="Align-sc-__sc-4yw49j-0 IconRoot-sc-__sc-1eorqw0-0 kKgMaN">
                                                                            <AppstoreFilled/>
                                                                        </div>
                                                                    </button>
                                                                </div>
                                                                <span fontWeight="medium" fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 hFlZym">Workspaces</span>
                                                            </div>
                                                            <div orientation="horizontal" className="Distribute-sc-__sc-1s2i8aq-0 cloQoE">
                                                                <button aria-label="Add workspace" color="icon" className="IconButtonRoot-sc-__nzc5pg-0 iMvpsK">
                                                                    <div height="auto" width="auto" color="icon" className="Align-sc-__sc-4yw49j-0 IconRoot-sc-__sc-1eorqw0-0 kKgMaN">
                                                                        <PlusOutlined/>
                                                                    </div>
                                                                </button>
                                                                <button aria-label="Search" color="icon" className="IconButtonRoot-sc-__nzc5pg-0 iMvpsK">
                                                                    <div height="auto" width="auto" color="icon" className="Align-sc-__sc-4yw49j-0 IconRoot-sc-__sc-1eorqw0-0 kKgMaN">
                                                                        <SearchOutlined />
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div height="full" className={`Container-sc-__sc-1aileh0-0 ${window.innerWidth >= 1024 ? "kBMNjQ" : "fwAkFj"}`}>
                                                        <div orientation="horizontal" className="Split-sc-__sc-3xe4fi-0 giqhxk">
                                                            <div width="remaining" className="SplitItem-sc-__sc-3xe4fi-1 gkjeRC">
                                                                <div className="Split-sc-__sc-3xe4fi-0 bxrZiA">
                                                                    <div className="SplitItem-sc-__sc-3xe4fi-1 fAMIiV">
                                                                        <div className="workspace-header__InlineEditorWrapper-u56sxg-1 bmvNDJ">
                                                                            <div className="InlineEditorRoot-sc-__sc-3cr9on-0 esOmCr workspace-header__StyledInlineEditorWrapper-u56sxg-0 gqhyzC">
                                                                                <input aria-label="workspace edit name" width="xlarge" className="Input-sc-__sc-3cr9on-1 cqHiYE" onChange={()=>{}} value="My workspace"></input>
                                                                                <div className="InputSizer-sc-__sc-3cr9on-2 knnyeu">
                                                                                    My workspace
                                                                                    <span className="EmptyCharacter-sc-__sc-3cr9on-3 RQYuW">&nbsp;</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="SplitItem-sc-__sc-3xe4fi-1 hNmGqs">
                                                                        <button aria-label="workspace dropdown" color="icon" aria-controls="kitt-2" aria-haspopup="true" aria-expanded="false" className="IconButtonRoot-sc-__nzc5pg-0 iMvpsK">
                                                                            <div height="auto" width="auto" color="icon" className="Align-sc-__sc-4yw49j-0 IconRoot-sc-__sc-1eorqw0-0 kKgMaN">
                                                                                <EllipsisOutlined />
                                                                            </div>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                                <div className="Spacer-sc-__sc-1d4woe-0 sQgjR">
                                                                    <div orientation="horizontal" className="Distribute-sc-__sc-1s2i8aq-0 jjJKXQ">
                                                                        <div orientation="horizontal" className="Distribute-sc-__sc-1s2i8aq-0 cloQoE">
                                                                            <div className="workspace-members__MembersListWrapper-sc-130rgo4-0 kZvLzO">
                                                                                <div className="workspace-members__ItemWrapper-sc-130rgo4-1 fLsBQa">
                                                                                    <div aria-label="EUNBIN SON (Owner)" className="PictureWrapper-sc-__sc-15cvr7j-0 gBiwdq">
                                                                                        <Avatar style={{ color: 'rgb(255, 255, 255)', backgroundColor: 'rgb(150 206 220)' }}>
                                                                                            {`${user.userData.user_name}`} 
                                                                                        </Avatar>
                                                                                    </div>
                                                                                </div>
                                                                                <button aria-label="Add team members" color="icon" className="IconButtonRoot-sc-__nzc5pg-0 ifLNuN">
                                                                                    <div height="auto" width="auto" color="icon" className="Align-sc-__sc-4yw49j-0 IconRoot-sc-__sc-1eorqw0-0 kKgMaN">
                                                                                        <Avatar icon={<UsergroupAddOutlined />}/>
                                                                                    </div>
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="Container-sc-__sc-1aileh0-0 workspace-forms__ContainerWrapper-sc-1oymojs-0 XQsbb">
                                                            <div className="partial-overlay__OverlayWrapper-sc-1tj5dlf-1 fHYdYy">
                                                                <div></div>
                                                            </div>

                                                            <div className="Spacer-sc-__sc-1d4woe-0 bjpiAG">
                                                                <div colSpan="2" className="form-item__Wrapper-sc-1z05hji-0 workspace-forms__NewBuilderCreateFormButtonContainer-sc-1oymojs-2 jSYgMU">
                                                                    <div orientation="horizontal" width="full" className="Split-sc-__sc-3xe4fi-0 djSTHX">
                                                                        <div className="SplitItem-sc-__sc-3xe4fi-1 bTJYBJ">
                                                                            <button onClick={()=>onTemplatesGalleryBtnClicked()} className="form-item-enabled-button__FormItemButton-sc-12v2pgy-0 fMLUSC">
                                                                                <span color="notification" fontWeight="bold" fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 hQFhcn">
                                                                                    <p className="form-item-enabled-button__LabelLine-sc-12v2pgy-3 htjqvt">New</p>
                                                                                    <p className="form-item-enabled-button__LabelLine-sc-12v2pgy-3 htjqvt">miniform</p>
                                                                                </span>
                                                                                <div className="form-item-enabled-button__IconWrapper-sc-12v2pgy-1 jYwiMn">
                                                                                    <div className="form-item-enabled-button__IconBackground-sc-12v2pgy-2 kaEpYJ">
                                                                                        <div height="auto" width="auto" color="notification" className="Align-sc-__sc-4yw49j-0 IconRoot-sc-__sc-1eorqw0-0 lgXscy">
                                                                                            <PlusOutlined/>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </button>                                                                     </div>
                                                                        <div width="remaining" className="SplitItem-sc-__sc-3xe4fi-1 eRBtjw">
                                                                            <div height="full" orientation="vertical" className="Split-sc-__sc-3xe4fi-0 iCtogy">
                                                                                <div className="workspace-forms__NewQuizButtonLegend-sc-1oymojs-3 ldTHiJ">
                                                                                    <div orientation="vertical" className="Distribute-sc-__sc-1s2i8aq-0 bCGCVn">
                                                                                        <span fontWeight="medium" fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 guejJl">Discover the new Miniform ✨</span>
                                                                                        <span fontWeight="light" fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 eBwFiN">
                                                                                            Simpler, smarter, slicker. Create a new miniform to try it for yourself.
                                                                                        </span>
                                                                                        <a href="#" rel="noreferrer" target="_blank" className="Link-sc-__sc-2xj0ye-0 lmbxls">
                                                                                            <span color="info" fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 eIYORi">See what's new</span>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="Spacer-sc-__sc-1d4woe-0 bjpiAG">
                                                                <div orientation="vertical" className="Distribute-sc-__sc-1s2i8aq-0 form-item-plan-limits-base__FormItem-jq1vzx-0 kCislj">
                                                                    <span fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 efKJKA">
                                                                        Your <strong>Free</strong> plan usage
                                                                    </span>
                                                                    <div orientation="vertical" className="Distribute-sc-__sc-1s2i8aq-0 kBHmAj">
                                                                        <span fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 djRoaw" >
                                                                            Miniforms
                                                                        </span>
                                                                        <div className="limits-usage-bar__ProgressBarBackground-uvhgaz-0 hKTTZk">
                                                                            <div className={`limits-usage-bar__ProgressBarLine-uvhgaz-1`}></div>
                                                                        </div>
                                                                        <span fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 limits-usage-bar__PaddedText-uvhgaz-2 ehTfUK">
                                                                            {miniforms.length}
                                                                            <span fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 jLhDoN">
                                                                                / 3 this account
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                    <div orientation="vertical" className="Distribute-sc-__sc-1s2i8aq-0 kBHmAj">
                                                                        <span fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 djRoaw">
                                                                            Responses
                                                                        </span>
                                                                        <div className="limits-usage-bar__ProgressBarBackground-uvhgaz-0 hKTTZk">
                                                                            <div className="limits-usage-bar__ProgressBarLine-uvhgaz-1 dffzZv"></div>
                                                                        </div>
                                                                        <span fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 limits-usage-bar__PaddedText-uvhgaz-2 ehTfUK">
                                                                            <span fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 jLhDoN">
                                                                                / 100 this month
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {renderMiniforms}
                                                            <div className="workspace-forms__ScrollSentinel-sc-1oymojs-4 hTRrCY"></div>
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
                    <div className="AnimateRoot-sc-__sc-8m2keq-0 cvpDBt">
                        <div></div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <div className="AnimateRoot-sc-__sc-8m2keq-0 ecRhfR PopupContainer-sc-__a7lwzj-2 bFxksY">
                                    <div></div>
                                </div>
                            </div>
                        </div>

                        <div className={`AnimateRoot-sc-__sc-8m2keq-0 cvpDBt ${ IsTemplateOpen ? "" : "hidden"}`}>
                            <div>
                                <div role="dialog" data-qa="template-gallery-dialog" className="Container-sc-__sc-1aileh0-0 DialogRoot-sc-__sc-1jpfdxp-0 hIRmkD fade-enter-done">
                                    <div orientation="horizontal" className={`Split-sc-__sc-3xe4fi-0 giqhxk ${window.innerWidth >=1025 ? "flex" : "hidden"}`}>
                                        <div width="320px" className="SplitItem-sc-__sc-3xe4fi-1 jJRtkP">
                                            <div height="100vh" className="Container-sc-__sc-1aileh0-0 kxUSBB">
                                                <div className="ScrollContentRoot-sc-__sc-1ukpyz-2 fYNELf">
                                                    <div className="TopSectionWrapper-sc-__sc-1ukpyz-0 gsWjGi">
                                                        <div className="Container-sc-__sc-1aileh0-0 hmDFkO">
                                                            <div className="animation-wrap__AnimationWrap-sc-1vtol0v-0 choxtN">
                                                                <span fontFamily="brand" fontWeight="light" className="Text-sc-__sc-1h7ebrz-0 eboKn">
                                                                    Template gallery
                                                                </span>
                                                                <div className="Spacer-sc-__sc-1d4woe-0 jaWSJo">
                                                                    <span fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 djRoaw">
                                                                        Use templates to get to know Miniform, or just get inspired. There’s something for every job you need to get done.
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div tabIndex="0" className="ChildrenWrapper-sc-__sc-1ukpyz-3 ewwvsh">
                                                        <div className="Container-sc-__sc-1aileh0-0 bFeSwk">
                                                            <div className="animation-wrap__AnimationWrap-sc-1vtol0v-0 choxtN">
                                                                <ul data-qa="template-gallery-sidebar-list" className="ListRoot-sc-__lexhmg-0 gSOFxu categories-list__ListBox-jpzyxm-1 cQdgTY">
                                                                    
                                                                    {renderThema}

                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div height="100vh" width="remaining" className="SplitItem-sc-__sc-3xe4fi-1 bdXPtc">
                                            <div width="100%" height="100%" className="Align-sc-__sc-4yw49j-0 bYJwjg">
                                                <div orientation="vertical" className="Distribute-sc-__sc-1s2i8aq-0 gallery-wide__TemplatesContainer-sc-1c9sqvb-2 iWaCEc">
                                                    <div className="gallery-wide__CtaContainer-sc-1c9sqvb-0 jRbedc">
                                                        <div className="animation-wrap__AnimationWrap-sc-1vtol0v-0 ctas__ButtonWrap-sc-1q6l9zt-0 cHkdYk">
                                                        <Link to="/workspace" >
                                                            <button onClick={()=>onStartFromScratchBtnClicked()} type="button" data-qa="start-from-scratch-button" className="ButtonRoot-sc-__sc-1vu0deq-0 YKMJw">
                                                                <div orientation="horizontal" className="Distribute-sc-__sc-1s2i8aq-0 YOXft">
                                                                    <span fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 djRoaw">
                                                                        Start from scratch
                                                                    </span>
                                                                </div>
                                                            </button>
                                                        </Link>
                                                        </div>
                                                        <div className="Spacer-sc-__sc-1d4woe-0 eFzNmH"></div>
                                                        <div className="Spacer-sc-__sc-1d4woe-0 SyzBd"></div>
                                                    </div>
                                                    <div className="search-input__SearchInputContainer-ns5xdb-3 bjkSNE">
                                                        <div className="StringInputRoot-sc-__iwhi9i-0 fxNpjC" width="full">
                                                            <div className="InputFieldBox-sc-__iwhi9i-2 faAOWX">
                                                                <div className="InputWrapper-sc-__iwhi9i-6 ihixzn">
                                                                    <div height="auto" width="auto" className="Align-sc-__sc-4yw49j-0 IconRoot-sc-__sc-1eorqw0-0 kKgMaN">
                                                                        <SearchOutlined/>
                                                                    </div>
                                                                </div>
                                                                <div className="InputFieldWrapper-sc-__iwhi9i-3 cYgUZh">
                                                                    <input data-qa="template-gallery-search-input" aria-autocomplete="list" aria-expanded="false" aria-label="Search a template" aria-owns="SearchResultsList" placeholder="Search a template" role="combobox" type="search" className="Input-sc-__iwhi9i-1 ktYOnV">

                                                                    </input>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="template-list__Wrap-sc-1qbj7ci-0 iWGwPw">
                                                        <div className="animation-wrap__AnimationWrap-sc-1vtol0v-0 template-list__FullWithWrap-sc-1qbj7ci-2 jHhsPr">
                                                            
                                                            {renderTemplateHolder}

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button onClick={()=>onTemplatesGalleryCloseBtnClicked()} style={{position: "fixed"}} aria-label="Close dialog" color="icon" data-qa="template-gallery-dialog-close" className="IconButtonRoot-sc-__nzc5pg-0 qBDNa CloseButton-sc-__sc-1jpfdxp-1 cWLmwD">
                                        <div height="auto" width="auto" color="icon" className="Align-sc-__sc-4yw49j-0 IconRoot-sc-__sc-1eorqw0-0 kKgMaN">
                                            <CloseOutlined/>
                                        </div>
                                    </button>
                                    {/* 1024px 이하일 때 템플릿 갤러리 오버레이 */}
                                    <div height="100%" className={`Container-sc-__sc-1aileh0-0 gallery-compact__CustomContainer-sc-1502sx2-2 eHbUdI ${IsTemplateOpen ? "" : "hidden"} ${window.innerWidth <= 1024 ? "block" : "hidden"}`}>
                                        <div height="100%" orientation="vertical" className="Split-sc-__sc-3xe4fi-0 iCtogy">
                                            <div className="SplitItem-sc-__sc-3xe4fi-1 fcEIkx">
                                                <div className="animation-wrap__AnimationWrap-sc-1vtol0v-0 choxtN">
                                                    <span fontFamily="brand" fontWeight="light" className="Text-sc-__sc-1h7ebrz-0 eboKn">
                                                        Template gallery
                                                    </span>
                                                    <div className="Spacer-sc-__sc-1d4woe-0 jaWSJo">
                                                        <span fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 djRoaw">
                                                            Use templates to get to know Miniform, or just get inspired. There’s something for every job you need to get done.
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="Spacer-sc-__sc-1d4woe-0 DdrMM">
                                                    <button type="button" className="ButtonRoot-sc-__sc-1vu0deq-0 klxZek gallery-compact__FiltersButton-sc-1502sx2-1 dbxFrT">
                                                        <div orientation="horizontal" className="Distribute-sc-__sc-1s2i8aq-0 YOXft">
                                                            <span style={{color: "black"}} fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 djRoaw">
                                                                Filters
                                                            </span>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                            <div height="remaining" className="SplitItem-sc-__sc-3xe4fi-1 gkXDOi">
                                                <div className="template-list__Wrap-sc-1qbj7ci-0 bhMLMR">
                                                    <div className="animation-wrap__AnimationWrap-sc-1vtol0v-0 template-list__FullWithWrap-sc-1qbj7ci-2 jHhsPr">
                                                        {renderTemplateHolder_}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="SplitItem-sc-__sc-3xe4fi-1 bTJYBJ">
                                                <div className="gallery-compact__Line-sc-1502sx2-0 kbneod"></div>
                                                <div className="Spacer-sc-__sc-1d4woe-0 jaWSJo">
                                                    <div width="100%" height="100%" className="Align-sc-__sc-4yw49j-0 iAnQnN">
                                                        <div className="animation-wrap__AnimationWrap-sc-1vtol0v-0 ctas__ButtonWrap-sc-1q6l9zt-0 cHkdYk">
                                                            <button onClick={()=>onStartFromScratchBtnClicked()} type="button" data-qa="start-from-scratch-button" className="ButtonRoot-sc-__sc-1vu0deq-0 YKMJw">
                                                                <div orientation="horizontal" className="Distribute-sc-__sc-1s2i8aq-0 YOXft">
                                                                    <span fontFamily="sans" className="Text-sc-__sc-1h7ebrz-0 djRoaw">Start from scratch</span>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button aria-label="Close dialog" color="icon" data-qa="template-gallery-dialog-close" className="IconButtonRoot-sc-__nzc5pg-0 qBDNa CloseButton-sc-__sc-1jpfdxp-1 cWLmwD">
                                        <div height="auto" width="auto" color="icon" className="Align-sc-__sc-4yw49j-0 IconRoot-sc-__sc-1eorqw0-0 kKgMaN">
                                            <CloseOutlined/>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="AnimateRoot-sc-__sc-8m2keq-0 cvpDBt">
                            <div></div>
                        </div>
                        <div className="AnimateRoot-sc-__sc-8m2keq-0 ecRhfR PopupContainer-sc-__a7lwzj-2 bFxksY">
                            <div></div>
                        </div>
                        <div>
                            <div className="AnimateRoot-sc-__sc-8m2keq-0 ecRhfR PopupContainer-sc-__a7lwzj-2 bFxksY">
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="AnimateRoot-sc-__sc-8m2keq-0 ecRhfR PopupContainer-sc-__a7lwzj-2 bFxksY">
                            <div></div>
                        </div>
                    </div>
                    <div offset="40px" className="NotificationRoot-sc-__sc-1eupdtg-0 hmMpzb">
                        <div className="AnimateRoot-sc-__sc-8m2keq-0 cQYmAv">
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="loading-container">
                <div className="placeholder-header">
                    <div className="placeholder-svg-wrapper"></div>
                </div>
                <div className="placeholder-content">
                    <div className="placeholder-spinner">
                        <span>Hold tight—just getting this page ready</span>
                    </div>
                </div>
                <div id="pricing-dialog">
                    <div className="BaseStylesRoot-sc-__gqan6a-0 cDwFLx">
                        <div className="AnimateRoot-sc-__sc-8m2keq-0 cNLyGj">
                            <div></div>
                        </div>
                    </div>
                </div>
                <div id="batBeacon688119620814" style={{width:"0px", height:"0px", display:"none", visibility:"hidden"}}>
                    <img></img>
                </div>
                <div className="BaseStylesRoot-sc-__gqan6a-0 cnpIbj">
                    <div id="kitt-2" tabIndex="-1" role="menu" className="PopoverRoot-sc-__ru1bae-0 qZjNA workspace-header__StyledMenu-u56sxg-4 kgwOEe" aria-hidden="true" style={{margin: "0px", position: "absolute", inset: "0px auto auto 0px", transform: "translate3d(455.5px, -84px, 0px)"}}>
                        <div className="AnimateRoot-sc-__sc-8m2keq-0 OPHsS">
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className="BaseStylesRoot-sc-__gqan6a-0 cnpIbj">
                    <div className="AnimateRoot-sc-__sc-8m2keq-0 cvpDBt">
                        <div></div>
                    </div>
                </div>
                <div className="BaseStylesRoot-sc-__gqan6a-0 cnpIbj">
                    <div className="AnimateRoot-sc-__sc-8m2keq-0 cvpDBt">
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(WorkspacePage);
