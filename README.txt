The Worship Calendar v2.82

Fix:
- Added deletion-aware merge protection.
- Deleted records are now stored in a _deleted tombstone list.
- During GitHub merge, deleted records are filtered out instead of being restored from the remote JSON.
- This applies to members, ministries, roles, templates, services, rosters and family/linked groups.
- Also prunes deleted members/roles/services from family groups, availability and roster assignments.
- Existing delete functions are wrapped where possible, and a save-time snapshot detects deletes from older delete functions.
- Preserved v2.81 API setup persistence and GitHub 409 retry.
- Removed icon.svg from package/cache references.
- Main JavaScript syntax check passed.
- ZIP cleanup: only this README.txt is included.

Note:
- For data deleted before installing this version, delete it once more in v2.82 and submit changes online so the deletion tombstone is saved.
