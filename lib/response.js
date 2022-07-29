// export default {
//   successWithData: (data) => ({ status: true, data: data }),
//   successWithMessage: (message) => ({ status: true, message }),
//   errorWithData: (data) => ({ status: false, data: data }),
//   errorWithMessage: (message) => ({ status: false, message }),
// }

export const successWithData = (data) => ({ status: true, data: data });
export const successWithMessage = (message) => ({ status: true, message });
export const errorWithData = (data) => ({ status: false, data: data });
export const errorWithMessage = (message) => ({
  status: false,
  message: message,
});
export default {
  successWithData,
  successWithMessage,
  errorWithData,
  errorWithMessage,
};

// successWithData= (data) => ({ status: true, data: data }),
// successWithMessage= (message) => ({ status: true, message }),
// errorWithData=(data) => ({ status: false, data: data }),
// errorWithMessage=(message) => ({ status: false, message }),
