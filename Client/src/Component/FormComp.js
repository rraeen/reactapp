import { Button, Upload } from 'antd'
import { UploadOutlined } from '@ant-design/icons';
import React from 'react'

function FormComp() {
  return (
    <>


<Upload>
    <Button icon={<UploadOutlined />}>Docket</Button>
  </Upload>
    
    
    </>
  )
}

export default FormComp
