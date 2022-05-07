import empty from '@/layout/empty'
import i18n from '@/i18n/i18n'

export default [
  {
    path: 'strategy',
    component: empty,
    redirect: '',
    hidden: true,
    meta: {
      title: '策略管理',
      app: 'xpack',
      resource: 'account'
    },
    children: [
      {
        path: '',
        component: () => import('@/views/strategy/strategy'),
        name: 'CloudCenter',
        meta: {
          title: i18n.t('xpack.Cloud.CloudSync'),
          activeMenu: '/console/assets/assets'
        }
      }
    ]
  }
]
