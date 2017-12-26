//whenever there is single function
export const selectLibrary = (libraryId) => {
    return {
      type: 'select library',
      payload: libraryId
    };
  };