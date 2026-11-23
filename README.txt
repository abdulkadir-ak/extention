QUICKLOGIN - Chrome Extension (Stage 1, v1.0.1)
===============================================

PROJECT DECISIONS (agreed)
--------------------------
- Purpose: personal use on your own computer (Chrome, Windows).
- Architecture kept clean so publishing to Chrome Web Store
  later stays possible without a rewrite.
- Passwords: encrypted vault (Web Crypto API) protected by a
  master password. Never stored as plain text.
- Multiple accounts on one website: the popup will show the
  account list, you pick one, login continues automatically.
- Name / Address / Phone profile autofill: comes in Stage 5.
- CAPTCHA / 2FA: the extension stops and lets you finish it
  manually. It never tries to solve security challenges.
- One-click flow: click icon once -> detect site -> fill saved
  credentials -> click the Login button automatically.

HOW TO INSTALL IN CHROME (Windows, one time, 2 minutes)
-------------------------------------------------------
1. Unzip this folder anywhere you like (for example: Desktop).
   Keep the folder in a safe place - do not delete it later.

2. Open Chrome.

3. In the address bar, type:   chrome://extensions   and press Enter.

4. Turn ON "Developer mode".
   (Switch in the top-right corner of that page.)

5. If you previously loaded the old "One-Click Login" folder,
   click "Remove" on that card first.

6. Click the "Load unpacked" button (top-left).

7. Select the "quicklogin" folder (the folder that contains
   manifest.json) and click "Select Folder".

8. Done. You should now see "QuickLogin" in the list.

9. (Optional) Pin it to the toolbar: click the puzzle-piece icon
   next to the address bar, then click the pin next to
   "QuickLogin".

HOW TO TEST IT WORKED
---------------------
- Click the QuickLogin icon in the toolbar.
- A popup must open, show the blue QuickLogin header and the
  name of the website you are on (for example: www.google.com).
- The "Auto Login" button is grey (disabled) for now - that is
  normal. It becomes active in Stage 6.

FILES IN THIS FOLDER
--------------------
manifest.json   - tells Chrome what this extension is (MV3)
popup.html      - the popup window you see when clicking the icon
popup.css       - popup design
popup.js        - popup logic (shows current website name)
icons/          - extension icons (16 / 48 / 128 px)
README.txt      - this guide

SECURITY NOTE
-------------
This Stage 1 version stores NOTHING. It has no passwords,
no internet access, and only reads the current tab's address
to show it to you. Password storage arrives in Stage 3,
encrypted with your master password.
