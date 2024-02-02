import * as yup from 'yup';

export const generalSettingsValidationSchema = yup.object().shape({
  maximumQuestionLimit: yup
    .number()
    .positive()
    .required('form:error-maximum-question-limit')
    .typeError('form:error-maximum-question-limit'),
  minimumOrderAmount: yup
    .number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .moreThan(-1, 'form:error-sale-price-must-positive'),
  freeShippingAmount: yup
    .number()
    .moreThan(-1, 'form:error-free-shipping-amount-must-positive')
    .typeError('form:error-amount-number'),
  deliveryTime: yup
    .array()
    .min(1, 'form:error-add-at-least-one-delivery-time')
    .of(
      yup.object().shape({
        title: yup.string().required('form:error-title-required'),
      })
    ),
});
