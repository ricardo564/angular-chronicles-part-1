export function saveItemOnLocalStorage(
  itemName: string,
  itemValue: any,
) {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(
      itemName,
      itemValue,
    )
  }
}

export function removeItemFromLocalStorage(
  itemName: string,
) {
  if (typeof window !== 'undefined') {
    window.localStorage.removeItem(itemName)
  }
}
