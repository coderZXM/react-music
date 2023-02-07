// import {Input, Tree} from 'antd';
// import type {DataNode} from 'antd/es/tree';
// import React, {useMemo, useState} from 'react';
// import {Button, Popover} from 'antd';

// const {Search} = Input;

// const ZKThree: React.FC = () => {
//   /**点击开关浮层 */
//   const [clicked, setClicked] = useState(false);
//   const onExpand = (newExpandedKeys: React.Key[]) => {
//     setExpandedKeys(newExpandedKeys);
//     setAutoExpandParent(false);
//   };
//   /**点击节点触发 */
//   const onSelect = (value: any, e: any) => {
//     //console.log(value, 'value', e);
//     console.log(value, e);
//     //setClicked(false);
//   };

//   const treeData = [
//     {
//       projectId: 246,
//       projectName: '项目F',
//       siteResList: [
//         {
//           siteId: 55,
//           siteName: '静海区政府东配楼变电',
//           projectId: null,
//           deviceResList: [
//             {
//               deviceId: 984,
//               deviceName: '东配楼1#变压器',
//               siteId: null,
//             },
//             {
//               deviceId: 985,
//               deviceName: '东配楼2#变压器',
//               siteId: null,
//             },
//           ],
//         },
//         {
//           siteId: 54,
//           siteName: '静海区政府西配楼变电',
//           projectId: null,
//           deviceResList: [
//             {
//               deviceId: 986,
//               deviceName: '西配楼1#变压器',
//               siteId: null,
//             },
//             {
//               deviceId: 987,
//               deviceName: '西配楼2#变压器',
//               siteId: null,
//             },
//           ],
//         },
//       ],
//     },
//     // {
//     //   projectId: 238,
//     //   projectName: '石榴花乐园',
//     //   siteResList: [
//     //     {
//     //       siteId: 56,
//     //       siteName: '静海区政府海关变电室',
//     //       projectId: null,
//     //       deviceResList: [
//     //         {
//     //           deviceId: 988,
//     //           deviceName: '海关楼2#变压器',
//     //           siteId: null,
//     //         },
//     //       ],
//     //     },
//     //   ],
//     // },
//   ];
//   //let i = 1
//   const lvKey = [
//     ['projectId', 'projectName', 'siteResList'],
//     ['siteId', 'siteName', 'deviceResList'],
//     ['deviceId', 'deviceName'],
//   ];
//   let resData = {
//     key: '',
//     title: '',
//     children: [],
//   };
//   function getchangNode(data: any, leva: any) {
//     data.forEach((item: any) => {
//       Object.keys(item).forEach((iten: any) => {
        
 
//         return resData;
//       });
//     });
//   }
//  console.log(getchangNode(treeData, 0))  

//   let res = treeData.map((item: any, index) => {
//     let resData = {
//       key: '',
//       title: '',
//       children: [],
//     };
//     // return Object.keys(item).map((iten: string) => {
//     //   console.log(item);
//     //   // console.log(iten)
//     //   if (iten === lvKey.lv1[0]) {
//     //     resData.key = item[iten];
//     //   }
//     //   if (iten === lvKey.lv1[1]) {
//     //     resData.title = item[iten];
//     //   }
//     //   if (iten == lvKey['lv1'][2]) {
//     //     if (item[iten].length > 1) {
//     //       resData.children = item[iten];
//     //     }
//     //   }
//     //   return resData;
//     // });
//     // let resData = {
//     //   key: '',
//     //   title: '',
//     //   children: [],
//     // };
//     // let itemKey = item[lvKey['lv1'][index]]
//     // let itemData = item;
//     // console.log('itemData===');
//     // console.log(itemData);
//     // if (i == lvKey['lv1'][0]) {
//     //   resData.key = itemData[i];
//     // }
//     // if (i == lvKey['lv1'][1]) {
//     //   resData.title = itemData[i];
//     // }
//     // if (i == lvKey['lv1'][2]) {
//     //   if (itemData[i].length > 0) {
//     //     resData.children = itemData[i];
//     //   }
//     // }
//     // return resData;
//     // });
//   });
//   //console.log('res===========');
//   //console.log(res);

//   /**菜单扁平化 */
//   //   const defaultData: DataNode[] = [];

