The Worship Calendar v2.69

Fix:
- Fixed v2.68 GitHub merge-save error: data.availability.find is not a function.
- Availability is now preserved as the array format expected by the app.
- Added defensive normalization if v2.68 already stored availability in object format locally or in GitHub JSON.
- Kept the v2.68 merge-before-save GitHub workflow.
- Preserved v2.67 per-group linked member rostering rules.
- Removed icon.svg from the package and cache references.
- Main JavaScript syntax check passed.
- ZIP cleanup: only this README.txt is included.
