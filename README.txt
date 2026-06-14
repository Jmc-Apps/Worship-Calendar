The Worship Calendar v2.81

Fixes:
- Fixed API setup persistence so the app should not ask for the API setup file every time it opens after a successful import.
- Saves GitHub API setup into all local storage keys used by older and newer builds.
- Hides the API setup panel once a valid GitHub setup is found locally.
- Added a stronger GitHub 409/SHA mismatch retry for Submit Changes Online.
- On a GitHub SHA mismatch, the app now fetches the newest file/SHA, re-merges, and retries the save up to 4 times.
- Preserved v2.80 API import format fix and all previous features.
- Removed icon.svg from package/cache references.
- Main JavaScript syntax check passed.
- ZIP cleanup: only this README.txt is included.

Note:
- If two users edit the exact same item at the same time, the last merged save may still win for that item.
- Admins should review roster/deletion changes after merging.
