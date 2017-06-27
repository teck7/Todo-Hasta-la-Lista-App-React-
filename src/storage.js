const itemsKey = 'todoItems'

export function saveItems(items) {
  localStorage.setItem(itemsKey, JSON.stringify(items))
}

export function readItems() {
  const itemsJSON = localStorage.getItem(itemsKey)
  try {
    // Attempt to parse the stored data in local storage
    return JSON.parse(itemsJSON) || []
  }
  catch (error) {
    // Falling back to an empty array
    return []
  }
}
