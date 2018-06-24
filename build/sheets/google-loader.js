'use strict';

const fs         = require('fs');
const readline   = require('readline');
const google     = require('googleapis');
const googleAuth = require('google-auth-library');

// 使用するapi
const SCOPES = [
  'https://www.googleapis.com/auth/spreadsheets.readonly',
];

// TOKEN_DIRはwindowsとmacで設定を変える必要がある
const TOKEN_DIR = (process.env.HOME || process.env.HOMEPATH ||
    process.env.USERPROFILE) + '/.auth/google/';
// const TOKEN_DIR     = '/_auth/google/';
const TOKEN_PATH    = TOKEN_DIR + 'sheets_token.json';
const CLIENT_SECRET = 'client_secret.json';

// loadAuth
// ------------------------------------------------------------
const loadAuth = (opts) => {
  // secret.jsonを読み込みauth処理を行なう
  fs.readFile(TOKEN_DIR + CLIENT_SECRET, function processClientSecrets(err, content) {
    if (err) {
      console.log('Error loading client secret file: ' + err);
      return;
    }
    // auth成功後のsheetsAPIの処理
    authorize(JSON.parse(content), function(auth) {
      opts.done(auth);
    });
  });
};

// loadSheets
// ------------------------------------------------------------
const loadSheets = (opts) => {
  // secret.jsonを読み込みauth処理を行なう
  fs.readFile(TOKEN_DIR + CLIENT_SECRET, function processClientSecrets(err, content) {
    if (err) {
      console.log('Error loading client secret file: ' + err);
      return;
    }
    // auth成功後のsheetsAPIの処理
    authorize(JSON.parse(content), function(auth) {
      let sheets = google.sheets('v4');
      sheets.spreadsheets.get({
        auth: auth,
        spreadsheetId: opts.spread,
      }, function(err, all) {
        let len = all.sheets.length;
        all.sheets.forEach( (thisSheet) => {
          let sid   = thisSheet.properties.title.split('_')[0];
          let title = thisSheet.properties.title;

          sheets.spreadsheets.values.get({
            auth: auth,
            spreadsheetId: opts.spread,
            range: encodeURI(thisSheet.properties.title),
          }, function(err, res) {
            // ここから個別に分岐を行なう
            opts.done(res, sid, len, title);
          });
        });
      });
    });
  });
};

// authorize
// ------------------------------------------------------------
const authorize = (credentials, callback) => {
  let clientSecret = credentials.installed.client_secret;
  let clientId = credentials.installed.client_id;
  let redirectUrl = credentials.installed.redirect_uris[0];
  let auth = new googleAuth();
  let oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, function(err, token) {
    if (err) {
      getNewToken(oauth2Client, callback);
    } else {
      oauth2Client.credentials = JSON.parse(token);
      callback(oauth2Client);
    }
  });
};

// get TOKEN
// ------------------------------------------------------------
const getNewToken = (oauth2Client, callback) => {
  let authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });

  console.log('Authorize this app by visiting this url: ', authUrl);
  let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', function(code) {
    rl.close();
    oauth2Client.getToken(code, function(err, token) {
      if (err) {
        console.log('Error while trying to retrieve access token', err);
        return;
      }
      oauth2Client.credentials = token;
      storeToken(token);
      callback(oauth2Client);
    });
  });
};

// Save TOKEN
// ------------------------------------------------------------
const storeToken = (token) => {
  console.log(token);
  try {
    fs.mkdirSync(TOKEN_DIR);
  } catch (err) {
    if (err.code != 'EEXIST') {
      throw err;
    }
  }
  fs.writeFile(TOKEN_PATH, JSON.stringify(token));
  console.log('Token stored to ' + TOKEN_PATH);
};

// exports
// ------------------------------------------------------------
module.exports = {
  loadAuth: loadAuth,
  loadSheets: loadSheets,
};
