export function handleSearchInput(searchInput, onSearch) {
  searchInput.addEventListener("input", () => {
    onSearch(searchInput.value);
  });
}