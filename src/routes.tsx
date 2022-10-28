import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Home from '@/pages/home';
import Suffer from '@/pages/suffer';
import Baseline from '@/pages/baseline';
import Visit from '@/pages/visit';
// import Setting from '@/pages/setting';
const Projects = lazy(() => import('@/pages/projects'));
const ProjectsList = lazy(() => import('@/pages/projects/projectList'));
// const ProjectCreate = lazy(() => import('@/pages/projects/projectCreate'));
import ProjectCreate from '@/pages/projects/projectCreate';
import ProjectCreateFirstStep from '@/pages/projects/projectCreate/firstStep';
import ProjectCreateSecondStep from '@/pages/projects/projectCreate/secondStep';
import ProjectCreateThirdStep from '@/pages/projects/projectCreate/thirdStep';
import ProjectCreateDone from '@/pages/projects/projectCreate/done';
import Message from '@/pages/message';
import UserSet from '@/pages/setting/user';
import UserDetail from '@/pages/setting/user/detail';
import CenterSet from '@/pages/setting/center';
import RoleSet from '@/pages/setting/role';
import RoleDetail from '@/pages/setting/role/detail';
import PersonSettings from '@/pages/personSetting';
const Layout = lazy(() => import('@/layout'));
import Login from '@/pages/login';
const PageError = lazy(() => import('@/pages/pageError'));
import imgModule from '@/assets/imgs';

// https://reactrouter.com/en/v6.3.0/getting-started/concepts
/**
 * 主页头部导航
 * path：子路径（菜单key）,需唯一
 * label:菜单label
 * element：路由组件
 * selIcon:选中时图片
 * icon:未选中时图片
 */
export const headerNavItems = [
  {
    path: 'home',
    label: '首页',
    icon: imgModule.header_home,
    selIcon: imgModule.header_home_sel,
    element: <Home />
  },
  {
    path: 'suffer',
    label: '患者管理',
    icon: imgModule.header_patient,
    selIcon: imgModule.header_patient_sel,
    element: <Suffer />,
  },
  {
    path: 'visit',
    label: '随访管理',
    icon: imgModule.header_visit,
    selIcon: imgModule.header_visit_sel,
    element: <Visit />
  }
];
/**
 * 主页菜单路由
 * path：子路径（菜单key）,需唯一
 * label:菜单label
 * element：路由组件
 * hideInMenu：是否显示在菜单中
 */
export const homeMenus = [
  {
    path: 'projects',
    name: 'projects',
    label: '项目列表',
    exec: true,
    element: <Projects />,
    children: [
      { path: '', name: 'projectsList', hideInMenu: true, element: <ProjectsList /> },
      {
        path: 'create', name: 'projectsCreate', hideInMenu: true, element: <ProjectCreate />,
        children: [
          { path: '', name: 'projectsCreateFirstStep', hideInMenu: true, element: <ProjectCreateFirstStep /> },
          { path: 'second', name: 'projectsCreateSecondStep', hideInMenu: true, element: <ProjectCreateSecondStep />, },
          { path: 'third', name: 'projectsCreateThirdStep', hideInMenu: true, element: <ProjectCreateThirdStep />, },
          { path: 'done', name: 'projectsCreateDone', hideInMenu: true, element: <ProjectCreateDone />, }
        ]
      }
    ],
  },
  {
    path: 'setting',
    name: 'setting',
    label: '基础设置',
    exec: true,
    // element: <Setting />,
    children: [
      { path: "", hideInMenu: true, element: <Navigate to="user" />  },
      { path: 'user', name: '员工管理', label: '员工管理', element: <UserSet /> },
      { path: 'user/detail', hideInMenu: true, name: '员工详情', label: '员工详情', element: <UserDetail /> },
      { path: 'center', name: '中心管理', label: '中心管理', element: <CenterSet /> },
      { path: 'role', name: '角色管理', label: '角色管理', element: <RoleSet /> },
      { path: 'role/detail', hideInMenu: true, name: '员工详情', label: '员工详情', element: <RoleDetail /> },
    ]
  },
  {
    path: 'message',
    name: 'message',
    label: '消息中心',
    exec: true,
    element: <Message />
  }
];

export default [
  {
    path: '/researchpc',
    name: '科研系统',
    element: <Layout />,
    children: [
      { path: "", element: <Navigate to="projects" /> },
      ...homeMenus,
      ...headerNavItems,
      {
        path: '/researchpc/personSettings',
        name: 'personSettings',
        element: <PersonSettings />
      },
      {
        path: 'suffer/baseline',
        label: '患者基线',
        element: <Baseline />
      },
    ]
  },
  {
    path: '/researchpc/login',
    name: 'login',
    element: <Login />
  },
  { path: '/researchpc/403', element: <PageError state='403' /> },
  { path: '/researchpc/500', element: <PageError state='500' /> },
  { path: '/researchpc/502', element: <PageError state='502' /> },
  { path: '*', element: <PageError state='404' /> }
];
