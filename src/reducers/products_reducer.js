export const products_reducer = (state, action) => {
  if (action.type === 'OPEN_SIDEBAR') {
    return { ...state, isSidebarOpen: true }
  }
  if (action.type === 'CLOSE_SIDEBAR') {
    return { ...state, isSidebarOpen: false }
  }
}
