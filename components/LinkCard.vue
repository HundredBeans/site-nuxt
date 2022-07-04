<template>
  <BaseCard>
    <span v-if="pending">Loading...</span>
    <span v-else-if="!data">Data Not Found</span>
    <template v-else>
      <div class="flex flex-col text-left">
        <img
          class="!m-0 rounded-t-md h-36 w-full object-cover"
          :src="data.images[0]"
        />
        <BaseLink
          :to="url"
          target="_blank"
          class="text-lg font-bold p-4 truncate no-underline"
        >
          {{ data.title }}
        </BaseLink>
      </div>
    </template>
  </BaseCard>
</template>

<script setup>
const props = defineProps({
  url: {
    type: String,
  },
});
const { pending, data } = useLazyFetch(
  `https://jsonlink.io/api/extract?url=${props.url}`
);
watch(data, (newData) => {
  console.log("newData", newData);
});
</script>
