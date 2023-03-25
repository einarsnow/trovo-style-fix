// ==UserScript==
// @name         Trovo Style Fix
// @namespace    einarsnow
// @version      1.3
// @author       einarsnow
// @description  Trovo Style Fix
// @updateURL    https://github.com/einarsnow/trovo-style-fix/raw/main/trovo-style-fix.user.js
// @downloadURL  https://github.com/einarsnow/trovo-style-fix/raw/main/trovo-style-fix.user.js
// @supportURL   https://github.com/einarsnow/trovo-style-fix
// @match        https://trovo.live/s/*
// @match        https://trovo.live/chat/*
// @grant        GM_addStyle
// ==/UserScript==


GM_addStyle(`
    .message-user {
        padding-bottom: 18px !important;
    }
    .message-time {
        display: block !important;
        background: none !important;
        bottom: 0 !important;
        z-index: 2 !important;
    }
`)