//   // const generateData = (_level: number, _preKey?: React.Key, _tns?: DataNode[]) => {
//   //   const preKey = _preKey || '0';
//   //   const tns = _tns || defaultData;

//   //   const children = [];
//   //   for (let i = 0; i < x; i++) {
//   //     const key = `${preKey}-${i}`;
//   //     tns.push({ title: key, key });
//   //     if (i < y) {
//   //       children.push(key);
//   //     }
//   //   }
//   //   if (_level < 0) {
//   //     return tns;
//   //   }
//   //   const level = _level - 1;
//   //   children.forEach((key, index) => {
//   //     tns[index].children = [];
//   //     return generateData(level, key, tns[index].children);
//   //   });
//   // };
//   // generateData(z);
//   const dataList: Array<any> = [];
//   const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([]);
//   /**获取用户输入的值 */
//   const [searchValue, setSearchValue] = useState('');
//   /**树状图是否打开 */
//   const [autoExpandParent, setAutoExpandParent] = useState(true);

//   //菜单扁平化
//   const genereateList = (data: any) => {
//     for (let i = 0; i < data.length; i++) {
//       const node = data[i];
//       const {key, title} = node;
//       dataList.push({key, title: title});
//       if (node.children) {
//         genereateList(node.children);
//       }
//     }
//   };

//   genereateList(treeData);
//   /**获取key */
//   const getParentKey: any = (key: string, tree: any) => {
//     /**定义父亲key */
//     let parentKey;
//     for (let i = 0; i < tree.length; i++) {
//       const node = tree[i];
//       if (node.children) {
//         if (node.children.some((item: any) => item.key === key)) {
//           parentKey = node.key;
//         } else if (getParentKey(key, node.children)) {
//           parentKey = getParentKey(key, node.children);
//         }
//       }
//     }
//     return parentKey;
//   };

//   /**搜索调用 */
//   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setClicked(true);
//     const {value} = e.target;
//     const newExpandedKeys = dataList
//       .map(item => {
//         if (item.title.indexOf(value) > -1) {
//           return getParentKey(item.key, treeData);
//         }
//         return null;
//       })
//       .filter((item, i, self) => item && self.indexOf(item) === i);
//     setExpandedKeys(newExpandedKeys as React.Key[]);
//     setSearchValue(value);
//     setAutoExpandParent(true);
//   };

//   /**循环使用 */
//   const serchtreeData = useMemo(() => {
//     const loop = (data: DataNode[]): DataNode[] =>
//       data.map(item => {
//         const strTitle = item.title as string;
//         const index = strTitle.indexOf(searchValue);
//         const beforeStr = strTitle.substring(0, index);
//         const afterStr = strTitle.slice(index + searchValue.length);
//         const title =
//           index > -1 ? (
//             <span>
//               {beforeStr}
//               <span style={{color: 'red'}}>{searchValue}</span>
//               {afterStr}
//             </span>
//           ) : (
//             <span>{strTitle}</span>
//           );
//         if (item.children) {
//           return {title, key: item.key, children: loop(item.children)};
//         }

//         return {
//           title,
//           key: item.key,
//         };
//       });

//     // return loop(treeData);
//   }, [searchValue]);
//   /**点击按钮 */
//   const text = <span>请选择变压器</span>;
//   const content = (
//     <Tree
//       //checkable
//       style={{width: '280px'}}
//       /**开启或关闭调用 */
//       onExpand={onExpand}
//       /**（受控）展开指定的树节点 */
//       expandedKeys={expandedKeys}
//       /**是否自动展开父节点 */
//       autoExpandParent={autoExpandParent}
//       /**树数据 */
//       treeData={serchtreeData}
//       /**点击节点触发 */
//       onSelect={onSelect}
//     />
//   );
//   /**点击展开浮层 */
//   const handleClickChange = (open: boolean) => {
//     setClicked(open);
//   };

//   return (
//     <div style={{width: '300px'}}>
//       <Popover
//         placement="bottom"
//         title={text}
//         open={clicked}
//         content={content}
//         onOpenChange={handleClickChange}
//         trigger="click">
//         <Search
//           style={{marginBottom: 8}}
//           placeholder="请输入进行搜索"
//           onChange={onChange}
//         />
//       </Popover>
//     </div>
//   );
// };

// export default ZKThree;
