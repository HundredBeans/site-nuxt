import { getAnalytics, logEvent } from "firebase/analytics";

export default function () {
  const { $firebaseApp } = useNuxtApp();
  const route = useRoute();
  const analytics = ref();
  const logEventAnalytics = (eventName: string, params?) =>
    logEvent(analytics.value, eventName, params);

  onMounted(() => {
    if (!import.meta.env.DEV) {
      analytics.value = getAnalytics($firebaseApp);
      analytics.value.app.automaticDataCollectionEnabled = true;
    }
  });

  watch(
    () => route.fullPath,
    () => {
      if (!import.meta.env.DEV) {
        logEventAnalytics("page_view");
      }
    }
  );

  return {
    logEvent: logEventAnalytics,
    analytics,
  };
}
