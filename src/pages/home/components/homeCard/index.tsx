import './index.less'
const HomeCard = ({ title, titleRight, children }: any) => {
  return <div className="home-card br-10 bg-w">
    <div className="flex-h-c flex-b">
      <span className='home-card__title ft-16 ft-b flex-h-c'>{title}</span>
      <div>{titleRight}</div>
    </div>
    {children}
  </div>
}
export default HomeCard