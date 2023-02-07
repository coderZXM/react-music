import React, {memo, useState} from 'react';
import {NavUl} from './styled';
/**导航组件 */

interface Props {
  data: Array<any>; //用户传入数据
  Leftsolt?: Function; //左侧插槽
  Rightsolt?: Function; //右侧插槽
}

const ZkNavigation = memo((props: Props) => {
  /**存储用户点击index */
  const {Leftsolt, Rightsolt, data} = props;
  const [Index, setIndex] = useState<number>(0);
  const changeIndex = (index: number) => {
    return () => {
      setIndex(index);
    };
  };

  return (
    <>
      <NavUl>
        {Leftsolt && Leftsolt()}
        {data.map((item, index) => {
          return (
            <li
              key={index}
              onClick={changeIndex(index)}
              className={Index === index ? 'active' : ''}>
              {item}
            </li>
          );
        })}
        {Rightsolt && Rightsolt()}
      </NavUl>
    </>
  );
});

export default ZkNavigation;
