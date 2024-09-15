import { Spin } from 'antd'

const Loader = () => {
  return (
    <div className='loader'>
       {/* <Spin tip='Loading...' /> */}
       <Spin />
    </div>
  )
}

export default Loader;