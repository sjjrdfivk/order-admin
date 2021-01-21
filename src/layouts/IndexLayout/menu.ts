interface menuType {
    id: number;
    url: string;
    sort: number;
    icon: string;
    keepAlive: number;
    parentId: number;
    name: string;
}
export const menu: menuType[] = [
  { "id": 66, "url": "/white", "sort": 1, "icon": "icon-ziduanguanli", "keepAlive": 1, "parentId": -1, "name": "白皮书" },
  { "id": 67, "url": "/open", "sort": 1, "icon": "", "keepAlive": 1, "parentId": 66, "name": "open" },
  { "id": 69, "url": "/nb", "sort": 1, "icon": "icon-BUG", "keepAlive": 1, "parentId": -1, "name": "NBA" },
  { "id": 73, "url": "2122", "sort": 1, "icon": "icon-zhuomian", "keepAlive": 1, "parentId": 69, "name": "123" },
  { "id": 76, "url": "https://v.douyu.com/show/jNBdvnZQ1VBvE2yw", "sort": 1, "icon": "icon-BUG", "keepAlive": 1, "parentId": 66, "name": "25222" },
  { "id": 81, "url": "/message", "sort": 1, "icon": "icon-BUG", "keepAlive": 1, "parentId": -1, "name": "消息管理" },
  { "id": 82, "url": "/sys", "sort": 1, "icon": "", "keepAlive": 1, "parentId": 81, "name": "系统消息" },
  { "id": 83, "url": "qq", "sort": 1, "icon": "q", "keepAlive": 1, "parentId": 1, "name": "qqq" },
  { "id": 2, "url": "system/account", "sort": 2, "icon": "icon-kehuguanli", "keepAlive": 1, "parentId": 1, "name": "账号管理" },
  { "id": 3, "url": "/system/role", "sort": 3, "icon": "icon-shijuexianshi", "keepAlive": 1, "parentId": 1, "name": "角色管理" },
  { "id": 4, "url": "system/access", "sort": 5, "icon": "icon-yun", "keepAlive": 1, "parentId": 1, "name": "资源管理" },
  { "id": 1, "url": "system", "sort": 6, "icon": "icon-yun", "keepAlive": 1, "parentId": -1, "name": "系统管理" },
  { "id": 5, "url": "system/dict", "sort": 6, "icon": "icon-ziduanguanli", "keepAlive": 0, "parentId": 1, "name": "字典管理" }
]