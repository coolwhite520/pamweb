<template>
  <TabPage :active-menu.sync="config.activeMenu" :submenu="config.submenu" />
</template>

<script>
import { TabPage } from '@/layout/components'

export default {
  name: 'Index',
  components: {
    TabPage
  },
  data() {
    return {
      config: {
        activeMenu: 'ExcludeOthersList',
        submenu: [
          {
            title: this.$t('xpack.AccountManagePlan.ExcludeOthersPwd'),
            name: 'ExcludeOthersList',
            hidden: () => !this.$hasPerm('xpack.view_changeauthplan'),
            component: () => import('@/views/accounts/AccountStrategy/ExcludeOthers/ExcludeOthersList.vue')
          },
          {
            title: this.$t('xpack.AccountManagePlan.OnceOnePwd'),
            name: 'OnceOnePwdList',
            hidden: () => !this.$hasPerm('xpack.view_applicationchangeauthplan'),
            component: () => import('@/views/accounts/AccountStrategy/OnceOnePwd/OnceOnePwdList.vue')
          },
          {
            title: this.$t('xpack.AccountManagePlan.AutoCheckList'),
            name: 'AutoCheckList',
            hidden: () => !this.$hasPerm('xpack.view_applicationchangeauthplan'),
            component: () => import('@/views/accounts/AccountStrategy/AutoCheck/AutoCheckList.vue')
          }
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>
