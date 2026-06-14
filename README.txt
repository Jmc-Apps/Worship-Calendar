The Worship Calendar v2.68

Changes:
- Submit Changes Online now performs a merge-before-save workflow.
- The app fetches the latest GitHub JSON first, merges local changes into it, then saves the merged result.
- Merge handling added for members, ministries, roles, templates, services, availability, rosters, family/linked groups and settings.
- This makes it safer for multiple people to update availability or different records at the same time.
- Added one retry merge if GitHub changes again during save.
- Preserved v2.67 per-group linked member rostering rules.
- Removed icon.svg from the package and cache references.
- Main JavaScript syntax check passed.
- ZIP cleanup: only this README.txt is included.

Note:
- If two users edit the exact same record differently, the user who submits later may still win for that record.
- Admins should review rosters before publishing.
