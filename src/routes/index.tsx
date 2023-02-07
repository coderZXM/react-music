import {Navigate} from 'react-router-dom';
import {lazy} from 'react';
const Home = lazy(() => import('../Pages/Main/Home'));
const Singer = lazy(() => import('../Pages/Main/Singer'));
const Newdisc = lazy(() => import('../Pages/Main/Newdisc'));
const RankingList = lazy(() => import('../Pages/Main/RankingList'));
const DigitalAlbum = lazy(() => import('../Pages/Main/DigitalAlbum'));
const BroadcastingStation = lazy(
  () => import('../Pages/Main/BroadcastingStation'),
);
const MV = lazy(() => import('../Pages/Main/MV'));
const ClassifiedPlaylist = lazy(
  () => import('../Pages/Main/ClassifiedPlaylist'),
);

const router = [
  {
    path: '/',
    element: <Navigate to="/home" />,
  },
  {
    name: '首页',
    path: '/home',
    element: <Home />,
  },
  {
    name: '歌手',
    path: '/singer ',
    element: <Singer />,
  },
  {
    name: '新碟',
    path: '/newdisc',
    element: <Newdisc />,
  },
  {
    name: '排行榜',
    path: '/rankinglist',
    element: <RankingList />,
  },
  {
    name: '数字专辑',
    path: '/digitalalbum',
    element: <DigitalAlbum />,
  },
  {
    name: '电台',
    path: '/broadcastingstation',
    element: <BroadcastingStation />,
  },
  {
    name: 'MV',
    path: '/mv',
    element: <MV />,
  },
  {
    name: '分类歌单',
    path: '/classifiedplaylist',
    element: <ClassifiedPlaylist />,
  },
];

export default router
