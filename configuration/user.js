// Firefox KDE theme

// Load userChrome.css / userContent.css
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Icon colors
user_pref("svg.context-properties.content.enabled", true);

// No dark theme for private windows
user_pref("browser.theme.dark-private-windows", false);

// Plasma title bar
user_pref("browser.tabs.inTitlebar", 0);

// Always visible scroll bars with an 8px handle like Breeze
user_pref("widget.gtk.overlay-scrollbars.enabled", false);
user_pref("widget.non-native-theme.scrollbar.size.override", 16);

// Full URL with https://
user_pref("browser.urlbar.trimURLs", false);
