import { CodeOutlined } from '@ant-design/icons'
import { Space } from 'antd'
import Text from 'antd/lib/typography/Text'
import React from 'react'
import '../styles.css'

function Logo() {
    return (
            <div className="div_logoContainer">
                <div style={{width: '350px', minWidth: '280px'}}></div>
                <div className="div_logo" >
                    <Space direction="vertical" align="center">,
                        <CodeOutlined style={{fontSize:'5rem'}}/>
                        <Text code style={{fontSize:'2rem'}}>Please Add Files</Text>
                    </Space>
                </div>
                <div style={{width: '350px', minWidth: '280px'}}></div>
            </div>
    )
}

export default Logo