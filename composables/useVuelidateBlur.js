import { ref, watchEffect } from "vue";

export function useVuelidateBlur(v$, fields) {
  watchEffect(() => {
    const handleBlur = (event) => {
      const fieldName = event?.target?.id || event?.target?.name;
      if (fieldName && fields?.includes(fieldName) && v$?.value[fieldName]) {
        v$?.value[fieldName]?.$touch();
      }
    };

    document?.addEventListener("blur", handleBlur);

    return () => document?.removeEventListener("blur", handleBlur);
  }, [v$, fields]);
}
