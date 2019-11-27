<template>
  <DataTable id="data-table" />
</template>

<script>
export default {
  name: "Home",
  components: {
    DataTable: () => import("@/components/DataTable")
  },
  created() {}
};
</script>