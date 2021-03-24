<template>
  <ViewWithTabs :pages="pages" />
</template>

<script>
import ViewWithTabs from '@/components/ViewWithTabs.vue'

export default {
  components: { ViewWithTabs },
  computed: {
    pages() {
      return [
        { name: 'Home', label: 'Home' },
        { name: 'About', label: 'About' },
        { name: 'ContactUs', label: 'Contact Us' },
        { name: 'Blog', label: 'Blog' },
        { name: 'HelpAndSupport', label: 'Help and support' },
      ]
    },
  },
}
</script>
