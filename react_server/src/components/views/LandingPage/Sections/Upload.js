import { MessageFilled, PictureFilled, SmileOutlined, VideoCameraFilled } from '@ant-design/icons'
import Avatar from 'antd/lib/avatar/avatar'
import Form from 'antd/lib/form/Form'
import React, { useEffect, useState } from 'react'
import {useSelector, useDispatch, ReactReduxContext} from 'react-redux'
import { Route, withRouter } from "react-router-dom";
import Axios from 'axios';
import { Select } from 'antd'
import { Option } from 'antd/lib/mentions'
import Dropzone from 'react-dropzone'
import {expressServerIP, expressServerAddress, expressServerPort} from '../../../../Config'

// const { Option } = Select;

// const PrivateOptions = [
//     {value: 0, label: "Private"},
//     {value: 1,  label: "Public"}
// ]

// const CategoryOptions = [
//     {value: "Film & Animation", label: "Film & Animation"},
//     {value: "Auto & Vehicles", label: "Auto & Vehicles"},
//     {value: "Music", label: "Music"},
//     {value: "Pets & Animals", label: "Pets & Animals"},
// ]

function Upload(props) {

    const [ModalOpen, setModalOpen] = useState(false)
    const ismodalOpen = ModalOpen;

    var user = { userData :{
        isAuth: false
        },
    };

    let state = useSelector(state => state)
    
    if(state.user.userData){
        user = state.user;
    } 
    
    // useEffect(() => {
    //     setTimeout(()=>{
    //         alert("파일이 업로드 되었습니다.")
    //     }, 10000);
    // }, [ResizedFilePath, Thumbnail]);

    const uploadOnClickHandler = (event) => {

        setModalOpen(true);
        console.log("text박스가 클릭되었습니다. 모달상태는, "+ModalOpen);
    }

    const overlayOnClickHandler = () =>{
        setModalOpen(false);
    }

    const testHander= () => {
        setTimeout(()=>{
            props.history.push("/")
        }, 3000);
    }

    ////////////////////////using Dropzone//////////////////////////

    const PrivateOptions = [
        {value: "나만보기", label: "나만보기"},
        {value: "친구만",  label: "친구만"},
        {value: "전체보기",  label: "전체보기"}
    ]

    const [Title, setTitle] = useState("")
    const [Description, setDescription] = useState("")
    const [Private, setPrivate] = useState(0)
    const [Category, setCategory] = useState("Film & Animation")
    const [FilePath, setFilePath] = useState("")
    const [ResizedFilePath, setResizedFilePath] = useState("")
    const [Duration, setDuration] = useState("")
    const [Thumbnail, setThumbnail] = useState("")

    const onTitleChange = (e) => {
        setTitle(e.currentTarget.value);
    }

    const onDescriptionChange = (e) => {
        setDescription(e.currentTarget.value);
    }

    const onPrivateChange = (e) => {
        console.log(e)
        setPrivate(e);
    }

    const onCategoryChange = (e) => {
        console.log(e)
        setCategory(e);
    }

    const onSubmit = (event) => {
            event.preventDefault();

            const variables = {
                writer: user.userData._id,
                post_title: Title,
                post_content: Description,
                privacy: Private,
                category: Category,
                filePath: FilePath,
                duration: Duration,
                thumbnail: Thumbnail,
                resizedFilePath: ResizedFilePath 
            }

            Axios.post('/api/formDatas/fileUpload', variables)
                .then(response => {
                    if(response.data.success){
                        // window.message.success("The file uploaded successfully..")
                        alert('게시물을 성공적으로 업로드했습니다.')                       
                    }else{
                        alert('게시물 업로드에 실패했습니다.')
                    }
                    setModalOpen(false);
                })
    }

    const onDrop = (files) => {

        setFilePath("");
        setThumbnail("");
        setResizedFilePath("");

        let formData = new FormData();
        const config = {
            header: { 'content-type': 'multipart/form-data' }
        }
        console.log("onDrop fromData")
        console.log(files)
        formData.append("file", files[0])

        Axios.post('/api/formDatas/uploadfiles', formData, config)
            .then(response => {
                if(response.data.success){

                    let variable = {
                        filePath: response.data.filePath,
                        fileName: response.data.fileName
                    }
                    setFilePath(response.data.filePath)
                    
                    var ext = response.data.fileName;
                   if((ext.match(/.mp4/))&&(ext.endsWith('.mp4'))){
                    console.log("썸네일을 생성합니다. 동영상 파일입니다.")
                    
                    Axios.post('/api/formDatas/thumbnails', variable)
                        .then(response => {
                            if(response.data.success){
                                setDuration(response.data.fileDuration)
                                setThumbnail(response.data.thumbsFilePath)
                                console.log(`http://${expressServerAddress}:${expressServerPort}/${Thumbnail}`);
                            } else {
                                alert('썸네일 생성에 실패하였습니다. ')
                            }
                        })
                    }else if(ext.endsWith('.png')||ext.endsWith('.PNG')||ext.endsWith('.jpg')||ext.endsWith('.jpeg')){
                        console.log("썸네일을 생성하지 않습니다. 리사이징을 요청합니다. 이미지 파일입니다.")
                        Axios.post('/api/formDatas/resizing', variable)
                            .then(response => {
                                if(response.data.success){
                                    console.log("The file resized..")
                                    setResizedFilePath(`uploads\\resized-${ext}`.replace("\\", "/"))
                                    console.log(`resized file path : ${ResizedFilePath}`)
                                 } else{
                                alert('resizing failed')
                                }
                            })
                            
                    }else{
                        console.log("썸네일을 생성하지 않습니다. 리사이징을 요청하지 않습니다. 지원하지 않는 파일 유형입니다.")
                    }

                }else{
                    alert('업로드에 실패했습니다.')
                }
            })

    }




    return (
        <div className="div_uploadContainer">

            {ModalOpen === true && 
            <div className="div_Modal">
                <div className="div_Modal_">

                    <div className="div_ModalContainer">
                        <div className="div_ModalOverlay" onClick={()=>{overlayOnClickHandler()}}>

                        </div>
                    </div>

                    <div className="div_ModalContents">
                        <div className="div_ModalContents_">
                            <div className="div_ModalContents_title">
                                <span>게시물 만들기</span>
                                <div className="div_ModalContents_title_close">
                    
                                </div>
                            </div>

                            <form onSubmit={onSubmit}>
                                <div className="div_ModalContents_body">
                                    <div className="div_ModalContents_body_header">
                                        <Avatar style={{margin: '4px', cursor:'pointer', width: '40px', height:'40px'}} src={"http://scontent-nrt1-1.xx.fbcdn.net/v/t1.30497-1/cp0/c12.0.40.40a/p40x40/84688533_170842440872810_7559275468982059008_n.jpg?_nc_cat=1&ccb=3&_nc_sid=7206a8&_nc_ohc=ucBZ3Qt1MvkAX_Bzo9K&_nc_ht=scontent-nrt1-1.xx&tp=27&oh=0c1968e06cbf7cd964e7d3784f83085f&oe=6064714E"}/>
                                            <div className="div_ModalContents_body_header_">
                                                <span>{user.userData.user_name}</span>
                                                <select defaultValue="나만보기" >
                                                    {PrivateOptions.map((item, index) => (
                                                        <option key={index} value={`${item.value}`}>{item.label}</option>
                                                    ))}
                                                </select>
                                            </div>
                                    </div>

                                    <div className="div_ModalContents_body_text">   
                                        {user && 
                                            <textarea  
                                            placeholder= {`${user.userData.user_name} 님 무슨 생각을 하고 계신가요?`}
                                            onChange={onDescriptionChange}
                                            value={Description}
                                            >
                                            </textarea>    
                                        }
                                        <div className="div_ModalContents_body_displayFiles">
                                                {Thumbnail  !== "" && 
                                                    <div className="div_Thumbnail" style={{borderRadius: '6px', border:'2px solid #f0f2f5', display: 'flex', width: '100%', height:"100%", alignItems: 'center', justifyContent: 'center'}}>
                                                        <img src={`https://www.ftclone.com/${Thumbnail}`} alt="displayThumbnails"/>                   
                                                    </div>
                                                }
                                                {ResizedFilePath !== "" && 
                                                    <div  className="div_ResizedImage" style={{borderRadius: '6px', border:'2px solid #f0f2f5', display: 'flex', width: '100%', height:"100%", alignItems: 'center', justifyContent: 'center'}}>
                                                        <img  src={`https://www.ftclone.com/${ResizedFilePath}`} alt="displayImage"/>
                                                    </div> 
                                                }
                                        </div>
                                        <div className="div_ModalContents_body_files" >
                                            <Dropzone 
                                                style={{position: 'static', height: '20px', minWidth: '100px' }}
                                                onDrop={onDrop}
                                                multiple={true}
                                                maxSize={800000000}>
                                                {({ getRootProps, getInputProps }) => (
                                                    <div className="div_mainContainer_dropzone_content__" 
                                                        {...getRootProps()}
                                                    >
                                                        <input {...getInputProps()} />
                                                        <span style={{marginRight: '8px', fontFamily: 'inherit', lineHeight: '1.0667', cursor: 'pointer', WebkitFontFmoothing: 'antialiased'}}>
                                                            <VideoCameraFilled style={{width:'24px', height:'24px', fontSize:'24px', color:'#f02849' }} />
                                                        </span>
                                                        <span style={{marginRight: '8px'}}>
                                                            <PictureFilled style={{paddingRight: '8px', width:'24px', height:'24px', fontSize:'24px', color:'#45bd62'}}/>
                                                        </span>
                                                        <span style={{marginRight: '8px'}}>
                                                            <SmileOutlined style={{width:'24px', height:'24px', fontSize:'24px', color:'#f7b928'}}/>
                                                        </span>
                                                    </div>
                                                )}
                                            </Dropzone>
                                        </div>
                                        <button type="submit" onClick={onSubmit}
                                                        style={{
                                                            color: '#ffffff',
                                                            borderRadius: '6px',
                                                            fontFamily: 'Segoe UI Historic, Segoe UI, Arial, Helvetica, sans-serif;',
                                                            fontSize: '0.925rem',
                                                            fontWeight: '560',
                                                            lineHeight: '1.0667', 
                                                            cursor: 'pointer', 
                                                            WebkitFontFmoothing: 'antialiased',
                                                            borderColor: '#1877f2',
                                                            background: '#1877f2',
                                                            height: 'auto',
                                                            marginTop: '40px',
                                                            marginBottom: '0px'
                                                        }}>
                                            게시
                                        </button>
                                    </div>

                                </div>
                            </form>

                        </div>
                    </div>

                </div>
            </div>
            }
            
            <div className="div_uploadUnit">
                <div className="div_uploadUnit_">
                    <div className="div_uploadUnit_inputs">
                        <div className="div_uploadUnit_inputs_">
                            <div className="div_uploadUnit_inputs_Avatar">
                                <Avatar style={{cursor:'pointer', width: '40px', height:'40px'}} src={"http://scontent-nrt1-1.xx.fbcdn.net/v/t1.30497-1/cp0/c12.0.40.40a/p40x40/84688533_170842440872810_7559275468982059008_n.jpg?_nc_cat=1&ccb=3&_nc_sid=7206a8&_nc_ohc=ucBZ3Qt1MvkAX_Bzo9K&_nc_ht=scontent-nrt1-1.xx&tp=27&oh=0c1968e06cbf7cd964e7d3784f83085f&oe=6064714E"}>
                                    <a href="#" role="link"></a>    
                                </Avatar>
                                </div>
                                <div className="div_uploadUnit_inputs_text">
                                    <span onClick={()=>{uploadOnClickHandler()}}>
                                        {user.userData.isAuth?
                                           `${user.userData.user_name}님 무슨 생각을 하고 계신가요?`: "로그인이 필요합니다." 
                                        }
                                    </span>
                                </div>
                            </div>
                    </div>
                    <div className="div_uploadUnit_files">
                        <div className="div_uploadUnit_files_liveBroadcast">
                            <div className="div_uploadUnit_files_liveBroadcast_">
                                <span style={{marginRight: '8px', fontFamily: 'inherit', lineHeight: '1.0667', cursor: 'pointer', WebkitFontFmoothing: 'antialiased'}}>
                                    <VideoCameraFilled style={{width:'24px', height:'24px', fontSize:'24px', color:'#f02849' }} />
                                </span>
                                <span onClick={()=>{testHander()}} style={{fontFamily:'Segoe UI Historic, Segoe UI, Arial, Helvetica, sans-serif', wordBreak:'break-word',  color:'#65676B', fontWeight:'600', fontSize:'0.9375rem', lineHeight:'1.3333', cursor:'pointer'}}>
                                     라이브 방송
                                </span>
                            </div>
                        </div>
                        <div className="div_uploadUnit_files_photosNvideos">
                            <div className="div_uploadUnit_files_photosNvideos_">
                                <span style={{marginRight: '8px'}}>
                                    <PictureFilled style={{width:'24px', height:'24px', fontSize:'24px', color:'#45bd62'}}/>
                                </span>
                                <span onClick={()=>{uploadOnClickHandler()}} style={{fontFamily:'Segoe UI Historic, Segoe UI, Arial, Helvetica, sans-serif', wordBreak:'break-word',  color:'#65676B', fontWeight:'600', fontSize:'0.9375rem', lineHeight:'1.3333', cursor:'pointer'}}>
                                    사진/동영상
                                </span>
                            </div>
                        </div>
                        <div className="div_uploadUnit_files_broadcast_feelingsNactivities">
                            <div className="div_uploadUnit_files_broadcast_feelingsNactivities_">
                                <span style={{marginRight: '8px'}}>
                                    <SmileOutlined style={{width:'24px', height:'24px', fontSize:'24px', color:'#f7b928'}}/>
                                </span>
                                <span onClick={()=>{uploadOnClickHandler()}} style={{fontFamily:'Segoe UI Historic, Segoe UI, Arial, Helvetica, sans-serif', wordBreak:'break-word',  color:'#65676B', fontWeight:'600', fontSize:'0.9375rem', lineHeight:'1.3333', cursor:'pointer'}}>
                                    기분/활동
                                </span>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Upload)
