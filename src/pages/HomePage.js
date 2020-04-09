import React, { Component } from 'react'
import Layout from './Layout'

class HomePage extends Component {
  render() {
    return (
      <Layout showTopBar={false} showBottomBar={true} title='首页'>
        {/* <div>HomePage</div> */}

        {/* 插槽式写法 */}
        {{
          content: <div>HomePage</div>,
          txt: '这是个文本',
          btnClick: () => {
            console.log('btnClick')
          },
        }}
      </Layout>
    )
  }
}

export default HomePage
