import React, { useState } from 'react'
import {Link, withRouter} from 'react-router-dom'
import Icon, { CloseOutlined, SearchOutlined } from '@ant-design/icons';
import Axios from 'axios';

import "./templatesPagestyles.css";
import { useDispatch, useSelector } from 'react-redux';
import { chooseMiniform } from "../../../REDUX_actions/miniform_actions";

function TemplateGalleryPage() {
    
    var user = { userData :{
        isAuth: false
        },
    };

    let state = useSelector(state => state)

    if(state.user.userData){
        user = state.user;
    } 

    const {miniform} = useSelector(state => state);
    const [formName, setformName] = useState("my miniform");
    const [formType, setformType] = useState("Select form type")
    const [miniformId, setminiformId] = useState("");

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
                        console.log(response.data);        
                        console.log(response.data.doc);
                        console.log(response.data.doc._id)   
                        setminiformId(response.data.doc._id);      
                        dispatch(chooseMiniform(response.data.doc));
                    }else{
                        alert('miniform 업로드에 실패했습니다.')
                    }
                })
        
    }

    return (
        <div className="div_templates_BaseStylesRoot-sc-__gqan6a-0_cnpIbj_app__Root-sc-1yawme2-1_hnDBwc">
            <div className="div_templates_Split-sc-__sc-3xe4fi-0_iCtogy">
                
                <div className="div_tamplates___bTJYBJ ">  
                    <div></div>
                </div> 
                
                <div className="div_tamplates___gkXDOi"> 
                    <div></div>
                </div>
            
            </div>
            <div className="div_tamplates_AnimateRoot-sc-__sc-8m2keq-0_cvpDBt">
                <div>
                    
                </div>{/* style required */}
            </div>
            <div>
                <div>
                    <div></div> 
                </div>
                <div className="div_tamplates_AnimateRoot-sc-__sc-8m2keq-0_cvpDBt">
                    <div>
                        <div className="div_tamplates_Container-sc-__sc-1aileh0-0_DialogRoot-sc-__sc-1jpfdxp-0_hIRmkD_fade-enter-done">
                            <div className="div_tamplates_Container-sc-__sc-1aileh0-0_gallery-compact__CustomContainer-sc-1502sx2-2_iiuxmz">
                                <div></div>
                            </div>
                            {/* it's Container over 1024px */}
                            <div className="div_tamplates_Split-sc-__sc-3xe4fi-0_giqhxk">
                                <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_jJRtkP">
                                    <div className="div_tamplates_Container-sc-__sc-1aileh0-0_kxUSBB">
                                        <div className="div_tamplates_ScrollContentRoot-sc-__sc-1ukpyz-2_fYNELf">
                                            <div className="div_tamplates_TopSectionWrapper-sc-__sc-1ukpyz-0_gsWjGi">
                                                <div className="div_tamplates_Container-sc-__sc-1aileh0-0_hmDFkO">
                                                    <div className="div_tamplates_animation-wrap__AnimationWrap-sc-1vtol0v-0_choxtN">
                                                        <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_eboKn">
                                                            Template gallery
                                                        </span>
                                                        <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_jaWSJo">
                                                            <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_djRoaw">
                                                            Use templates to get to know Typeform, or just get inspired. There’s something for every job you need to get done.
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="div_tamplates_ChildrenWrapper-sc-__sc-1ukpyz-3_ewwvsh">
                                                <div className="div_tamplates_Container-sc-__sc-1aileh0-0_bFeSwk">
                                                    <div className="div_tamplates_animation-wrap__AnimationWrap-sc-1vtol0v-0_choxtN">
                                                        <ul className="ul_tamplates_ListRoot-sc-__lexhmg-0_gSOFxu_categories-list__ListBox-jpzyxm-1_cQdgTY"> 
                                                            
                                                            <li className="li_tamplates_ListItem-sc-__lexhmg-1_fjLXfu">
                                                                <div className="div_tamplates_Distribute-sc-__sc-1s2i8aq-0_gZsQxG">
                                                                    <button className="btn_tamplates_categories-list__TextWrapper-jpzyxm-0_dekGqy">
                                                                        <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_lcJwja">
                                                                            THEME1
                                                                        </span>
                                                                    </button>
                                                                </div>
                                                            </li>
                                                            <li className="li_tamplates_ListItem-sc-__lexhmg-1_fjLXfu">
                                                                <div className="div_tamplates_Distribute-sc-__sc-1s2i8aq-0_gZsQxG">
                                                                    <button className="btn_tamplates_categories-list__TextWrapper-jpzyxm-0_dekGqy">
                                                                        <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_lcJwja">
                                                                            THEME2
                                                                        </span>
                                                                    </button>
                                                                </div>
                                                            </li>
                                                            <li className="li_tamplates_ListItem-sc-__lexhmg-1_fjLXfu">
                                                                <div className="div_tamplates_Distribute-sc-__sc-1s2i8aq-0_gZsQxG">
                                                                    <button className="btn_tamplates_categories-list__TextWrapper-jpzyxm-0_dekGqy">
                                                                        <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_lcJwja">
                                                                            THEME3
                                                                        </span>
                                                                    </button>
                                                                </div>
                                                            </li>
                                                            <li className="li_tamplates_ListItem-sc-__lexhmg-1_fjLXfu">
                                                                <div className="div_tamplates_Distribute-sc-__sc-1s2i8aq-0_gZsQxG">
                                                                    <button className="btn_tamplates_categories-list__TextWrapper-jpzyxm-0_dekGqy">
                                                                        <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_lcJwja">
                                                                            THEME4
                                                                        </span>
                                                                    </button>
                                                                </div>
                                                            </li>
                                                            <li className="li_tamplates_ListItem-sc-__lexhmg-1_fjLXfu">
                                                                <div className="div_tamplates_Distribute-sc-__sc-1s2i8aq-0_gZsQxG">
                                                                    <button className="btn_tamplates_categories-list__TextWrapper-jpzyxm-0_dekGqy">
                                                                        <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_lcJwja">
                                                                            THEME5
                                                                        </span>
                                                                    </button>
                                                                </div>
                                                            </li>
                                                            <li className="li_tamplates_ListItem-sc-__lexhmg-1_fjLXfu">
                                                                <div className="div_tamplates_Distribute-sc-__sc-1s2i8aq-0_gZsQxG">
                                                                    <button className="btn_tamplates_categories-list__TextWrapper-jpzyxm-0_dekGqy">
                                                                        <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_lcJwja">
                                                                            THEME6
                                                                        </span>
                                                                    </button>
                                                                </div>
                                                            </li>
                                                            <li className="li_tamplates_ListItem-sc-__lexhmg-1_fjLXfu">
                                                                <div className="div_tamplates_Distribute-sc-__sc-1s2i8aq-0_gZsQxG">
                                                                    <button className="btn_tamplates_categories-list__TextWrapper-jpzyxm-0_dekGqy">
                                                                        <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_lcJwja">
                                                                            THEME7
                                                                        </span>
                                                                    </button>
                                                                </div>
                                                            </li>
                                                            <li className="li_tamplates_ListItem-sc-__lexhmg-1_fjLXfu">
                                                                <div className="div_tamplates_Distribute-sc-__sc-1s2i8aq-0_gZsQxG">
                                                                    <button className="btn_tamplates_categories-list__TextWrapper-jpzyxm-0_dekGqy">
                                                                        <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_lcJwja">
                                                                            THEME8
                                                                        </span>
                                                                    </button>
                                                                </div>
                                                            </li>
                                                            <li className="li_tamplates_ListItem-sc-__lexhmg-1_fjLXfu">
                                                                <div className="div_tamplates_Distribute-sc-__sc-1s2i8aq-0_gZsQxG">
                                                                    <button className="btn_tamplates_categories-list__TextWrapper-jpzyxm-0_dekGqy">
                                                                        <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_lcJwja">
                                                                            THEME9
                                                                        </span>
                                                                    </button>
                                                                </div>
                                                            </li>
                                                            <li className="li_tamplates_ListItem-sc-__lexhmg-1_fjLXfu">
                                                                <div className="div_tamplates_Distribute-sc-__sc-1s2i8aq-0_gZsQxG">
                                                                    <button className="btn_tamplates_categories-list__TextWrapper-jpzyxm-0_dekGqy">
                                                                        <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_lcJwja">
                                                                            THEME10
                                                                        </span>
                                                                    </button>
                                                                </div>
                                                            </li>
                                                            <li className="li_tamplates_ListItem-sc-__lexhmg-1_fjLXfu">
                                                                <div className="div_tamplates_Distribute-sc-__sc-1s2i8aq-0_gZsQxG">
                                                                    <button className="btn_tamplates_categories-list__TextWrapper-jpzyxm-0_dekGqy">
                                                                        <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_lcJwja">
                                                                            THEME11
                                                                        </span>
                                                                    </button>
                                                                </div>
                                                            </li>
                                                            <li className="li_tamplates_ListItem-sc-__lexhmg-1_fjLXfu">
                                                                <div className="div_tamplates_Distribute-sc-__sc-1s2i8aq-0_gZsQxG">
                                                                    <button className="btn_tamplates_categories-list__TextWrapper-jpzyxm-0_dekGqy">
                                                                        <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_lcJwja">
                                                                            THEME12
                                                                        </span>
                                                                    </button>
                                                                </div>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                

                                {/* it's template gallery's right Container */}
                                <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_bdXPtc">
                                    <div className="div_tamplates_Align-sc-__sc-4yw49j-0_bYJwjg">
                                        <div className="div_tamplates_Distribute-sc-__sc-1s2i8aq-0_gallery-wide__TemplatesContainer-sc-1c9sqvb-2_iWaCEc">
                                            <div className="div_tamplates_gallery-wide__CtaContainer-sc-1c9sqvb-0_jRbedc">
                                                <div className="div_tamplates_animation-wrap__AnimationWrap-sc-1vtol0v-0_ctas__ButtonWrap-sc-1q6l9zt-0_cHkdYk">
                                                    <Link to="/workspace" >
                                                    <button onClick={()=>onStartFromScratchBtnClicked()} className="btn_tamplates_ButtonRoot-sc-__sc-1vu0deq-0_YKMJw">
                                                        <div className="div_templates_Distribute-sc-__sc-1s2i8aq-0_YOXft">
                                                            <span className="span_templates_Text-sc-__sc-1h7ebrz-0_djRoaw">
                                                                Start from scratch
                                                            </span>
                                                        </div>
                                                    </button>
                                                    </Link>
                                                </div>
                                                <div className="div_templates_Spacer-sc-__sc-1d4woe-0_eFzNmH"></div>
                                                <div className="div_templates_Spacer-sc-__sc-1d4woe-0_SyzBd"></div>
                                            </div>
                                            <div className="div_tamplates_search-input__SearchInputContainer-ns5xdb-3_bjkSNE">
                                                <div className="div_templates_StringInputRoot-sc-__iwhi9i-0_fxNpjC">
                                                    <div className="div_templates_InputFieldBox-sc-__iwhi9i-2_faAOWX">
                                                        <div className="div_templates_InputWrapper-sc-__iwhi9i-6_ihixzn">
                                                            <div className="Align-sc-__sc-4yw49j-0_IconRoot-sc-__sc-1eorqw0-0_kKgMaN">
                                                                <SearchOutlined />
                                                            </div>
                                                        </div>
                                                        <div className="div_templates_InputFieldWrapper-sc-__iwhi9i-3_cYgUZh">
                                                            <input placeholder="Search a template"  className="input_templates_Input-sc-__iwhi9i-1_ktYOnV"></input>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="div_tamplates_template-list__Wrap-sc-1qbj7ci-0_iWGwPw">
                                                <div className="div_templates_animation-wrap__AnimationWrap-sc-1vtol0v-0_template-list__FullWithWrap-sc-1qbj7ci-2_jHhsPr">
                                                    
                                                    {/* it's a template selection con */}
                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_template-list__TemplatesListHeader-sc-1qbj7ci-3_eGoEyo">
                                                        THEME1
                                                    </span>
                                                    <div className="div_templates_template-list__TemplatesListHeaderDivider-sc-1qbj7ci-4_cBuLBt"></div>
                                                    <div className="div_templates_Spacer-sc-__sc-1d4woe-0_cpKzWy"></div>
                                                    <div className="div_templates_template-list__Templates-sc-1qbj7ci-1_ldSmLg">
                                                        
                                                        {/* it's a template selection */}
                                                        <div className="div_templates_Spacer-sc-__sc-1d4woe-0_vIhjp">
                                                            <div className="div_templates_animation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                                <button className="btn_templates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                    <div className="div_templates_Split-sc-__sc-3xe4fi-0_fJEAbV">
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_glYncc">
                                                                            <img className="img_templates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                        </div>
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                            <div className="div_templates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                                <div className="div_templates_Spacer-sc-__sc-1d4woe-0_kxMcMe">
                                                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_fjOXco">
                                                                                        Description For Tamplate
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        {/* it's a template selection */}
                                                        <div className="div_templates_Spacer-sc-__sc-1d4woe-0_vIhjp">
                                                            <div className="div_templates_animation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                                <button className="btn_templates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                    <div className="div_templates_Split-sc-__sc-3xe4fi-0_fJEAbV">
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_glYncc">
                                                                            <img className="img_templates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                        </div>
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                            <div className="div_templates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                                <div className="div_templates_Spacer-sc-__sc-1d4woe-0_kxMcMe">
                                                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_fjOXco">
                                                                                        Description For Tamplate
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        {/* it's a template selection */}
                                                        <div className="div_templates_Spacer-sc-__sc-1d4woe-0_vIhjp">
                                                            <div className="div_templates_animation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                                <button className="btn_templates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                    <div className="div_templates_Split-sc-__sc-3xe4fi-0_fJEAbV">
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_glYncc">
                                                                            <img className="img_templates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                        </div>
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                            <div className="div_templates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                                <div className="div_templates_Spacer-sc-__sc-1d4woe-0_kxMcMe">
                                                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_fjOXco">
                                                                                        Description For Tamplate
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        {/* it's a template selection */}
                                                        <div className="div_templates_Spacer-sc-__sc-1d4woe-0_vIhjp">
                                                            <div className="div_templates_animation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                                <button className="btn_templates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                    <div className="div_templates_Split-sc-__sc-3xe4fi-0_fJEAbV">
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_glYncc">
                                                                            <img className="img_templates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                        </div>
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                            <div className="div_templates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                                <div className="div_templates_Spacer-sc-__sc-1d4woe-0_kxMcMe">
                                                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_fjOXco">
                                                                                        Description For Tamplate
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    {/* it's a template selection con */}
                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_template-list__TemplatesListHeader-sc-1qbj7ci-3_eGoEyo">
                                                        THEME2
                                                    </span>
                                                    <div className="div_templates_template-list__TemplatesListHeaderDivider-sc-1qbj7ci-4_cBuLBt"></div>
                                                    <div className="div_templates_Spacer-sc-__sc-1d4woe-0_cpKzWy"></div>
                                                    <div className="div_templates_template-list__Templates-sc-1qbj7ci-1_ldSmLg">
                                                        
                                                        {/* it's a template selection */}
                                                        <div className="div_templates_Spacer-sc-__sc-1d4woe-0_vIhjp">
                                                            <div className="div_templates_animation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                                <button className="btn_templates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                    <div className="div_templates_Split-sc-__sc-3xe4fi-0_fJEAbV">
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_glYncc">
                                                                            <img className="img_templates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                        </div>
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                            <div className="div_templates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                                <div className="div_templates_Spacer-sc-__sc-1d4woe-0_kxMcMe">
                                                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_fjOXco">
                                                                                        Description For Tamplate
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        {/* it's a template selection */}
                                                        <div className="div_templates_Spacer-sc-__sc-1d4woe-0_vIhjp">
                                                            <div className="div_templates_animation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                                <button className="btn_templates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                    <div className="div_templates_Split-sc-__sc-3xe4fi-0_fJEAbV">
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_glYncc">
                                                                            <img className="img_templates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                        </div>
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                            <div className="div_templates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                                <div className="div_templates_Spacer-sc-__sc-1d4woe-0_kxMcMe">
                                                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_fjOXco">
                                                                                        Description For Tamplate
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        {/* it's a template selection */}
                                                        <div className="div_templates_Spacer-sc-__sc-1d4woe-0_vIhjp">
                                                            <div className="div_templates_animation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                                <button className="btn_templates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                    <div className="div_templates_Split-sc-__sc-3xe4fi-0_fJEAbV">
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_glYncc">
                                                                            <img className="img_templates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                        </div>
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                            <div className="div_templates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                                <div className="div_templates_Spacer-sc-__sc-1d4woe-0_kxMcMe">
                                                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_fjOXco">
                                                                                        Description For Tamplate
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        {/* it's a template selection */}
                                                        <div className="div_templates_Spacer-sc-__sc-1d4woe-0_vIhjp">
                                                            <div className="div_templates_animation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                                <button className="btn_templates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                    <div className="div_templates_Split-sc-__sc-3xe4fi-0_fJEAbV">
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_glYncc">
                                                                            <img className="img_templates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                        </div>
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                            <div className="div_templates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                                <div className="div_templates_Spacer-sc-__sc-1d4woe-0_kxMcMe">
                                                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_fjOXco">
                                                                                        Description For Tamplate
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    {/* it's a template selection con */}
                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_template-list__TemplatesListHeader-sc-1qbj7ci-3_eGoEyo">
                                                        THEME3
                                                    </span>
                                                    <div className="div_templates_template-list__TemplatesListHeaderDivider-sc-1qbj7ci-4_cBuLBt"></div>
                                                    <div className="div_templates_Spacer-sc-__sc-1d4woe-0_cpKzWy"></div>
                                                    <div className="div_templates_template-list__Templates-sc-1qbj7ci-1_ldSmLg">
                                                        
                                                        {/* it's a template selection */}
                                                        <div className="div_templates_Spacer-sc-__sc-1d4woe-0_vIhjp">
                                                            <div className="div_templates_animation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                                <button className="btn_templates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                    <div className="div_templates_Split-sc-__sc-3xe4fi-0_fJEAbV">
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_glYncc">
                                                                            <img className="img_templates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                        </div>
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                            <div className="div_templates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                                <div className="div_templates_Spacer-sc-__sc-1d4woe-0_kxMcMe">
                                                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_fjOXco">
                                                                                        Description For Tamplate
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        {/* it's a template selection */}
                                                        <div className="div_templates_Spacer-sc-__sc-1d4woe-0_vIhjp">
                                                            <div className="div_templates_animation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                                <button className="btn_templates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                    <div className="div_templates_Split-sc-__sc-3xe4fi-0_fJEAbV">
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_glYncc">
                                                                            <img className="img_templates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                        </div>
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                            <div className="div_templates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                                <div className="div_templates_Spacer-sc-__sc-1d4woe-0_kxMcMe">
                                                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_fjOXco">
                                                                                        Description For Tamplate
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        {/* it's a template selection */}
                                                        <div className="div_templates_Spacer-sc-__sc-1d4woe-0_vIhjp">
                                                            <div className="div_templates_animation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                                <button className="btn_templates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                    <div className="div_templates_Split-sc-__sc-3xe4fi-0_fJEAbV">
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_glYncc">
                                                                            <img className="img_templates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                        </div>
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                            <div className="div_templates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                                <div className="div_templates_Spacer-sc-__sc-1d4woe-0_kxMcMe">
                                                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_fjOXco">
                                                                                        Description For Tamplate
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        {/* it's a template selection */}
                                                        <div className="div_templates_Spacer-sc-__sc-1d4woe-0_vIhjp">
                                                            <div className="div_templates_animation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                                <button className="btn_templates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                    <div className="div_templates_Split-sc-__sc-3xe4fi-0_fJEAbV">
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_glYncc">
                                                                            <img className="img_templates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                        </div>
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                            <div className="div_templates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                                <div className="div_templates_Spacer-sc-__sc-1d4woe-0_kxMcMe">
                                                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_fjOXco">
                                                                                        Description For Tamplate
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    {/* it's a template selection con */}
                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_template-list__TemplatesListHeader-sc-1qbj7ci-3_eGoEyo">
                                                        THEME4
                                                    </span>
                                                    <div className="div_templates_template-list__TemplatesListHeaderDivider-sc-1qbj7ci-4_cBuLBt"></div>
                                                    <div className="div_templates_Spacer-sc-__sc-1d4woe-0_cpKzWy"></div>
                                                    <div className="div_templates_template-list__Templates-sc-1qbj7ci-1_ldSmLg">
                                                        
                                                        {/* it's a template selection */}
                                                        <div className="div_templates_Spacer-sc-__sc-1d4woe-0_vIhjp">
                                                            <div className="div_templates_animation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                                <button className="btn_templates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                    <div className="div_templates_Split-sc-__sc-3xe4fi-0_fJEAbV">
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_glYncc">
                                                                            <img className="img_templates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                        </div>
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                            <div className="div_templates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                                <div className="div_templates_Spacer-sc-__sc-1d4woe-0_kxMcMe">
                                                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_fjOXco">
                                                                                        Description For Tamplate
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        {/* it's a template selection */}
                                                        <div className="div_templates_Spacer-sc-__sc-1d4woe-0_vIhjp">
                                                            <div className="div_templates_animation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                                <button className="btn_templates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                    <div className="div_templates_Split-sc-__sc-3xe4fi-0_fJEAbV">
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_glYncc">
                                                                            <img className="img_templates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                        </div>
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                            <div className="div_templates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                                <div className="div_templates_Spacer-sc-__sc-1d4woe-0_kxMcMe">
                                                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_fjOXco">
                                                                                        Description For Tamplate
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        {/* it's a template selection */}
                                                        <div className="div_templates_Spacer-sc-__sc-1d4woe-0_vIhjp">
                                                            <div className="div_templates_animation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                                <button className="btn_templates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                    <div className="div_templates_Split-sc-__sc-3xe4fi-0_fJEAbV">
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_glYncc">
                                                                            <img className="img_templates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                        </div>
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                            <div className="div_templates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                                <div className="div_templates_Spacer-sc-__sc-1d4woe-0_kxMcMe">
                                                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_fjOXco">
                                                                                        Description For Tamplate
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        {/* it's a template selection */}
                                                        <div className="div_templates_Spacer-sc-__sc-1d4woe-0_vIhjp">
                                                            <div className="div_templates_animation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                                <button className="btn_templates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                    <div className="div_templates_Split-sc-__sc-3xe4fi-0_fJEAbV">
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_glYncc">
                                                                            <img className="img_templates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                        </div>
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                            <div className="div_templates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                                <div className="div_templates_Spacer-sc-__sc-1d4woe-0_kxMcMe">
                                                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_fjOXco">
                                                                                        Description For Tamplate
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    {/* it's a template selection con */}
                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_template-list__TemplatesListHeader-sc-1qbj7ci-3_eGoEyo">
                                                        THEME5
                                                    </span>
                                                    <div className="div_templates_template-list__TemplatesListHeaderDivider-sc-1qbj7ci-4_cBuLBt"></div>
                                                    <div className="div_templates_Spacer-sc-__sc-1d4woe-0_cpKzWy"></div>
                                                    <div className="div_templates_template-list__Templates-sc-1qbj7ci-1_ldSmLg">
                                                        
                                                        {/* it's a template selection */}
                                                        <div className="div_templates_Spacer-sc-__sc-1d4woe-0_vIhjp">
                                                            <div className="div_templates_animation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                                <button className="btn_templates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                    <div className="div_templates_Split-sc-__sc-3xe4fi-0_fJEAbV">
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_glYncc">
                                                                            <img className="img_templates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                        </div>
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                            <div className="div_templates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                                <div className="div_templates_Spacer-sc-__sc-1d4woe-0_kxMcMe">
                                                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_fjOXco">
                                                                                        Description For Tamplate
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        {/* it's a template selection */}
                                                        <div className="div_templates_Spacer-sc-__sc-1d4woe-0_vIhjp">
                                                            <div className="div_templates_animation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                                <button className="btn_templates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                    <div className="div_templates_Split-sc-__sc-3xe4fi-0_fJEAbV">
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_glYncc">
                                                                            <img className="img_templates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                        </div>
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                            <div className="div_templates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                                <div className="div_templates_Spacer-sc-__sc-1d4woe-0_kxMcMe">
                                                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_fjOXco">
                                                                                        Description For Tamplate
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        {/* it's a template selection */}
                                                        <div className="div_templates_Spacer-sc-__sc-1d4woe-0_vIhjp">
                                                            <div className="div_templates_animation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                                <button className="btn_templates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                    <div className="div_templates_Split-sc-__sc-3xe4fi-0_fJEAbV">
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_glYncc">
                                                                            <img className="img_templates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                        </div>
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                            <div className="div_templates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                                <div className="div_templates_Spacer-sc-__sc-1d4woe-0_kxMcMe">
                                                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_fjOXco">
                                                                                        Description For Tamplate
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        {/* it's a template selection */}
                                                        <div className="div_templates_Spacer-sc-__sc-1d4woe-0_vIhjp">
                                                            <div className="div_templates_animation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                                <button className="btn_templates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                    <div className="div_templates_Split-sc-__sc-3xe4fi-0_fJEAbV">
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_glYncc">
                                                                            <img className="img_templates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                        </div>
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                            <div className="div_templates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                                <div className="div_templates_Spacer-sc-__sc-1d4woe-0_kxMcMe">
                                                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_fjOXco">
                                                                                        Description For Tamplate
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    {/* it's a template selection con */}
                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_template-list__TemplatesListHeader-sc-1qbj7ci-3_eGoEyo">
                                                        THEME6
                                                    </span>
                                                    <div className="div_templates_template-list__TemplatesListHeaderDivider-sc-1qbj7ci-4_cBuLBt"></div>
                                                    <div className="div_templates_Spacer-sc-__sc-1d4woe-0_cpKzWy"></div>
                                                    <div className="div_templates_template-list__Templates-sc-1qbj7ci-1_ldSmLg">
                                                        
                                                        {/* it's a template selection */}
                                                        <div className="div_templates_Spacer-sc-__sc-1d4woe-0_vIhjp">
                                                            <div className="div_templates_animation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                                <button className="btn_templates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                    <div className="div_templates_Split-sc-__sc-3xe4fi-0_fJEAbV">
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_glYncc">
                                                                            <img className="img_templates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                        </div>
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                            <div className="div_templates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                                <div className="div_templates_Spacer-sc-__sc-1d4woe-0_kxMcMe">
                                                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_fjOXco">
                                                                                        Description For Tamplate
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        {/* it's a template selection */}
                                                        <div className="div_templates_Spacer-sc-__sc-1d4woe-0_vIhjp">
                                                            <div className="div_templates_animation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                                <button className="btn_templates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                    <div className="div_templates_Split-sc-__sc-3xe4fi-0_fJEAbV">
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_glYncc">
                                                                            <img className="img_templates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                        </div>
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                            <div className="div_templates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                                <div className="div_templates_Spacer-sc-__sc-1d4woe-0_kxMcMe">
                                                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_fjOXco">
                                                                                        Description For Tamplate
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        {/* it's a template selection */}
                                                        <div className="div_templates_Spacer-sc-__sc-1d4woe-0_vIhjp">
                                                            <div className="div_templates_animation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                                <button className="btn_templates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                    <div className="div_templates_Split-sc-__sc-3xe4fi-0_fJEAbV">
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_glYncc">
                                                                            <img className="img_templates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                        </div>
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                            <div className="div_templates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                                <div className="div_templates_Spacer-sc-__sc-1d4woe-0_kxMcMe">
                                                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_fjOXco">
                                                                                        Description For Tamplate
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        {/* it's a template selection */}
                                                        <div className="div_templates_Spacer-sc-__sc-1d4woe-0_vIhjp">
                                                            <div className="div_templates_animation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                                <button className="btn_templates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                    <div className="div_templates_Split-sc-__sc-3xe4fi-0_fJEAbV">
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_glYncc">
                                                                            <img className="img_templates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                        </div>
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                            <div className="div_templates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                                <div className="div_templates_Spacer-sc-__sc-1d4woe-0_kxMcMe">
                                                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_fjOXco">
                                                                                        Description For Tamplate
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    {/* it's a template selection con */}
                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_template-list__TemplatesListHeader-sc-1qbj7ci-3_eGoEyo">
                                                        THEME7
                                                    </span>
                                                    <div className="div_templates_template-list__TemplatesListHeaderDivider-sc-1qbj7ci-4_cBuLBt"></div>
                                                    <div className="div_templates_Spacer-sc-__sc-1d4woe-0_cpKzWy"></div>
                                                    <div className="div_templates_template-list__Templates-sc-1qbj7ci-1_ldSmLg">
                                                        
                                                        {/* it's a template selection */}
                                                        <div className="div_templates_Spacer-sc-__sc-1d4woe-0_vIhjp">
                                                            <div className="div_templates_animation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                                <button className="btn_templates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                    <div className="div_templates_Split-sc-__sc-3xe4fi-0_fJEAbV">
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_glYncc">
                                                                            <img className="img_templates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                        </div>
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                            <div className="div_templates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                                <div className="div_templates_Spacer-sc-__sc-1d4woe-0_kxMcMe">
                                                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_fjOXco">
                                                                                        Description For Tamplate
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        {/* it's a template selection */}
                                                        <div className="div_templates_Spacer-sc-__sc-1d4woe-0_vIhjp">
                                                            <div className="div_templates_animation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                                <button className="btn_templates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                    <div className="div_templates_Split-sc-__sc-3xe4fi-0_fJEAbV">
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_glYncc">
                                                                            <img className="img_templates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                        </div>
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                            <div className="div_templates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                                <div className="div_templates_Spacer-sc-__sc-1d4woe-0_kxMcMe">
                                                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_fjOXco">
                                                                                        Description For Tamplate
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        {/* it's a template selection */}
                                                        <div className="div_templates_Spacer-sc-__sc-1d4woe-0_vIhjp">
                                                            <div className="div_templates_animation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                                <button className="btn_templates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                    <div className="div_templates_Split-sc-__sc-3xe4fi-0_fJEAbV">
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_glYncc">
                                                                            <img className="img_templates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                        </div>
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                            <div className="div_templates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                                <div className="div_templates_Spacer-sc-__sc-1d4woe-0_kxMcMe">
                                                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_fjOXco">
                                                                                        Description For Tamplate
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        {/* it's a template selection */}
                                                        <div className="div_templates_Spacer-sc-__sc-1d4woe-0_vIhjp">
                                                            <div className="div_templates_animation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                                <button className="btn_templates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                    <div className="div_templates_Split-sc-__sc-3xe4fi-0_fJEAbV">
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_glYncc">
                                                                            <img className="img_templates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                        </div>
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                            <div className="div_templates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                                <div className="div_templates_Spacer-sc-__sc-1d4woe-0_kxMcMe">
                                                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_fjOXco">
                                                                                        Description For Tamplate
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    {/* it's a template selection con */}
                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_template-list__TemplatesListHeader-sc-1qbj7ci-3_eGoEyo">
                                                        THEME8
                                                    </span>
                                                    <div className="div_templates_template-list__TemplatesListHeaderDivider-sc-1qbj7ci-4_cBuLBt"></div>
                                                    <div className="div_templates_Spacer-sc-__sc-1d4woe-0_cpKzWy"></div>
                                                    <div className="div_templates_template-list__Templates-sc-1qbj7ci-1_ldSmLg">
                                                        
                                                        {/* it's a template selection */}
                                                        <div className="div_templates_Spacer-sc-__sc-1d4woe-0_vIhjp">
                                                            <div className="div_templates_animation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                                <button className="btn_templates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                    <div className="div_templates_Split-sc-__sc-3xe4fi-0_fJEAbV">
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_glYncc">
                                                                            <img className="img_templates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                        </div>
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                            <div className="div_templates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                                <div className="div_templates_Spacer-sc-__sc-1d4woe-0_kxMcMe">
                                                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_fjOXco">
                                                                                        Description For Tamplate
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        {/* it's a template selection */}
                                                        <div className="div_templates_Spacer-sc-__sc-1d4woe-0_vIhjp">
                                                            <div className="div_templates_animation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                                <button className="btn_templates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                    <div className="div_templates_Split-sc-__sc-3xe4fi-0_fJEAbV">
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_glYncc">
                                                                            <img className="img_templates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                        </div>
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                            <div className="div_templates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                                <div className="div_templates_Spacer-sc-__sc-1d4woe-0_kxMcMe">
                                                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_fjOXco">
                                                                                        Description For Tamplate
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        {/* it's a template selection */}
                                                        <div className="div_templates_Spacer-sc-__sc-1d4woe-0_vIhjp">
                                                            <div className="div_templates_animation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                                <button className="btn_templates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                    <div className="div_templates_Split-sc-__sc-3xe4fi-0_fJEAbV">
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_glYncc">
                                                                            <img className="img_templates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                        </div>
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                            <div className="div_templates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                                <div className="div_templates_Spacer-sc-__sc-1d4woe-0_kxMcMe">
                                                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_fjOXco">
                                                                                        Description For Tamplate
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        {/* it's a template selection */}
                                                        <div className="div_templates_Spacer-sc-__sc-1d4woe-0_vIhjp">
                                                            <div className="div_templates_animation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                                <button className="btn_templates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                    <div className="div_templates_Split-sc-__sc-3xe4fi-0_fJEAbV">
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_glYncc">
                                                                            <img className="img_templates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                        </div>
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                            <div className="div_templates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                                <div className="div_templates_Spacer-sc-__sc-1d4woe-0_kxMcMe">
                                                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_fjOXco">
                                                                                        Description For Tamplate
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    {/* it's a template selection con */}
                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_template-list__TemplatesListHeader-sc-1qbj7ci-3_eGoEyo">
                                                        THEME9
                                                    </span>
                                                    <div className="div_templates_template-list__TemplatesListHeaderDivider-sc-1qbj7ci-4_cBuLBt"></div>
                                                    <div className="div_templates_Spacer-sc-__sc-1d4woe-0_cpKzWy"></div>
                                                    <div className="div_templates_template-list__Templates-sc-1qbj7ci-1_ldSmLg">
                                                        
                                                        {/* it's a template selection */}
                                                        <div className="div_templates_Spacer-sc-__sc-1d4woe-0_vIhjp">
                                                            <div className="div_templates_animation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                                <button className="btn_templates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                    <div className="div_templates_Split-sc-__sc-3xe4fi-0_fJEAbV">
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_glYncc">
                                                                            <img className="img_templates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                        </div>
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                            <div className="div_templates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                                <div className="div_templates_Spacer-sc-__sc-1d4woe-0_kxMcMe">
                                                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_fjOXco">
                                                                                        Description For Tamplate
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        {/* it's a template selection */}
                                                        <div className="div_templates_Spacer-sc-__sc-1d4woe-0_vIhjp">
                                                            <div className="div_templates_animation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                                <button className="btn_templates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                    <div className="div_templates_Split-sc-__sc-3xe4fi-0_fJEAbV">
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_glYncc">
                                                                            <img className="img_templates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                        </div>
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                            <div className="div_templates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                                <div className="div_templates_Spacer-sc-__sc-1d4woe-0_kxMcMe">
                                                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_fjOXco">
                                                                                        Description For Tamplate
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        {/* it's a template selection */}
                                                        <div className="div_templates_Spacer-sc-__sc-1d4woe-0_vIhjp">
                                                            <div className="div_templates_animation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                                <button className="btn_templates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                    <div className="div_templates_Split-sc-__sc-3xe4fi-0_fJEAbV">
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_glYncc">
                                                                            <img className="img_templates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                        </div>
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                            <div className="div_templates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                                <div className="div_templates_Spacer-sc-__sc-1d4woe-0_kxMcMe">
                                                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_fjOXco">
                                                                                        Description For Tamplate
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        {/* it's a template selection */}
                                                        <div className="div_templates_Spacer-sc-__sc-1d4woe-0_vIhjp">
                                                            <div className="div_templates_animation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                                <button className="btn_templates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                    <div className="div_templates_Split-sc-__sc-3xe4fi-0_fJEAbV">
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_glYncc">
                                                                            <img className="img_templates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                        </div>
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                            <div className="div_templates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                                <div className="div_templates_Spacer-sc-__sc-1d4woe-0_kxMcMe">
                                                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_fjOXco">
                                                                                        Description For Tamplate
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    {/* it's a template selection con */}
                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_template-list__TemplatesListHeader-sc-1qbj7ci-3_eGoEyo">
                                                        THEME10
                                                    </span>
                                                    <div className="div_templates_template-list__TemplatesListHeaderDivider-sc-1qbj7ci-4_cBuLBt"></div>
                                                    <div className="div_templates_Spacer-sc-__sc-1d4woe-0_cpKzWy"></div>
                                                    <div className="div_templates_template-list__Templates-sc-1qbj7ci-1_ldSmLg">
                                                        
                                                        {/* it's a template selection */}
                                                        <div className="div_templates_Spacer-sc-__sc-1d4woe-0_vIhjp">
                                                            <div className="div_templates_animation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                                <button className="btn_templates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                    <div className="div_templates_Split-sc-__sc-3xe4fi-0_fJEAbV">
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_glYncc">
                                                                            <img className="img_templates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                        </div>
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                            <div className="div_templates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                                <div className="div_templates_Spacer-sc-__sc-1d4woe-0_kxMcMe">
                                                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_fjOXco">
                                                                                        Description For Tamplate
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        {/* it's a template selection */}
                                                        <div className="div_templates_Spacer-sc-__sc-1d4woe-0_vIhjp">
                                                            <div className="div_templates_animation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                                <button className="btn_templates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                    <div className="div_templates_Split-sc-__sc-3xe4fi-0_fJEAbV">
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_glYncc">
                                                                            <img className="img_templates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                        </div>
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                            <div className="div_templates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                                <div className="div_templates_Spacer-sc-__sc-1d4woe-0_kxMcMe">
                                                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_fjOXco">
                                                                                        Description For Tamplate
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        {/* it's a template selection */}
                                                        <div className="div_templates_Spacer-sc-__sc-1d4woe-0_vIhjp">
                                                            <div className="div_templates_animation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                                <button className="btn_templates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                    <div className="div_templates_Split-sc-__sc-3xe4fi-0_fJEAbV">
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_glYncc">
                                                                            <img className="img_templates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                        </div>
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                            <div className="div_templates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                                <div className="div_templates_Spacer-sc-__sc-1d4woe-0_kxMcMe">
                                                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_fjOXco">
                                                                                        Description For Tamplate
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        {/* it's a template selection */}
                                                        <div className="div_templates_Spacer-sc-__sc-1d4woe-0_vIhjp">
                                                            <div className="div_templates_animation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                                <button className="btn_templates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                    <div className="div_templates_Split-sc-__sc-3xe4fi-0_fJEAbV">
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_glYncc">
                                                                            <img className="img_templates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                        </div>
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                            <div className="div_templates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                                <div className="div_templates_Spacer-sc-__sc-1d4woe-0_kxMcMe">
                                                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_fjOXco">
                                                                                        Description For Tamplate
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    {/* it's a template selection con */}
                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_template-list__TemplatesListHeader-sc-1qbj7ci-3_eGoEyo">
                                                        THEME11
                                                    </span>
                                                    <div className="div_templates_template-list__TemplatesListHeaderDivider-sc-1qbj7ci-4_cBuLBt"></div>
                                                    <div className="div_templates_Spacer-sc-__sc-1d4woe-0_cpKzWy"></div>
                                                    <div className="div_templates_template-list__Templates-sc-1qbj7ci-1_ldSmLg">
                                                        
                                                        {/* it's a template selection */}
                                                        <div className="div_templates_Spacer-sc-__sc-1d4woe-0_vIhjp">
                                                            <div className="div_templates_animation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                                <button className="btn_templates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                    <div className="div_templates_Split-sc-__sc-3xe4fi-0_fJEAbV">
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_glYncc">
                                                                            <img className="img_templates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                        </div>
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                            <div className="div_templates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                                <div className="div_templates_Spacer-sc-__sc-1d4woe-0_kxMcMe">
                                                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_fjOXco">
                                                                                        Description For Tamplate
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        {/* it's a template selection */}
                                                        <div className="div_templates_Spacer-sc-__sc-1d4woe-0_vIhjp">
                                                            <div className="div_templates_animation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                                <button className="btn_templates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                    <div className="div_templates_Split-sc-__sc-3xe4fi-0_fJEAbV">
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_glYncc">
                                                                            <img className="img_templates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                        </div>
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                            <div className="div_templates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                                <div className="div_templates_Spacer-sc-__sc-1d4woe-0_kxMcMe">
                                                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_fjOXco">
                                                                                        Description For Tamplate
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        {/* it's a template selection */}
                                                        <div className="div_templates_Spacer-sc-__sc-1d4woe-0_vIhjp">
                                                            <div className="div_templates_animation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                                <button className="btn_templates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                    <div className="div_templates_Split-sc-__sc-3xe4fi-0_fJEAbV">
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_glYncc">
                                                                            <img className="img_templates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                        </div>
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                            <div className="div_templates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                                <div className="div_templates_Spacer-sc-__sc-1d4woe-0_kxMcMe">
                                                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_fjOXco">
                                                                                        Description For Tamplate
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        {/* it's a template selection */}
                                                        <div className="div_templates_Spacer-sc-__sc-1d4woe-0_vIhjp">
                                                            <div className="div_templates_animation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                                <button className="btn_templates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                    <div className="div_templates_Split-sc-__sc-3xe4fi-0_fJEAbV">
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_glYncc">
                                                                            <img className="img_templates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                        </div>
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                            <div className="div_templates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                                <div className="div_templates_Spacer-sc-__sc-1d4woe-0_kxMcMe">
                                                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_fjOXco">
                                                                                        Description For Tamplate
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    {/* it's a template selection con */}
                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_template-list__TemplatesListHeader-sc-1qbj7ci-3_eGoEyo">
                                                        THEME12
                                                    </span>
                                                    <div className="div_templates_template-list__TemplatesListHeaderDivider-sc-1qbj7ci-4_cBuLBt"></div>
                                                    <div className="div_templates_Spacer-sc-__sc-1d4woe-0_cpKzWy"></div>
                                                    <div className="div_templates_template-list__Templates-sc-1qbj7ci-1_ldSmLg">
                                                        
                                                        {/* it's a template selection */}
                                                        <div className="div_templates_Spacer-sc-__sc-1d4woe-0_vIhjp">
                                                            <div className="div_templates_animation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                                <button className="btn_templates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                    <div className="div_templates_Split-sc-__sc-3xe4fi-0_fJEAbV">
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_glYncc">
                                                                            <img className="img_templates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                        </div>
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                            <div className="div_templates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                                <div className="div_templates_Spacer-sc-__sc-1d4woe-0_kxMcMe">
                                                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_fjOXco">
                                                                                        Description For Tamplate
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        {/* it's a template selection */}
                                                        <div className="div_templates_Spacer-sc-__sc-1d4woe-0_vIhjp">
                                                            <div className="div_templates_animation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                                <button className="btn_templates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                    <div className="div_templates_Split-sc-__sc-3xe4fi-0_fJEAbV">
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_glYncc">
                                                                            <img className="img_templates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                        </div>
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                            <div className="div_templates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                                <div className="div_templates_Spacer-sc-__sc-1d4woe-0_kxMcMe">
                                                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_fjOXco">
                                                                                        Description For Tamplate
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        {/* it's a template selection */}
                                                        <div className="div_templates_Spacer-sc-__sc-1d4woe-0_vIhjp">
                                                            <div className="div_templates_animation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                                <button className="btn_templates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                    <div className="div_templates_Split-sc-__sc-3xe4fi-0_fJEAbV">
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_glYncc">
                                                                            <img className="img_templates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                        </div>
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                            <div className="div_templates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                                <div className="div_templates_Spacer-sc-__sc-1d4woe-0_kxMcMe">
                                                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_fjOXco">
                                                                                        Description For Tamplate
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        {/* it's a template selection */}
                                                        <div className="div_templates_Spacer-sc-__sc-1d4woe-0_vIhjp">
                                                            <div className="div_templates_animation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                                <button className="btn_templates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                    <div className="div_templates_Split-sc-__sc-3xe4fi-0_fJEAbV">
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_glYncc">
                                                                            <img className="img_templates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                        </div>
                                                                        <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                            <div className="div_templates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                                <div className="div_templates_Spacer-sc-__sc-1d4woe-0_kxMcMe">
                                                                                    <span className="span_templates_Text-sc-__sc-1h7ebrz-0_fjOXco">
                                                                                        Description For Tamplate
                                                                                    </span>
                                                                                </div>
                                                                            </div>
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
                            
                            <div className="div_tamplates_Container-sc-__sc-1aileh0-0_gallery-compact__CustomContainer-sc-1502sx2-2_eHbUdI">
                                
                                <div className="div_tamplates_Split-sc-__sc-3xe4fi-0_iCtogy">
                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_fcEIkx">
                                        <div className="div_tamplates_animation-wrap__AnimationWrap-sc-1vtol0v-0_choxtN">
                                            <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_eboKn">
                                                Template gallery
                                            </span>
                                            <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_jaWSJo">
                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_djRoaw">
                                                    Use templates to get to know designed forms, or just get inspired. There’s something for every job you need to get done.
                                                </span>
                                            </div>
                                        </div>
                                        <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_DdrMM">
                                            <button className="btn_tamplates_ButtonRoot-sc-__sc-1vu0deq-0_klxZek_gallery-compact__FiltersButton-sc-1502sx2-1_dbxFrT">
                                                <div className="div_tamplates_Distribute-sc-__sc-1s2i8aq-0_YOXft">
                                                    <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_djRoaw">
                                                        Filters
                                                    </span>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="div_templates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                        <div className="div_tamplates_template-list__Wrap-sc-1qbj7ci-0_bhMLMR">

                                            {/* it's all themes of tamplates's container */}
                                            <div className="div_tamplates_animation-wrap__AnimationWrap-sc-1vtol0v-0_template-list__FullWithWrap-sc-1qbj7ci-2_jHhsPr">
                                                
                                                {/* These are theme contoures  */}
                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0 template-list__TemplatesListHeader-sc-1qbj7ci-3_eGoEyo">
                                                    THEME1
                                                </span>
                                                <div className="div_tamplates_template-list__TemplatesListHeaderDivider-sc-1qbj7ci-4_cBuLBt">

                                                </div>
                                                <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_cpKzWy">

                                                </div>

                                                {/* this is tamplates Container for same theme */}
                                                <div className="div_tamplates_template-list__Templates-sc-1qbj7ci-1_hedXlD">
                                                    
                                                    {/* Theme1 tamplate01 */}
                                                    <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_kaFntP">
                                                        <div className="div_tamplatesanimation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                            <button className="btn_tamplates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                <div className="div_tamplates_Split-sc-__sc-3xe4fi-0_bGsMJh">
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_cTgFqr">
                                                                        <img className="img_tamplates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                    </div>
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                        <div className="div_tamplates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                            <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_fhoehq">
                                                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_kOhvLx">
                                                                                    Description For Tamplate
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_kaFntP">
                                                        <div className="div_tamplatesanimation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                            <button className="btn_tamplates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                <div className="div_tamplates_Split-sc-__sc-3xe4fi-0_bGsMJh">
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_cTgFqr">
                                                                        <img className="img_tamplates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                    </div>
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                        <div className="div_tamplates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                            <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_fhoehq">
                                                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_kOhvLx">
                                                                                    Description For Tamplate
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_kaFntP">
                                                        <div className="div_tamplatesanimation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                            <button className="btn_tamplates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                <div className="div_tamplates_Split-sc-__sc-3xe4fi-0_bGsMJh">
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_cTgFqr">
                                                                        <img className="img_tamplates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                    </div>
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                        <div className="div_tamplates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                            <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_fhoehq">
                                                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_kOhvLx">
                                                                                    Description For Tamplate
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_kaFntP">
                                                        <div className="div_tamplatesanimation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                            <button className="btn_tamplates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                <div className="div_tamplates_Split-sc-__sc-3xe4fi-0_bGsMJh">
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_cTgFqr">
                                                                        <img className="img_tamplates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                    </div>
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                        <div className="div_tamplates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                            <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_fhoehq">
                                                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_kOhvLx">
                                                                                    Description For Tamplate
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>

                                                </div>
                                                {/* it's tamplates Container for same theme */}

                                                {/* These are theme contoures  */}
                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0 template-list__TemplatesListHeader-sc-1qbj7ci-3_eGoEyo">
                                                    THEME2
                                                </span>
                                                <div className="div_tamplates_template-list__TemplatesListHeaderDivider-sc-1qbj7ci-4_cBuLBt">

                                                </div>
                                                <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_cpKzWy">

                                                </div>

                                                {/* this is tamplates Container for same theme */}
                                                <div className="div_tamplates_template-list__Templates-sc-1qbj7ci-1_hedXlD">
                                                    
                                                    {/* Theme1 tamplate01 */}
                                                    <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_kaFntP">
                                                        <div className="div_tamplatesanimation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                            <button className="btn_tamplates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                <div className="div_tamplates_Split-sc-__sc-3xe4fi-0_bGsMJh">
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_cTgFqr">
                                                                        <img className="img_tamplates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                    </div>
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                        <div className="div_tamplates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                            <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_fhoehq">
                                                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_kOhvLx">
                                                                                    Description For Tamplate
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_kaFntP">
                                                        <div className="div_tamplatesanimation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                            <button className="btn_tamplates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                <div className="div_tamplates_Split-sc-__sc-3xe4fi-0_bGsMJh">
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_cTgFqr">
                                                                        <img className="img_tamplates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                    </div>
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                        <div className="div_tamplates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                            <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_fhoehq">
                                                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_kOhvLx">
                                                                                    Description For Tamplate
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_kaFntP">
                                                        <div className="div_tamplatesanimation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                            <button className="btn_tamplates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                <div className="div_tamplates_Split-sc-__sc-3xe4fi-0_bGsMJh">
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_cTgFqr">
                                                                        <img className="img_tamplates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                    </div>
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                        <div className="div_tamplates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                            <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_fhoehq">
                                                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_kOhvLx">
                                                                                    Description For Tamplate
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_kaFntP">
                                                        <div className="div_tamplatesanimation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                            <button className="btn_tamplates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                <div className="div_tamplates_Split-sc-__sc-3xe4fi-0_bGsMJh">
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_cTgFqr">
                                                                        <img className="img_tamplates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                    </div>
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                        <div className="div_tamplates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                            <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_fhoehq">
                                                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_kOhvLx">
                                                                                    Description For Tamplate
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>

                                                </div>
                                                 {/* it's tamplates Container for same theme */}

                                                {/* These are theme contoures  */}
                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0 template-list__TemplatesListHeader-sc-1qbj7ci-3_eGoEyo">
                                                    THEME3
                                                </span>
                                                <div className="div_tamplates_template-list__TemplatesListHeaderDivider-sc-1qbj7ci-4_cBuLBt">

                                                </div>
                                                <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_cpKzWy">

                                                </div>

                                                {/* this is tamplates Container for same theme */}
                                                <div className="div_tamplates_template-list__Templates-sc-1qbj7ci-1_hedXlD">
                                                    
                                                    {/* Theme1 tamplate01 */}
                                                    <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_kaFntP">
                                                        <div className="div_tamplatesanimation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                            <button className="btn_tamplates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                <div className="div_tamplates_Split-sc-__sc-3xe4fi-0_bGsMJh">
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_cTgFqr">
                                                                        <img className="img_tamplates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                    </div>
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                        <div className="div_tamplates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                            <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_fhoehq">
                                                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_kOhvLx">
                                                                                    Description For Tamplate
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_kaFntP">
                                                        <div className="div_tamplatesanimation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                            <button className="btn_tamplates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                <div className="div_tamplates_Split-sc-__sc-3xe4fi-0_bGsMJh">
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_cTgFqr">
                                                                        <img className="img_tamplates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                    </div>
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                        <div className="div_tamplates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                            <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_fhoehq">
                                                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_kOhvLx">
                                                                                    Description For Tamplate
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_kaFntP">
                                                        <div className="div_tamplatesanimation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                            <button className="btn_tamplates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                <div className="div_tamplates_Split-sc-__sc-3xe4fi-0_bGsMJh">
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_cTgFqr">
                                                                        <img className="img_tamplates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                    </div>
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                        <div className="div_tamplates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                            <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_fhoehq">
                                                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_kOhvLx">
                                                                                    Description For Tamplate
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_kaFntP">
                                                        <div className="div_tamplatesanimation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                            <button className="btn_tamplates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                <div className="div_tamplates_Split-sc-__sc-3xe4fi-0_bGsMJh">
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_cTgFqr">
                                                                        <img className="img_tamplates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                    </div>
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                        <div className="div_tamplates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                            <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_fhoehq">
                                                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_kOhvLx">
                                                                                    Description For Tamplate
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>

                                                </div>

                                                {/* These are theme contoures  */}
                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0 template-list__TemplatesListHeader-sc-1qbj7ci-3_eGoEyo">
                                                    THEME4
                                                </span>
                                                <div className="div_tamplates_template-list__TemplatesListHeaderDivider-sc-1qbj7ci-4_cBuLBt">

                                                </div>
                                                <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_cpKzWy">

                                                </div>

                                                {/* this is tamplates Container for same theme */}
                                                <div className="div_tamplates_template-list__Templates-sc-1qbj7ci-1_hedXlD">
                                                    
                                                    {/* Theme1 tamplate01 */}
                                                    <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_kaFntP">
                                                        <div className="div_tamplatesanimation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                            <button className="btn_tamplates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                <div className="div_tamplates_Split-sc-__sc-3xe4fi-0_bGsMJh">
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_cTgFqr">
                                                                        <img className="img_tamplates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                    </div>
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                        <div className="div_tamplates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                            <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_fhoehq">
                                                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_kOhvLx">
                                                                                    Description For Tamplate
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_kaFntP">
                                                        <div className="div_tamplatesanimation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                            <button className="btn_tamplates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                <div className="div_tamplates_Split-sc-__sc-3xe4fi-0_bGsMJh">
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_cTgFqr">
                                                                        <img className="img_tamplates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                    </div>
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                        <div className="div_tamplates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                            <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_fhoehq">
                                                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_kOhvLx">
                                                                                    Description For Tamplate
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_kaFntP">
                                                        <div className="div_tamplatesanimation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                            <button className="btn_tamplates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                <div className="div_tamplates_Split-sc-__sc-3xe4fi-0_bGsMJh">
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_cTgFqr">
                                                                        <img className="img_tamplates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                    </div>
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                        <div className="div_tamplates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                            <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_fhoehq">
                                                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_kOhvLx">
                                                                                    Description For Tamplate
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_kaFntP">
                                                        <div className="div_tamplatesanimation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                            <button className="btn_tamplates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                <div className="div_tamplates_Split-sc-__sc-3xe4fi-0_bGsMJh">
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_cTgFqr">
                                                                        <img className="img_tamplates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                    </div>
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                        <div className="div_tamplates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                            <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_fhoehq">
                                                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_kOhvLx">
                                                                                    Description For Tamplate
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>

                                                </div>
                                                {/* it's tamplates Container for same theme */}

                                                {/* These are theme contoures  */}
                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0 template-list__TemplatesListHeader-sc-1qbj7ci-3_eGoEyo">
                                                    THEME5
                                                </span>
                                                <div className="div_tamplates_template-list__TemplatesListHeaderDivider-sc-1qbj7ci-4_cBuLBt">

                                                </div>
                                                <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_cpKzWy">

                                                </div>

                                                {/* this is tamplates Container for same theme */}
                                                <div className="div_tamplates_template-list__Templates-sc-1qbj7ci-1_hedXlD">
                                                    
                                                    {/* Theme1 tamplate01 */}
                                                    <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_kaFntP">
                                                        <div className="div_tamplatesanimation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                            <button className="btn_tamplates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                <div className="div_tamplates_Split-sc-__sc-3xe4fi-0_bGsMJh">
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_cTgFqr">
                                                                        <img className="img_tamplates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                    </div>
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                        <div className="div_tamplates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                            <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_fhoehq">
                                                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_kOhvLx">
                                                                                    Description For Tamplate
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_kaFntP">
                                                        <div className="div_tamplatesanimation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                            <button className="btn_tamplates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                <div className="div_tamplates_Split-sc-__sc-3xe4fi-0_bGsMJh">
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_cTgFqr">
                                                                        <img className="img_tamplates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                    </div>
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                        <div className="div_tamplates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                            <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_fhoehq">
                                                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_kOhvLx">
                                                                                    Description For Tamplate
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_kaFntP">
                                                        <div className="div_tamplatesanimation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                            <button className="btn_tamplates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                <div className="div_tamplates_Split-sc-__sc-3xe4fi-0_bGsMJh">
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_cTgFqr">
                                                                        <img className="img_tamplates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                    </div>
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                        <div className="div_tamplates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                            <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_fhoehq">
                                                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_kOhvLx">
                                                                                    Description For Tamplate
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_kaFntP">
                                                        <div className="div_tamplatesanimation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                            <button className="btn_tamplates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                <div className="div_tamplates_Split-sc-__sc-3xe4fi-0_bGsMJh">
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_cTgFqr">
                                                                        <img className="img_tamplates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                    </div>
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                        <div className="div_tamplates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                            <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_fhoehq">
                                                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_kOhvLx">
                                                                                    Description For Tamplate
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>

                                                </div>
                                                {/* it's tamplates Container for same theme */}

                                                {/* These are theme contoures  */}
                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0 template-list__TemplatesListHeader-sc-1qbj7ci-3_eGoEyo">
                                                    THEME6
                                                </span>
                                                <div className="div_tamplates_template-list__TemplatesListHeaderDivider-sc-1qbj7ci-4_cBuLBt">

                                                </div>
                                                <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_cpKzWy">

                                                </div>

                                                {/* this is tamplates Container for same theme */}
                                                <div className="div_tamplates_template-list__Templates-sc-1qbj7ci-1_hedXlD">
                                                    
                                                    {/* Theme1 tamplate01 */}
                                                    <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_kaFntP">
                                                        <div className="div_tamplatesanimation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                            <button className="btn_tamplates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                <div className="div_tamplates_Split-sc-__sc-3xe4fi-0_bGsMJh">
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_cTgFqr">
                                                                        <img className="img_tamplates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                    </div>
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                        <div className="div_tamplates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                            <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_fhoehq">
                                                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_kOhvLx">
                                                                                    Description For Tamplate
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_kaFntP">
                                                        <div className="div_tamplatesanimation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                            <button className="btn_tamplates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                <div className="div_tamplates_Split-sc-__sc-3xe4fi-0_bGsMJh">
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_cTgFqr">
                                                                        <img className="img_tamplates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                    </div>
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                        <div className="div_tamplates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                            <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_fhoehq">
                                                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_kOhvLx">
                                                                                    Description For Tamplate
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_kaFntP">
                                                        <div className="div_tamplatesanimation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                            <button className="btn_tamplates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                <div className="div_tamplates_Split-sc-__sc-3xe4fi-0_bGsMJh">
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_cTgFqr">
                                                                        <img className="img_tamplates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                    </div>
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                        <div className="div_tamplates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                            <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_fhoehq">
                                                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_kOhvLx">
                                                                                    Description For Tamplate
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_kaFntP">
                                                        <div className="div_tamplatesanimation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                            <button className="btn_tamplates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                <div className="div_tamplates_Split-sc-__sc-3xe4fi-0_bGsMJh">
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_cTgFqr">
                                                                        <img className="img_tamplates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                    </div>
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                        <div className="div_tamplates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                            <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_fhoehq">
                                                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_kOhvLx">
                                                                                    Description For Tamplate
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>

                                                </div>
                                                {/* it's tamplates Container for same theme */}
                                                 
                                                 {/* These are theme contoures  */}
                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0 template-list__TemplatesListHeader-sc-1qbj7ci-3_eGoEyo">
                                                    THEME7
                                                </span>
                                                <div className="div_tamplates_template-list__TemplatesListHeaderDivider-sc-1qbj7ci-4_cBuLBt">

                                                </div>
                                                <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_cpKzWy">

                                                </div>

                                                {/* this is tamplates Container for same theme */}
                                                <div className="div_tamplates_template-list__Templates-sc-1qbj7ci-1_hedXlD">
                                                    
                                                    {/* Theme1 tamplate01 */}
                                                    <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_kaFntP">
                                                        <div className="div_tamplatesanimation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                            <button className="btn_tamplates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                <div className="div_tamplates_Split-sc-__sc-3xe4fi-0_bGsMJh">
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_cTgFqr">
                                                                        <img className="img_tamplates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                    </div>
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                        <div className="div_tamplates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                            <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_fhoehq">
                                                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_kOhvLx">
                                                                                    Description For Tamplate
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_kaFntP">
                                                        <div className="div_tamplatesanimation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                            <button className="btn_tamplates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                <div className="div_tamplates_Split-sc-__sc-3xe4fi-0_bGsMJh">
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_cTgFqr">
                                                                        <img className="img_tamplates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                    </div>
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                        <div className="div_tamplates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                            <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_fhoehq">
                                                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_kOhvLx">
                                                                                    Description For Tamplate
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_kaFntP">
                                                        <div className="div_tamplatesanimation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                            <button className="btn_tamplates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                <div className="div_tamplates_Split-sc-__sc-3xe4fi-0_bGsMJh">
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_cTgFqr">
                                                                        <img className="img_tamplates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                    </div>
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                        <div className="div_tamplates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                            <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_fhoehq">
                                                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_kOhvLx">
                                                                                    Description For Tamplate
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_kaFntP">
                                                        <div className="div_tamplatesanimation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                            <button className="btn_tamplates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                <div className="div_tamplates_Split-sc-__sc-3xe4fi-0_bGsMJh">
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_cTgFqr">
                                                                        <img className="img_tamplates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                    </div>
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                        <div className="div_tamplates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                            <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_fhoehq">
                                                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_kOhvLx">
                                                                                    Description For Tamplate
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>

                                                </div>
                                                {/* it's tamplates Container for same theme */}

                                                {/* These are theme contoures  */}
                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0 template-list__TemplatesListHeader-sc-1qbj7ci-3_eGoEyo">
                                                    THEME8
                                                </span>
                                                <div className="div_tamplates_template-list__TemplatesListHeaderDivider-sc-1qbj7ci-4_cBuLBt">

                                                </div>
                                                <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_cpKzWy">

                                                </div>

                                                {/* this is tamplates Container for same theme */}
                                                <div className="div_tamplates_template-list__Templates-sc-1qbj7ci-1_hedXlD">
                                                    
                                                    {/* Theme1 tamplate01 */}
                                                    <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_kaFntP">
                                                        <div className="div_tamplatesanimation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                            <button className="btn_tamplates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                <div className="div_tamplates_Split-sc-__sc-3xe4fi-0_bGsMJh">
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_cTgFqr">
                                                                        <img className="img_tamplates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                    </div>
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                        <div className="div_tamplates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                            <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_fhoehq">
                                                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_kOhvLx">
                                                                                    Description For Tamplate
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_kaFntP">
                                                        <div className="div_tamplatesanimation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                            <button className="btn_tamplates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                <div className="div_tamplates_Split-sc-__sc-3xe4fi-0_bGsMJh">
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_cTgFqr">
                                                                        <img className="img_tamplates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                    </div>
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                        <div className="div_tamplates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                            <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_fhoehq">
                                                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_kOhvLx">
                                                                                    Description For Tamplate
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_kaFntP">
                                                        <div className="div_tamplatesanimation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                            <button className="btn_tamplates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                <div className="div_tamplates_Split-sc-__sc-3xe4fi-0_bGsMJh">
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_cTgFqr">
                                                                        <img className="img_tamplates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                    </div>
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                        <div className="div_tamplates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                            <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_fhoehq">
                                                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_kOhvLx">
                                                                                    Description For Tamplate
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_kaFntP">
                                                        <div className="div_tamplatesanimation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                            <button className="btn_tamplates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                <div className="div_tamplates_Split-sc-__sc-3xe4fi-0_bGsMJh">
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_cTgFqr">
                                                                        <img className="img_tamplates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                    </div>
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                        <div className="div_tamplates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                            <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_fhoehq">
                                                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_kOhvLx">
                                                                                    Description For Tamplate
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>

                                                </div>
                                                {/* it's tamplates Container for same theme */}

                                                {/* These are theme contoures  */}
                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0 template-list__TemplatesListHeader-sc-1qbj7ci-3_eGoEyo">
                                                    THEME9
                                                </span>
                                                <div className="div_tamplates_template-list__TemplatesListHeaderDivider-sc-1qbj7ci-4_cBuLBt">

                                                </div>
                                                <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_cpKzWy">

                                                </div>

                                                {/* this is tamplates Container for same theme */}
                                                <div className="div_tamplates_template-list__Templates-sc-1qbj7ci-1_hedXlD">
                                                    
                                                    {/* Theme1 tamplate01 */}
                                                    <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_kaFntP">
                                                        <div className="div_tamplatesanimation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                            <button className="btn_tamplates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                <div className="div_tamplates_Split-sc-__sc-3xe4fi-0_bGsMJh">
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_cTgFqr">
                                                                        <img className="img_tamplates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                    </div>
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                        <div className="div_tamplates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                            <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_fhoehq">
                                                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_kOhvLx">
                                                                                    Description For Tamplate
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_kaFntP">
                                                        <div className="div_tamplatesanimation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                            <button className="btn_tamplates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                <div className="div_tamplates_Split-sc-__sc-3xe4fi-0_bGsMJh">
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_cTgFqr">
                                                                        <img className="img_tamplates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                    </div>
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                        <div className="div_tamplates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                            <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_fhoehq">
                                                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_kOhvLx">
                                                                                    Description For Tamplate
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_kaFntP">
                                                        <div className="div_tamplatesanimation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                            <button className="btn_tamplates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                <div className="div_tamplates_Split-sc-__sc-3xe4fi-0_bGsMJh">
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_cTgFqr">
                                                                        <img className="img_tamplates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                    </div>
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                        <div className="div_tamplates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                            <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_fhoehq">
                                                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_kOhvLx">
                                                                                    Description For Tamplate
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_kaFntP">
                                                        <div className="div_tamplatesanimation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                            <button className="btn_tamplates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                <div className="div_tamplates_Split-sc-__sc-3xe4fi-0_bGsMJh">
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_cTgFqr">
                                                                        <img className="img_tamplates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                    </div>
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                        <div className="div_tamplates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                            <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_fhoehq">
                                                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_kOhvLx">
                                                                                    Description For Tamplate
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>

                                                </div>
                                                {/* it's tamplates Container for same theme */}

                                                {/* These are theme contoures  */}
                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0 template-list__TemplatesListHeader-sc-1qbj7ci-3_eGoEyo">
                                                    THEME10
                                                </span>
                                                <div className="div_tamplates_template-list__TemplatesListHeaderDivider-sc-1qbj7ci-4_cBuLBt">

                                                </div>
                                                <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_cpKzWy">

                                                </div>

                                                {/* this is tamplates Container for same theme */}
                                                <div className="div_tamplates_template-list__Templates-sc-1qbj7ci-1_hedXlD">
                                                    
                                                    {/* Theme1 tamplate01 */}
                                                    <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_kaFntP">
                                                        <div className="div_tamplatesanimation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                            <button className="btn_tamplates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                <div className="div_tamplates_Split-sc-__sc-3xe4fi-0_bGsMJh">
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_cTgFqr">
                                                                        <img className="img_tamplates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                    </div>
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                        <div className="div_tamplates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                            <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_fhoehq">
                                                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_kOhvLx">
                                                                                   Description For Tamplate
 tamplate
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_kaFntP">
                                                        <div className="div_tamplatesanimation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                            <button className="btn_tamplates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                <div className="div_tamplates_Split-sc-__sc-3xe4fi-0_bGsMJh">
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_cTgFqr">
                                                                        <img className="img_tamplates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                    </div>
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                        <div className="div_tamplates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                            <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_fhoehq">
                                                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_kOhvLx">
                                                                                   Description For Tamplate
 tamplate
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_kaFntP">
                                                        <div className="div_tamplatesanimation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                            <button className="btn_tamplates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                <div className="div_tamplates_Split-sc-__sc-3xe4fi-0_bGsMJh">
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_cTgFqr">
                                                                        <img className="img_tamplates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                    </div>
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                        <div className="div_tamplates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                            <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_fhoehq">
                                                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_kOhvLx">
                                                                                   Description For Tamplate
 tamplate
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_kaFntP">
                                                        <div className="div_tamplatesanimation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                            <button className="btn_tamplates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                <div className="div_tamplates_Split-sc-__sc-3xe4fi-0_bGsMJh">
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_cTgFqr">
                                                                        <img className="img_tamplates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                    </div>
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                        <div className="div_tamplates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                            <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_fhoehq">
                                                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_kOhvLx">
                                                                                   Description For Tamplate
 tamplate
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>

                                                </div>
                                                {/* it's tamplates Container for same theme */}

                                                {/* These are theme contoures  */}
                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0 template-list__TemplatesListHeader-sc-1qbj7ci-3_eGoEyo">
                                                    THEME11
                                                </span>
                                                <div className="div_tamplates_template-list__TemplatesListHeaderDivider-sc-1qbj7ci-4_cBuLBt">

                                                </div>
                                                <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_cpKzWy">

                                                </div>

                                                {/* this is tamplates Container for same theme */}
                                                <div className="div_tamplates_template-list__Templates-sc-1qbj7ci-1_hedXlD">
                                                    
                                                    {/* Theme1 tamplate01 */}
                                                    <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_kaFntP">
                                                        <div className="div_tamplatesanimation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                            <button className="btn_tamplates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                <div className="div_tamplates_Split-sc-__sc-3xe4fi-0_bGsMJh">
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_cTgFqr">
                                                                        <img className="img_tamplates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                    </div>
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                        <div className="div_tamplates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                            <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_fhoehq">
                                                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_kOhvLx">
                                                                                   Description For Tamplate
 tamplate
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_kaFntP">
                                                        <div className="div_tamplatesanimation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                            <button className="btn_tamplates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                <div className="div_tamplates_Split-sc-__sc-3xe4fi-0_bGsMJh">
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_cTgFqr">
                                                                        <img className="img_tamplates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                    </div>
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                        <div className="div_tamplates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                            <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_fhoehq">
                                                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_kOhvLx">
                                                                                    Description For Tamplate
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_kaFntP">
                                                        <div className="div_tamplatesanimation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                            <button className="btn_tamplates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                <div className="div_tamplates_Split-sc-__sc-3xe4fi-0_bGsMJh">
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_cTgFqr">
                                                                        <img className="img_tamplates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                    </div>
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                        <div className="div_tamplates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                            <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_fhoehq">
                                                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_kOhvLx">
                                                                                    Description For Tamplate
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_kaFntP">
                                                        <div className="div_tamplatesanimation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                            <button className="btn_tamplates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                <div className="div_tamplates_Split-sc-__sc-3xe4fi-0_bGsMJh">
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_cTgFqr">
                                                                        <img className="img_tamplates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                    </div>
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                        <div className="div_tamplates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                            <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_fhoehq">
                                                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_kOhvLx">
                                                                                    Description For Tamplate
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>

                                                </div>
                                                {/* it's tamplates Container for same theme */}

                                                {/* These are theme contoures  */}
                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0 template-list__TemplatesListHeader-sc-1qbj7ci-3_eGoEyo">
                                                    THEME12
                                                </span>
                                                <div className="div_tamplates_template-list__TemplatesListHeaderDivider-sc-1qbj7ci-4_cBuLBt">

                                                </div>
                                                <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_cpKzWy">

                                                </div>

                                                {/* this is tamplates Container for same theme */}
                                                <div className="div_tamplates_template-list__Templates-sc-1qbj7ci-1_hedXlD">
                                                    
                                                    {/* Theme1 tamplate01 */}
                                                    <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_kaFntP">
                                                        <div className="div_tamplatesanimation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                            <button className="btn_tamplates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                <div className="div_tamplates_Split-sc-__sc-3xe4fi-0_bGsMJh">
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_cTgFqr">
                                                                        <img className="img_tamplates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                    </div>
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                        <div className="div_tamplates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                            <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_fhoehq">
                                                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_kOhvLx">
                                                                                    Description For Tamplate
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_kaFntP">
                                                        <div className="div_tamplatesanimation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                            <button className="btn_tamplates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                <div className="div_tamplates_Split-sc-__sc-3xe4fi-0_bGsMJh">
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_cTgFqr">
                                                                        <img className="img_tamplates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                    </div>
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                        <div className="div_tamplates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                            <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_fhoehq">
                                                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_kOhvLx">
                                                                                    Description For Tamplate
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_kaFntP">
                                                        <div className="div_tamplatesanimation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                            <button className="btn_tamplates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                <div className="div_tamplates_Split-sc-__sc-3xe4fi-0_bGsMJh">
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_cTgFqr">
                                                                        <img className="img_tamplates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                    </div>
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                        <div className="div_tamplates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                            <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_fhoehq">
                                                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_kOhvLx">
                                                                                    Description For Tamplate
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_kaFntP">
                                                        <div className="div_tamplatesanimation-wrap__AnimationWrap-sc-1vtol0v-0_template-thumbnail__Wrap-sc-1snl4le-0_iAHIwK">
                                                            <button className="btn_tamplates_template-thumbnail__WrappedButton-sc-1snl4le-1_kzaZYi">
                                                                <div className="div_tamplates_Split-sc-__sc-3xe4fi-0_bGsMJh">
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_cTgFqr">
                                                                        <img className="img_tamplates_template-thumbnail__ThumbnailImg-sc-1snl4le-2_qKCDL"></img>
                                                                    </div>
                                                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_gkXDOi">
                                                                        <div className="div_tamplates_Align-sc-__sc-4yw49j-0_fAJgpU">
                                                                            <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_fhoehq">
                                                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_kOhvLx">
                                                                                    Description For Tamplate
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>

                                                </div>
                                                {/* it's tamplates Container for same theme */}

                                            {/* it's all themes of tamplates's Container */}
                                            </div>
                                        </div>
                                    </div>

                                    {/* It's a scratch button */}
                                    <div className="div_tamplates_SplitItem-sc-__sc-3xe4fi-1_bTJYBJ">
                                        <div className="div_tamplates_Spacer-sc-__sc-1d4woe-0_jaWSJo">
                                            <div className="div_tamplates_Align-sc-__sc-4yw49j-0_iAnQnN">
                                                <div className="div_tamplates_animation-wrap__AnimationWrap-sc-1vtol0v-0_ctas__ButtonWrap-sc-1q6l9zt-0_cHkdYk">
                                                    <Link to = "/form">
                                                        <button className="btn_tamplates_ButtonRoot-sc-__sc-1vu0deq-0_YKMJw">
                                                            <div className="div_tamplates_Distribute-sc-__sc-1s2i8aq-0_YOXft">
                                                                <span className="span_tamplates_Text-sc-__sc-1h7ebrz-0_djRoaw">
                                                                    Start from scratch
                                                                </span>
                                                            </div>
                                                        </button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            {/* these is closing button to go back workspace */}
                            <button className="btn_IconButtonRoot-sc-__nzc5pg-0_qBDNa_CloseButton-sc-__sc-1jpfdxp-1_cWLmwD">
                                <div className="div_Align-sc-__sc-4yw49j-0_IconRoot-sc-__sc-1eorqw0-0_kKgMaN">
                                    <CloseOutlined />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div>
                <div></div>
            </div>

            <div className="div_tamplates_NotificationRoot-sc-__sc-1eupdtg-0_hmMpzb">
                <div></div>
            </div>

            <br/>
            
        </div>
    )
}

export default withRouter(TemplateGalleryPage);
