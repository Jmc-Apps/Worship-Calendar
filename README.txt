The Worship Calendar v2.23
Plan • Schedule • Serve

Safe rebuild:
- Login screen markup/render logic left unchanged from v2.22.
- When Login is clicked, app tries to refresh GitHub data first.
- If GitHub refresh fails, login continues using local cached data.
- This avoids the blank login screen issue.
- JavaScript syntax checked before packaging.
