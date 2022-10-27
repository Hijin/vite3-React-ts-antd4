import HomeCompModule from './components'
import './index.less'
const { InGroupStatistical, OutGroup, Entry, Visit } = HomeCompModule
const Home = () => {
  return <div className='home'>
    <InGroupStatistical />
    <OutGroup />
    <Entry />
    <Visit />
  </div>;
};

export default Home;
