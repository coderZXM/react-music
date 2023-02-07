import {Input, Tree} from 'antd';
import type {DataNode} from 'antd/es/tree';
import React, {Children, useMemo, useState} from 'react';

const {Search} = Input;

const ZKThree: React.FC = () => {
  const onExpand = (newExpandedKeys: React.Key[]) => {
    console.log(newExpandedKeys, 'newExpandedKeys');
    setExpandedKeys(newExpandedKeys);
    setAutoExpandParent(false);
  };
  /**点击节点触发 */
  const onSelect = (value: any, e: any) => {
    console.log(value, 'value', e);
  };

  const treeData = [
    {
      key: 'adult',
      title: '成年人',
      children: [
        {
          key: 'man',
          title: '男人',
          children: [
            {
              key: 'father',
              title: '父亲',
            },
          ],
        },
        {
          key: 'woman',
          title: '女人',
          children: [
            {
              key: 'mother',
              title: '母亲',
            },
          ],
        },
      ],
    },
  ];
  /**菜单扁平化 */
  let ArrayList: Array<any> = []
  const changeTree = (data: any) => {
    for (let i = 0; i < data.length; i++) {
      const node = data[i];
    // console.log(Object.values(node))
     if(Object.values(node)){
       ArrayList.push({key: Object.values(node)[0], title: Object.values(node)[1],Children:Object.values(node)[2]})
     }
    }
  };

  const sitedata = [
    {
      key: 246,
      title: '项目F',
      children: [
        {
          key: 55,
          title: '静海区政府东配楼变电',
          projectId: null,
          children: [
            {
              key: 984,
              title: '东配楼1#变压器',
              siteId: null,
            },
            {
              key: 985,
              title: '东配楼2#变压器',
              siteId: null,
            },
          ],
        },
      ],
    },
  ];
  console.log(ArrayList);
  changeTree(sitedata);

  /**菜单扁平化 */
  //   const defaultData: DataNode[] = [];

  // const generateData = (_level: number, _preKey?: React.Key, _tns?: DataNode[]) => {
  //   const preKey = _preKey || '0';
  //   const tns = _tns || defaultData;

  //   const children = [];
  //   for (let i = 0; i < x; i++) {
  //     const key = `${preKey}-${i}`;
  //     tns.push({ title: key, key });
  //     if (i < y) {
  //       children.push(key);
  //     }
  //   }
  //   if (_level < 0) {
  //     return tns;
  //   }
  //   const level = _level - 1;
  //   children.forEach((key, index) => {
  //     tns[index].children = [];
  //     return generateData(level, key, tns[index].children);
  //   });
  // };
  // generateData(z);
  /**存储扁平化数据 */
  const dataList: Array<any> = [];
  /**展开指定树节点 */
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([]);
  /**获取用户输入的值 */
  const [searchValue, setSearchValue] = useState('');
  /**树状图是否打开 */
  const [autoExpandParent, setAutoExpandParent] = useState(true);
  //菜单扁平化
  const genereateList = (data: any) => {
    for (let i = 0; i < data.length; i++) {
      /**处理系统 */
      const node = data[i];
      const {projectId, projectName} = node;
      dataList.push({key: projectId, title: projectName});
      if (node.siteResList) {
        /**处理站点 */
        for (let i = 0; i < node.siteResList.length; i++) {
          const snode = node.siteResList[i];
          const {siteId, siteName} = snode;
          dataList.push({key: siteId, title: siteName});
          if (snode.deviceResList) {
            /**处理变压器 */
            for (let i = 0; i < snode.deviceResList.length; i++) {
              const pnode = snode.deviceResList[i];
              const {deviceId, deviceName} = pnode;
              dataList.push({key: deviceId, title: deviceName});
            }
          }
        }
      }
    }
  };

  genereateList(sitedata);
  /**获取key */
  const getParentKey: any = (key: string, tree: any) => {
    /**定义父亲key */
    let parentKey;
    for (let i = 0; i < tree.length; i++) {
      const node = tree[i];
      if (node.siteResList) {
        for (let i = 0; i < node.siteResList.length; i++) {
          const snode = node.siteResList[i];
          if (node.siteResList.some((item: any) => item.siteId === key)) {
            parentKey = snode.siteId;
          } else if (getParentKey(key, node.siteResList)) {
            parentKey = getParentKey(key, node.siteResList);
          }
          if (snode.deviceResList) {
            for (let i = 0; i < snode.deviceResList.length; i++) {
              const pnode = snode.deviceResList[i];
              if (
                snode.deviceResList.some((item: any) => item.deviceId === key)
              ) {
                parentKey = pnode.deviceId;
              } else if (getParentKey(key, snode.deviceResList)) {
                parentKey = getParentKey(key, snode.deviceResList);
              }
            }
          }
        }
      }
    }
    return parentKey;
  };

  /**搜索调用 */
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    const newExpandedKeys = dataList
      .map(item => {
        if (item.title.indexOf(value) > -1) {
          return getParentKey(item.key, sitedata);
        }
        return null;
      })
      .filter((item, i, self) => item && self.indexOf(item) === i);
    console.log(newExpandedKeys, 'newExpandedKeys');
    setExpandedKeys(newExpandedKeys as React.Key[]);
    setSearchValue(value);
    setAutoExpandParent(true);
  };
  /**循环使用 */
  console.log(autoExpandParent);

  const serchtreeData = useMemo(() => {
    const loop = (data: any): DataNode[] =>
      data.map((item: any) => {
        if (item.siteName) {
          const strTitle = item.siteName;
          const index = strTitle.indexOf(searchValue);
          const beforeStr = strTitle.substring(0, index);
          const afterStr = strTitle.slice(index + searchValue.length);
          const title =
            index > -1 ? (
              <span>
                {beforeStr}
                <span style={{color: 'red'}}>{searchValue}</span>
                {afterStr}
              </span>
            ) : (
              <span>{strTitle}</span>
            );
          if (item.deviceResList) {
            return {title, key: item.key, children: loop(item.deviceResList)};
          }
          return {
            title,
            key: item.siteId,
          };
        } else if (item.deviceName) {
          const strTitle = item.deviceName;
          const index = strTitle.indexOf(searchValue);
          const beforeStr = strTitle.substring(0, index);
          const afterStr = strTitle.slice(index + searchValue.length);
          const title =
            index > -1 ? (
              <span>
                {beforeStr}
                <span style={{color: 'red'}}>{searchValue}</span>
                {afterStr}
              </span>
            ) : (
              <span>{strTitle}</span>
            );
          return {
            title,
            key: item.deviceId,
          };
        } else {
          const strTitle = item.projectName;
          const index = strTitle.indexOf(searchValue);
          const beforeStr = strTitle.substring(0, index);
          const afterStr = strTitle.slice(index + searchValue.length);
          const title =
            index > -1 ? (
              <span>
                {beforeStr}
                <span style={{color: 'red'}}>{searchValue}</span>
                {afterStr}
              </span>
            ) : (
              <span>{strTitle}</span>
            );
          if (item.siteResList) {
            return {title, key: item.key, children: loop(item.siteResList)};
          }
          return {
            title,
            key: item.projectId,
          };
        }
      });
    return loop(sitedata);
  }, [searchValue]);

  return (
    <div>
      <Search
        style={{marginBottom: 8}}
        placeholder="请输入站点"
        onChange={onChange}
      />
      <Tree
        /**开启或关闭调用 */
        onExpand={onExpand}
        /**（受控）展开指定的树节点 */
        expandedKeys={expandedKeys}
        /**是否自动展开父节点 */
        autoExpandParent={autoExpandParent}
        /**树数据 */
        treeData={serchtreeData}
        /**点击节点触发 */
        onSelect={onSelect}
      />
    </div>
  );
};

export default ZKThree;
