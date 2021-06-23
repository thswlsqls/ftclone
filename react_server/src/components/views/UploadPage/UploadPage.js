import { AppstoreOutlined, BranchesOutlined, DownOutlined, EllipsisOutlined, EyeInvisibleFilled, LayoutFilled, PlusCircleFilled, PlusCircleOutlined, PlusOutlined, QuestionOutlined, SearchOutlined, StarFilled, TeamOutlined, ZoomInOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import Axios from 'axios';
import { white } from 'chalk';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { chooseMiniform } from "../../../REDUX_actions/miniform_actions";

import "./styles.css";

function UploadPage(props) {

    const {user} = useSelector(state => state)
    
    const [miniforms, setminiforms] = useState([])

    const dispatch = useDispatch();

    console.log(props)
    console.log(miniforms);
    console.log(miniforms.length);
    console.log(user);

    console.log(props);
    console.log(props.user.userData);
    // console.log(props.user.userData._id);

    // if(userData.length){
    //     const {_id} = userData;
    //     console.log(userData._id)
    //     console.log(_id);
    // }
        // const variables = {
        //     creator : user.userData._id
        // }

        // Axios.post('/api/miniform/getMyMinifoms', variables)
        //     .then(response => {
        //         if(response.data.success){
        //             console.log('나의 미니폼 목록을 가져옵니다.')
        //             console.log(response.data);
        //             console.log(response.data.miniforms);
        //             setminiforms(response.data.miniforms);
                    
        //         }else{
        //             alert("나의 미니폼 목록 정보 가져오기에 실패하였습니다.")
        //         }
        //     });
    // }

    // if(!(miniforms.length)){
    //     Axios.get('/api/miniform/getMinifoms')
    //     .then(response => {
    //         if(response.data.success){

    //             console.log('미니폼 목록을 가져옵니다.')
    //             console.log(response.data);
    //             console.log(response.data.miniforms);
    //             setminiforms(response.data.miniforms);
                
    //         }else{
    //             alert("미니폼 목록 정보 가져오기에 실패하였습니다.")
    //         }
    //     });
    // }

    useEffect(() => {
        
        // console.log("유저정보....")
        // console.log("유저정보..")
        // console.log(user.userData);
        // // console.log(user.userData._id);

        Axios.get('/api/miniform/getMinifoms')
            .then(response => {
                if(response.data.success){

                    console.log('미니폼 목록을 가져옵니다.')
                    console.log(response.data);
                    console.log(response.data.miniforms);
                    setminiforms(response.data.miniforms);
                    
                }else{
                    alert("미니폼 목록 정보 가져오기에 실패하였습니다.")
                }
            });

        // const variables = {
        //     creator : user.userData._id
        // }

        // Axios.post('/api/miniform/getMyMinifoms', variables)
        //     .then(response => {
        //         if(response.data.success){
        //             console.log('나의 미니폼 목록을 가져옵니다.')
        //             console.log(response.data);
        //             console.log(response.data.miniforms);
        //             setminiforms(response.data.miniforms);
                    
        //         }else{
        //             alert("나의 미니폼 목록 정보 가져오기에 실패하였습니다.")
        //         }
        //     });

    }, [])

    const renderMiniforms = miniforms.map((miniform, index) => {
        
        const onClickMiniform = (miniform) => {

            dispatch(chooseMiniform(miniform))
            
        }

        return (
            <div onClick={() => {onClickMiniform(miniform)}} className="div_upload_Spacer-sc-__sc-1d4woe-0_bjpiAG">
                <div draggable="true" className="div_upload_draggerble_mySurveyForm">
                    <div className="div_upload_form-item__Wrapper-sc-1z05hji-0_fbEZaU">
                        <div className="div_upload_Split-sc-__sc-3xe4fi-0_iCtogy">
                            <div className="div_upload_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                <div className="div_upload_form-item-badge__BadgeWrapper-sgtscx-0_fqIuKD">
                                    
                                </div>
                                {/* {`http://localhost:3001/form/${miniform._id}/create`}  */}
                                <Link to ="/form">
                                    {/* <a href="http://localhost:3001/form" className="a_upload_form-item__FormThemeContainer-sc-1z05hji-1_IYTRY"> */}
                                    <div className="div_upload_Distribute-sc-__sc-1s2i8aq-0_form-item__TitleDistribute-sc-1z05hji-2_gSHohH">
                                        <div className="div_upload_Align-sc-__sc-4yw49j-0_iAnQnN">
                                            <span className="span_upload_Text-sc-__sc-1h7ebrz-0_form-item__FormTitle-sc-1z05hji-3_dceSQW">
                                                {miniform.name}
                                            </span>
                                        </div>
                                    </div>
                                {/* </a> */}
                                </Link>
                            </div>
                            <div className="div_upload_SplitItem-sc-__sc-3xe4fi-1_bTJYBJ">
                                <div className="div_upload_footer__FooterContainer-sc-1mz4tdg-0_WQIxd">
                                    <div className="div_upload_Spread-sc-__sc-1pjvgl-0_boZfPv">
                                        <a href="#" className="a_upload_Link-sc-__sc-2xj0ye-0_responses-text__NoResponsesLink-sc-1yb3968-1_iPaOQl">
                                            <span className="span_upload_Text-sc-__sc-1h7ebrz-0_dHUPFW">No responses</span>
                                        </a>
                                        <button className="btn_upload_IconButtonRoot-sc-__nzc5pg-0_fNOSPO">
                                                {/* <div className="div_upload_Align-sc-__sc-4yw49j-0_IconRoot-sc-__sc-1eorqw0-0_kKgMaN"> */}
                                                    <EllipsisOutlined style={{width:'14px', height:'4px'}}/>
                                                {/* </div> */}
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

    return (
        <div>
        <div>
        <div className="div_upload_rootContainer_app__Content-sc-1yawme2-0_ldqHCM">
        
        <div className="div_upload_rootContainer_app__Content-sc-1yawme2-0_Fnjnv">
            <div className="div_upload_subRootContainer_Split-sc-__sc-3xe4fi-0_dcZbpq" >
                
                {/* over width 1024 */}
                <div className="div_upload_SplitItem-sc-__sc-3xe4fi-1_boDQXT">
                    <div className="div_upload_Container-sc-__sc-1aileh0-0_iLQLva">
                        <div className="div_upload_ScrollContentRoot-sc-__sc-1ukpyz-2_fYNELf_workspace-list__StyledScrollContent-qj082h-0_bBkvCH">
                            <div className="div_upload_TopSectionWrapper-sc-__sc-1ukpyz-0_gsWjGi">
                                <div className="div_upload_Container-sc-__sc-1aileh0-0_kRYykD">
                                    <div className="div_upload_Spread-sc-__sc-1pjvgl-0_hiPzrC_over1024">
                                        <div className="div_upload_Distribute-sc-__sc-1s2i8aq-0_hBthWr">
                                            <span className="span_upload_Text-sc-__sc-1h7ebrz-0_hFlZym">
                                                Workspaces
                                            </span>
                                        </div>
                                        <div className="div_upload_Distribute-sc-__sc-1s2i8aq-0_cloQoE">
                                            <button className="btn_upload_IconButtonRoot-sc-__nzc5pg-0_iMvpsK">
                                                <div className="div_upload_Align-sc-__sc-24yw49j-0_IconRoot-sc-__sc-1eorqw0-0_kKgMaN">
                                                    <span>
                                                        <PlusOutlined />
                                                    </span>
                                                </div>
                                            </button>
                                            <button className="btn_upload_IconButtonRoot-sc-__nzc5pg-0_iMvpsK">
                                                <div className="div_upload_Align-sc-__sc-4yw49j-0_IconRoot-sc-__sc-1eorqw0-0_kKgMaN">
                                                    <span>
                                                        <SearchOutlined />
                                                    </span>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="div_upload_ChildrenWrapper-sc-__sc-1ukpyz-3_ewwvsh">
                                <ul className="ul_upload_ListRoot-sc-__lexhmg-0_cHUehc">
                                    <li className="li_upload_ListItem-sc-__lexhmg-1_kWEeRK">
                                        <div>
                                            <a className="a_upload_Link-sc-__sc-2xj0ye-0_workspace-list__Link-qj082h-1_bVvwNe">
                                                <div className="div_upload_workspace-list__WrapperVerticalMenuItem-qj082h-2_lZZbi">
                                                    <div className="div_upload_Spread-sc-__sc-1pjvgl-0_hiPzrC_1">
                                                        <span className="span_upload_Text-sc-__sc-1h7ebrz-0_fTINAE">
                                                            My workspace
                                                        </span>
                                                        <div className="div_upload_Distribute-sc-__sc-1s2i8aq-0_hBthWr_1">
                                                            <span className="span_upload_Text-sc-__sc-1h7ebrz-0_workspace-list__FormsCount-qj082h-4_dNrUBp">
                                                                2
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="div_upload_BottomSectionWrapper-sc-__sc-1ukpyz-1_dkkjtr">
                                <div className="div_upload_workspace-list__Wrapper-qj082h-3_cFSeRk">
                                    <div className="div_upload_help-center-content__Wrapper-sc-1x892rx-2_etUGBw">
                                        <div className="div_upload_Container-sc-__sc-1aileh0-0_jkcFtr">
                                            <button className="btn_upload_help-center-content__TitleWrapper-sc-1x892rx-0_jHClve">
                                                <div className="div_upload_Spread-sc-__sc-1pjvgl-0_boZfPv_">
                                                    <span className="span_upload_Text-sc-__sc-1h7ebrz-0_hFlZym_">
                                                       Help & Inspiration 
                                                    </span>
                                                    <div className="div_upload_Align-sc-__sc-4yw49j-0_IconRoot-sc-__sc-1eorqw0-0_kKgMaN_">
                                                        <DownOutlined />
                                                    </div>
                                                </div>
                                            </button>
                                            <div className="div_upload_help-center-content__ContentWrapper-sc-1x892rx-3_hZgqXE">
                                                <div className="div_upload_Container-sc-__sc-1aileh0-0_knqyNX">
                                                    <ul className="ul_upload_ListRoot-sc-__lexhmg-0_cHUehc">
                                                        
                                                        <li className="li_upload_ListItem-sc-__lexhmg-1_iqLhzO">
                                                            <a href="#" className="a_upload_Link-sc-__sc-2xj0ye-0_Izdvl">
                                                                <div className="div_upload_help-center-content__ItemWrapper-sc-1x892rx-1_ggxbaB">
                                                                    <div className="div_upload_Distribute-sc-__sc-1s2i8aq-0_hEcBFA">
                                                                        <div className="div_upload_Align-sc-__sc-4yw49j-0_IconRoot-sc-__sc-1eorqw0-0_iwfGng">
                                                                            <QuestionOutlined />
                                                                        </div>
                                                                        <div className="div_upload_Container-sc-__sc-1aileh0-0_dLafVM">
                                                                                Help Center
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>

                                                        <li className="li_upload_ListItem-sc-__lexhmg-1_iqLhzO">
                                                            <a href="#" className="a_upload_Link-sc-__sc-2xj0ye-0_Izdvl">
                                                                <div className="div_upload_help-center-content__ItemWrapper-sc-1x892rx-1_ggxbaB">
                                                                    <div className="div_upload_Distribute-sc-__sc-1s2i8aq-0_hEcBFA">
                                                                        <div className="div_upload_Align-sc-__sc-4yw49j-0_IconRoot-sc-__sc-1eorqw0-0_iwfGng">
                                                                            <TeamOutlined />
                                                                        </div>
                                                                        <div className="div_upload_Container-sc-__sc-1aileh0-0_dLafVM">
                                                                                Ask the community
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>

                                                        <li className="li_upload_ListItem-sc-__lexhmg-1_iqLhzO">
                                                            <a href="#" className="a_upload_Link-sc-__sc-2xj0ye-0_Izdvl">
                                                                <div className="div_upload_help-center-content__ItemWrapper-sc-1x892rx-1_ggxbaB">
                                                                    <div className="div_upload_Distribute-sc-__sc-1s2i8aq-0_hEcBFA">
                                                                        <div className="div_upload_Align-sc-__sc-4yw49j-0_IconRoot-sc-__sc-1eorqw0-0_iwfGng">
                                                                            <StarFilled />
                                                                        </div>
                                                                        <div className="div_upload_Container-sc-__sc-1aileh0-0_dLafVM">
                                                                                Learn the basics
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>

                                                        <li className="li_upload_ListItem-sc-__lexhmg-1_iqLhzO">
                                                            <a href="#" className="a_upload_Link-sc-__sc-2xj0ye-0_Izdvl">
                                                                <div className="div_upload_help-center-content__ItemWrapper-sc-1x892rx-1_ggxbaB">
                                                                    <div className="div_upload_Distribute-sc-__sc-1s2i8aq-0_hEcBFA">
                                                                        <div className="div_upload_Align-sc-__sc-4yw49j-0_IconRoot-sc-__sc-1eorqw0-0_iwfGng">
                                                                            <BranchesOutlined />
                                                                        </div>
                                                                        <div className="div_upload_Container-sc-__sc-1aileh0-0_dLafVM">
                                                                            Branch or skip questions
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>

                                                        <li className="li_upload_ListItem-sc-__lexhmg-1_iqLhzO">
                                                            <a href="#" className="a_upload_Link-sc-__sc-2xj0ye-0_Izdvl">
                                                                <div className="div_upload_help-center-content__ItemWrapper-sc-1x892rx-1_ggxbaB">
                                                                    <div className="div_upload_Distribute-sc-__sc-1s2i8aq-0_hEcBFA">
                                                                        <div className="div_upload_Align-sc-__sc-4yw49j-0_IconRoot-sc-__sc-1eorqw0-0_iwfGng">
                                                                            <EyeInvisibleFilled />
                                                                        </div>
                                                                        <div className="div_upload_Container-sc-__sc-1aileh0-0_dLafVM">
                                                                                Pull in info you already know
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>

                                                        <li className="li_upload_ListItem-sc-__lexhmg-1_iqLhzO">
                                                            <a href="#" className="a_upload_Link-sc-__sc-2xj0ye-0_Izdvl">
                                                                <div className="div_upload_help-center-content__ItemWrapper-sc-1x892rx-1_ggxbaB">
                                                                    <div className="div_upload_Distribute-sc-__sc-1s2i8aq-0_hEcBFA">
                                                                        <div className="div_upload_Align-sc-__sc-4yw49j-0_IconRoot-sc-__sc-1eorqw0-0_iwfGng">
                                                                            <LayoutFilled/>
                                                                        </div>
                                                                        <div className="div_upload_Container-sc-__sc-1aileh0-0_dLafVM">
                                                                                Embed your form
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>

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
                {/* over width 1024 */}

                <div className="div_upload_SplitItem-sc-__sc-3xe4fi-1_gkjeRC">
                    
                    <div  className="div_upload_workspace-content__MainSection-sc-5zixv2-0_kqanub">
                        <div className="div_upload_partial-overlay__OverlayWrapper-sc-1tj5dlf-1_fHYdYy">
                            <div>

                            </div>
                        </div>
                        <div className="div_upload_Container-sc-__sc-1aileh0-0_euPdWC">
                            <div className="div_upload_workspace-content__Scroller-sc-5zixv2-1_hoJuMq">
                                <div className="div_upload_Container-sc-__sc-1aileh0-0_bUeYFy">
                                    <div className="div_upload_Spread-sc-__sc-1pjvgl-0_hiPzrC">
                                        <div className="div_upload_Distribute-sc-__sc-1s2i8aq-0_hBthWr">
                                            <AppstoreOutlined 
                                                                                    style={{    
                                                                                                marginRight: '0px', 
                                                                                                minWidth: '0px', 
                                                                                                paddingRight: '8px', 
                                                                                                boxSizing: 'inherit',
                                                                                                display: 'block',
                                                                                                fontFamily:' -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                                                                                                fontSize: '14px',
                                                                                                lineHeight: '20px',
                                                                                                color: 'rgb(38, 38, 39)',
                                                                                                textSizeAdjust: '100%',
                                                                                                boxSizing: 'inherit'
                                                                                            }}
                                                                                        />
                                            <span className="span_upload_Text-sc-__sc-1h7ebrz-0_hFlZym">
                                                Workspaces
                                            </span>
                                        </div>
                                        <div className="div_upload_Distribute-sc-__sc-1s2i8aq-0_cloQoE">
                                            <button className="btn_upload_IconButtonRoot-sc-__nzc5pg-0_iMvpsK">
                                                <div className="div_upload_Align-sc-__sc-24yw49j-0_IconRoot-sc-__sc-1eorqw0-0_kKgMaN">
                                                    <span>
                                                        <PlusOutlined />
                                                    </span>
                                                </div>
                                            </button>
                                            <button className="btn_upload_IconButtonRoot-sc-__nzc5pg-0_iMvpsK">
                                                <div className="div_upload_Align-sc-__sc-4yw49j-0_IconRoot-sc-__sc-1eorqw0-0_kKgMaN">
                                                    <span>
                                                        <SearchOutlined />
                                                    </span>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="div_upload_Container-sc-__sc-1aileh0-0_fwAkFj">
                                    <div className="div_upload_Split-sc-__sc-3xe4fi-0_giqhxk">
                                        <div className="div_upload_SplitItem-sc-__sc-3xe4fi-1_gkjeRC">
                                            <div>
                                                <div className="div_upload_Split-sc-__sc-3xe4fi-0_bxrZiA">
                                                    <div className="div_upload_SplitItem-sc-__sc-3xe4fi-1_hlGeaq">
                                                        <div className="div_upload_workspace-header__InlineEditorWrapper-u56sxg-0_jDDWlh">
                                                            <div className="div_upload_InlineEditorRoot-sc-__sc-3cr9on-0_cuLALE">
                                                                <input className="input_upload_Input-sc-__sc-3cr9on-1_cqHiYE"/>
                                                                <div  className="div_upload_InputSizer-sc-__sc-3cr9on-2_knnyeu">
                                                                   My workspace
                                                                    <span className="span_upload_EmptyCharacter-sc-__sc-3cr9on-3_RQYuW">&nbsp;</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="div_upload_Spacer-sc-__sc-1d4woe-0_sQgjR">
                                                    <div className="div_upload_Distribute-sc-__sc-1s2i8aq-0_jjJKXQ">
                                                        <div className="div_upload_Distribute-sc-__sc-1s2i8aq-0_cloQoE">
                                                            <div className="div_upload_workspace-members__MembersListWrapper-sc-130rgo4-0_kZvLzO">
                                                                <div className="div_upload_workspace-members__ItemWrapper-sc-130rgo4-1_fLsBQa">
                                                                    <div className="div_upload_PictureWrapper-sc-__sc-15cvr7j-0_gBiwdq">
                                                                    <Avatar style={{ color: 'rgb(255, 255, 255)', backgroundColor: 'rgb(150 206 220)' }}>USER</Avatar>
                                                                    {/* {user.userData.user_name} */}
                                                                    </div>
                                                                    
                                                                </div>
                                                                <button className="btn_upload_IconButtonRoot-sc-__nzc5pg-0_ifLNuN">
                                                                    <div className="div_upload_Align-sc-__sc-4yw49j-0_IconRoot-sc-__sc-1eorqw0-0_kKgMaN">
                                                                        <PlusCircleFilled />
                                                                    </div>            
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="div_upload_Container-sc-__sc-1aileh0-0_workspace-forms__ContainerWrapper-sc-1oymojs-0_XQsbb">
                                        <div className="div_upload_partial-overlay__OverlayWrapper-sc-1tj5dlf-1_fHYdYy">
                                            <div></div>
                                        </div>

                                        <div className="div_upload_Spacer-sc-__sc-1d4woe-0_bjpiAG">
                                            <div className="div_upload_form-item__Wrapper-sc-1z05hji-0-workspace-forms__NewBuilderCreateFormButtonContainer-sc-1oymojs-2_jSYgMU">
                                                <div className="div_upload_Split-sc-__sc-3xe4fi-0_djSTHX">
                                                    <div className="div_upload_SplitItem-sc-__sc-3xe4fi-1_bTJYBJ">
                                                        <Link to="/templates">
                                                        <button className="btn_upload_form-item-enabled-button__FormItemButton-sc-12v2pgy-0">
                                                            <span className="span_upload_Text-sc-__sc-1h7ebrz-0_hQFhcn">
                                                                <p className="p_upload_form-item-enabled-button__LabelLine-sc-12v2pgy-3_htjqvt">
                                                                    New
                                                                </p>
                                                                <p className="p_upload_form-item-enabled-button__LabelLine-sc-12v2pgy-3_htjqvt">
                                                                    surveyform
                                                                </p>
                                                            </span>
                                                            <div className="div_upload_form-item-enabled-button__IconWrapper-sc-12v2pgy-1_jYwiMn">
                                                                <div className="div_upload_form-item-enabled-button__IconBackground-sc-12v2pgy-2_kaEpYJ">
                                                                    <div className="div_upload_Align-sc-__sc-4yw49j-0-IconRoot-sc-__sc-1eorqw0-0_lgXscy">
                                                                        <span className="span_uplaod_SVGInline">
                                                                            <PlusOutlined style={{
                                                                                fontFamily: 'sans-serif',
                                                                                fontSize: '100%',
                                                                                // fontWeight: '700',
                                                                            
                                                                                WebkitWritingMode: 'horizontal-tb !important',
                                                                                textRendering: 'auto',
                                                                            
                                                                                letterSpacing: 'normal',
                                                                                wordSpacing: 'normal',
                                                                            
                                                                                textIndent: '0px',
                                                                                textShadow: 'none',
                                                                            
                                                                                fontStyle: 'normal',
                                                                                fontVariantLigatures: 'normal',
                                                                                fontVariantCaps: 'normal',
                                                                                fontVariantNumeric: 'normal',
                                                                                fontVariantEastAsian: 'normal',
                                                                                fontWeight: '400',
                                                                                fontStretch: 'normal',
                                                                            
                                                                                textSizeAdjust: ' 100%',

                                                                                width:'14px',
                                                                                height:'14px',

                                                                                boxSizing: 'border-box',
                                                                                WebkitFontSmoothing: 'antialiased',

                                                                                display: 'block',
                                                                                fill: 'rgb(255, 255, 255)'

                                                                            }}/> {/* .anticon anticon-plus */}
                                                                        </span>
                                                                    </div>
                                                                </div>                    
                                                            </div>
                                                        </button>
                                                        </Link>
                                                    </div>
                                                    <div className="div_upload_SplitItem-sc-__sc-3xe4fi-1_eRBtjw">
                                                        <div className="div_upload_Split-sc-__sc-3xe4fi-0_iCtogy">
                                                            <div className="div_upload_workspace-forms__NewQuizButtonLegend-sc-1oymojs-3_ldTHiJ">
                                                                <div className="div_upload_Distribute-sc-__sc-1s2i8aq-0_bCGCVn">
                                                                    <span className="span_upload_Text-sc-__sc-1h7ebrz-0_guejJl">
                                                                        Discover the new Forms! ✨
                                                                    </span>
                                                                    <span className="span_upload_Text-sc-__sc-1h7ebrz-0_eBwFiN">
                                                                        Simpler, smarter, slicker. Create a new surveyform to try it for yourself.
                                                                    </span>
                                                                    <a href="#" className="a_upload_Link-sc-__sc-2xj0ye-0_lmbxls">
                                                                        See what's new
                                                                    </a>
                                                                </div>
                                                            </div>                                   
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* free usage info */}
                                        <div className="div_upload_Spacer-sc-__sc-1d4woe-0_bjpiAG">
                                            <div className="div_upload_Distribute-sc-__sc-1s2i8aq-0_form-item-plan-limits-base__FormItem-jq1vzx-0_kCislj">
                                                <span className="span_upload_Text-sc-__sc-1h7ebrz-0_efKJKA">
                                                    Your <strong> Free </strong>paln usage
                                                </span>
                                                <div className="div_upload_Distribute-sc-__sc-1s2i8aq-0_kBHmAj">
                                                    <span className="span_upload_Text-sc-__sc-1h7ebrz-0_djRoaw">
                                                        surveyForms
                                                    </span>
                                                    <div className="div_upload_limits-usage-bar__ProgressBarBackground-uvhgaz-0_hKTTZk">
                                                        <div className="div_upload_limits-usage-bar__ProgressBarLine-uvhgaz-1_isLzAF">

                                                        </div>
                                                    </div>
                                                    <span className="span_upload_Text-sc-__sc-1h7ebrz-0_limits-usage-bar__PaddedText-uvhgaz-2_ehTfUK">
                                                        2 <span className="span_upload_Text-sc-__sc-1h7ebrz-0_jLhDoN"> / 3 this account</span>
                                                    </span>
                                                </div>
                                                <div className="div_upload_Distribute-sc-__sc-1s2i8aq-0_kBHmAj">
                                                    <span className="span_upload_Text-sc-__sc-1h7ebrz-0_djRoaw">
                                                        Responses
                                                    </span>
                                                    <div className="div_upload_limits-usage-bar__ProgressBarBackground-uvhgaz-0_hKTTZk">
                                                        <div className="div_upload_limits-usage-bar__ProgressBarLine-uvhgaz-1_dffzZv">

                                                        </div>
                                                    </div>
                                                    <span className="span_upload_Text-sc-__sc-1h7ebrz-0_limits-usage-bar__PaddedText-uvhgaz-2_ehTfUK">
                                                        0 <span className="span_upload_Text-sc-__sc-1h7ebrz-0_jLhDoN"> /100 this month</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {renderMiniforms}

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
    )
}

export default withRouter(UploadPage)
