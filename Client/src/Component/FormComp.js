import { Button, Upload } from 'antd'
import { UploadOutlined } from '@ant-design/icons';
import React from 'react'

function FormComp() {
  return (
    <>


<Upload>
    <Button icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload>
    
    
    </>
  )
}

export default FormComp
