# Untucked Games setup

You can reuse the Firebase project from the last site, or make a new one. Either way:

## Firebase
1. **Authentication > Sign-in method:** Email/Password enabled.
2. **Firestore Database** created (production mode).
3. **Project settings > Your apps > Web app:** copy the config into `firebase-config.js`.
4. **Authentication > Users:** your admin user (email + password). Copy its **User UID**.
5. Put that UID in `firestore.rules` (replace `PASTE_ADMIN_UID`), then paste the file into **Firestore > Rules** and **Publish**. The old rules won't work with this site.

## Host
1. Put all files in a GitHub repo root, then **Settings > Pages > Deploy from branch**.
2. Firebase **Authentication > Settings > Authorized domains:** add `yourname.github.io`.
3. Optional: restrict the API key to your site in Google Cloud > APIs & Services > Credentials.

## First run
1. Open `admin.html`, sign in, click **Start season**.
2. Under **People**, add each person: display name, username, 4-digit code. DM them their login.
3. Under **New poll**, pick the format, write the description, check who's on it, click **Open poll**.
4. When you're done, switch to **Locked** to see results, then **Copy for Discord**.

## Formats
- **Placements:** voters pick the winner (or two for a double win), the highs, the low and the bottom 2 in a step-by-step flow. Everyone else is Safe automatically. You set the counts per poll. Points: Win 5, High 4, Safe 3, Low 2, Bottom 1. Nobody places themselves.
- **Lip sync:** check two or three people. Voters pick one winner, or two when there are three. The lip syncers can't vote.
- **Winner vote:** voters pick one person from the ones you checked. Not themselves.

## Notes
- Old accounts from the last site still work. They just show as "In game" and "Can vote".
- Self-voting is blocked by the page and by the database rules.
- Firebase can't change another user's password from a web page. If a code leaks, mark that person Out, and add a new account with a new username.

## Competitors vs voter accounts
- **Competitors** (admin > Competitors) are the people in the game, with an optional photo. Photos are shrunk and stored in the database, so no paid Firebase plan is needed.
- **Voter accounts** are logins only. Anyone can have one, whether or not they compete.
- **Same person as** (optional, off by default) links a voter to a competitor so they can't place or vote for themselves. Leave it as None for voters who aren't competing.
- After updating, add your competitors, then open a **new poll**. Polls opened before this update use the old name format and won't match.
