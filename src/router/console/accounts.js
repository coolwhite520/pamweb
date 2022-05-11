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
  }
]
