The Worship Calendar v2.78

Fix:
- Fixed pre-login GitHub data loading when data.github is empty or incomplete but a local imported API setup exists.
- Pre-login loading now merges local GitHub access setup with data.github before checking settings.
- ghConfig now falls back to locally imported GitHub setup.
- Login welcome screen now uses the merged GitHub settings to load the latest church JSON.
- After loading GitHub data, local GitHub/Gmail access settings are preserved.
- After importing the API setup file, the app immediately saves it locally and enables pre-login loading.
- Preserved v2.77 Email Team duplicate Gmail panel fix.
- Preserved v2.75 robust login repair and all previous features.
- Removed icon.svg from package/cache references.
- Main JavaScript syntax check passed.
- ZIP cleanup: only this README.txt is included.
