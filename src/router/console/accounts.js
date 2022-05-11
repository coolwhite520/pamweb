import i18n from '@/i18n/i18n'
import empty from '@/layout/empty'

export default [
  {
    path: 'authbook',
    component: empty,
    meta: {
      title: i18n.t('route.AssetAccount'),
      app: 'assets'
    },
    redirect: '',
    children: [
      {
        path: '',
        name: 'AssetAccountList',
        component: () => import('@/views/accounts/AssetAccount/AssetAccountList'),
        meta: {
          title: i18n.t('route.AssetAccount'),
          app: 'assets',
          permissions: ['assets.view_authbook']
        }
      }
    ]
  },
  {
    path: 'application-accounts',
    component: empty,
    redirect: '',
    meta: {
      title: i18n.t('route.AssetAccount'),
      permissions: ['applications.view_account'],
      app: 'applications',
      resource: 'account',
      licenseRequired: true
    },
    children: [
      {
        path: '',
        name: 'ApplicationAccountList',
        component: () => import('@/views/accounts/ApplicationAccount/ApplicationAccountList'),
        meta: {
          title: i18n.t('route.ApplicationAccount'),
          permissions: ['applications.view_account'],
          resource: 'account'
        }
      }
    ]
  },
  {
    path: 'gathered-user',
    component: empty,
    redirect: '',
    meta: {
      title: i18n.t('xpack.GatherUser.GatherUserList'),
      app: 'assets'
    },
    children: [
      {
        path: '',
        component: () => import('@/views/accounts/GatheredUser/index'),
        name: 'GatherUserListIndex',
        meta: {
          title: i18n.t('xpack.GatherUser.GatherUser'),
          permissions: ['assets.view_gathereduser|xpack.view_gatherusertask']
        }
      },
      {
        path: '',
        component: () => import('@/views/accounts/GatheredUser/GatheredUserList'),
        name: 'GatherUserList',
        hidden: true,
        meta: {
          title: i18n.t('xpack.GatherUser.GatherUserList'),
          activeMenu: '/accounts/gathered-user'
        }
      },
      {
        path: 'tasks/:id',
        component: () => import('@/views/accounts/GatheredUser/TaskDetail/index'),
        name: 'GatherUserTaskDetail',
        hidden: true,
        meta: {
          title: i18n.t('xpack.GatherUser.GatherUserTaskDetail'),
          permissions: ['xpack.view_gatherusertask']
        }
      },
      {
        path: 'tasks/create',
        component: () => import('@/views/accounts/GatheredUser/TaskCreateUpdate'),
        name: 'GatherUserTaskCreate',
        hidden: true,
        meta: {
          title: i18n.t('xpack.GatherUser.GatherUserTaskCreate'),
          permissions: ['xpack.add_gatherusertask']
        }
      },
      {
        path: 'tasks/:id/update',
        component: () => import('@/views/accounts/GatheredUser/TaskCreateUpdate'),
        name: 'GatherUserTaskUpdate',
        hidden: true,
        meta: {
          title: i18n.t('xpack.GatherUser.GatherUserTaskUpdate'),
          action: 'update',
          permissions: ['xpack.change_gatherusertask'],
          activeMenu: '/accounts/gathered-user'
        }
      }
    ]
  }
]
