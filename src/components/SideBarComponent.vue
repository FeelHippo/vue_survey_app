<template>
  <sidebar-menu :menu="menu" />
</template>

<script lang="ts">
  export default {
    name: 'SideBar',
    data() {
      return {
        menu: [
          {
            header: 'Survey App',
            hiddenOnCollapse: true,
          },
          {
            href: '/',
            title: 'Dashboard',
            icon: 'mdi mdi-cog',
          },
          {
            href: '/view-stats',
            title: 'Stats',
            icon: 'mdi mdi-cog',
            child: [
              {
                href: '/view-stats/agree-survey',
                title: 'Agree or Else Survey',
              },
              {
                href: '/view-stats/best-survey',
                title: 'Best of Five Survey',
              },
              {
                href: '/view-stats/open-survey',
                title: 'Open Ended Survey',
              },
            ],
          },
        ],
      }
    },
  }
</script>
