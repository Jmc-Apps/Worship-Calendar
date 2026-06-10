The Worship Calendar v1.69
Plan • Schedule • Serve

Built from v1.68.

Fixed:
- GitHub uploads now exclude Gmail OAuth access token
- GitHub uploads now exclude Gmail refresh token if present
- GitHub uploads now exclude Gmail API key
- GitHub token remains excluded from uploads
- Gmail secrets are kept local-device only
- Prevents GitHub secret-scanning 409 errors for Google OAuth tokens
- JavaScript syntax checked before packaging
