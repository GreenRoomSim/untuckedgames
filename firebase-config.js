// Firebase console > Project settings > Your apps > Web app. Safe to publish.
export const firebaseConfig = { apiKey: "AIzaSyDicie3VHP7BACYaNDdsykf_9EyeeGWGnM", authDomain: "untuckedgames.firebaseapp.com", projectId: "untuckedgames", appId: "1:130804963979:web:be039cf2996b0bf2e8928e" };
// Voters sign in with username + short code. Firebase needs email + 6+ char password, so we convert.
export const emailFor = u => u.trim().toLowerCase().replace(/[^a-z0-9]/g, "") + "@untucked.local";
export const passFor = c => "ug-" + c.trim();
