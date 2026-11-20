const filters = document.querySelector('#publication-filters');
const groups = document.querySelectorAll('#publication-groups > section');
const search = filters.querySelector('[name="search"]');
const type = filters.querySelector('[name="type"]');
const year = filters.querySelector('[name="year"]');

function updatePublications() {
  const query = search.value.trim().toLowerCase();

  for (const group of groups) {
    let hasMatches = false;
    for (const publication of group.querySelectorAll('[data-publication-type]')) {
      const matches = (!type.value || publication.dataset.publicationType === type.value)
        && (!year.value || publication.dataset.publicationYear === year.value)
        && publication.textContent.toLowerCase().includes(query);
      publication.hidden = !matches;
      hasMatches ||= matches;
    }
    group.hidden = !hasMatches;
  }
}

function readPublicationType() {
  const value = window.location.hash.slice(1);
  type.value = Array.from(type.options).some((option) => option.value === value) ? value : '';
  updatePublications();
}

search.addEventListener('input', updatePublications);
year.addEventListener('change', updatePublications);
type.addEventListener('change', () => {
  window.location.hash = type.value;
  updatePublications();
});
window.addEventListener('hashchange', readPublicationType);
readPublicationType();
