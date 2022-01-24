import create from 'zustand';

const defaultValues = {
  title: '',
  message: '',
  duration: 5000,
  severity: 'info',
};

export const useSnackbar = create((set, get) => ({
  ...defaultValues,
  key: 1,
  reset: () => set(state => ({
    ...defaultValues,
    key: state.key + 1,
  })),
  snack: ({ title, message, duration, severity }) => set(state => ({
    title: title || '',
    message: message || '',
    duration: duration || defaultValues.duration,
    severity: severity || defaultValues.severity,
    key: state.key + 1,
  })),
}));
