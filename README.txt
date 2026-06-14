The Worship Calendar v2.84

Changes included:
- Added a Service Deletion Tools panel to the Services tab.
- Added Delete All Past Services.
- Added checkboxes to select multiple services for deletion.
- Added Delete Selected Services.
- Added Select All and Clear Selection buttons.
- Deleted services are marked in the _deleted tombstone list so GitHub merge does not restore them.
- Related availability entries are removed.
- Related rosters are removed where they reference deleted services.
- A confirmation message appears before deletion.
- After deletion, use Submit Changes Online to save the deletion to GitHub.

Preserved:
- v2.82 deletion-aware merge protection.
- v2.81 API setup persistence and GitHub 409 retry.
- Previous login, Gmail, roster filtering, linked-member and merge-save features.
- Removed icon.svg from package/cache references.
- Main JavaScript syntax check passed.
- ZIP cleanup: only this README.txt is included.
