import { UseFormProps, UseFormReturn, useForm } from 'react-hook-form';

const useDefaultForm = <FORM_TYPE>(
  props: UseFormProps<FORM_TYPE> & {
    defaultValues: FORM_TYPE;
  },
): UseFormReturn<FORM_TYPE> => {
  return useForm(props);
};

export { useDefaultForm };
