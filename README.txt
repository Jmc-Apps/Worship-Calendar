The Worship Calendar v2.80

Fix:
- Fixed API setup import rejecting the app's own backup/setup file format.
- Login-screen API setup import now accepts more known app formats:
  * top-level token/owner/repo/branch/path
  * github, gitHub, githubConfig, githubAccess objects
  * settings.github
  * data.github
  * database.github
  * full database backups containing github settings
  * Gmail settings in matching locations
- Error message is now clearer if the file truly has no usable GitHub details.
- Preserved v2.79 no-stuck welcome/API import workflow and all previous fixes.
- Removed icon.svg from package/cache references.
- Main JavaScript syntax check passed.
- ZIP cleanup: only this README.txt is included.
