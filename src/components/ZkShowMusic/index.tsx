import React, {memo, useEffect} from 'react';
import {apiNewestSong} from '../../services/home';
import {useDispatch, useSelector} from 'react-redux';
import {getoriginalMusic} from '../../store/reducer/homeSlice';
import {ShowMusicDiv} from './style';
import {getTime} from '../../utils/format-utils'

const ZkShowMusic = memo(() => {
  /**导入派发方法 */
  const dispatch: any = useDispatch();
  /**使用reudex */
  const Music = useSelector((state: any) => state.home.originalMusic)[0];
  console.log(Music);

  useEffect(() => {
    // apiNewestSong(2884035).then(res=>{
    //     console.log(res)
    // })
    dispatch(getoriginalMusic());
  }, []);

  return (
    <>
      {Music && (
        <ShowMusicDiv>
          <div className="left">
            <img src={Music.al.picUrl} />
            <img className='play' src={require('./play.png')}/>
          </div>
          <div className="right">
            <span className='nickname'>{Music.al.name}</span><br/>
            <span className='author'>{Music.ar[0].name ?? '孤独的大喵'}</span>
          </div>
          <div className='time'>{getTime(Music.dt)}</div>
        </ShowMusicDiv>
      )}
    </>
  );
});

export default ZkShowMusic;
