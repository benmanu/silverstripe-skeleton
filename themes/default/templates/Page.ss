<!DOCTYPE html>
<html lang="$ContentLocale">
<head>
  <% base_tag %>
  <title><% if $MetaTitle %>$MetaTitle<% else %>$Title<% end_if %> &raquo; $SiteConfig.Title</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  $MetaTags(false)

  <link rel="shortcut icon" href="$ThemeDir/images/favicon.ico"/>
</head>
<body>
  $Layout
</body>
</html>
